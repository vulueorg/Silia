import { useState, useMemo } from 'react'
import './GPMembersPage.css'

// ── Mock data ─────────────────────────────────────────────────────────────────

const MEMBERS = [
  {
    id: 1,
    firstName: 'Adewale',
    lastName: 'Ogunleye',
    email: 'adewale@email.com',
    fund: 'Vulue Growth Fund I',
    status: 'Active',
    capital: 2500000,
    joinDate: '2024-01-15',
  },
  {
    id: 2,
    firstName: 'Folake',
    lastName: 'Adeniji',
    email: 'folake@email.com',
    fund: 'Vulue Growth Fund I',
    status: 'Active',
    capital: 1800000,
    joinDate: '2024-02-20',
  },
  {
    id: 3,
    firstName: 'Chioma',
    lastName: 'Eze',
    email: 'chioma@email.com',
    fund: 'Vulue Income Fund',
    status: 'Active',
    capital: 1200000,
    joinDate: '2024-03-10',
  },
  {
    id: 4,
    firstName: 'Emeka',
    lastName: 'Obi',
    email: 'emeka@email.com',
    fund: 'Vulue Balanced Fund',
    status: 'Withdrawn',
    capital: 950000,
    joinDate: '2024-04-05',
  },
  {
    id: 5,
    firstName: 'Ngozi',
    lastName: 'Adeyemi',
    email: 'ngozi@email.com',
    fund: 'Vulue Income Fund',
    status: 'Active',
    capital: 2400000,
    joinDate: '2024-05-01',
  },
]

const LP_FUNDS = ['Vulue Growth Fund I', 'Vulue Income Fund', 'Vulue Balanced Fund']

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatCurrency(val) {
  if (val >= 1_000_000) return `₦${(val / 1_000_000).toFixed(2)}M`
  if (val >= 1_000) return `₦${(val / 1_000).toFixed(0)}K`
  return `₦${val.toLocaleString()}`
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
  })
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const SearchIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
)

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

const TrashIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
  </svg>
)

// ── Status Badge ──────────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const cls = {
    Active:    'mb-badge-active',
    Withdrawn: 'mb-badge-withdrawn',
    Pending:   'mb-badge-pending',
  }[status] || 'mb-badge-pending'
  return <span className={`mb-badge ${cls}`}>{status}</span>
}

// ── Invite Modal ──────────────────────────────────────────────────────────────

