import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { site, links, projects, techStack, setup } from './config.js'

const reveal = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
}

const navItems = [
  ['Home', '#home'],
  ['About', '#about'],
  ['Projects', '#projects'],
  ['Tech Stack', '#stack'],
  ['Setup', '#setup'],
  ['Lab', '#lab'],
  ['Contact', '#contact'],
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
      <motion.p className="eyebrow" {...reveal}>Developer &middot; Creator</motion.p>
      <motion.h1 className="name" {...reveal}>Adrien</motion.h1>
      <motion.p className="alias" {...reveal}>aka Twirly</motion.p>
      <motion.p className="intro" {...reveal}>{site.tagline}</motion.p>
      <motion.div className="hero-actions" {...reveal}>
        <a className="btn" href="#projects">See projects</a>
        <a className="btn ghost" href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
      </motion.div>
    </section>
  )
}

function About() {
  return (
    <section id="about" className="about">
      <motion.h2 {...reveal}>About</motion.h2>
      <motion.div className="about-body" {...reveal}>
        <p>
          I'm still developing my programming skills and learning through real projects. My main project so far is
          FRIDAY, a Discord bot I build and run with discord.js.
        </p>
        <p>
          I'm interested in software development, Discord bots, automation, backend systems, databases, UI/UX design,
          PC hardware and gaming technology. I learn best by building something small, breaking it, then fixing it.
        </p>
      </motion.div>
    </section>
  )
}

function MockFriday() {
  return (
    <div className="mock mock-discord" aria-hidden="true">
      <div className="mock-head">Moderation log</div>
      {[
        ['Spam blocked', 'AutoMod', 'just now'],
        ['Verification passed', 'Captcha', '2m ago'],
        ['Temp voice created', 'Voice', '5m ago'],
      ].map(([a, b, c]) => (
        <div className="mock-row" key={a}>
          <span>{a}</span>
          <small>{b} · {c}</small>
        </div>
      ))}
    </div>
  )
}

function MockDashboard() {
  return (
    <div className="mock mock-dash" aria-hidden="true">
      <div className="mock-side"><span /><span /><span /></div>
      <div className="mock-main">
        <div className="mock-toggle"><span>Anti-nuke</span><i className="on" /></div>
        <div className="mock-toggle"><span>Bad-word filter</span><i className="on" /></div>
        <div className="mock-toggle"><span>ModMail</span><i /></div>
      </div>
    </div>
  )
}

function Mock({ title }) {
  if (title === 'FRIDAY Dashboard') return <MockDashboard />
  if (title === 'FRIDAY V2') return <MockFriday />
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
      <motion.h2 {...reveal}>Projects</motion.h2>
      <p className="note">Mock previews are illustrative, not real screenshots.</p>
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
      {Object.entries(techStack).map(([group, items]) => (
        <motion.div key={group} className="stack-group" {...reveal}>
          <h3>{group}</h3>
          <div className="tags">{items.map((t) => <span key={t}>{t}</span>)}</div>
        </motion.div>
      ))}
    </section>
  )
}

function Setup() {
  return (
    <section id="setup" className="setup">
      <motion.h2 {...reveal}>Setup</motion.h2>
      <motion.dl className="setup-list" {...reveal}>
        {setup.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </motion.dl>
    </section>
  )
}

function Lab() {
  const items = ['Experiment one', 'Experiment two', 'Small prototype']
  return (
    <section id="lab" className="lab">
      <motion.h2 {...reveal}>Lab</motion.h2>
      <p className="note">Placeholders until I add real experiments.</p>
      <div className="lab-grid">
        {items.map((t) => (
          <motion.div key={t} className="lab-card" {...reveal}>
            <h3>{t}</h3>
            <p>Coming soon</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="contact">
      <motion.h2 {...reveal}>Find me</motion.h2>
      <motion.ul className="contact-list" {...reveal}>
        <li><a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a></li>
        {links.discordHandle && <li>Discord: <span>{links.discordHandle}</span></li>}
        {links.email && <li><a href={`mailto:${links.email}`}>{links.email}</a></li>}
      </motion.ul>
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
