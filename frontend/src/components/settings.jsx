import { useNavigate } from 'react-router-dom'
import './settings.css'
import BottomNav from './bottom-nav'
import avatar from '../assets/home-mascot.png'

// Blue copy icon SVG component
const CopyIconSVG = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="8" height="10" rx="1" stroke="#0066CC" strokeWidth="1.5" fill="none"/>
    <rect x="6" y="6" width="8" height="10" rx="1" stroke="#0066CC" strokeWidth="1.5" fill="none"/>
  </svg>
)

const menuItems = ['Profile', 'Language', 'Account Type', 'Statements', 'Security Settings', 'Support']

export default function SettingsPage() {
  const navigate = useNavigate()

  return (
    <div className="settings-screen">
      {/* Profile header */}
      <div className="settings-profile">
        <img className="settings-avatar" src={avatar} alt="" />
        <p className="settings-name">Ekwe Yeosuf</p>
        <div className="settings-id-row">
          <span className="settings-id">User ID: XXXXXXXXX</span>
          <button className="settings-copy" onClick={() => navigator.clipboard.writeText('XXXXXXXXX')}>
            <CopyIconSVG />
          </button>
        </div>
        <span className="settings-verified">Verified</span>
      </div>

      {/* Menu */}
      <div className="settings-menu">
        {menuItems.map((item, i) => (
          <button key={i} className="settings-menu-item" onClick={() => {
            if (item === 'Profile') navigate('/profile')
            else if (item === 'Language') navigate('/language')
            else if (item === 'Account Type') navigate('/account-type')
            else if (item === 'Statements') navigate('/statements')
            else if (item === 'Security Settings') navigate('/security')
          }}>
            <span>{item}</span>
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="#455a64" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        ))}
      </div>

      {/* Sign Out */}
      <button className="settings-signout" onClick={() => navigate('/')}>Sign Out</button>

      <BottomNav />
    </div>
  )
}
