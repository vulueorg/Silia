import { useNavigate } from 'react-router-dom'
import './profile.css'
import avatar from '../assets/home-mascot.png'

const securityIcon = "https://www.figma.com/api/mcp/asset/22e41687-10e0-40d4-9c40-e14d45de66cb"

export default function ProfilePage() {
  const navigate = useNavigate()

  return (
    <div className="prof-screen">
      <div className="prof-gradient" />
      <div className="prof-header">
        <button className="back-btn" onClick={() => navigate('/settings')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="prof-title">Profile</h1>

      <div className="prof-avatar-wrap">
        <img className="prof-avatar" src={avatar} alt="" />
      </div>

      <div className="prof-menu">
        <button className="prof-menu-item" onClick={() => navigate('/personal-info')}>Personal details</button>
        <button className="prof-menu-item" onClick={() => navigate('/bank-details')}>Bank details</button>
        <button className="prof-menu-item" onClick={() => navigate('/next-of-kin')}>Next of kin</button>
      </div>

      <div className="prof-security">
        <img className="prof-security-icon" src={securityIcon} alt="" />
        <p className="prof-security-text">This information is required solely for verification.</p>
      </div>
    </div>
  )
}
