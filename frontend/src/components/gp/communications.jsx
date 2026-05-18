import { useState } from 'react'
import './communications.css'

// ── Mock data ─────────────────────────────────────────────────────────────────

const LP_LIST = [
  { id: 1, name: 'Vulue Growth Fund I',  members: 8 },
  { id: 2, name: 'Vulue Income Fund',    members: 5 },
  { id: 3, name: 'Vulue Balanced Fund',  members: 3 },
]

const SCHEDULED_REPORTS = [
  { id: 1, name: 'Monthly Performance', schedule: 'Monthly', type: 'Performance', recipients: 12, nextRun: '2025-06-01', enabled: true  },
  { id: 2, name: 'Weekly Holdings',     schedule: 'Weekly',  type: 'Holdings',    recipients: 8,  nextRun: '2025-05-15', enabled: false },
]

const ACTIVITY_LOG = [
  { id: 1, title: 'Q1 Performance Update',    type: 'Performance', recipients: 12, channels: ['dashboard', 'email'],              sentAt: '2025-04-30T10:00:00Z', status: 'Sent'   },
  { id: 2, title: 'New Strategy Announcement', type: 'Update',      recipients: 8,  channels: ['dashboard', 'email', 'whatsapp'], sentAt: '2025-04-20T14:30:00Z', status: 'Sent'   },
  { id: 3, title: 'Holdings Report - April',   type: 'Holdings',    recipients: 5,  channels: ['email'],                          sentAt: '2025-04-15T09:00:00Z', status: 'Sent'   },
  { id: 4, title: 'Distribution Notice',       type: 'Update',      recipients: 12, channels: ['dashboard', 'sms'],               sentAt: '2025-04-10T11:00:00Z', status: 'Failed' },
  { id: 5, title: 'Risk Alert - Market Dip',   type: 'Alert',       recipients: 12, channels: ['dashboard', 'email', 'sms'],      sentAt: '2025-04-05T08:00:00Z', status: 'Sent'   },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

const DashboardIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/>
    <rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>
  </svg>
)

const EmailIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)

const WhatsAppIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/>
  </svg>
)

const SMSIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)

const EditIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)

const TrashIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
  </svg>
)

const EyeIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const CHANNEL_ICONS = { dashboard: DashboardIcon, email: EmailIcon, whatsapp: WhatsAppIcon, sms: SMSIcon }

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

// ── Tab 1: Send Update ────────────────────────────────────────────────────────

