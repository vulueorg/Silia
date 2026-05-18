import './StrategiesPage.css'

const strategies = [
  { id: 1, name: 'Equity Growth Alpha', gp: 'Emeka Nwosu', type: 'Equity', status: 'Active', created: 'Jan 10, 2025' },
  { id: 2, name: 'Fixed Income Ladder', gp: 'Yusuf Garba', type: 'Fixed Income', status: 'Pending Approval', created: 'Mar 5, 2025' },
  { id: 3, name: 'Real Estate Diversified', gp: 'Babatunde Lawal', type: 'Real Estate', status: 'Rejected', created: 'Apr 2, 2025' },
  { id: 4, name: 'Balanced Portfolio Pro', gp: 'Chioma Obi', type: 'Balanced', status: 'Active', created: 'Apr 18, 2025' },
  { id: 5, name: 'Emerging Markets Fund', gp: 'Emeka Nwosu', type: 'Equity', status: 'Pending Approval', created: 'May 22, 2025' },
  { id: 6, name: 'Horizon Multi-Asset', gp: 'Babatunde Lawal', type: 'Multi-Asset', status: 'Active', created: 'Jun 1, 2025' },
]

function StatusBadge({ status }) {
  const map = {
    Active: 'success',
    'Pending Approval': 'warning',
    Rejected: 'danger',
  }
  return <span className={`admin-badge admin-badge--${map[status] || 'muted'}`}>{status}</span>
}

function TypeBadge({ type }) {
  return <span className="admin-strategies__type-badge">{type}</span>
}

export default function StrategiesPage() {
  return (
    <div className="admin-strategies">
      <div className="admin-strategies__toolbar">
        <button className="admin-btn admin-btn--primary">+ New Strategy</button>
      </div>

      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Strategy Name</th>
                <th>GP</th>
                <th>Type</th>
                <th>Status</th>
                <th>Created</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {strategies.map((s) => (
                <tr key={s.id}>
                  <td>
                    <div className="admin-strategies__name-cell">
                      <div className="admin-strategies__icon">{s.name.charAt(0)}</div>
                      <span>{s.name}</span>
                    </div>
                  </td>
                  <td className="admin-table__muted">{s.gp}</td>
                  <td><TypeBadge type={s.type} /></td>
                  <td><StatusBadge status={s.status} /></td>
                  <td className="admin-table__muted">{s.created}</td>
                  <td>
                    <div className="admin-actions">
                      <button className="admin-btn admin-btn--ghost admin-btn--sm">View</button>
                      {s.status === 'Pending Approval' && (
                        <>
                          <button className="admin-btn admin-btn--approve admin-btn--sm">Approve</button>
                          <button className="admin-btn admin-btn--reject admin-btn--sm">Reject</button>
                        </>
                      )}
                      {s.status === 'Active' && (
                        <button className="admin-btn admin-btn--danger-ghost admin-btn--sm">Deactivate</button>
                      )}
                      {s.status === 'Rejected' && (
                        <button className="admin-btn admin-btn--approve admin-btn--sm">Re-approve</button>
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
