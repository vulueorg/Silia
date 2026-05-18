import { useState } from 'react'
import './approvals.css'

const allApprovals = [
  {
    id: 1,
    type: 'Fund Launch',
    title: 'Garba Fixed Income Fund',
    submittedBy: 'Yusuf Garba',
    date: 'Jun 28, 2025',
    description: 'Request to launch a new fixed income fund targeting 12% annual returns with a minimum investment of ₦100,000.',
    status: 'Pending',
  },
  {
    id: 2,
    type: 'Strategy',
    title: 'Emerging Markets Equity Strategy',
    submittedBy: 'Emeka Nwosu',
    date: 'Jun 27, 2025',
    description: 'New investment strategy focused on high-growth emerging market equities across Sub-Saharan Africa.',
    status: 'Pending',
  },
  {
    id: 3,
    type: 'Withdrawal',
    title: 'Large Withdrawal Request — ₦4,500,000',
    submittedBy: 'Babatunde Lawal',
    date: 'Jun 26, 2025',
    description: 'Withdrawal request exceeding the standard threshold. Requires admin approval per platform policy.',
    status: 'Pending',
  },
  {
    id: 4,
    type: 'Fund Launch',
    title: 'Zenith Income Fund II',
    submittedBy: 'Chioma Obi',
    date: 'Jun 20, 2025',
    description: 'Second tranche of the Zenith Income Fund, targeting institutional investors with a ₦5M minimum.',
    status: 'Approved',
  },
  {
    id: 5,
    type: 'Strategy',
    title: 'Real Estate Diversified Portfolio',
    submittedBy: 'Babatunde Lawal',
    date: 'Jun 15, 2025',
    description: 'Strategy rejected due to insufficient documentation and unclear risk management framework.',
    status: 'Rejected',
  },
]

const tabs = ['Pending', 'Approved', 'Rejected']

const typeColors = {
  'Fund Launch': 'info',
  Strategy: 'accent',
  Withdrawal: 'warning',
}

function TypeBadge({ type }) {
  return (
    <span className={`admin-badge admin-badge--${typeColors[type] || 'muted'}`}>{type}</span>
  )
}

export default function ApprovalsPage() {
  const [activeTab, setActiveTab] = useState('Pending')

  const filtered = allApprovals.filter((a) => a.status === activeTab)

  return (
    <div className="admin-approvals">
      <div className="admin-approvals__header" style={{ overflowX: 'auto' }}>
        <div className="admin-tabs" style={{ flexWrap: 'nowrap', minWidth: 'max-content' }}>
          {tabs.map((t) => (
            <button
              key={t}
              className={`admin-tab ${activeTab === t ? 'admin-tab--active' : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
              <span className="admin-tab__count">
                {allApprovals.filter((a) => a.status === t).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="admin-approvals__grid">
        {filtered.length === 0 ? (
          <div className="admin-approvals__empty">
            No {activeTab.toLowerCase()} approvals
          </div>
        ) : (
          filtered.map((item) => (
            <div key={item.id} className="admin-approval-card">
              <div className="admin-approval-card__header">
                <TypeBadge type={item.type} />
                <span className="admin-approval-card__date">{item.date}</span>
              </div>
              <h3 className="admin-approval-card__title">{item.title}</h3>
              <p className="admin-approval-card__desc">{item.description}</p>
              <div className="admin-approval-card__footer">
                <div className="admin-approval-card__submitter">
                  <div className="admin-users__avatar">{item.submittedBy.charAt(0)}</div>
                  <div>
                    <div className="admin-approval-card__submitter-name">{item.submittedBy}</div>
                    <div className="admin-approval-card__submitter-label">Submitted by</div>
                  </div>
                </div>
                {item.status === 'Pending' && (
                  <div className="admin-actions">
                    <button className="admin-btn admin-btn--approve">Approve</button>
                    <button className="admin-btn admin-btn--reject">Reject</button>
                  </div>
                )}
                {item.status === 'Approved' && (
                  <span className="admin-badge admin-badge--success">Approved</span>
                )}
                {item.status === 'Rejected' && (
                  <span className="admin-badge admin-badge--danger">Rejected</span>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
