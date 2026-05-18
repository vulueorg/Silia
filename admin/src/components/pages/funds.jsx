import './funds.css'

const funds = [
  { id: 1, name: 'Alpha Growth Fund', gp: 'Emeka Nwosu', members: 42, aum: '₦480,000,000', status: 'Active', created: 'Jan 5, 2025' },
  { id: 2, name: 'Nwosu Capital Partners', gp: 'Emeka Nwosu', members: 18, aum: '₦210,000,000', status: 'Active', created: 'Feb 12, 2025' },
  { id: 3, name: 'Horizon Balanced Fund', gp: 'Babatunde Lawal', members: 31, aum: '₦350,000,000', status: 'Pending', created: 'Mar 3, 2025' },
  { id: 4, name: 'Lawal Ventures Fund I', gp: 'Babatunde Lawal', members: 0, aum: '₦0', status: 'Suspended', created: 'Apr 20, 2025' },
  { id: 5, name: 'Zenith Income Fund', gp: 'Chioma Obi', members: 55, aum: '₦720,000,000', status: 'Active', created: 'May 8, 2025' },
  { id: 6, name: 'Garba Fixed Income', gp: 'Yusuf Garba', members: 7, aum: '₦85,000,000', status: 'Pending', created: 'Jun 1, 2025' },
]

function StatusBadge({ status }) {
  const map = { Active: 'success', Pending: 'warning', Suspended: 'danger' }
  return <span className={`admin-badge admin-badge--${map[status] || 'muted'}`}>{status}</span>
}

export default function FundsPage() {
  return (
    <div className="admin-funds">
      <div className="admin-funds__toolbar">
        <button className="admin-btn admin-btn--primary">+ Create Fund</button>
      </div>

      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table" style={{ minWidth: 680 }}>
            <thead>
              <tr>
                <th>Fund Name</th>
                <th>GP</th>
                <th>Members</th>
                <th>AUM</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {funds.map((f) => (
                <tr key={f.id}>
                  <td>
                    <div className="admin-funds__name-cell">
                      <div className="admin-funds__fund-icon">
                        {f.name.charAt(0)}
                      </div>
                      <span>{f.name}</span>
                    </div>
                  </td>
                  <td className="admin-table__muted">{f.gp}</td>
                  <td>{f.members}</td>
                  <td className="admin-funds__aum">{f.aum}</td>
                  <td><StatusBadge status={f.status} /></td>
                  <td className="admin-table__muted">{f.created}</td>
                  <td>
                    <div className="admin-actions">
                      <button className="admin-btn admin-btn--ghost admin-btn--sm">View</button>
                      {f.status === 'Active' && (
                        <button className="admin-btn admin-btn--danger-ghost admin-btn--sm">Suspend</button>
                      )}
                      {f.status === 'Pending' && (
                        <button className="admin-btn admin-btn--approve admin-btn--sm">Approve</button>
                      )}
                      {f.status === 'Suspended' && (
                        <button className="admin-btn admin-btn--success-ghost admin-btn--sm">Restore</button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