function InviteModal({ onClose }) {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    fund: LP_FUNDS[0],
    capital: '',
  })
  const [sent, setSent] = useState(false)

  const update = (key, val) => setForm(prev => ({ ...prev, [key]: val }))

  const canSubmit = form.email.trim() && form.firstName.trim() && form.lastName.trim()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!canSubmit) return
    setSent(true)
    setTimeout(() => {
      onClose()
    }, 1800)
  }

  return (
    <div className="mb-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="mb-modal">
        <div className="mb-modal-header">
          <h2 className="mb-modal-title">Invite Member</h2>
          <button className="mb-modal-close" onClick={onClose}><CloseIcon /></button>
        </div>

        {sent ? (
          <div className="mb-modal-success">
            <div className="mb-success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#23d223" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p className="mb-success-text">Invitation sent successfully!</p>
          </div>
        ) : (
          <form className="mb-modal-form" onSubmit={handleSubmit}>
            <div className="mb-form-field">
              <label className="mb-form-label">Email Address <span className="mb-required">*</span></label>
              <input
                className="mb-form-input"
                type="email"
                placeholder="member@email.com"
                value={form.email}
                onChange={e => update('email', e.target.value)}
                required
              />
            </div>
            <div className="mb-form-row">
              <div className="mb-form-field">
                <label className="mb-form-label">First Name <span className="mb-required">*</span></label>
                <input
                  className="mb-form-input"
                  type="text"
                  placeholder="First name"
                  value={form.firstName}
                  onChange={e => update('firstName', e.target.value)}
                  required
                />
              </div>
              <div className="mb-form-field">
                <label className="mb-form-label">Last Name <span className="mb-required">*</span></label>
                <input
                  className="mb-form-input"
                  type="text"
                  placeholder="Last name"
                  value={form.lastName}
                  onChange={e => update('lastName', e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="mb-form-field">
              <label className="mb-form-label">LP Fund</label>
              <select
                className="mb-form-select"
                value={form.fund}
                onChange={e => update('fund', e.target.value)}
              >
                {LP_FUNDS.map(f => <option key={f}>{f}</option>)}
              </select>
            </div>
            <div className="mb-form-field">
              <label className="mb-form-label">Capital Commitment (₦)</label>
              <input
                className="mb-form-input"
                type="number"
                placeholder="e.g. 1000000"
                value={form.capital}
                onChange={e => update('capital', e.target.value)}
                min="0"
              />
            </div>
            <div className="mb-modal-footer">
              <button type="button" className="mb-btn-cancel" onClick={onClose}>Cancel</button>
              <button type="submit" className="mb-btn-primary" disabled={!canSubmit}>
                Send Invitation
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function GPMembersPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [showInvite, setShowInvite] = useState(false)

  const filtered = useMemo(() => {
    return MEMBERS.filter(m => {
      const fullName = `${m.firstName} ${m.lastName}`.toLowerCase()
      const matchSearch = fullName.includes(search.toLowerCase()) ||
                          m.email.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === 'All' || m.status === statusFilter
      return matchSearch && matchStatus
    })
  }, [search, statusFilter])

  const totalCapital = MEMBERS.reduce((sum, m) => sum + m.capital, 0)
  const activeCount  = MEMBERS.filter(m => m.status === 'Active').length

  return (
    <div className="gp-members">
      {/* Header */}
      <div className="mb-header">
        <div className="mb-header-left">
          <h1 className="mb-title">Members</h1>
          <span className="mb-count-badge">{MEMBERS.length}</span>
        </div>
        <button className="mb-invite-btn" onClick={() => setShowInvite(true)}>
          <PlusIcon /> Invite Member
        </button>
      </div>

      {/* Stats */}
      <div className="mb-stats-row">
        <div className="mb-stat-card">
          <p className="mb-stat-label">Total Members</p>
          <p className="mb-stat-value">{MEMBERS.length}</p>
        </div>
        <div className="mb-stat-card">
          <p className="mb-stat-label">Active Members</p>
          <p className="mb-stat-value positive">{activeCount}</p>
        </div>
        <div className="mb-stat-card">
          <p className="mb-stat-label">Total Capital</p>
          <p className="mb-stat-value">{formatCurrency(totalCapital)}</p>
        </div>
      </div>

      {/* Search + Filter */}
      <div className="mb-filters">
        <div className="mb-search-wrap">
          <span className="mb-search-icon"><SearchIcon /></span>
          <input
            className="mb-search-input"
            type="text"
            placeholder="Search by name or email..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select
          className="mb-filter-select"
          value={statusFilter}
          onChange={e => setStatusFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Active">Active</option>
          <option value="Withdrawn">Withdrawn</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className="mb-table-wrap">
        {filtered.length === 0 ? (
          <div className="mb-empty">
            <p>No members match your search.</p>
          </div>
        ) : (
          <table className="mb-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>LP Fund</th>
                <th>Status</th>
                <th>Capital</th>
                <th>Join Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(m => (
                <tr key={m.id}>
                  <td>
                    <div className="mb-name-cell">
                      <span className="mb-name">{m.firstName} {m.lastName}</span>
                      <span className="mb-email">{m.email}</span>
                    </div>
                  </td>
                  <td className="mb-fund-cell">{m.fund}</td>
                  <td><StatusBadge status={m.status} /></td>
                  <td className="mb-capital-cell">{formatCurrency(m.capital)}</td>
                  <td className="mb-date-cell">{formatDate(m.joinDate)}</td>
                  <td>
                    <div className="mb-actions">
                      <button className="mb-view-btn">View</button>
                      <button className="mb-remove-btn" title="Remove member">
                        <TrashIcon />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Invite Modal */}
      {showInvite && <InviteModal onClose={() => setShowInvite(false)} />}
    </div>
  )
}
