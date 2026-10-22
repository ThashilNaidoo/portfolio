import { useState, type MouseEvent } from 'react'

type Theme = 'light' | 'dark'

// The initial theme is set on <html data-theme> by an inline script in index.html,
// so the page never flashes the wrong theme before React loads.
function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  function toggle(event: MouseEvent<HTMLButtonElement>) {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    const root = document.documentElement
    const apply = () => {
      root.dataset.theme = next
      setTheme(next)
    }

    try {
      localStorage.setItem('theme', next)
    } catch {
      // Storage unavailable (e.g. private mode): the theme just won't persist.
    }

    const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!('startViewTransition' in document) || reduceMotion) {
      apply()
      return
    }

    // Reveal the new theme as a circle growing out of the toggle button.
    const rect = event.currentTarget.getBoundingClientRect()
    root.style.setProperty('--reveal-x', `${rect.left + rect.width / 2}px`)
    root.style.setProperty('--reveal-y', `${rect.top + rect.height / 2}px`)
    document.startViewTransition(apply)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <svg className="icon-sun" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="4.5" />
        <path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8" />
      </svg>
      <svg className="icon-moon" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" />
      </svg>
    </button>
  )
}

export default ThemeToggle
