import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { site, links, projects, techStack, setup } from './config.js'

const ease = [0.22, 1, 0.36, 1]

function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light'
    try { return localStorage.getItem('twirlyverse-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') } catch { return 'light' }
  })

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try { localStorage.setItem('twirlyverse-theme', theme) } catch { /* Theme still works for this session. */ }
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#201e1c' : '#fffaf6')
  }, [theme])

  return [theme, () => setTheme((current) => current === 'light' ? 'dark' : 'light')]
}

function Reveal({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const reduce = useReducedMotion()
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 34, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: reduce ? 0 : 0.95, delay: reduce ? 0 : delay, ease }}
    >
      {children}
    </motion.div>
  )
}

function ThemeToggle({ theme, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`} title="Change colour theme">
      <span className="theme-toggle-icon" aria-hidden="true">{theme === 'light' ? '☾' : '☼'}</span>
      <span>{theme === 'light' ? 'Night' : 'Day'}</span>
    </button>
  )
}

function Navigation({ theme, onToggle }) {
  const [open, setOpen] = useState(false)
  const items = [['Work', '#work'], ['About', '#about'], ['Playground', '#playground'], ['Craft', '#craft'], ['Setup', '#setup'], ['Contact', '#contact']]

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Twirlyverse home">t<span>.</span></a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {items.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <div className="header-actions">
        <ThemeToggle theme={theme} onToggle={onToggle} />
        <a className="header-contact" href="#contact">Let's talk <span>↗</span></a>
        <button className="menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((v) => !v)}>
          <span>{open ? 'Close' : 'Menu'}</span><i aria-hidden="true">{open ? '×' : '+'}</i>
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}>
            {items.map(([label, href], i) => (
              <a key={href} href={href} onClick={() => setOpen(false)}><span>0{i + 1}</span>{label}<b>↗</b></a>
            ))}
            <ThemeToggle theme={theme} onToggle={onToggle} />
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

function Hero() {
  const reduce = useReducedMotion()
  return (
    <section className="hero" id="top">
      <div className="hero-meta"><span>INDEPENDENT CREATOR</span><span>{site.location.toUpperCase()}</span><span>ALWAYS IN PROGRESS</span></div>
      <div className="hero-main">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>A LITTLE UNIVERSE OF THINGS BUILT.</motion.p>
          <motion.h1 initial={reduce ? false : { opacity: 0, y: 55, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, y: 0, clipPath: 'inset(0 0 0% 0)' }} transition={{ duration: 1.15, delay: 0.12, ease }}>
            ADRIEN<span className="hero-period">.</span>
          </motion.h1>
          <motion.div className="hero-subline" initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.75, duration: 0.8 }}>
            <span className="hero-alias">aka Twirly</span><span className="hero-rule" /><span className="hero-role">Developer in progress. Builder by instinct.</span>
          </motion.div>
          <motion.p className="hero-description" initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.8 }}>
            I turn curiosity into projects — from Discord systems to little experiments that teach me something new.
          </motion.p>
          <motion.div className="hero-links" initial={reduce ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.8 }}>
            <a className="button button-dark" href="#work">Explore selected work <span>↘</span></a>
            <a className="text-link" href={links.github} target="_blank" rel="noreferrer">GitHub <span>↗</span></a>
          </motion.div>
        </div>
        <motion.div className="hero-art" aria-label="Abstract orbital artwork representing Twirlyverse" role="img"
          initial={reduce ? false : { opacity: 0, scale: 0.82, rotate: -12 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 1.5, delay: 0.25, ease }}>
          <div className="art-glow" /><div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
          <div className="art-core"><span>t</span></div><span className="art-satellite satellite-one" /><span className="art-satellite satellite-two" />
          <span className="art-caption">FIG. 01 — A MIND IN MOTION</span><span className="art-coordinate">19°04' N<br />72°52' E</span>
        </motion.div>
      </div>
      <div className="hero-bottom"><span>SCROLL TO EXPLORE</span><span className="scroll-line" /><span>01 / 07</span></div>
    </section>
  )
}

function Marquee() {
  return <div className="marquee" aria-label="Curiosity, creativity, iteration"><div className="marquee-track">{Array.from({ length: 4 }, (_, i) => <span key={i}>CURIOUS BY NATURE <i>✳</i> BUILT THROUGH EXPERIMENTS <i>✳</i> ALWAYS IN PROGRESS <i>✳</i></span>)}</div></div>
}

function SectionIntro({ index, kicker, title, children }) {
  return (
    <div className="section-intro">
      <span className="section-index">{index} / 07</span>
      <div><p className="eyebrow">{kicker}</p><h2>{title}</h2>{children && <p className="section-description">{children}</p>}</div>
    </div>
  )
}

function About() {
  const interests = ['Software & web development', 'Discord systems', 'Automation', 'Backend architecture', 'Databases', 'Interface design', 'PC hardware', 'Gaming technology']
  const values = [['01', 'Build to understand', 'The fastest way I learn is by making something real, then improving it.'], ['02', 'Stay curious', 'I like exploring how systems work, why they fail and what could work better.'], ['03', 'Keep it honest', 'Progress is progress. I would rather show the real process than pretend everything is finished.']]
  return (
    <section className="about-section section-pad" id="about">
      <SectionIntro index="02" kicker="A LITTLE ABOUT ME" title={<>Curiosity is the<br /><em>starting point.</em></>} />
      <div className="about-layout">
        <Reveal className="about-statement"><p>I'm Adrien — a self-driven creator from Mumbai, learning by building, breaking, fixing and trying again.</p><p className="about-small">I’m interested in the space where technology, creativity and practical problem-solving meet.</p></Reveal>
        <Reveal className="about-details" delay={0.12}>
          <div className="detail-block"><span className="micro-label">THINGS THAT PULL ME IN</span><div className="interest-list">{interests.map((item) => <span key={item}>{item}</span>)}</div></div>
          <div className="detail-block"><span className="micro-label">A FEW PRINCIPLES</span><div className="principle-list">{values.map(([n, title, body]) => <article key={n}><span>{n}</span><div><h3>{title}</h3><p>{body}</p></div></article>)}</div></div>
        </Reveal>
      </div>
    </section>
  )
}

function ProjectArtwork({ variant = 'friday' }) {
  return (
    <div className={`project-artwork artwork-${variant}`} aria-hidden="true">
      <div className="artwork-top"><span>TWIRLYVERSE / SELECTED WORK</span><span>0{variant === 'friday' ? '1' : variant === 'web' ? '2' : '3'}</span></div>
      {variant === 'friday' ? <><div className="friday-orbit"><i /><i /><i /><b>F</b></div><span className="artwork-word">SYSTEMS<br /><em>in motion.</em></span><div className="artwork-bottom"><span>DISCORD AUTOMATION</span><span>NODE.JS · FIRESTORE</span></div></> :
      variant === 'web' ? <><div className="web-window"><div className="window-bar"><i /><i /><i /><span>COMMAND / CENTER</span></div><div className="window-content"><span>CONTROL YOUR SPACE.</span><b>FRIDAY<br />DASHBOARD.</b><i /><i /><i /></div></div><div className="artwork-bottom"><span>WEB INTERFACE</span><span>OAUTH2 · JAVASCRIPT</span></div></> :
      <><div className="legal-mark">§</div><span className="artwork-word legal-word">CLARITY<br /><em>by design.</em></span><div className="artwork-bottom"><span>DOCUMENTATION</span><span>GITHUB PAGES</span></div></>}
    </div>
  )
}

function ProjectDetails({ project, onClose }) {
  useEffect(() => {
    const previous = document.activeElement
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'Tab') {
        const dialog = document.querySelector('.project-dialog')
        const focusable = dialog?.querySelectorAll('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])')
        if (!focusable?.length) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
      }
    }
    document.addEventListener('keydown', closeOnEscape)
    document.body.style.overflow = 'hidden'
    const closeButton = document.querySelector('.project-dialog-close')
    closeButton?.focus()
    return () => { document.removeEventListener('keydown', closeOnEscape); document.body.style.overflow = ''; previous?.focus?.() }
  }, [onClose])
  return (
    <motion.div className="dialog-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <motion.section className="project-dialog" role="dialog" aria-modal="true" aria-labelledby="dialog-title" initial={{ y: 30, opacity: 0, scale: 0.98 }} animate={{ y: 0, opacity: 1, scale: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ duration: 0.35, ease }}>
        <button className="project-dialog-close" onClick={onClose} aria-label="Close project details">CLOSE ×</button>
        <p className="eyebrow">{project.status} / CASE STUDY</p><h3 id="dialog-title">{project.title}</h3><p className="dialog-description">{project.description}</p>
        <div className="dialog-columns"><div><span className="micro-label">FEATURES</span><ul>{project.features.map((item) => <li key={item}>{item}</li>)}</ul></div><div><span className="micro-label">TECHNOLOGY</span><div className="interest-list">{project.tech.map((item) => <span key={item}>{item}</span>)}</div></div></div>
        <div className="dialog-links">{project.github && <a href={project.github} target="_blank" rel="noreferrer">Source code ↗</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer">Visit live project ↗</a>}</div>
      </motion.section>
    </motion.div>
  )
}

function Work() {
  const [active, setActive] = useState(null)
  const flagship = projects[0]
  const dashboard = projects[1]
  const legal = projects[2]
  return (
    <section className="work-section section-pad" id="work">
      <SectionIntro index="03" kicker="SELECTED WORK" title={<>Ideas, meet<br /><em>execution.</em></>}><span>One evolving ecosystem, built piece by piece. Each part solves a different problem.</span></SectionIntro>
      <Reveal className="flagship-project">
        <button className="project-feature" onClick={() => setActive(flagship)} aria-label={`View ${flagship.title} details`}>
          <ProjectArtwork variant="friday" />
          <span className="feature-copy"><span className="micro-label">01 — FLAGSHIP PROJECT / ACTIVE</span><strong>FRIDAY<br /><em>V2.</em></strong><span className="feature-description">{flagship.description}</span><span className="feature-cta">Explore the build <b>↗</b></span></span>
        </button>
      </Reveal>
      <div className="related-projects">
        <Reveal><button className="related-card" onClick={() => setActive(dashboard)}><ProjectArtwork variant="web" /><span className="related-meta">02 / MANAGEMENT INTERFACE</span><h3>FRIDAY Dashboard <span>↗</span></h3><p>{dashboard.description}</p><span className="related-status">{dashboard.status}</span></button></Reveal>
        <Reveal delay={0.12}><button className="related-card" onClick={() => setActive(legal)}><ProjectArtwork variant="legal" /><span className="related-meta">03 / DOCUMENTATION</span><h3>FRIDAY Legal <span>↗</span></h3><p>{legal.description}</p><span className="related-status">{legal.status}</span></button></Reveal>
      </div>
      <p className="concept-note">FRIDAY Premium remains an unlaunched concept and is not presented as a live product.</p>
      <AnimatePresence>{active && <ProjectDetails project={active} onClose={() => setActive(null)} />}</AnimatePresence>
    </section>
  )
}

function Playground() {
  return (
    <section className="playground-section section-pad" id="playground">
      <SectionIntro index="04" kicker="THE PLAYGROUND" title={<>Room to try.<br /><em>Space to grow.</em></>}><span>A corner reserved for experiments, prototypes and the things that start with “what if?”</span></SectionIntro>
      <Reveal className="playground-panel"><div className="playground-symbol">✳</div><div><span className="micro-label">CURRENTLY OPEN-ENDED</span><h3>The next idea<br />isn't here <em>yet.</em></h3><p>This space will grow as new experiments become worth sharing. No filler projects, just things that earn their place.</p></div><span className="playground-index">LAB / 001</span></Reveal>
    </section>
  )
}

function Craft() {
  return (
    <section className="craft-section section-pad" id="craft">
      <SectionIntro index="05" kicker="TOOLS & CURIOSITY" title={<>Learning by<br /><em>making.</em></>}><span>A living snapshot of the tools I use and the technologies I'm exploring.</span></SectionIntro>
      <div className="craft-grid">{Object.entries(techStack).map(([group, items], i) => <Reveal key={group} delay={i * 0.08} className="craft-group"><span className="micro-label">0{i + 1} / {group.toUpperCase()}</span><div>{items.map((item) => <span key={item}>{item}</span>)}</div></Reveal>)}</div>
    </section>
  )
}

function Setup() {
  return (
    <section className="setup-section section-pad" id="setup">
      <SectionIntro index="06" kicker="BEHIND THE SCREEN" title={<>The tools behind<br /><em>the tinkering.</em></>}><span>The setup I use to build, test, play and learn.</span></SectionIntro>
      <div className="setup-layout"><Reveal className="setup-specs"><dl>{setup.map(([label, value], i) => <div key={label}><span>0{i + 1}</span><dt>{label}</dt><dd>{value}</dd></div>)}</dl></Reveal><Reveal className="setup-note"><span className="micro-label">OFF THE MAIN THREAD</span><p>When I'm not building, I'm usually exploring PC hardware, gaming technology or Minecraft modding and optimisation.</p><span className="setup-stamp">MUMBAI / INDIA</span></Reveal></div>
    </section>
  )
}

function Contact() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="contact-top"><span className="section-index">07 / 07</span><span className="eyebrow">HAVE SOMETHING INTERESTING?</span></div>
      <Reveal className="contact-main"><h2>Let's make<br /><em>something matter.</em></h2><a className="contact-email" href={`mailto:${links.email}`}>{links.email} <span>↗</span></a></Reveal>
      <div className="contact-bottom"><p>Good ideas start with a conversation.</p><div><a href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>{links.discordHandle && <span>Discord · {links.discordHandle}</span>}</div></div>
    </section>
  )
}

function Footer() {
  return <footer className="site-footer"><a href="#top" className="footer-mark">t.</a><span>DESIGNED IN CURIOSITY · BUILT IN PROGRESS</span><span>© {new Date().getFullYear()} {site.name} / {site.alias}</span><a href="#top">BACK TO TOP ↑</a></footer>
}

export default function App() {
  const [theme, toggleTheme] = useTheme()
  return (
    <div className="site-shell">
      <Navigation theme={theme} onToggle={toggleTheme} />
      <main>
        <Hero /><Marquee /><About /><Work /><Playground /><Craft /><Setup /><Contact />
      </main>
      <Footer />
    </div>
  )
}
