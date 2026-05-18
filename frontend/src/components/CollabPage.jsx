import { useNavigate } from 'react-router-dom'
import './CollabPage.css'
import groupIconImg from '../assets/collab-group-icon.svg'

const groupIcon = groupIconImg

export default function CollabPage() {
  const navigate = useNavigate()

  return (
    <div className="collab-screen">
      <div className="collab-header">
        <button className="back-btn" onClick={() => navigate('/home')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="collab-title">Collabs</h1>
      </div>

      <div className="collab-icon-wrap">
        <img className="collab-icon" src={groupIcon} alt="" />
      </div>

      <p className="collab-desc">
        Create plans and invite friends, family, associates to jointly invest without worrying about disputes. This feature mitigates risks tied to concentrated investments and grants you access to opportunities that might have been overlooked due to capital constraints.
      </p>

      <button className="collab-confirm" onClick={() => navigate('/create-collab')}>Confirm</button>
    </div>
  )
}