function SendUpdateTab() {
  const [selectedLPs, setSelectedLPs] = useState([])
  const [memberMode, setMemberMode] = useState('All')
  const [notifType, setNotifType] = useState('Update')
  const [channels, setChannels] = useState(['dashboard'])
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [actionUrl, setActionUrl] = useState('')
  const [actionText, setActionText] = useState('')
  const [sent, setSent] = useState(false)

  const toggleLP = (id) => setSelectedLPs(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  const toggleChannel = (ch) => setChannels(prev => prev.includes(ch) ? prev.filter(x => x !== ch) : [...prev, ch])

  const canSend = selectedLPs.length > 0 && title.trim() && message.trim() && channels.length > 0

  const handleSend = () => {
    if (!canSend) return
    setSent(true)
    setTimeout(() => setSent(false), 5000)
    setTitle(''); setMessage(''); setActionUrl(''); setActionText('')
    setSelectedLPs([]); setChannels(['dashboard'])
  }

  return (
    <div className="gp-send-update">
      {sent && (
        <div className="gp-success-banner">
          <CheckIcon />
          Notification sent successfully to {selectedLPs.length} LP(s).
        </div>
      )}

      {/* Recipients */}
      <div className="gp-section-card">
        <div className="gp-section-card-header">
          <h3 className="gp-section-card-title">Recipients</h3>
        </div>
        <div className="gp-section-card-body">
          <p className="gp-form-label" style={{ marginBottom: 10 }}>Select LPs</p>
          <div className="gp-lp-checkboxes">
            {LP_LIST.map(lp => (
              <label key={lp.id} className="gp-checkbox-row">
                <input
                  type="checkbox"
                  checked={selectedLPs.includes(lp.id)}
                  onChange={() => toggleLP(lp.id)}
                />
                <span className="gp-checkbox-label">{lp.name}</span>
                <span className="gp-checkbox-sub">{lp.members} members</span>
              </label>
            ))}
          </div>
          <p className="gp-form-label" style={{ marginBottom: 8 }}>Members</p>
          <div className="gp-member-toggle">
            {['All', 'Specific'].map(opt => (
              <button
                key={opt}
                className={`gp-toggle-option${memberMode === opt ? ' active' : ''}`}
                onClick={() => setMemberMode(opt)}
              >
                {opt}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="gp-section-card">
        <div className="gp-section-card-header">
          <h3 className="gp-section-card-title">Notification Settings</h3>
        </div>
        <div className="gp-section-card-body">
          <div className="gp-notif-row">
            <div className="gp-form-group">
              <label className="gp-form-label">Notification Type</label>
              <select className="gp-form-select" value={notifType} onChange={e => setNotifType(e.target.value)}>
                <option>Update</option>
                <option>Performance</option>
                <option>Holdings</option>
                <option>Alert</option>
                <option>Distribution</option>
              </select>
            </div>
            <div className="gp-form-group">
              <label className="gp-form-label">Delivery Channels</label>
              <div className="gp-channel-btns">
                {[
                  { key: 'dashboard', label: 'Dashboard', Icon: DashboardIcon },
                  { key: 'email',     label: 'Email',     Icon: EmailIcon     },
                  { key: 'whatsapp',  label: 'WhatsApp',  Icon: WhatsAppIcon  },
                  { key: 'sms',       label: 'SMS',       Icon: SMSIcon       },
                ].map(({ key, label, Icon }) => (
                  <button
                    key={key}
                    className={`gp-channel-btn${channels.includes(key) ? ' active' : ''}`}
                    onClick={() => toggleChannel(key)}
                  >
                    <Icon /> {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="gp-section-card">
        <div className="gp-section-card-header">
          <h3 className="gp-section-card-title">Content</h3>
        </div>
        <div className="gp-section-card-body">
          <div className="gp-content-form">
            <div className="gp-form-group">
              <label className="gp-form-label">Title *</label>
              <input
                className="gp-form-input"
                type="text"
                placeholder="Notification title..."
                value={title}
                onChange={e => setTitle(e.target.value)}
              />
            </div>
            <div className="gp-form-group">
              <label className="gp-form-label">Message *</label>
              <textarea
                className="gp-form-textarea"
                placeholder="Write your message here..."
                value={message}
                onChange={e => setMessage(e.target.value)}
              />
            </div>
            <div className="gp-form-row">
              <div className="gp-form-group">
                <label className="gp-form-label">Action URL (optional)</label>
                <input
                  className="gp-form-input"
                  type="text"
                  placeholder="https://..."
                  value={actionUrl}
                  onChange={e => setActionUrl(e.target.value)}
                />
              </div>
              <div className="gp-form-group">
                <label className="gp-form-label">Action Button Text (optional)</label>
                <input
                  className="gp-form-input"
                  type="text"
                  placeholder="e.g. View Report"
                  value={actionText}
                  onChange={e => setActionText(e.target.value)}
                />
              </div>
            </div>
            <div className="gp-action-btns">
              <button className="gp-btn-secondary">Preview</button>
              <button className="gp-btn-primary" disabled={!canSend} onClick={handleSend}>
                Send Notification
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ── Tab 2: Scheduled Reports ──────────────────────────────────────────────────

function ScheduledReportsTab() {
  const [reports, setReports] = useState(SCHEDULED_REPORTS)

  const toggleEnabled = (id) => {
    setReports(prev => prev.map(r => r.id === id ? { ...r, enabled: !r.enabled } : r))
  }

  return (
    <div>
      <div className="gp-reports-header">
        <span style={{ color: '#94a3b8', fontSize: 13 }}>{reports.length} scheduled reports</span>
        <button className="gp-btn-primary" style={{ fontSize: 12, padding: '8px 16px' }}>+ Create Report</button>
      </div>
      <div className="gp-table-wrap">
        <table className="gp-table">
          <thead>
            <tr>
              <th>Enabled</th>
              <th>Report Name</th>
              <th>Schedule</th>
              <th>Type</th>
              <th>Recipients</th>
              <th>Next Run</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map(r => (
              <tr key={r.id}>
                <td>
                  <label className="gp-toggle-switch">
                    <input type="checkbox" checked={r.enabled} onChange={() => toggleEnabled(r.id)} />
                    <span className="gp-toggle-slider" />
                  </label>
                </td>
                <td style={{ fontWeight: 600 }}>{r.name}</td>
                <td style={{ color: '#94a3b8' }}>{r.schedule}</td>
                <td>
                  <span className={`gp-type-badge ${r.type.toLowerCase()}`}>{r.type}</span>
                </td>
                <td style={{ color: '#94a3b8' }}>{r.recipients}</td>
                <td style={{ color: '#94a3b8', fontSize: 12 }}>{formatDate(r.nextRun)}</td>
                <td>
                  <div style={{ display: 'flex', gap: 6 }}>
                    <button className="gp-icon-btn" title="Edit"><EditIcon /></button>
                    <button className="gp-icon-btn danger" title="Delete"><TrashIcon /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

// ── Tab 3: Activity Log ───────────────────────────────────────────────────────

function ActivityLogTab() {
  const [search, setSearch] = useState('')
  const [typeFilter, setTypeFilter] = useState('All')
  const [statusFilter, setStatusFilter] = useState('All')
  const [channelFilter, setChannelFilter] = useState('All')

  const filtered = ACTIVITY_LOG.filter(item => {
    const matchSearch = item.title.toLowerCase().includes(search.toLowerCase())
    const matchType   = typeFilter === 'All' || item.type === typeFilter
    const matchStatus = statusFilter === 'All' || item.status === statusFilter
    const matchCh     = channelFilter === 'All' || item.channels.includes(channelFilter.toLowerCase())
    return matchSearch && matchType && matchStatus && matchCh
  })

  return (
    <div>
      <div className="gp-log-filters">
        <div className="gp-search-wrap" style={{ maxWidth: 260 }}>
          <span className="gp-search-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input
            className="gp-search-input"
            type="text"
            placeholder="Search notifications..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="gp-filter-select" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="All">All Types</option>
          <option>Update</option>
          <option>Performance</option>
          <option>Holdings</option>
          <option>Alert</option>
        </select>
        <select className="gp-filter-select" value={channelFilter} onChange={e => setChannelFilter(e.target.value)}>
          <option value="All">All Channels</option>
          <option value="dashboard">Dashboard</option>
          <option value="email">Email</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="sms">SMS</option>
        </select>
        <select className="gp-filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="All">All Statuses</option>
          <option>Sent</option>
          <option>Failed</option>
        </select>
      </div>

      <div className="gp-table-wrap">
        {filtered.length === 0 ? (
          <div className="gp-empty-state" style={{ padding: '40px 20px', textAlign: 'center', color: '#455a64' }}>
            <p style={{ margin: 0 }}>No notifications match your filters.</p>
          </div>
        ) : (
          <table className="gp-table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Type</th>
                <th>Recipients</th>
                <th>Channels</th>
                <th>Sent Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => {
                const StatusBadge = item.status === 'Sent' ? 'gp-status-badge active' : 'gp-status-badge suspended'
                return (
                  <tr key={item.id}>
                    <td style={{ fontWeight: 500 }}>{item.title}</td>
                    <td>
                      <span className={`gp-type-badge ${item.type.toLowerCase()}`}>{item.type}</span>
                    </td>
                    <td style={{ color: '#94a3b8' }}>{item.recipients}</td>
                    <td>
                      <div className="gp-channel-icons">
                        {item.channels.map(ch => {
                          const Icon = CHANNEL_ICONS[ch]
                          return Icon ? (
                            <div key={ch} className="gp-channel-icon-pill" title={ch}>
                              <Icon />
                            </div>
                          ) : null
                        })}
                      </div>
                    </td>
                    <td style={{ color: '#94a3b8', fontSize: 12 }}>
                      {new Date(item.sentAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}
                    </td>
                    <td>
                      <span className={StatusBadge}>{item.status}</span>
                    </td>
                    <td>
                      <button className="gp-icon-btn" title="View"><EyeIcon /></button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

const TABS = ['Send Update', 'Scheduled Reports', 'Activity Log']

export default function GPCommunicationsPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="gp-comms">
      <div className="gp-comms-header">
        <h1 className="gp-comms-title">Communications</h1>
        <p className="gp-comms-subtitle">Send updates, schedule reports, and track notification history</p>
      </div>

      <div className="gp-tabs">
        {TABS.map((tab, i) => (
          <button
            key={tab}
            className={`gp-tab-btn${activeTab === i ? ' active' : ''}`}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === 0 && <SendUpdateTab />}
      {activeTab === 1 && <ScheduledReportsTab />}
      {activeTab === 2 && <ActivityLogTab />}
    </div>
  )
}
