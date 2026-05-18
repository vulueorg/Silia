import { useState } from 'react'
import './transactions.css'

const allTransactions = [
  { id: 'TXN-001', user: 'Adaeze Okonkwo', type: 'Investment', amount: '₦500,000', fund: 'Alpha Growth Fund', date: 'Jun 28, 2025', status: 'Completed' },
  { id: 'TXN-002', user: 'Emeka Nwosu', type: 'Withdrawal', amount: '₦120,000', fund: 'Nwosu Capital', date: 'Jun 28, 2025', status: 'Pending' },
  { id: 'TXN-003', user: 'Fatima Al-Hassan', type: 'Investment', amount: '₦250,000', fund: 'Horizon Balanced Fund', date: 'Jun 27, 2025', status: 'Completed' },
  { id: 'TXN-004', user: 'Alpha Growth Fund', type: 'Distribution', amount: '₦2,400,000', fund: 'Alpha Growth Fund', date: 'Jun 27, 2025', status: 'Completed' },
  { id: 'TXN-005', user: 'Chukwudi Eze', type: 'Investment', amount: '₦1,000,000', fund: 'Zenith Income Fund', date: 'Jun 26, 2025', status: 'Failed' },
  { id: 'TXN-006', user: 'Ngozi Adeleke', type: 'Swap', amount: '₦80,000', fund: 'Alpha Growth Fund', date: 'Jun 26, 2025', status: 'Completed' },
  { id: 'TXN-007', user: 'Babatunde Lawal', type: 'Withdrawal', amount: '₦450,000', fund: 'Lawal Ventures', date: 'Jun 25, 2025', status: 'Pending' },
  { id: 'TXN-008', user: 'Chioma Obi', type: 'Investment', amount: '₦300,000', fund: 'Nwosu Capital', date: 'Jun 25, 2025', status: 'Completed' },
  { id: 'TXN-009', user: 'Yusuf Garba', type: 'Investment', amount: '₦150,000', fund: 'Garba Fixed Income', date: 'Jun 24, 2025', status: 'Pending' },
  { id: 'TXN-010', user: 'Zenith Income Fund', type: 'Distribution', amount: '₦5,200,000', fund: 'Zenith Income Fund', date: 'Jun 24, 2025', status: 'Completed' },
]

function StatusBadge({ status }) {
  const map = { Completed: 'success', Pending: 'warning', Failed: 'danger' }
  return <span className={`admin-badge admin-badge--${map[status] || 'muted'}`}>{status}</span>
}

function TypeBadge({ type }) {
  const map = {
    Investment: 'investment',
    Withdrawal: 'withdrawal',
    Distribution: 'distribution',
    Swap: 'swap',
  }
  return <span className={`admin-tx-type admin-tx-type--${map[type] || 'muted'}`}>{type}</span>
}

export default function TransactionsPage() {
  const [search, setSearch] = useState('')
  const [dateFilter, setDateFilter] = useState('')

  const filtered = allTransactions.filter((t) => {
    const matchSearch =
      t.user.toLowerCase().includes(search.toLowerCase()) ||
      t.id.toLowerCase().includes(search.toLowerCase()) ||
      t.fund.toLowerCase().includes(search.toLowerCase())
    const matchDate = !dateFilter || t.date.includes(dateFilter)
    return matchSearch && matchDate
  })

  return (
    <div className="admin-transactions">
      <div className="admin-page-header">
        <div className="admin-page-header__search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search by ID, user, or fund..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="admin-search-input"
          />
        </div>
        <div className="admin-transactions__date-filter" style={{ minWidth: 0, flex: '0 0 auto' }}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          <input
            type="text"
            placeholder="Filter by date..."
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
            className="admin-search-input"
          />
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table" style={{ minWidth: 680 }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>User</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Fund</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="admin-table__empty">No transactions found</td>
                </tr>
              ) : (
                filtered.map((t) => (
                  <tr key={t.id}>
                    <td className="admin-transactions__id">{t.id}</td>
                    <td>{t.user}</td>
                    <td><TypeBadge type={t.type} /></td>
                    <td className="admin-transactions__amount">{t.amount}</td>
                    <td className="admin-table__muted">{t.fund}</td>
                    <td className="admin-table__muted">{t.date}</td>
                    <td><StatusBadge status={t.status} /></td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
