import { useNavigate } from 'react-router-dom'
import './dashboard.css'

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatCurrency(val) {
  const n = parseFloat(val)
  if (n >= 1_000_000) return `₦${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `₦${(n / 1_000).toFixed(1)}K`
  return `₦${n.toLocaleString()}`
}

function relativeTime(isoStr) {
  const diff = Date.now() - new Date(isoStr).getTime()
  const mins = Math.floor(diff / 60000)
  if (mins < 1) return 'just now'
  if (mins < 60) return `${mins}m ago`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs}h ago`
  const days = Math.floor(hrs / 24)
  if (days < 30) return `${days}d ago`
  return `${Math.floor(days / 30)}mo ago`
}

// ── Mock data ─────────────────────────────────────────────────────────────────

const STATS = {
  total_lps: 1,
  total_members: 12,
  active_members: 10,
  pending_members: 2,
  total_aum: '5750000',
  idle_cash: '850000',
  active_strategies: 4,
  active_collabs: 3,
  total_return: '14.25',
  period_return: '3.80',
}

const RECENT_ACTIVITY = [
  { id: 1, type: 'MEMBER_JOINED',      desc: 'Adewale Ogunleye joined Vulue Growth Fund I',       actor: 'Adewale Ogunleye',  time: new Date(Date.now() - 2 * 3600000).toISOString() },
  { id: 2, type: 'STRATEGY_CREATED',   desc: 'New strategy "Balanced Growth" was created',         actor: 'Ekwe Yeosuf',       time: new Date(Date.now() - 5 * 3600000).toISOString() },
  { id: 3, type: 'INVESTMENT_MADE',    desc: 'Investment of ₦500K made in Tech Growth Basket',     actor: 'System',            time: new Date(Date.now() - 1 * 86400000).toISOString() },
  { id: 4, type: 'MEMBER_INVITED',     desc: 'Invitation sent to Chioma Eze',                      actor: 'Ekwe Yeosuf',       time: new Date(Date.now() - 2 * 86400000).toISOString() },
  { id: 5, type: 'DISTRIBUTION_MADE', desc: 'Quarterly distribution of ₦120K processed',          actor: 'System',            time: new Date(Date.now() - 3 * 86400000).toISOString() },
]

