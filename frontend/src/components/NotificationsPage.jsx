import { useNavigate } from 'react-router-dom'
import './NotificationsPage.css'
import megaphoneImg from '../assets/notif-megaphone.svg'
import copyIconImg from '../assets/notif-copy-icon.svg'

const megaphone = megaphoneImg
const copyIcon = copyIconImg

const notifications = [
  {
    title: 'Device Login',
    date: '12 Apr 2024, 07:22',
    body: 'A device "IPHONE 12 Pro" has logged into your account from Nigeria.',
  },
  {
    title: 'Account Verified!',
    date: '11 Apr 2024, 10:12',
    body: 'Thank you for completing your profile! You can now continue to invest with us.',
  },
  {
    title: null,
    date: null,
    body: 'INVEST NOW!',
    highlight: true,
  },
  {
    title: 'Account Created!',
    date: '11 Apr 2024, 09:01',
    body: 'Thank you for choosing to grow with us! You can now continue to invest with us.',
  },
  {
    title: 'Here is your client ID',
    date: null,
    body: '4444444441',
    copyable: true,
  },
]

export default function NotificationsPage() {
  const navigate = useNavigate()

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="notif-screen">
      {/* Back button */}
      <button className="notif-back-btn" onClick={() => navigate('/home')} aria-label="Go back">
        <svg width="27" height="27" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Header */}
      <div className="notif-header">
        <img className="megaphone" src={megaphone} alt="" />
        <h1 className="notif-title">Notifications</h1>
      </div>

      <div className="notif-divider" />

      {/* Notification list */}
      <div className="notif-list">
        {notifications.map((n, i) => (
          <div key={i}>
            <div className="notif-item">
              {n.title && <p className="notif-item-title">{n.title}</p>}
              {n.date && <p className="notif-item-date">{n.date}</p>}
              <p className={`notif-item-body${n.highlight ? ' highlight' : ''}${n.copyable ? ' client-id' : ''}`}>
                {n.body}
              </p>
              {n.copyable && (
                <button className="copy-btn" onClick={() => handleCopy(n.body)} aria-label="Copy client ID">
                  <img src={copyIcon} alt="Copy" />
                </button>
              )}
            </div>
            {i < notifications.length - 1 && <div className="notif-divider" />}
          </div>
        ))}
      </div>
    </div>
  )
}
