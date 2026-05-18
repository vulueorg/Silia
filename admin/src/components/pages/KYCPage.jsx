import { useState } from 'react'
import './KYCPage.css'

const allKYC = [
  { id: 1, name: 'Adaeze Okonkwo', email: 'adaeze@email.com', submitted: 'Jun 28, 2025', docType: 'National ID', status: 'Pending' },
  { id: 2, name: 'Emeka Nwosu', email: 'emeka.n@email.com', submitted: 'Jun 27, 2025', docType: 'Passport', status: 'Approved' },
  { id: 3, name: 'Fatima Al-Hassan', email: 'fatima.h@email.com', submitted: 'Jun 26, 2025', docType: "Driver's License", status: 'Pending' },
  { id: 4, name: 'Chukwudi Eze', email: 'chukwudi@email.com', submitted: 'Jun 25, 2025', docType: 'National ID', status: 'Rejected' },
  { id: 5, name: 'Ngozi Adeleke', email: 'ngozi.a@email.com', submitted: 'Jun 24, 2025', docType: 'Passport', status: 'Approved' },
  { id: 6, name: 'Babatunde Lawal', email: 'blawal@email.com', submitted: 'Jun 23, 2025', docType: "Driver's License", status: 'Rejected' },
  { id: 7, name: 'Chioma Obi', email: 'chioma.obi@email.com', submitted: 'Jun 22, 2025', docType: 'National ID', status: 'Pending' },
  { id: 8, name: 'Yusuf Garba', email: 'yusuf.g@email.com', submitted: 'Jun 21, 2025', docType: 'Passport', status: 'Pending' },
]

const tabs = ['Pending', 'Approved', 'Rejected']

function StatusBadge({ status }) {
  const map = { Approved: 'success', Pending: 'warning', Rejected: 'danger' }
  return <span className={`admin-badge admin-badge--${map[status] || 'muted'}`}>{status}</span>
}

export default function KYCPage() {
  const [activeTab, setActiveTab] = useState('Pending')

  const filtered = allKYC.filter((k) => k.status === activeTab)

  return (
    <div className="admin-kyc">
      <div className="admin-kyc__header">
        <div className="admin-tabs">
          {tabs.map((t) => (
            <button
              key={t}
              className={`admin-tab ${activeTab === t ? 'admin-tab--active' : ''}`}
              onClick={() => setActiveTab(t)}
            >
              {t}
              <span className="admin-tab__count">
                {allKYC.filter((k) => k.status === t).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="admin-card">
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Submitted</th>
                <th>Document Type</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={6} className="admin-table__empty">No {activeTab.toLowerCase()} KYC submissions</td>
                </tr>
              ) : (
                filtered.map((k) => (
                  <tr key={k.id}>
                    <td>
                      <div className="admin-users__name-cell">
                        <div className="admin-users__avatar">{k.name.charAt(0)}</div>
                        <span>{k.name}</span>
                      </div>
                    </td>
                    <td className="admin-table__muted">{k.email}</td>
                    <td className="admin-table__muted">{k.submitted}</td>
                    <td>
                      <span className="admin-kyc__doc-type">{k.docType}</span>
                    </td>
                    <td><StatusBadge status={k.status} /></td>
                    <td>
                      <div className="admin-actions">
                        <button className="admin-btn admin-btn--ghost admin-btn--sm">View Docs</button>
                        {k.status === 'Pending' && (
                          <>
                            <button className="admin-btn admin-btn--approve admin-btn--sm">Approve</button>
                            <button className="admin-btn admin-btn--reject admin-btn--sm">Reject</button>
                          </>
                        )}
                        {k.status === 'Rejected' && (
                          <button className="admin-btn admin-btn--approve admin-btn--sm">Re-approve</button>
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