const ACTIVITY_META = {
  MEMBER_JOINED:    { cls: 'joined',      label: 'Member Joined',    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg> },
  STRATEGY_CREATED: { cls: 'created',     label: 'Strategy Created', icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg> },
  INVESTMENT_MADE:  { cls: 'invested',    label: 'Investment Made',  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg> },
  MEMBER_INVITED:   { cls: 'invited',     label: 'Member Invited',   icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
  DISTRIBUTION_MADE:{ cls: 'distributed', label: 'Distribution',     icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg> },
}

// ── Stat Card ─────────────────────────────────────────────────────────────────

function StatCard({ label, value, sub, icon, variant }) {
  return (
    <div className={`gp-stat-card${variant ? ` ${variant}` : ''}`}>
      <div className="gp-stat-icon">{icon}</div>
      <p className="gp-stat-label">{label}</p>
      <p className="gp-stat-value">{value}</p>
      {sub && <p className="gp-stat-sub">{sub}</p>}
    </div>
  )
}

// ── Quick Action Tile ─────────────────────────────────────────────────────────

function ActionTile({ label, icon, onClick }) {
  return (
    <button className="gp-action-tile" onClick={onClick}>
      <div className="gp-action-tile-icon">{icon}</div>
      <span className="gp-action-tile-label">{label}</span>
    </button>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function GPDashboardPage() {
  const navigate = useNavigate()

  return (
    <div className="gp-dashboard">
      {/* Header */}
      <div className="gp-page-header">
        <div className="gp-welcome-banner">
          <div className="gp-welcome-glow" />
          <div className="gp-welcome-text">
            <h1 className="gp-page-title">General Partner Dashboard</h1>
            <p className="gp-page-subtitle">Overview of your funds, members, and performance</p>
          </div>
          <div className="gp-welcome-badge">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
            <span>+14.25% overall return</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="gp-stats-grid">
        <StatCard
          label="Total LPs"
          value={STATS.total_lps}
          sub="Active funds"
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>}
        />
        <StatCard
          label="Total Members"
          value={STATS.total_members}
          sub={`${STATS.active_members} active · ${STATS.pending_members} pending`}
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="7" r="3"/><path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/><path d="M16 3.13a4 4 0 010 7.75"/><path d="M21 21v-2a4 4 0 00-3-3.87"/></svg>}
        />
        <StatCard
          label="Total AUM"
          value={formatCurrency(STATS.total_aum)}
          sub="Across all LPs"
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>}
        />
        <StatCard
          label="Idle Cash"
          value={formatCurrency(STATS.idle_cash)}
          sub="Uninvested capital"
          variant="warning"
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/></svg>}
        />
        <StatCard
          label="Total Return"
          value={`+${STATS.total_return}%`}
          sub={`Period: +${STATS.period_return}%`}
          variant="positive"
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>}
        />
        <StatCard
          label="Active Strategies"
          value={STATS.active_strategies}
          sub={`${STATS.active_collabs} collaborations`}
          icon={<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/></svg>}
        />
      </div>

      {/* Two columns */}
      <div className="gp-two-col">        {/* Quick Actions */}
        <div className="gp-card">
          <div className="gp-card-header">
            <h2 className="gp-card-title">Quick Actions</h2>
          </div>
          <div className="gp-card-body">
            <div className="gp-quick-actions-grid">
              <ActionTile
                label="Invite Member"
                onClick={() => navigate('/generalpartner/members')}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 8v6M22 11h-6"/></svg>}
              />
              <ActionTile
                label="Create Strategy"
                onClick={() => navigate('/generalpartner/strategies')}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="4"/><line x1="12" y1="2" x2="12" y2="6"/></svg>}
              />
              <ActionTile
                label="Start Collab"
                onClick={() => navigate('/generalpartner/collaborations')}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="7" cy="8" r="3"/><circle cx="17" cy="8" r="3"/><path d="M1 20v-1a5 5 0 015-5h4"/><path d="M14 20v-1a5 5 0 015-5h0a5 5 0 015 5v1"/></svg>}
              />
              <ActionTile
                label="View Analytics"
                onClick={() => navigate('/generalpartner/analytics')}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="12" width="4" height="9"/><rect x="10" y="7" width="4" height="14"/><rect x="17" y="3" width="4" height="18"/></svg>}
              />
              <ActionTile
                label="Generate Report"
                onClick={() => navigate('/generalpartner/reports')}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><path d="M14 2v6h6M9 13h6M9 17h4"/></svg>}
              />
              <ActionTile
                label="Manage LP"
                onClick={() => navigate('/generalpartner/lps')}
                icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M9 3v18"/></svg>}
              />
            </div>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="gp-card gp-card-flat">
          <div className="gp-card-header">
            <h2 className="gp-card-title">Recent Activity</h2>
          </div>
          <div className="gp-card-body" style={{ padding: '0 20px' }}>
            <div className="gp-activity-list">
              {RECENT_ACTIVITY.map(item => {
                const meta = ACTIVITY_META[item.type] || { cls: 'created', label: item.type, icon: null }
                return (
                  <div key={item.id} className="gp-activity-item">
                    <div className={`gp-activity-icon ${meta.cls}`}>{meta.icon}</div>
                    <div className="gp-activity-content">
                      <p className="gp-activity-desc">{item.desc}</p>
                      <div className="gp-activity-meta">
                        <span className={`gp-activity-badge ${meta.cls}`}>{meta.label}</span>
                        <span className="gp-activity-time">{relativeTime(item.time)}</span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
