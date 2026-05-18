import { useNavigate } from 'react-router-dom'
import './internal-transfer.css'
import vulueMascot from '../assets/vulue-mascot.png'
import LeftPanel from './left-panel'

const NigerianFlagSVG = () => (
  <svg width="24" height="16" viewBox="0 0 24 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="8" height="16" fill="#008751"/>
    <rect x="8" width="8" height="16" fill="#FFFFFF"/>
    <rect x="16" width="8" height="16" fill="#008751"/>
  </svg>
)

const mascot = vulueMascot

export default function InternalTransferPage() {
  const navigate = useNavigate()

  return (
    <div className="it-screen">
      <LeftPanel />

      <div className="it-right-panel">
        <div className="it-header">
          <button className="back-btn back-btn-mobile" onClick={() => navigate('/home')} aria-label="Go back">
            <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="it-title">Internal Transfer</h1>
        </div>

        <div className="it-wallet-row">
          <div className="it-flag-wrap">
            <NigerianFlagSVG />
          </div>
          <span className="it-balance">
            <span className="it-bold">₦395,680.</span>
            <span className="it-dim">24</span>
          </span>
        </div>

        <button className="it-option" onClick={() => navigate('/member-transfer')}>
          <span className="it-option-label">To another Member</span>
          <svg width="5" height="8" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>

        <div className="it-brand">
          <img src={mascot} alt="" className="brand-icon" />
          <span className="brand-text">VULUE</span>
        </div>
      </div>
    </div>
  )
}
