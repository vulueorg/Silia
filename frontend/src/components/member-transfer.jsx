import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './member-transfer.css'
import vulueMascot from '../assets/vulue-mascot.png'
import LeftPanel from './left-panel'

const mascot = vulueMascot

export default function MemberTransferPage() {
  const navigate = useNavigate()
  const [clientId, setClientId] = useState('')
  const [amount, setAmount] = useState('')
  const isFilled = clientId && amount

  return (
    <div className="mt-screen">
      <LeftPanel />

      <div className="mt-right-panel">
        <div className="mt-header">
          <button className="back-btn back-btn-mobile" onClick={() => navigate('/internal-transfer')} aria-label="Go back">
            <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="mt-title">To another Member</h1>
        </div>

        <div className={`mt-field${clientId ? ' has-value' : ''}`}>
          <input
            type="text"
            className="mt-input"
            placeholder="Enter Client ID"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
          />
        </div>

        <div className={`mt-field amount${amount ? ' has-value' : ''}`}>
          <span className="mt-naira">₦</span>
          <div className="mt-divider" />
          <input
            type="text"
            className="mt-input"
            placeholder="Enter an amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <p className="mt-hint">
          <span className="hint-light">Min. </span>
          <span className="hint-bold">₦100-max. ₦1,000,000 allowed at a time</span>
          <span className="hint-light">. Do not enter amounts with decimals.</span>
        </p>

        <p className="mt-warning">Please ensure that the details are correct as any loss of funds will not be covered by Vulue.</p>

        <button
          className={`mt-confirm${isFilled ? ' active' : ''}`}
          onClick={() => isFilled && navigate('/home')}
        >
          Confirm
        </button>

        <div className="mt-brand">
          <img src={mascot} alt="" className="brand-icon" />
          <span className="brand-text">VULUE</span>
        </div>
      </div>
    </div>
  )
}
