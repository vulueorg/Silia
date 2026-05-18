import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './topup.css'
import vulueMascot from '../assets/vulue-mascot.png'
import LeftPanel from './left-panel'

const mascot = vulueMascot

const NigerianFlagSVG = () => (
  <svg width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="9.33" height="20" fill="#008751"/>
    <rect x="9.33" width="9.33" height="20" fill="#FFFFFF"/>
    <rect x="18.67" width="9.33" height="20" fill="#008751"/>
  </svg>
)

const BankIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 21H21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M3 10H21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M5 10V21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M19 10V21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M9 10V21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M15 10V21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M12 3L21 8H3L12 3Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
)

export default function WithdrawPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState(false)

  return (
    <div className="topup-screen">
      <LeftPanel />

      <div className="topup-right-panel">
        <div className="topup-header">
          <button className="back-btn back-btn-mobile" onClick={() => navigate('/home')} aria-label="Go back">
            <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="topup-title">Withdraw</h1>
        </div>

        <div className="currency-row">
          <div className="currency-flag-wrap">
            <NigerianFlagSVG />
          </div>
          <span className="currency-name">Nigerian Naira</span>
          <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
            <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <div className={`transfer-card${selected ? ' selected' : ''}`} onClick={() => setSelected(!selected)}>
          <div className="transfer-header">
            <BankIcon />
            <span className="transfer-label">Bank Transfer</span>
            <span className="recommended-badge">RECOMMENDED</span>
          </div>
          <div className="transfer-info">
            <p>Daily cumulative limit for verified KYC for ₦5,000,000.</p>
            <p>To withdraw from your Vulue account, make a bank transfer of up to ₦1,000,000.</p>
          </div>
        </div>

        <button
          className={`confirm-btn-topup${selected ? ' active' : ''}`}
          onClick={() => selected && navigate('/withdraw-transfer')}
        >
          Confirm
        </button>

        <div className="topup-brand">
          <img src={mascot} alt="" className="brand-icon" />
          <span className="brand-text">VULUE</span>
        </div>
      </div>
    </div>
  )
}
