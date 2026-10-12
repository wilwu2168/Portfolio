import { useMemo } from 'react'
import Panorama from './Panorama'
import Logo from './Logo'
import { EDITION_SRC, LINKS, LOGO_SRC, SPLASHES } from './content'

const IconLink = ({ href, label, children }) => (
  <a className="mc-btn icon-btn" href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
    {children}
  </a>
)

export default function Menu({ onOpen }) {
  const splash = useMemo(() => SPLASHES[Math.floor(Math.random() * SPLASHES.length)], [])

  return (
    <div className="menu">
      <Panorama />
      <div className="vignette" />

      <header className="logo-wrap">
        <h1 className="mc-logo">{LOGO_SRC ? <img className="logo-img" src={LOGO_SRC} alt="Logo" /> : <Logo />}</h1>
        {!LOGO_SRC && (
          <div className="mc-edition">{EDITION_SRC ? <img className="logo-img" src={EDITION_SRC} alt="Edition" /> : <Logo word="JAVA EDITION" />}</div>
        )}
        <div className="splash">{splash}</div>
      </header>

      <nav className="buttons">
        <button className="mc-btn wide" onClick={() => onOpen('experience')}>Experience</button>
        <button className="mc-btn wide" onClick={() => onOpen('projects')}>Projects</button>
        <button className="mc-btn wide" onClick={() => onOpen('about')}>About Me</button>

        <div className="row">
          <IconLink href={LINKS.linkedin} label="LinkedIn">
            <svg viewBox="0 0 16 16" shapeRendering="crispEdges" width="22" height="22">
              <rect width="16" height="16" fill="#0a66c2" />
              <rect x="3" y="6" width="2" height="7" fill="#fff" />
              <rect x="3" y="3" width="2" height="2" fill="#fff" />
              <rect x="7" y="6" width="2" height="7" fill="#fff" />
              <rect x="9" y="6" width="3" height="2" fill="#fff" />
              <rect x="11" y="8" width="2" height="5" fill="#fff" />
            </svg>
          </IconLink>
          <div className="mc-btn wide half" aria-hidden="true" style={{ visibility: 'hidden' }} />
          {LINKS.github && (
            <IconLink href={LINKS.github} label="GitHub">
              <svg viewBox="0 0 16 16" shapeRendering="crispEdges" width="22" height="22">
                <rect width="16" height="16" fill="#161b22" />
                <rect x="4" y="3" width="8" height="1" fill="#fff" />
                <rect x="3" y="4" width="10" height="6" fill="#fff" />
                <rect x="4" y="10" width="8" height="2" fill="#fff" />
                <rect x="6" y="12" width="4" height="2" fill="#fff" />
                <rect x="5" y="6" width="2" height="2" fill="#161b22" />
                <rect x="9" y="6" width="2" height="2" fill="#161b22" />
              </svg>
            </IconLink>
          )}
        </div>
      </nav>

      <footer className="foot">
        <span>Wilsunah 1.0</span>
        <span>Not affiliated with Mojang AB.</span>
      </footer>
    </div>
  )
}
