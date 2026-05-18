import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './bank-transfer.css'
import vulueMascot from '../assets/vulue-mascot.png'
import gtbankLogoSvg from '../assets/gtbank-logo.svg'
import LeftPanel from './left-panel'

const gtbankLogo = gtbankLogoSvg
const mascot = vulueMascot

export default function WithdrawTransferPage() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')

  return (
    <div className="bt-screen">
      <LeftPanel />

      <div className="bt-right-panel">
        <div className="bt-header">
          <button className="back-btn back-btn-mobile" onClick={() => navigate('/withdraw')} aria-label="Go back">
            <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="bt-title">Withdraw</h1>
        </div>

        <div className={`amount-field${amount ? ' has-value' : ''}`}>
          <span className="naira-symbol">₦</span>
          <div className="amount-divider" />
          <input
            type="text"
            className="amount-input"
            placeholder="Enter an amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <p className="amount-hint">
          <span className="hint-light">Min. </span>
          <span className="hint-bold">₦1,000-max. ₦1,000,000 allowed at a time</span>
          <span className="hint-light">. Do not enter amounts with decimals.</span>
        </p>

        {amount && (
          <div className="fee-card">
            <div className="fee-row">
              <span className="fee-label">Transaction fee</span>
              <span className="fee-value">1%</span>
            </div>
            <div className="fee-row">
              <span className="fee-label">Exact amount to be withdrawn from your Vulue Wallet</span>
              <span className="fee-value accent">₦{(parseFloat(amount.replace(/,/g, '')) * 1.01 || 0).toLocaleString()}</span>
            </div>
          </div>
        )}

        <p className="section-label-bt">Select saved accounts you are to receive funds into:</p>
        <div className="saved-account">
          <div className="account-glow" />
          <div className="account-info">
            <p className="account-name">Ekwe Yousuf</p>
            <p className="account-number">XXXXXXXXXX</p>
            <p className="account-bank">Guaranty Trust Bank</p>
          </div>
          <img className="bank-logo" src={gtbankLogo} alt="GTBank" />
        </div>

        <p className="bt-warning">
          Please ensure that the details are correct as any loss of funds will not be covered by Vulue.
        </p>

        <button
          className={`bt-confirm${amount ? ' active' : ''}`}
          onClick={() => {
            if (amount) {
              const num = parseFloat(amount.replace(/,/g, '')) || 0
              navigate('/withdraw-confirm', { state: { amount: '₦' + num.toLocaleString() } })
            }
          }}
        >
          Confirm
        </button>

        <div className="bt-brand">
          <img src={mascot} alt="" className="brand-icon" />
          <span className="brand-text">VULUE</span>
        </div>
      </div>
    </div>
  )
}
