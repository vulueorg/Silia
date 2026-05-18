import { useState, useMemo } from 'react'
import './GPApprovalsPage.css'

// ── Mock data ─────────────────────────────────────────────────────────────────

const APPROVALS = [
  {
    id: 1,
    entity: 'Balanced Growth Strategy',
    entityType: 'Strategy',
    changeType: 'PUBLISH_TO_MARKETPLACE',
    status: 'Pending',
    submitted: '2025-05-01T10:00:00Z',
    processed: null,
    reason: 'Ready for LP members',
    notes: null,
    rejectionReason: null,
  },
  {
    id: 2,
    entity: 'Vulue Growth Fund I',
    entityType: 'LP',
    changeType: 'UPDATE_LP_DETAILS',
    status: 'Approved',
    submitted: '2025-04-15T09:00:00Z',
    processed: '2025-04-16T14:00:00Z',
    reason: 'Updated fee structure',
    notes: 'Approved - compliant',
    rejectionReason: null,
  },
  {
    id: 3,
    entity: 'Adewale Ogunleye',
    entityType: 'Member',
    changeType: 'REMOVE_MEMBER',
    status: 'Rejected',
    submitted: '2025-04-10T11:00:00Z',
    processed: '2025-04-11T10:00:00Z',
    reason: 'Inactive member',
    notes: null,
    rejectionReason: 'Insufficient documentation',
  },
  {
    id: 4,
    entity: 'Tech Growth Collab',
    entityType: 'Collab',
    changeType: 'PUBLISH_TO_MARKETPLACE',
    status: 'Pending',
    submitted: '2025-05-02T08:00:00Z',
    processed: null,
    reason: 'Collab ready',
    notes: null,
    rejectionReason: null,
  },
]

// ── Helpers ───────────────────────────────────────────────────────────────────

function formatDateTime(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('en-GB', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

// ── Icons ─────────────────────────────────────────────────────────────────────

const PendingIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><path d="M12 8v4l3 3"/>
  </svg>
)

const ApprovedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

const RejectedIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
)

// ── Details Modal ─────────────────────────────────────────────────────────────

