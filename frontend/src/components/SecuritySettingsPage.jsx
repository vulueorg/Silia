import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SecuritySettingsPage.css'

export default function SecuritySettingsPage() {
  const navigate = useNavigate()
  const [biometric, setBiometric] = useState(false)

  return (
    <div className="sec-screen">
      <div className="sec-gradient" />
      <div className="sec-header">
        <button className="back-btn" onClick={() => navigate('/settings')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="sec-title">Security Settings</h1>

      <div className="sec-bio-row">
        <div className="sec-bio-info">
          <span className="sec-bio-label">Biometric unlock</span>
          <span className="sec-bio-desc">You can use your fingerprint to grant you access to your account</span>
        </div>
        <button className={`sec-toggle${biometric ? ' on' : ''}`} onClick={() => setBiometric(!biometric)}>
          <span className="sec-toggle-dot" />
        </button>
      </div>

      <div className="sec-divider" />

      <button className="sec-link-row" onClick={() => navigate('/change-password')}>
        <span>Change Password</span>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 1l6 6-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>

      <button className="sec-link-row" onClick={() => navigate('/account-activities')}>
        <span>Account Activities</span>
        <svg width="8" height="14" viewBox="0 0 8 14" fill="none"><path d="M1 1l6 6-6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </button>
    </div>
  )
}
