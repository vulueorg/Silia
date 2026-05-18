import './AuditLogPage.css'

const auditLogs = [
  { id: 1, timestamp: 'Jun 28, 2025 14:32:11', admin: 'Super Admin', action: 'APPROVE_KYC', target: 'Emeka Nwosu', ip: '102.89.45.12' },
  { id: 2, timestamp: 'Jun 28, 2025 13:18:44', admin: 'Super Admin', action: 'SUSPEND_USER', target: 'Babatunde Lawal', ip: '102.89.45.12' },
  { id: 3, timestamp: 'Jun 28, 2025 11:05:22', admin: 'Super Admin', action: 'APPROVE_FUND', target: 'Alpha Growth Fund', ip: '102.89.45.12' },
  { id: 4, timestamp: 'Jun 27, 2025 16:44:09', admin: 'Super Admin', action: 'REJECT_KYC', target: 'Chukwudi Eze', ip: '197.210.88.34' },
  { id: 5, timestamp: 'Jun 27, 2025 15:30:55', admin: 'Super Admin', action: 'UPDATE_SETTINGS', target: 'Platform Fees', ip: '197.210.88.34' },
  { id: 6, timestamp: 'Jun 27, 2025 10:12:38', admin: 'Super Admin', action: 'APPROVE_STRATEGY', target: 'Equity Growth Alpha', ip: '197.210.88.34' },
  { id: 7, timestamp: 'Jun 26, 2025 17:55:01', admin: 'Super Admin', action: 'REJECT_STRATEGY', target: 'Real Estate Diversified', ip: '102.89.45.12' },
  { id: 8, timestamp: 'Jun 26, 2025 14:20:17', admin: 'Super Admin', action: 'APPROVE_WITHDRAWAL', target: 'TXN-007 — ₦450,000', ip: '102.89.45.12' },
  { id: 9, timestamp: 'Jun 25, 2025 09:44:52', admin: 'Super Admin', action: 'TOGGLE_FLAG', target: 'KYC Required → ON', ip: '41.58.120.77' },
  { id: 10, timestamp: 'Jun 24, 2025 18:03:29', admin: 'Super Admin', action: 'RESTORE_USER', target: 'Ngozi Adeleke', ip: '41.58.120.77' },
]

const actionColors = {
  APPROVE_KYC: 'success',
  APPROVE_FUND: 'success',
  APPROVE_STRATEGY: 'success',
  APPROVE_WITHDRAWAL: 'success',
  RESTORE_USER: 'success',
  REJECT_KYC: 'danger',
  REJECT_STRATEGY: 'danger',
  SUSPEND_USER: 'danger',
  UPDATE_SETTINGS: 'info',
  TOGGLE_FLAG: 'warning',
}

function ActionBadge({ action }) {
  const color = actionColors[action] || 'muted'
  return (
    <span className={`admin-audit__action admin-audit__action--${color}`}>
      {action.replace(/_/g, ' ')}
    </span>
  )
}

export default function AuditLogPage() {
  return (
    <div className="admin-audit">
      <div className="admin-audit__toolbar">
        <div className="admin-page-header__search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            type="text"
            placeholder="Search audit log..."
            className="admin-search-input"
          />
        </div>
        <button className="admin-btn admin-btn--ghost">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ width: 14, height: 14, marginRight: 6 }}>
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Export CSV
        </button>
      </div>

      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table" style={{ minWidth: 580 }}>
            <thead>
              <tr>
                <th>Timestamp</th>
                <th>Admin</th>
                <th>Action</th>
                <th>Target</th>
                <th>IP Address</th>
              </tr>
            </thead>
            <tbody>
              {auditLogs.map((log) => (
                <tr key={log.id}>
                  <td className="admin-audit__timestamp">{log.timestamp}</td>
                  <td>
                    <div className="admin-users__name-cell">
                      <div className="admin-users__avatar" style={{ width: 26, height: 26, fontSize: 10 }}>SA</div>
                      <span>{log.admin}</span>
                    </div>
                  </td>
                  <td><ActionBadge action={log.action} /></td>
                  <td className="admin-table__muted">{log.target}</td>
                  <td className="admin-audit__ip">{log.ip}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
