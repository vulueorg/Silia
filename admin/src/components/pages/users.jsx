import { useState } from 'react'
import './users.css'

const allUsers = [
  { id: 1, name: 'Adaeze Okonkwo', email: 'adaeze@email.com', role: 'LP', fund: 'Alpha Growth Fund', joined: 'Jan 12, 2025', status: 'Active' },
  { id: 2, name: 'Emeka Nwosu', email: 'emeka.n@email.com', role: 'GP', fund: 'Nwosu Capital', joined: 'Feb 3, 2025', status: 'Active' },
  { id: 3, name: 'Fatima Al-Hassan', email: 'fatima.h@email.com', role: 'LP', fund: 'Horizon Fund', joined: 'Feb 18, 2025', status: 'Pending' },
  { id: 4, name: 'Chukwudi Eze', email: 'chukwudi@email.com', role: 'Member', fund: '—', joined: 'Mar 5, 2025', status: 'Pending' },
  { id: 5, name: 'Ngozi Adeleke', email: 'ngozi.a@email.com', role: 'LP', fund: 'Alpha Growth Fund', joined: 'Mar 22, 2025', status: 'Active' },
  { id: 6, name: 'Babatunde Lawal', email: 'blawal@email.com', role: 'GP', fund: 'Lawal Ventures', joined: 'Apr 10, 2025', status: 'Suspended' },
  { id: 7, name: 'Chioma Obi', email: 'chioma.obi@email.com', role: 'LP', fund: 'Nwosu Capital', joined: 'May 1, 2025', status: 'Active' },
  { id: 8, name: 'Yusuf Garba', email: 'yusuf.g@email.com', role: 'Member', fund: '—', joined: 'Jun 14, 2025', status: 'Pending' },
]

const tabs = ['All', 'Active', 'Pending', 'Suspended']

function StatusBadge({ status }) {
  const map = { Active: 'success', Pending: 'warning', Suspended: 'danger' }
  return <span className={`admin-badge admin-badge--${map[status] || 'muted'}`}>{status}</span>
}

function RoleBadge({ role }) {
  const map = { LP: 'info', GP: 'accent', Member: 'muted' }
  return <span className={`admin-badge admin-badge--${map[role] || 'muted'}`}>{role}</span>
}

export default function UsersPage() {
  const [activeTab, setActiveTab] = useState('All')
  const [search, setSearch] = useState('')

  const filtered = allUsers.filter((u) => {
    const matchTab = activeTab === 'All' || u.status === activeTab
    const matchSearch =
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
    return matchTab && matchSearch
  })

  return (
    <div className="admin-users">
      <div className="admin-page-header">
        <div className="admin-page-header__search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search users..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="admin-search-input"
          />
        </div>
        <div className="admin-tabs" style={{ overflowX: 'auto', flexWrap: 'nowrap', flexShrink: 0 }}>
          {tabs.map((t) => (
            <button
              key={t}
              className={`admin-tab ${activeTab === t ? 'admin-tab--active' : ''}`}
              onClick={() => setActiveTab(t)}
              style={{ flexShrink: 0 }}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table" style={{ minWidth: 700 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Fund</th>
                <th>Joined</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={7} className="admin-table__empty">No users found</td>
                </tr>
              ) : (
                filtered.map((u) => (
                  <tr key={u.id}>
                    <td>
                      <div className="admin-users__name-cell">
                        <div className="admin-users__avatar">{u.name.charAt(0)}</div>
                        <span>{u.name}</span>
                      </div>
                    </td>
                    <td className="admin-table__muted">{u.email}</td>
                    <td><RoleBadge role={u.role} /></td>
                    <td className="admin-table__muted">{u.fund}</td>
                    <td className="admin-table__muted">{u.joined}</td>
                    <td><StatusBadge status={u.status} /></td>
                    <td>
                      <div className="admin-actions">
                        <button className="admin-btn admin-btn--ghost admin-btn--sm">View</button>
                        {u.status !== 'Suspended' ? (
                          <button className="admin-btn admin-btn--danger-ghost admin-btn--sm">Suspend</button>
                        ) : (
                          <button className="admin-btn admin-btn--success-ghost admin-btn--sm">Restore</button>
                        )}
                      </div>
                    </td>
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
