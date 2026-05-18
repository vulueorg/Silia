import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ChangePasswordPage.css'

const eyeIcon = "https://www.figma.com/api/mcp/asset/2a1dd12e-86cb-4cf3-9829-6f2e3f504450"

const fields = [
  { label: 'Current Password', key: 'current' },
  { label: 'New Password', key: 'newPw' },
  { label: 'Confirm Password', key: 'confirm' },
]

export default function ChangePasswordPage() {
  const navigate = useNavigate()
  const [values, setValues] = useState({ current: '', newPw: '', confirm: '' })
  const [show, setShow] = useState({ current: false, newPw: false, confirm: false })

  const [saved, setSaved] = useState(false)
  const [otpStep, setOtpStep] = useState(false)
  const [otp, setOtp] = useState(['', '', '', '', '', ''])

  const update = (key, val) => setValues(prev => ({ ...prev, [key]: val }))
  const toggle = (key) => setShow(prev => ({ ...prev, [key]: !prev[key] }))

  const handleOtpChange = (index, value) => {
    if (value.length > 1) return
    const newOtp = [...otp]
    newOtp[index] = value
    setOtp(newOtp)
    if (value && index < 5) {
      document.getElementById(`cpw-otp-${index + 1}`)?.focus()
    }
  }

  if (saved) {
    return (
      <div className="cpw-screen">
        <div className="cpw-gradient" />
        <div className="cpw-success">
          <div className="cpw-check-circle">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#23d223" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
          </div>
          <p className="cpw-success-text">Password Changed Successfully</p>
          <button className="cpw-goback" onClick={() => navigate('/security')}>Go Back</button>
        </div>
      </div>
    )
  }

  if (otpStep) {
    return (
      <div className="cpw-screen">
        <div className="cpw-gradient" />
        <div className="cpw-otp-content">
          <h1 className="cpw-otp-title">OTP Verification</h1>
          <p className="cpw-otp-desc">Enter OTP sent to yekwe@gmail.com</p>
          <div className="cpw-otp-boxes">
            {otp.map((d, i) => (
              <input
                key={i}
                id={`cpw-otp-${i}`}
                type="text"
                inputMode="numeric"
                maxLength={1}
                className={`cpw-otp-box${d ? ' filled' : ''}`}
                value={d}
                onChange={(e) => handleOtpChange(i, e.target.value)}
              />
            ))}
          </div>
          <button className="cpw-save otp-save" onClick={() => setSaved(true)}>Save New Password</button>
        </div>
      </div>
    )
  }
  return (
    <div className="cpw-screen">
      <div className="cpw-gradient" />
      <div className="cpw-header">
        <button className="back-btn" onClick={() => navigate('/security')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="cpw-title">Change Password</h1>
      <p className="cpw-subtitle">Enter your current password and new password</p>

      <div className="cpw-fields">
        {fields.map((f, i) => (
          <div key={i} className="cpw-field">
            <span className="cpw-label">{f.label}</span>
            <div className="cpw-input-box">
              <input
                className="cpw-input"
                type={show[f.key] ? 'text' : 'password'}
                placeholder={f.label}
                value={values[f.key]}
                onChange={e => update(f.key, e.target.value)}
              />
              <button className="cpw-eye" onClick={() => toggle(f.key)} type="button">
                <img src={eyeIcon} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="cpw-save" onClick={() => setOtpStep(true)}>Save New Password</button>
    </div>
  )
}
