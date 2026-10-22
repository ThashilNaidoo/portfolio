import { useEffect, useRef } from 'react'

// Decorative CRT monitor for the hero: a rotating wireframe torus drawn like a
// 1970s vector display. Near edges glow orange, far edges fade to red.

type Vec3 = [number, number, number]

const MAJOR = 1
const MINOR = 0.42
const RINGS = 32
const SIDES = 14

const vertices: Vec3[] = []
const edges: [number, number][] = []
for (let u = 0; u < RINGS; u++) {
  for (let v = 0; v < SIDES; v++) {
    const a = (u / RINGS) * Math.PI * 2
    const b = (v / SIDES) * Math.PI * 2
    const ring = MAJOR + MINOR * Math.cos(b)
    vertices.push([ring * Math.cos(a), MINOR * Math.sin(b), ring * Math.sin(a)])
    const i = u * SIDES + v
    edges.push([i, ((u + 1) % RINGS) * SIDES + v])
    edges.push([i, u * SIDES + ((v + 1) % SIDES)])
  }
}

// Far to near: edges are bucketed by depth so each bucket is one stroke call.
const DEPTH_COLORS = [
  'rgb(216 52 28 / 0.35)',
  'rgb(232 80 30 / 0.55)',
  'rgb(255 122 26 / 0.8)',
  'rgb(255 179 71 / 1)',
]

function WireframeMonitor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas?.getContext('2d')
    if (!canvas || !ctx) return

    let width = 0
    let height = 0
    let angle = 0.6
    let speed = 1
    let targetSpeed = 1
    let frame = 0
    let last = performance.now()

    const draw = () => {
      ctx.clearRect(0, 0, width, height)
      const tilt = 0.35 + 0.15 * Math.sin(angle * 0.5)
      const [cosY, sinY, cosX, sinX] = [Math.cos(angle), Math.sin(angle), Math.cos(tilt), Math.sin(tilt)]
      const scale = Math.min(width * 0.28, height * 0.3)

      const projected = vertices.map(([x, y, z]) => {
        const x1 = x * cosY - z * sinY
        const z1 = x * sinY + z * cosY
        const y2 = y * cosX - z1 * sinX
        const z2 = y * sinX + z1 * cosX
        const f = 5 / (5 + z2)
        return [width / 2 + x1 * f * scale, height / 2 + y2 * f * scale, z2]
      })

      const buckets: [number, number][][] = DEPTH_COLORS.map(() => [])
      for (const [i, j] of edges) {
        const depth = (projected[i][2] + projected[j][2]) / 2
        const t = Math.min(0.999, Math.max(0, (1.45 - depth) / 2.9))
        buckets[Math.floor(t * DEPTH_COLORS.length)].push([i, j])
      }

      ctx.lineWidth = 1.2
      ctx.shadowBlur = 8
      buckets.forEach((bucket, k) => {
        ctx.strokeStyle = DEPTH_COLORS[k]
        ctx.shadowColor = DEPTH_COLORS[k]
        ctx.beginPath()
        for (const [i, j] of bucket) {
          ctx.moveTo(projected[i][0], projected[i][1])
          ctx.lineTo(projected[j][0], projected[j][1])
        }
        ctx.stroke()
      })
    }

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      draw()
    }

    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000)
      last = now
      speed += (targetSpeed - speed) * Math.min(1, dt * 3)
      angle += dt * 0.35 * speed
      draw()
      frame = requestAnimationFrame(tick)
    }

    // Spin up while hovered, ease back down after.
    const monitor = canvas.parentElement
    const onEnter = () => (targetSpeed = 3)
    const onLeave = () => (targetSpeed = 1)
    monitor?.addEventListener('pointerenter', onEnter)
    monitor?.addEventListener('pointerleave', onLeave)

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      frame = requestAnimationFrame(tick)
    }

    return () => {
      cancelAnimationFrame(frame)
      observer.disconnect()
      monitor?.removeEventListener('pointerenter', onEnter)
      monitor?.removeEventListener('pointerleave', onLeave)
    }
  }, [])

  return (
    <div className="monitor" aria-hidden="true">
      <canvas ref={canvasRef} />
      <span className="hud hud-tl">Render preview // wireframe</span>
      <span className="hud hud-tr">49.27° N / 122.97° W</span>
      <span className="hud hud-bl">Torus · {edges.length} edges</span>
      <span className="hud hud-br hud-live">Live</span>
    </div>
  )
}

export default WireframeMonitor
