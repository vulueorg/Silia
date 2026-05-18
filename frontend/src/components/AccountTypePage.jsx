import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AccountTypePage.css'

export default function AccountTypePage() {
  const navigate = useNavigate()
  const [selectedRole, setSelectedRole] = useState(null)

  return (
    <div className="at-screen">
      <div className="at-gradient" />
      <div className="at-header">
        <button className="back-btn" onClick={() => navigate('/settings')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="at-title">Account Type</h1>

      {/* Current account */}
      <div className="at-section">
        <p className="at-type-name">Individual</p>
        <p className="at-current">This is your current account type</p>
      </div>
      <div className="at-divider" />

      {/* Professional tier */}
      <div className="at-section">
        <p className="at-type-name">Professional Tier Individual Account</p>
        <p className="at-type-desc">
          This account type is for more advanced clients with greater experience in finance and investing professionally. These accounts are tailored more to affluent and high-net worth clients.
        </p>
      </div>

      <button className="at-upgrade-btn">Request Professional Tier Upgrade</button>

      <div className="at-divider" />

      {/* General Partner */}
      <div className="at-section">
        <p className="at-type-name">General Partner</p>
        <p className="at-type-desc">
          Manage limited partnerships, oversee member portfolios, create investment strategies, and collaborate with other GPs. This account type is for fund managers and institutional partners.
        </p>
      </div>

      <button
        className={`at-upgrade-btn at-gp-btn${selectedRole === 'gp' ? ' at-gp-btn--selected' : ''}`}
        onClick={() => {
          if (selectedRole === 'gp') {
            navigate('/generalpartner')
          } else {
            setSelectedRole('gp')
          }
        }}
      >
        {selectedRole === 'gp' ? 'Confirm — Go to GP Dashboard →' : 'Switch to General Partner'}
      </button>

      <div className="at-divider" />
    </div>
  )
}
