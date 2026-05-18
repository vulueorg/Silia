import { useNavigate, useLocation } from 'react-router-dom'
import './TransferConfirmPage.css'
import vulueMascot from '../assets/vulue-mascot.png'
import LeftPanel from './LeftPanel'

const mascot = vulueMascot

const CopyIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="2" width="8" height="10" rx="1" stroke="#0066CC" strokeWidth="1.5" fill="none"/>
    <rect x="6" y="6" width="8" height="10" rx="1" stroke="#0066CC" strokeWidth="1.5" fill="none"/>
  </svg>
)

export default function TransferConfirmPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const fundedAmount = location.state?.fundedAmount || '₦50,100'

  return (
    <div className="tc-screen">
      <LeftPanel />

      <div className="tc-right-panel">
        <div className="tc-header">
          <button className="back-btn back-btn-mobile" onClick={() => navigate('/bank-transfer')} aria-label="Go back">
            <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="tc-title">Wallet Top Up</h1>
        </div>

        {/* Bank details */}
        <div className="bank-details">
          <p className="bd-row"><span className="bd-label">Bank Name :</span> Moniepoint Bank</p>
          <p className="bd-row"><span className="bd-label">Account Name :</span> Vulue Limited</p>
          <p className="bd-row">
            <span className="bd-label">Account Number : </span>7019426787
            <button className="copy-acct" onClick={() => navigator.clipboard.writeText('7019426787')} aria-label="Copy account number">
              <CopyIcon />
            </button>
          </p>
        </div>

        <div className="tc-divider" />

        {/* Funded amount */}
        <div className="funded-section">
          <p className="funded-label">Exact amount to be funded into your Vulue Wallet</p>
          <p className="funded-amount">{fundedAmount}</p>
        </div>

        {/* Disclaimer */}
        <p className="tc-disclaimer">
          <span>Do not enter amounts with decimals. </span>
          <span className="disclaimer-bold">Click on confirm when you have carried out the transaction. </span>
          <span>Completion of any transfer may be affected by other factors including but not limited to transmission errors, incomplete information, fluctuations on the network/ internet, interruptions, glitch, delayed information or other matters beyond our control which may impact on the transaction and for which the we will not be liable.</span>
        </p>

        {/* Confirm */}
        <button className="tc-confirm" onClick={() => navigate('/home')}>Confirm</button>

        {/* Brand */}
        <div className="tc-brand">
          <img src={mascot} alt="" className="brand-icon" />
          <span className="brand-text">VULUE</span>
        </div>
      </div>
    </div>
  )
}
