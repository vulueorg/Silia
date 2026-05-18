import { useNavigate } from 'react-router-dom'
import './StatementsPage.css'

export default function StatementsPage() {
  const navigate = useNavigate()

  return (
    <div className="st-screen">
      <div className="st-gradient" />
      <div className="st-header">
        <button className="back-btn" onClick={() => navigate('/settings')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="st-title">Statements</h1>

      <div className="st-buttons">
        <button className="st-btn" onClick={() => navigate('/transaction-history')}>Transaction History</button>
        <button className="st-btn">Request Account Statement Document</button>
        <button className="st-btn">Request Income Statement Document</button>
      </div>
    </div>
  )
}
