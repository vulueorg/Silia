import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './minerva.css'
import heroImg from '../assets/minerva-hero.png'

export default function MinervaInvestPage() {
  const navigate = useNavigate()
  const [amount, setAmount] = useState('')

  return (
    <div className="minerva-screen">
      <div className="minerva-hero">
        <img className="minerva-hero-img" src={heroImg} alt="" />
        <div className="minerva-header">
          <button className="minerva-back" onClick={() => navigate('/minerva?tab=invest')} aria-label="Go back">
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"><polygon points="5,0 0,10 10,10" fill="#00007e" transform="rotate(-90 5 5.5)"/></svg>
          </button>
          <h1 className="minerva-page-title">Minerva</h1>
        </div>
        <div className="minerva-stat">
          <span className="minerva-pct">4.56%</span>
          <span className="minerva-pct-label">up this month</span>
        </div>
      </div>

      <div className="minerva-tabs">
        <button className="minerva-tab light" onClick={() => navigate('/minerva')}>Overview</button>
        <div className="minerva-tab-spacer" />
        <button className="minerva-tab">Invest</button>
      </div>
      <div className="minerva-lines-wrap">
        <div className="minerva-tab-line-active" style={{ marginLeft: 'auto' }} />
        <div className="minerva-tab-line" />
      </div>

      <div className="minerva-invest">
        <h2 className="minerva-invest-title">Before You Invest</h2>
        <p className="minerva-invest-label">Set Investment Amount</p>

        <div className="mi-input-wrap">
          <span className="mi-currency">₦</span>
          <input className="mi-input" type="text" placeholder="" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>

        <p className="mi-limits">
          <span className="mi-limits-light">Min. </span>
          <span className="mi-limits-bold">₦200,000-max. ₦10,000,000 investment allowed at a time</span>
          <span className="mi-limits-light">. </span>
        </p>
        <p className="mi-balance">
          <span>₦</span><span className="mi-balance-bold">395,680.24</span><span> - NGN Wallet Balance</span>
        </p>

        {amount.length > 0 && (
          <div className="mi-fees-box">
            <div className="mi-fee-row">
              <span className="mi-fee-label">Processing NGN Fee</span>
              <span className="mi-fee-val">₦300</span>
            </div>
            <div className="mi-fee-row">
              <span className="mi-fee-label">Processing USD Fee</span>
              <span className="mi-fee-val">$1.84</span>
            </div>
            <div className="mi-fee-row">
              <span className="mi-fee-label" />
              <span className="mi-fee-val dim">$1 = N1,375.00</span>
            </div>
            <div className="mi-fee-row">
              <span className="mi-fee-label">Fees</span>
              <span className="mi-fee-val">₦400</span>
            </div>
            <div className="mi-fee-row">
              <span className="mi-fee-label" />
              <span className="mi-fee-val dim">0% + 1%</span>
            </div>
            <div className="mi-fee-row">
              <span className="mi-fee-label">Total Fee</span>
              <span className="mi-fee-val">₦3,598</span>
            </div>
            <div className="mi-fee-row total">
              <span className="mi-fee-label">Total Deduction from your Vulue Wallet</span>
              <span className="mi-fee-val big">₦203,598.00</span>
            </div>
          </div>
        )}

        <p className="minerva-invest-warning">
          Please ensure that the details are correct as any loss of funds will not be covered by Vulue.
        </p>

        <button className={`minerva-invest-confirm${amount.length > 0 ? ' active' : ''}`}>Confirm</button>
      </div>
    </div>
  )
}
