import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login-activity.css'

const completedIcon = "https://www.figma.com/api/mcp/asset/76ae32a3-e30a-474b-bd85-c334645d50bd"
const failedIcon = "https://www.figma.com/api/mcp/asset/85671583-9555-4d46-bca1-7bfd8f857994"

const allLogins = [
  { status: 'Completed', time: '11/08/2023 - 09:45:34', source: 'android', location: 'Port Harcourt, Nigeria', ip: '123.456.789.123' },
  { status: 'Completed', time: '11/08/2023 - 09:45:34', source: 'android', location: 'Port Harcourt, Nigeria', ip: '123.456.789.123' },
  { status: 'Completed', time: '11/08/2023 - 09:45:34', source: 'android', location: 'Port Harcourt, Nigeria', ip: '123.456.789.123' },
  { status: 'Failed', time: '11/08/2023 - 09:45:34', source: 'android', location: 'Port Harcourt, Nigeria', ip: '123.456.789.123' },
]

const filters = ['All', 'Completed', 'Failed']

export default function LoginActivityPage() {
  const navigate = useNavigate()
  const [showFilter, setShowFilter] = useState(false)
  const [selected, setSelected] = useState('All')

  const filtered = selected === 'All' ? allLogins : allLogins.filter(l => l.status === selected)

  return (
    <div className="la-screen">
      <div className="la-gradient" />
      <div className="la-title-row">
        <button className="back-btn" onClick={() => navigate('/account-activities')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="la-title">Login Activity</h1>
        <div className="la-filter-wrap">
          <button className="la-filter" onClick={() => setShowFilter(!showFilter)}>
            {selected} <span>▼</span>
          </button>
          {showFilter && (
            <div className="la-dropdown">
              {filters.map((f, i) => (
                <button
                  key={i}
                  className={`la-dropdown-item${selected === f ? ' active' : ''}`}
                  onClick={() => { setSelected(f); setShowFilter(false); }}
                >
                  {f}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="la-list">
        {filtered.map((l, i) => (
          <div key={i} className="la-entry">
            <div className="la-status">
              <img className="la-status-icon" src={l.status === 'Completed' ? completedIcon : failedIcon} alt="" />
              <span className={`la-status-text ${l.status === 'Failed' ? 'failed' : ''}`}>{l.status}</span>
            </div>
            <div className="la-details">
              <div className="la-row"><span className="la-key">Time:</span><span className="la-val">{l.time}</span></div>
              <div className="la-row"><span className="la-key">Source:</span><span className="la-val">{l.source}</span></div>
              <div className="la-row"><span className="la-key">Location:</span><span className="la-val">{l.location}</span></div>
              <div className="la-row"><span className="la-key">IP Address:</span><span className="la-val">{l.ip}</span></div>
            </div>
            <div className="la-divider" />
          </div>
        ))}
        {filtered.length === 0 && <p className="la-empty">No activity found.</p>}
      </div>
    </div>
  )
}
