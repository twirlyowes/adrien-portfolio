import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { site, links, projects, techStack, setup } from './config.js'
import { DashboardMock, ServerMock } from './Mocks.jsx'
import './mocks.css'

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
}

const navItems = [
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Tech Stack', '#stack'],
  ['Setup', '#setup'],
  ['Lab', '#lab'],
  ['Contact', '#contact'],
]

const interests = [
  'Software development',
  'Web development',
  'Discord bots',
  'Automation',
  'Backend systems',
  'Databases & infrastructure',
  'UI/UX design',
  'PC hardware',
  'Gaming technology',
  'Minecraft modding & optimisation',
]

const principles = [
  ['Build something real', 'I learn fastest from projects that actually run, break and get fixed.'],
  ['Keep it honest', 'I call things what they are: a bot in progress is in progress, not finished.'],
  ['Small, then bigger', 'Start with one feature that works, then grow it into a system.'],
]

function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className="topbar">
      <a href="#home" className="logo">Twirly</a>
      <nav className="desktop-nav" aria-label="Main">
        {navItems.map(([label, href]) => (
          <a key={href} href={href}>{label}</a>
        ))}
      </nav>
      <button className="menu-btn" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}>
        {open ? 'Close' : 'Menu'}
      </button>
      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-nav"
            className="mobile-nav"
            aria-label="Mobile"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
          >
            {navItems.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <motion.p className="eyebrow" {...reveal}>Developer &middot; Creator &middot; {site.location}</motion.p>
        <motion.h1 className="name" {...reveal}>Adrien</motion.h1>
        <motion.p className="alias" {...reveal}>aka Twirly</motion.p>
        <motion.p className="intro" {...reveal}>{site.tagline}</motion.p>
        <motion.div className="hero-actions" {...reveal}>
          <a className="btn" href="#projects">See projects</a>
          <a className="btn ghost" href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
        </motion.div>
      </div>
      <motion.aside className="hero-card" aria-label="Currently" {...reveal}>
        <p className="label">Currently</p>
        <p className="big">Building FRIDAY V2</p>
        <p className="muted">A Discord bot with moderation, security and per-server settings.</p>
        <p className="label">Learning</p>
        <p className="big small">Python</p>
      </motion.aside>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about">
      <div className="about-top">
        <motion.h2 {...reveal}>About</motion.h2>
        <motion.p className="lede" {...reveal}>
          I'm a self-driven developer still building my skills through real projects, not tutorials alone.
        </motion.p>
      </div>
      <div className="about-cols">
        <motion.div {...reveal}>
          <h3>Interests</h3>
          <div className="tags">{interests.map((t) => <span key={t}>{t}</span>)}</div>
        </motion.div>
        <motion.div {...reveal}>
          <h3>How I work</h3>
          <ul className="principles">
            {principles.map(([t, d]) => (
              <li key={t}>
                <strong>{t}</strong>
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

function Mock({ title }) {
  if (title === 'FRIDAY Dashboard') return <DashboardMock />
  if (title === 'FRIDAY V2') return <ServerMock />
  return <div className="mock mock-plain" aria-hidden="true" />
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <motion.div className="modal-backdrop" onClick={onClose} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <motion.div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        initial={{ y: 24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 24, opacity: 0 }}
      >
        <button className="modal-close" onClick={onClose} aria-label="Close project details">Close</button>
        <p className="status">{project.status}</p>
        <h3 id="modal-title">{project.title}</h3>
        <p className="muted">{project.description}</p>
        <h4>Features</h4>
        <ul>{project.features.map((f) => <li key={f}>{f}</li>)}</ul>
        <h4>Built with</h4>
        <div className="tags">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
        <div className="links">
          {project.github && <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
          {project.live && <a href={project.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
        </div>
      </motion.div>
    </motion.div>
  )
}

function Projects() {
  const [active, setActive] = useState(null)
  return (
    <section id="projects" className="projects">
      <motion.div className="section-head" {...reveal}>
        <h2>Projects</h2>
        <p className="note">Mock previews are illustrative, not real screenshots.</p>
      </motion.div>
      <div className="project-list">
        {projects.map((p, i) => (
          <motion.button
            key={p.title}
            className={`project ${i % 2 ? 'flip' : ''}`}
            onClick={() => setActive(p)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05 }}
          >
            <Mock title={p.title} />
            <div className="project-text">
              <span className="status">{p.status}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <ul className="chips">
                {p.features.slice(0, 3).map((f) => <li key={f}>{f}</li>)}
              </ul>
              <span className="more">View details</span>
            </div>
          </motion.button>
        ))}
      </div>
      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  )
}

function Stack() {
  return (
    <section id="stack" className="stack">
      <motion.h2 {...reveal}>Tech Stack</motion.h2>
      <div className="stack-grid">
        {Object.entries(techStack).map(([group, items]) => (
          <motion.div key={group} className="stack-group" {...reveal}>
            <h3>{group}</h3>
            <div className="tags">{items.map((t) => <span key={t}>{t}</span>)}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Setup() {
  return (
    <section id="setup" className="setup">
      <motion.h2 {...reveal}>Setup</motion.h2>
      <div className="setup-wrap">
        <motion.dl className="setup-list" {...reveal}>
          {setup.map(([k, v]) => (
            <div key={k}>
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </motion.dl>
        <motion.div className="setup-note" {...reveal}>
          <p>
            I also tinker with Minecraft modding and optimisation, using Fabric, Sodium, Xaero's mods and Java.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

function Lab() {
  const items = [
    ['Experiments', 'Small tests of new ideas, kept messy on purpose.'],
    ['Prototypes', 'Quick builds to check whether an idea is worth a full project.'],
    ['Future projects', 'Things I plan to build once I have the skills for them.'],
  ]
  return (
    <section id="lab" className="lab">
      <motion.div className="section-head" {...reveal}>
        <h2>Lab</h2>
        <p className="note">Placeholders until I add real work here.</p>
      </motion.div>
      <div className="lab-grid">
        {items.map(([t, d]) => (
          <motion.div key={t} className="lab-card" {...reveal}>
            <span className="status">Coming soon</span>
            <h3>{t}</h3>
            <p>{d}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.div className="contact-card" {...reveal}>
        <h2>Find me</h2>
        <p className="muted">The best place to reach me is email or Discord.</p>
        <ul className="contact-list">
          <li><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
          {links.discordHandle && <li>Discord <span>{links.discordHandle}</span></li>}
          {links.email && <li><a href={`mailto:${links.email}`}>{links.email}</a></li>}
        </ul>
      </motion.div>
    </section>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Setup />
        <Lab />
        <Contact />
      </main>
      <footer>
        <p>{site.name} aka {site.alias} · {site.location} · {site.handle}</p>
      </footer>
    </>
  )
}
