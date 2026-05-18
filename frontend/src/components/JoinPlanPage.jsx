import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './JoinPlanPage.css'

export default function JoinPlanPage() {
  const navigate = useNavigate()
  const [planId, setPlanId] = useState('')

  const [loading, setLoading] = useState(false)

  const handleConfirm = () => {
    if (!planId) return
    setLoading(true)
    setTimeout(() => {
      navigate('/plan-created')
    }, 1200)
  }

  return (
    <div className="jp-screen">
      <div className="jp-header">
        <button className="back-btn" onClick={() => navigate('/create-collab')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="jp-title">Join Plan</h1>
      </div>

      <p className="jp-instruction">Input the group investing plan's ID:</p>

      <div className={`jp-field${planId ? ' has-value' : ''}`}>
        <input
          type="text"
          className="jp-input"
          placeholder="Plan ID"
          value={planId}
          onChange={(e) => setPlanId(e.target.value)}
        />
        {loading && (
          <div className="jp-verifying-inline">
            <span className="jp-spinner" />
            <span>Verifying</span>
          </div>
        )}
      </div>

      <button
        className={`jp-confirm${planId ? ' active' : ''}`}
        onClick={handleConfirm}
        disabled={loading}
      >
        {loading ? 'Verifying...' : 'Confirm'}
      </button>
    </div>
  )
}
