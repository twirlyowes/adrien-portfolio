const servers = [
  { name: 'Pixel Villa', initial: 'P', status: 'Connected', color: '#E7EFF8' },
  { name: 'Study Hub', initial: 'S', status: 'Needs setup', color: '#F5E9DF' },
  { name: 'Friends Lounge', initial: 'F', status: 'Connected', color: '#EAE6F5' },
]

export function DashboardMock() {
  return (
    <div className="mk mk-dash" aria-hidden="true">
      <aside className="mk-side">
        <div className="mk-brand"><b>F.R.I.D.A.Y</b><small>COMMAND CENTER</small></div>
        <div className="mk-label">WORKSPACE</div>
        <div className="mk-nav active">▦ Servers</div>
        <div className="mk-foot">Sign out</div>
      </aside>
      <div className="mk-main">
        <div className="mk-top">
          <span>FRIDAY / Servers</span>
          <span className="mk-kbd">Ctrl K</span>
        </div>
        <h4 className="mk-title">Servers<span>.</span></h4>
        <p className="mk-counts"><b>3</b> servers · <b>2</b> connected · <b>1</b> need setup</p>
        <div className="mk-filters">
          <span className="on">All 3</span><span>Connected 2</span><span>Needs setup 1</span><span>★ Favorites</span>
        </div>
        <div className="mk-cards">
          {servers.map((s) => (
            <div className="mk-card" key={s.name}>
              <span className="mk-orb" style={{ background: s.color }}>{s.initial}</span>
              <b>{s.name}</b>
              <small className={s.status === 'Connected' ? 'ok' : 'warn'}>{s.status}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export function ServerMock() {
  return (
    <div className="mk mk-server" aria-hidden="true">
      <aside className="mk-side">
        <div className="mk-brand"><b>F.R.I.D.A.Y</b><small>SERVER CONSOLE</small></div>
        <div className="mk-label">MODULES</div>
        <div className="mk-nav active">Protection</div>
        <div className="mk-nav">Moderation</div>
        <div className="mk-nav">Verification</div>
        <div className="mk-nav">ModMail</div>
      </aside>
      <div className="mk-main">
        <div className="mk-top"><span>All servers / Pixel Villa</span></div>
        <h4 className="mk-title">Protection</h4>
        <div className="mk-toggle"><span>Anti-nuke</span><i className="on" /></div>
        <div className="mk-toggle"><span>Bad-word filter</span><i className="on" /></div>
        <div className="mk-toggle"><span>Temp voice channels</span><i /></div>
        <div className="mk-savebar">
          <span>Unsaved changes</span>
          <span className="mk-save">Save changes →</span>
        </div>
      </div>
    </div>
  )
}
