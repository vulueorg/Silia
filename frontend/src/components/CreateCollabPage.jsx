import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreateCollabPage.css'

export default function CreateCollabPage() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('existing')

  return (
    <div className="cc-screen">
      <div className="cc-header">
        <button className="back-btn" onClick={() => navigate('/collab')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="cc-title">Collabs</h1>
      </div>

      <div className="cc-tabs">
        <button className={`cc-tab${tab === 'existing' ? ' active' : ''}`} onClick={() => setTab('existing')}>Existing Plans</button>
        <button className={`cc-tab${tab === 'earnings' ? ' active' : ''}`} onClick={() => setTab('earnings')}>Earnings</button>
      </div>

      {tab === 'existing' && (
        <div className="cc-empty">
          <p className="cc-empty-msg">You have no investments yet!</p>
          <button className="cc-blue-btn" onClick={() => navigate('/create-plan')}>Create Plan</button>
          <button className="cc-blue-btn" onClick={() => navigate('/join-plan')}>Join Plan</button>
        </div>
      )}

      {tab === 'earnings' && (
        <div className="cc-empty">
          <p className="cc-empty-msg">No earnings yet.</p>
        </div>
      )}
    </div>
  )
}
