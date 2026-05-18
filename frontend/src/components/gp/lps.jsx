import { useState, useMemo } from 'react'
import './lps.css'

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatCurrency(val) {
  const n = parseFloat(val)
  if (n >= 1_000_000) return `₦${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `₦${(n / 1_000).toFixed(1)}K`
  return `₦${n.toLocaleString()}`
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
}

// ── Mock data ─────────────────────────────────────────────────────────────────

const LP_DATA = [
  { id: 1, name: 'Vulue Growth Fund I',  legal: 'VGF-001 Ltd', status: 'Active',    members: 8,  maxMembers: 20, strategies: 4, aum: '5750000', idleCash: '850000',  created: '2024-01-15' },
  { id: 2, name: 'Vulue Income Fund',    legal: 'VIF-002 Ltd', status: 'Active',    members: 5,  maxMembers: 15, strategies: 2, aum: '2100000', idleCash: '320000',  created: '2024-03-20' },
  { id: 3, name: 'Vulue Balanced Fund',  legal: 'VBF-003 Ltd', status: 'Suspended', members: 3,  maxMembers: 10, strategies: 1, aum: '980000',  idleCash: '150000',  created: '2024-06-01' },
]

const PAGE_SIZE = 10

// ── Component ─────────────────────────────────────────────────────────────────

export default function GPMyLPsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return LP_DATA.filter(lp => {
      const matchSearch = lp.name.toLowerCase().includes(search.toLowerCase()) ||
                          lp.legal.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === 'All' || lp.status === statusFilter
      return matchSearch && matchStatus
    })
  }, [search, statusFilter])

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleSearch = (e) => { setSearch(e.target.value); setPage(1) }
  const handleStatus = (e) => { setStatusFilter(e.target.value); setPage(1) }

  return (
    <div className="gp-lps">
      {/* Header */}
      <div className="gp-lps-header">
        <h1 className="gp-lps-title">My LPs</h1>
        <span className="gp-count-badge">{LP_DATA.length}</span>
      </div>

      {/* Filters */}
      <div className="gp-filters">
        <div className="gp-search-wrap">
          <span className="gp-search-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input
            className="gp-search-input"
            type="text"
            placeholder="Search LPs..."
            value={search}
            onChange={handleSearch}
          />
        </div>
        <select className="gp-filter-select" value={statusFilter} onChange={handleStatus}>
          <option value="All">All Statuses</option>
          <option value="Active">Active</option>
          <option value="Suspended">Suspended</option>
          <option value="Pending">Pending</option>
        </select>
      </div>

      {/* Table */}
      <div className="gp-table-wrap">
        {paginated.length === 0 ? (
          <div className="gp-empty-state">
            <div className="gp-empty-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#455a64" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="1"/>
                <path d="M3 9h18M9 3v18"/>
              </svg>
            </div>
            <h3>No LPs found</h3>
            <p>Try adjusting your search or filter criteria.</p>
          </div>
        ) : (
          <>
            <table className="gp-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Status</th>
                  <th>Members</th>
                  <th>Strategies</th>
                  <th>AUM</th>
                  <th>Idle Cash</th>
                  <th>Created</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.map(lp => {
                  const memberPct = Math.round((lp.members / lp.maxMembers) * 100)
                  const statusCls = lp.status.toLowerCase()
                  return (
                    <tr key={lp.id}>
                      <td>
                        <div className="gp-lp-name-cell">
                          <span className="gp-lp-name">{lp.name}</span>
                          <span className="gp-lp-legal">{lp.legal}</span>
                        </div>
                      </td>
                      <td>
                        <span className={`gp-status-badge ${statusCls}`}>{lp.status}</span>
                      </td>
                      <td>
                        <div className="gp-members-cell">
                          <span className="gp-members-text">{lp.members} / {lp.maxMembers}</span>
                          <div className="gp-members-bar">
                            <div className="gp-members-fill" style={{ width: `${memberPct}%` }} />
                          </div>
                        </div>
                      </td>
                      <td>{lp.strategies}</td>
                      <td>
                        <div>
                          <div className="gp-currency">{formatCurrency(lp.aum)}</div>
                        </div>
                      </td>
                      <td>
                        <div>
                          <div className="gp-currency" style={{ color: '#f59e0b' }}>{formatCurrency(lp.idleCash)}</div>
                        </div>
                      </td>
                      <td style={{ color: '#94a3b8', fontSize: '12px' }}>{formatDate(lp.created)}</td>
                      <td>
                        <button className="gp-view-btn">View</button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="gp-pagination">
              <span className="gp-pagination-info">
                Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–{Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} LPs
              </span>
              <div className="gp-pagination-btns">
                <button className="gp-page-btn" onClick={() => setPage(p => p - 1)} disabled={page === 1}>← Prev</button>
                {Array.from({ length: totalPages }, (_, i) => (
                  <button
                    key={i + 1}
                    className={`gp-page-btn${page === i + 1 ? ' active' : ''}`}
                    onClick={() => setPage(i + 1)}
                  >
                    {i + 1}
                  </button>
                ))}
                <button className="gp-page-btn" onClick={() => setPage(p => p + 1)} disabled={page === totalPages}>Next →</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
