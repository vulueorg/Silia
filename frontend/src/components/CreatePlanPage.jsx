import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './CreatePlanPage.css'

export default function CreatePlanPage() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [count, setCount] = useState('')
  const [duration, setDuration] = useState('6')
  const [amount, setAmount] = useState('')
  const [desc, setDesc] = useState('')

  return (
    <div className="cp-screen">
      <div className="cp-header">
        <button className="back-btn" onClick={() => navigate('/create-collab')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="cp-title">Create Plan</h1>
      </div>

      <div className="cp-field">
        <input type="text" placeholder="Collab Name" value={name} onChange={e => setName(e.target.value)} />
      </div>

      <div className="cp-field">
        <input type="text" placeholder="Participant Count" value={count} onChange={e => setCount(e.target.value)} />
      </div>
      <p className="cp-hint">Minimum of 2 members and maximum of 20 to a plan.</p>

      <p className="cp-label">Plan duration</p>
      <div className="cp-radios">
        <label className="cp-radio">
          <input type="radio" name="duration" value="6" checked={duration === '6'} onChange={() => setDuration('6')} />
          <span className="cp-radio-dot" />
          6 Months
        </label>
        <label className="cp-radio">
          <input type="radio" name="duration" value="12" checked={duration === '12'} onChange={() => setDuration('12')} />
          <span className="cp-radio-dot" />
          12 Months
        </label>
      </div>

      <div className="cp-field">
        <input type="text" placeholder="Set Plan Amount" value={amount} onChange={e => setAmount(e.target.value)} />
      </div>
      <p className="cp-hint">Min. ₦200,000 total investment required for a plan.</p>

      <div className="cp-field textarea">
        <textarea placeholder="Collab Description (optional)" value={desc} onChange={e => setDesc(e.target.value)} />
      </div>

      {name && count && amount && (
        <p className="cp-strategies-msg">Choose strategies for this plan</p>
      )}

      <button className="cp-confirm" onClick={() => navigate('/choose-strategies')}>Confirm</button>
    </div>
  )
}
