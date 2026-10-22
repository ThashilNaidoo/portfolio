import { education } from './content/education'
import { experience } from './content/experience'
import { interests } from './content/interests'
import { profile } from './content/profile'
import { projects } from './content/projects'
import { recognition } from './content/recognition'
import { skills, type TagGroup } from './content/skills'
import WireframeMonitor from './WireframeMonitor'
import { useActiveSection } from './useActiveSection'

const year = new Date().getFullYear()

const navItems = [
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
const navIds = navItems.map((item) => item.id)

const publications = recognition.filter((item) => item.kind === 'Publication')
const certifications = recognition.filter((item) => item.kind === 'Certification')
const awards = recognition.filter((item) => item.kind === 'Award')

function TagGroups({ groups, className }: { groups: TagGroup[]; className?: string }) {
  return (
    <div className={className ? `tag-groups ${className}` : 'tag-groups'}>
      {groups.map((group) => (
        <div key={group.label} className="tag-group">
          <h3>{group.label}</h3>
          <ul className="tags">
            {group.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function App() {
  const activeSection = useActiveSection(navIds)

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="wordmark">
            {profile.name}
          </a>
          <nav aria-label="Sections">
            {navItems.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className={activeSection === id ? 'active' : undefined}
                aria-current={activeSection === id ? 'location' : undefined}
              >
                {label}
              </a>
            ))}
          </nav>
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

          <WireframeMonitor />
        </section>

        <section id="projects" className="section container">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="card">
                <p className="card-period">{project.period}</p>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <ul className="tags" aria-label="Tech used">
                  {project.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {(project.repo || project.live || project.video) && (
                  <div className="card-links">
                    {project.live && <a href={project.live}>Live ↗</a>}
                    {project.video && <a href={project.video}>Video ↗</a>}
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
              <li key={`${job.company}-${job.start}`} className="entry">
                <p className="entry-dates">
                  {job.start} – {job.end}
                </p>
                <div>
                  <h3>
                    {job.role} <span className="muted">· {job.company}</span>
                  </h3>
                  <p className="entry-location">{job.location}</p>
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

        <section id="education" className="section container">
          <h2>Education</h2>
          <ol className="timeline">
            {education.map((degree) => (
              <li key={degree.degree} className="entry">
                <p className="entry-dates">
                  {degree.start ? `${degree.start} – ${degree.end}` : degree.end}
                </p>
                <div>
                  <h3>{degree.degree}</h3>
                  <p className="entry-location">
                    {degree.school} · {degree.location}
                  </p>
                  {degree.detail && <p className="entry-detail">{degree.detail}</p>}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section id="skills" className="section container">
          <h2>Skills</h2>
          <TagGroups groups={skills} />
        </section>

        <section id="recognition" className="section container">
          <h2>Recognition</h2>
          <div className="recognition">
            {publications.map((item) => (
              <article key={item.title} className="paper">
                <div className="paper-sheet">
                  <span className="folder-tab" aria-hidden="true">
                    Case file
                  </span>
                  <span className="stamp" aria-hidden="true">
                    Published
                  </span>
                  <p className="paper-meta">
                    {item.kind} · {item.detail}
                  </p>
                  <h3>{item.title}</h3>
                  <div className="paper-lines" aria-hidden="true" />
                  {item.href && (
                    <a className="paper-link stretched-link" href={item.href}>
                      Read the paper ↗
                    </a>
                  )}
                </div>
              </article>
            ))}

            <ul className="certificates">
              {certifications.map((item) => (
                <li key={item.title} className="certificate">
                  <p className="certificate-label">{item.kind}</p>
                  <h3>{item.title}</h3>
                  {item.detail && <p className="certificate-issuer">{item.detail}</p>}
                  <p className="certificate-year">{item.year}</p>
                  <span className="seal" aria-hidden="true" />
                  {item.href && (
                    <a className="paper-link stretched-link" href={item.href}>
                      Verify credential ↗
                    </a>
                  )}
                </li>
              ))}
            </ul>

            <ul className="award-cards">
              {awards.map((item) => (
                <li key={item.title} className="award-card">
                  <p className="award-meta">
                    {item.kind} · {item.year}
                  </p>
                  <h3>{item.title}</h3>
                  {item.detail && <p className="award-detail">{item.detail}</p>}
                  <span className="award-stamp" aria-hidden="true">
                    Awarded
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="interests" className="section container">
          <h2>Interests</h2>
          <TagGroups groups={interests} className="labels" />
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
