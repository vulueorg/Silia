import './overview.css'

const stats = [
  {
    label: 'Total Users',
    value: '1,247',
    change: '+12% this month',
    changeType: 'up',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Total AUM',
    value: '₦2.84B',
    change: '+8.3% this month',
    changeType: 'up',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
  {
    label: 'Active Funds',
    value: '18',
    change: '+2 this month',
    changeType: 'up',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
      </svg>
    ),
  },
  {
    label: 'Pending KYC',
    value: '34',
    change: '12 new today',
    changeType: 'warn',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    label: 'Transactions Today',
    value: '156',
    change: '+23 vs yesterday',
    changeType: 'up',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    label: 'Platform Return',
    value: '+11.2%',
    change: 'YTD performance',
    changeType: 'up',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
]

const recentSignups = [
  { name: 'Adaeze Okonkwo', email: 'adaeze@email.com', date: 'Jun 28, 2025', status: 'Active' },
  { name: 'Emeka Nwosu', email: 'emeka.n@email.com', date: 'Jun 27, 2025', status: 'Pending' },
  { name: 'Fatima Al-Hassan', email: 'fatima.h@email.com', date: 'Jun 27, 2025', status: 'Active' },
  { name: 'Chukwudi Eze', email: 'chukwudi@email.com', date: 'Jun 26, 2025', status: 'Pending' },
  { name: 'Ngozi Adeleke', email: 'ngozi.a@email.com', date: 'Jun 25, 2025', status: 'Active' },
]

const recentTransactions = [
  { type: 'Investment', amount: '₦500,000', user: 'Adaeze O.', time: '2h ago', status: 'Completed' },
  { type: 'Withdrawal', amount: '₦120,000', user: 'Emeka N.', time: '4h ago', status: 'Pending' },
  { type: 'Distribution', amount: '₦2,400,000', user: 'Alpha Fund', time: '6h ago', status: 'Completed' },
  { type: 'Swap', amount: '₦80,000', user: 'Fatima H.', time: '8h ago', status: 'Completed' },
  { type: 'Investment', amount: '₦1,000,000', user: 'Chukwudi E.', time: '10h ago', status: 'Failed' },
]

function StatusBadge({ status }) {
  const map = {
    Active: 'success',
    Pending: 'warning',
    Completed: 'success',
    Failed: 'danger',
    Suspended: 'danger',
  }
  return (
    <span className={`admin-badge admin-badge--${map[status] || 'muted'}`}>{status}</span>
  )
}

export default function OverviewPage() {
  return (
    <div className="admin-overview">
      {/* Stats */}
      <div className="admin-overview__stats">
        {stats.map((s) => (
          <div key={s.label} className="admin-stat-card">
            <div className="admin-stat-card__header">
              <span className="admin-stat-card__label">{s.label}</span>
              <span className="admin-stat-card__icon">{s.icon}</span>
            </div>
            <div className="admin-stat-card__value">{s.value}</div>
            <div className={`admin-stat-card__change admin-stat-card__change--${s.changeType}`}>
              {s.changeType === 'up' && '↑ '}
              {s.changeType === 'warn' && '⚠ '}
              {s.change}
            </div>
          </div>
        ))}
      </div>

      {/* Two columns */}
      <div className="admin-overview__grid">
        {/* Recent Signups */}
        <div className="admin-card">
          <div className="admin-card__header">
            <h2 className="admin-card__title">Recent Signups</h2>
            <a href="/users" className="admin-card__link">View all</a>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {recentSignups.map((u, i) => (
                  <tr key={i}>
                    <td>{u.name}</td>
                    <td className="admin-table__muted">{u.email}</td>
                    <td className="admin-table__muted">{u.date}</td>
                    <td><StatusBadge status={u.status} /></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Transactions */}
        <div className="admin-card">
          <div className="admin-card__header">
            <h2 className="admin-card__title">Recent Transactions</h2>
            <a href="/transactions" className="admin-card__link">View all</a>
          </div>
          <div className="admin-overview__tx-list">
            {recentTransactions.map((tx, i) => (
              <div key={i} className="admin-overview__tx-item">
                <div className="admin-overview__tx-left">
                  <span className={`admin-tx-type admin-tx-type--${tx.type.toLowerCase()}`}>{tx.type}</span>
                  <span className="admin-overview__tx-user">{tx.user}</span>
                </div>
                <div className="admin-overview__tx-right">
                  <span className="admin-overview__tx-amount">{tx.amount}</span>
                  <div className="admin-overview__tx-meta">
                    <span className="admin-table__muted">{tx.time}</span>
                    <StatusBadge status={tx.status} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
