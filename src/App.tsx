import { experience } from './content/experience'
import { profile } from './content/profile'
import { projects } from './content/projects'
import ThemeToggle from './ThemeToggle'

const year = new Date().getFullYear()

function App() {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="wordmark">
            {profile.name}
          </a>
          <nav aria-label="Sections">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#contact">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top">
        <section className="hero container">
          <p className="eyebrow">{profile.role}</p>
          <h1>{profile.tagline}</h1>
          <p className="lede">{profile.about}</p>
          <div className="actions">
            <a className="button primary" href="#projects">
              View my work
            </a>
            <a className="button" href={`mailto:${profile.email}`}>
              Get in touch
            </a>
          </div>

          <div className="horizon" aria-hidden="true">
            <div className="sun" />
            <div className="floor">
              <div className="grid" />
            </div>
          </div>
        </section>

        <section id="projects" className="section container">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="tags" aria-label="Tech used">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {(project.repo || project.live) && (
                  <div className="card-links">
                    {project.live && <a href={project.live}>Live ↗</a>}
                    {project.repo && <a href={project.repo}>Code ↗</a>}
                  </div>
                )}
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="section container">
          <h2>Experience</h2>
          <ol className="timeline">
            {experience.map((job) => (
              <li key={`${job.company}-${job.start}`} className="job">
                <p className="job-dates">
                  {job.start} – {job.end}
                </p>
                <div>
                  <h3>
                    {job.role} <span className="muted">· {job.company}</span>
                  </h3>
                  <ul className="highlights">
                    {job.highlights.map((h) => (
                      <li key={h}>{h}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="contact" className="section container contact">
          <h2>Contact</h2>
          <p className="lede">
            The best way to reach me is by email at{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
          <ul className="social">
            {profile.links.map((link) => (
              <li key={link.href}>
                <a className="button" href={link.href}>
                  {link.label} ↗
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="site-footer container">
        <p className="muted">
          © {year} {profile.name}
        </p>
      </footer>
    </>
  )
}

export default App