function DetailsModal({ item, onClose }) {
  if (!item) return null

  const statusCls = item.status.toLowerCase()

  return (
    <div className="gp-modal-overlay" onClick={onClose}>
      <div className="gp-modal" onClick={e => e.stopPropagation()}>
        <div className="gp-modal-header">
          <h2 className="gp-modal-title">Approval Request Details</h2>
          <button className="gp-modal-close" onClick={onClose}><CloseIcon /></button>
        </div>
        <div className="gp-modal-body">
          <div className="gp-modal-row">
            <span className="gp-modal-row-label">Entity</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <span className={`gp-entity-type-badge ${item.entityType.toLowerCase()}`}>{item.entityType}</span>
              <span className="gp-modal-row-value">{item.entity}</span>
            </div>
          </div>
          <div className="gp-modal-row">
            <span className="gp-modal-row-label">Change Type</span>
            <span className="gp-change-type">{item.changeType}</span>
          </div>
          <div className="gp-modal-row">
            <span className="gp-modal-row-label">Status</span>
            <span className={`gp-status-badge ${statusCls}`}>{item.status}</span>
          </div>
          <div className="gp-modal-divider" />
          <div className="gp-modal-row">
            <span className="gp-modal-row-label">Reason for Request</span>
            <span className="gp-modal-row-value">{item.reason}</span>
          </div>
          <div className="gp-modal-row">
            <span className="gp-modal-row-label">Submitted</span>
            <span className="gp-modal-row-value">{formatDateTime(item.submitted)}</span>
          </div>
          <div className="gp-modal-row">
            <span className="gp-modal-row-label">Processed</span>
            <span className="gp-modal-row-value">{formatDateTime(item.processed)}</span>
          </div>
          {item.notes && (
            <div className="gp-modal-row">
              <span className="gp-modal-row-label">Notes</span>
              <span className="gp-modal-row-value">{item.notes}</span>
            </div>
          )}
          {item.rejectionReason && (
            <div className="gp-modal-row">
              <span className="gp-modal-row-label">Rejection Reason</span>
              <span className="gp-modal-row-value" style={{ color: '#cc2727' }}>{item.rejectionReason}</span>
            </div>
          )}
        </div>
        <div className="gp-modal-footer">
          <button className="gp-btn-secondary" onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function GPApprovalsPage() {
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [changeFilter, setChangeFilter] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)

  const stats = useMemo(() => ({
    pending:  APPROVALS.filter(a => a.status === 'Pending').length,
    approved: APPROVALS.filter(a => a.status === 'Approved').length,
    rejected: APPROVALS.filter(a => a.status === 'Rejected').length,
  }), [])

  const filtered = useMemo(() => {
    return APPROVALS.filter(a => {
      const matchSearch = a.entity.toLowerCase().includes(search.toLowerCase()) ||
                          a.changeType.toLowerCase().includes(search.toLowerCase())
      const matchStatus = statusFilter === 'All' || a.status === statusFilter
      const matchType   = typeFilter === 'All' || a.entityType === typeFilter
      const matchChange = changeFilter === 'All' || a.changeType === changeFilter
      return matchSearch && matchStatus && matchType && matchChange
    })
  }, [search, statusFilter, typeFilter, changeFilter])

  return (
    <div className="gp-approvals">
      {/* Header */}
      <div className="gp-approvals-header">
        <h1 className="gp-approvals-title">Approvals</h1>
        <p className="gp-approvals-subtitle">Review and track approval requests for your GP operations</p>
      </div>

      {/* Stats */}
      <div className="gp-approvals-stats">
        <div className="gp-approval-stat">
          <div className="gp-approval-stat-icon pending"><PendingIcon /></div>
          <div className="gp-approval-stat-info">
            <div className="gp-approval-stat-count" style={{ color: '#f59e0b' }}>{stats.pending}</div>
            <div className="gp-approval-stat-label">Pending</div>
          </div>
        </div>
        <div className="gp-approval-stat">
          <div className="gp-approval-stat-icon approved"><ApprovedIcon /></div>
          <div className="gp-approval-stat-info">
            <div className="gp-approval-stat-count" style={{ color: '#23d223' }}>{stats.approved}</div>
            <div className="gp-approval-stat-label">Approved</div>
          </div>
        </div>
        <div className="gp-approval-stat">
          <div className="gp-approval-stat-icon rejected"><RejectedIcon /></div>
          <div className="gp-approval-stat-info">
            <div className="gp-approval-stat-count" style={{ color: '#cc2727' }}>{stats.rejected}</div>
            <div className="gp-approval-stat-label">Rejected</div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="gp-approvals-filters">
        <div className="gp-search-wrap">
          <span className="gp-search-icon">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </span>
          <input
            className="gp-search-input"
            type="text"
            placeholder="Search requests..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
        <select className="gp-filter-select" value={statusFilter} onChange={e => setStatusFilter(e.target.value)}>
          <option value="All">All Statuses</option>
          <option>Pending</option>
          <option>Approved</option>
          <option>Rejected</option>
        </select>
        <select className="gp-filter-select" value={typeFilter} onChange={e => setTypeFilter(e.target.value)}>
          <option value="All">All Entity Types</option>
          <option>Strategy</option>
          <option>LP</option>
          <option>Member</option>
          <option>Collab</option>
        </select>
        <select className="gp-filter-select" value={changeFilter} onChange={e => setChangeFilter(e.target.value)}>
          <option value="All">All Change Types</option>
          <option value="PUBLISH_TO_MARKETPLACE">Publish to Marketplace</option>
          <option value="UPDATE_LP_DETAILS">Update LP Details</option>
          <option value="REMOVE_MEMBER">Remove Member</option>
        </select>
      </div>

      {/* Table */}
      <div className="gp-table-wrap">
        {filtered.length === 0 ? (
          <div style={{ padding: '60px 20px', textAlign: 'center', color: '#455a64' }}>
            <p style={{ margin: 0, fontSize: 14 }}>No approval requests match your filters.</p>
          </div>
        ) : (
          <table className="gp-table">
            <thead>
              <tr>
                <th>Entity</th>
                <th>Change Type</th>
                <th>Status</th>
                <th>Submitted</th>
                <th>Processed</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map(item => {
                const statusCls = item.status.toLowerCase()
                const typeCls   = item.entityType.toLowerCase()
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="gp-entity-cell">
                        <span className={`gp-entity-type-badge ${typeCls}`}>{item.entityType}</span>
                        <span className="gp-entity-name">{item.entity}</span>
                      </div>
                    </td>
                    <td>
                      <span className="gp-change-type">{item.changeType}</span>
                    </td>
                    <td>
                      <span className={`gp-status-badge ${statusCls}`}>{item.status}</span>
                    </td>
                    <td style={{ color: '#94a3b8', fontSize: 12 }}>{formatDateTime(item.submitted)}</td>
                    <td style={{ color: '#94a3b8', fontSize: 12 }}>{formatDateTime(item.processed)}</td>
                    <td>
                      <button className="gp-view-btn" onClick={() => setSelectedItem(item)}>View</button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        )}
      </div>

      {/* Details Modal */}
      {selectedItem && (
        <DetailsModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </div>
  )
}
