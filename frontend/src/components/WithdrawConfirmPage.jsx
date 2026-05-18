import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './WithdrawConfirmPage.css'
import vulueMascot from '../assets/vulue-mascot.png'
import LeftPanel from './LeftPanel'

const mascot = vulueMascot

export default function WithdrawConfirmPage() {
  const navigate = useNavigate()
  const [otp, setOtp] = useState(['', '', '', '', '', ''])
  const inputs = useRef([])

  const handleChange = (index, value) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    if (value && index < 5) inputs.current[index + 1]?.focus()
  }

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputs.current[index - 1]?.focus()
    }
  }

  const isFilled = otp.every(d => d !== '')

  return (
    <div className="otp-screen">
      <LeftPanel />

      <div className="otp-right-panel">
        <div className="otp-header">
          <button className="back-btn back-btn-mobile" onClick={() => navigate('/withdraw-transfer')} aria-label="Go back">
            <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="otp-title">Withdraw</h1>
        </div>

        <p className="otp-instruction">Enter the OTP sent to your registered email/phone</p>

        <div className="otp-inputs">
          {otp.map((digit, i) => (
            <input
              key={i}
              ref={el => inputs.current[i] = el}
              type="text"
              inputMode="numeric"
              maxLength={1}
              className={`otp-box${digit ? ' filled' : ''}`}
              value={digit}
              onChange={(e) => handleChange(i, e.target.value)}
              onKeyDown={(e) => handleKeyDown(i, e)}
            />
          ))}
        </div>

        <button className="resend-link" type="button">Resend OTP</button>

        <p className="otp-disclaimer">
          Completion of any transfer may be affected by other factors including but not limited to transmission errors, incomplete information, fluctuations on the network/internet, interruptions, glitch, delayed information or other matters beyond our control which may impact on the transaction and for which we will not be liable.
        </p>

        <button
          className={`otp-confirm${isFilled ? ' active' : ''}`}
          onClick={() => isFilled && navigate('/home')}
        >
          Confirm
        </button>

        <div className="otp-brand">
          <img src={mascot} alt="" className="brand-icon" />
          <span className="brand-text">VULUE</span>
        </div>
      </div>
    </div>
  )
}
