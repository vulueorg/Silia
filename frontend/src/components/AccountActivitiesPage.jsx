import { useNavigate } from 'react-router-dom'
import './AccountActivitiesPage.css'

export default function AccountActivitiesPage() {
  const navigate = useNavigate()

  return (
    <div className="aa-screen">
      <div className="aa-gradient" />
      <div className="aa-header">
        <button className="back-btn" onClick={() => navigate('/security')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="aa-title">Account Activities</h1>

      <div className="aa-buttons">
        <button className="aa-btn" onClick={() => navigate('/linked-devices')}>Linked Devices</button>
        <button className="aa-btn" onClick={() => navigate('/login-activity')}>Login Activity</button>
      </div>
    </div>
  )
}
