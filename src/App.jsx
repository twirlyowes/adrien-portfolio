import { motion } from 'framer-motion'
import { site, links, projects, techStack, setup } from './config.js'

const fade = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
}

export default function App() {
  return (
    <>
      <nav>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#stack">Tech Stack</a>
        <a href="#setup">Setup</a>
        <a href="#contact">Contact</a>
      </nav>

      <header id="home" className="hero wrap">
        <motion.h1 className="name" {...fade}>{site.name}</motion.h1>
        <motion.p className="alias" {...fade}>aka {site.alias}</motion.p>
        <motion.p {...fade}>{site.tagline}</motion.p>
      </header>

      <section id="about" className="tint-blue">
        <div className="wrap">
          <motion.h2 {...fade}>About</motion.h2>
          <motion.p {...fade} style={{ marginTop: 20, maxWidth: 640, color: '#777' }}>
            I'm still developing my programming skills and learning through real projects. I'm interested in software
            development, Discord bots, automation, backend systems, databases, UI/UX design, PC hardware and gaming
            technology.
          </motion.p>
        </div>
      </section>

      <section id="projects">
        <div className="wrap">
          <motion.h2 {...fade}>Projects</motion.h2>
          <div className="grid" style={{ marginTop: 56 }}>
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                className="card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
              >
                <span className="status">{p.status}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tech.map((t) => <span key={t}>{t}</span>)}
                </div>
                <div className="links">
                  {p.github && <a href={p.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>}
                  {p.live && <a href={p.live} target="_blank" rel="noopener noreferrer">Live ↗</a>}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section id="stack" className="tint-peach">
        <div className="wrap">
          <motion.h2 {...fade}>Tech Stack</motion.h2>
          <div className="grid" style={{ marginTop: 56 }}>
            {Object.entries(techStack).map(([group, items]) => (
              <motion.div key={group} className="stack-group" {...fade}>
                <h3>{group}</h3>
                <div className="tags">
                  {items.map((t) => <span key={t}>{t}</span>)}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="setup">
        <div className="wrap">
          <motion.h2 {...fade} style={{ textAlign: 'center' }}>Setup</motion.h2>
          <motion.div className="setup-list" style={{ marginTop: 48 }} {...fade}>
            {setup.map(([k, v]) => (
              <div key={k}>
                <span>{k}</span>
                <span>{v}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section id="contact" className="tint-lavender" style={{ background: 'var(--lavender)' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <motion.h2 {...fade}>Find me</motion.h2>
          <motion.div style={{ marginTop: 32, display: 'flex', gap: 24, justifyContent: 'center', flexWrap: 'wrap' }} {...fade}>
            <a href={links.github} target="_blank" rel="noopener noreferrer">GitHub ↗</a>
            {links.discord && <a href={links.discord} target="_blank" rel="noopener noreferrer">Discord ↗</a>}
            {links.email && <a href={`mailto:${links.email}`}>Email</a>}
          </motion.div>
        </div>
      </section>

      <footer>
        <p>{site.location} · {site.handle}</p>
      </footer>
    </>
  )
}
