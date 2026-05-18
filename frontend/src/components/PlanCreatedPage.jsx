import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PlanCreatedPage.css'

const groupIcon = "https://www.figma.com/api/mcp/asset/e4b7fe45-34c9-4ec6-9e62-5be99f5059cd"

export default function PlanCreatedPage() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')

  return (
    <div className="pc-screen">
      <div className="pc-header">
        <button className="back-btn" onClick={() => navigate('/choose-strategies')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="pc-title">Internal Transfer to Collab Plan</h1>
      </div>

      {/* Collab info */}
      <div className="pc-collab-row">
        <img className="pc-group-icon" src={groupIcon} alt="" />
        <div className="pc-collab-info">
          <span className="pc-collab-name">Collab Name</span>
          <span className="pc-collab-desc">Group description</span>
        </div>
        <div className="pc-wallet-badge">NGN Wallet</div>
      </div>

      {/* Order ID */}
      <div className="pc-detail-row">
        <span className="pc-detail-label">Order ID:</span>
      </div>
      <p className="pc-order-id">GRP01/10MEMBER/500000/CL/MTP/3M/0000000330/50000/12092026</p>

      {/* Amount to invest */}
      <div className="pc-detail-row">
        <span className="pc-detail-label">Amount to invest:</span>
        <span className="pc-detail-value">₦50,000.00</span>
      </div>

      {/* Amount input */}
      <div className={`pc-amount-field${amount ? ' has-value' : ''}`}>
        <span className="pc-naira">₦</span>
        <div className="pc-divider" />
        <input
          type="text"
          className="pc-input"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>

      <button
        className={`pc-confirm${amount ? ' active' : ''}`}
        onClick={() => amount && navigate('/home')}
      >
        Confirm
      </button>
    </div>
  )
}
