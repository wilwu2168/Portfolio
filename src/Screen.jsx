import { ABOUT, EXPERIENCE, PROJECTS, RESUME_SRC } from './content'

const Photo = ({ src, alt }) =>
  src ? <img className="photo" src={src} alt={alt} /> : <div className="photo placeholder">?</div>

function Experience() {
  return (
    <>
      <a className="mc-btn resume-link" href={RESUME_SRC} target="_blank" rel="noreferrer">
        <svg viewBox="0 0 16 16" shapeRendering="crispEdges" width="22" height="22" aria-hidden="true">
          <rect x="3" y="1" width="8" height="14" fill="#eee" />
          <rect x="11" y="4" width="2" height="11" fill="#aaa" />
          <rect x="5" y="5" width="6" height="1" fill="#555" />
          <rect x="5" y="8" width="6" height="1" fill="#555" />
          <rect x="5" y="11" width="5" height="1" fill="#555" />
        </svg>
        View Resume
      </a>
      {EXPERIENCE.map((e) => (
        <article className="entry" key={e.title + e.org}>
          <Photo src={e.photo} alt={e.org} />
          <div>
            <h3>{e.title} <span className="dim">@ {e.org}</span></h3>
            <div className="dim">{e.when}</div>
            <ul>{e.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </div>
        </article>
      ))}
    </>
  )
}

function Projects() {
  if (!PROJECTS.length) return <p className="empty-state">Projects coming soon.</p>

  return PROJECTS.map((project) => (
    <article className="entry" key={project.title}>
      <Photo src={project.photo} alt={project.title} />
      <div>
        <h3>{project.title}</h3>
        <div className="dim">{project.stack}</div>
        <p>{project.blurb}</p>
      </div>
    </article>
  ))
}

function About() {
  return (
    <article className="entry">
      <Photo src={ABOUT.photo} alt="Me" />
      <div>{ABOUT.paragraphs.map((t, i) => <p key={i}>{t}</p>)}</div>
    </article>
  )
}

const SCREENS = {
  experience: { title: 'Experience', Body: Experience },
  projects: { title: 'Projects', Body: Projects },
  about: { title: 'About Me', Body: About },
}

export default function Screen({ id, onBack }) {
  const { title, Body } = SCREENS[id]
  return (
    <div className="screen">
      <h2 className="screen-title">{title}</h2>
      <div className="list">
        <Body />
      </div>
      <div className="screen-foot">
        <button className="mc-btn wide" onClick={onBack}>Done</button>
      </div>
    </div>
  )
}
