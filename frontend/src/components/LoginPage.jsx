import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './LoginPage.css'
import vulueMascot from '../assets/vulue-mascot.png'
import loginBackground from '../assets/Desktop - 35.png'

const assets = {
  mascot: vulueMascot,
  background: loginBackground,
}

const EyeOpenIcon = () => (
  <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 8C1 8 4 2 10 2C16 2 19 8 19 8C19 8 16 14 10 14C4 14 1 8 1 8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="10" cy="8" r="2.5" stroke="white" strokeWidth="1.5"/>
  </svg>
)

const EyeClosedIcon = () => (
  <svg width="20" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20C7 20 2.73 16.39 1 12C1.9 9.88 3.28 8.04 5 6.67M9.9 4.24A9.12 9.12 0 0 1 12 4C17 4 21.27 7.61 23 12C22.18 14.01 20.88 15.77 19.24 17.12M14.12 14.12A3 3 0 1 1 9.88 9.88" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M3 3L21 21" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const accountTypes = ['Limited Partner Account', 'General Partner Account', 'Enterprise Account']

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('Ekwey@gmail.com')
  const [password, setPassword] = useState('123456')
  const [showPw, setShowPw] = useState(false)
  const [loading, setLoading] = useState(false)
  const [accountType, setAccountType] = useState('Limited Partner Account')
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleConfirm = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      if (accountType === 'General Partner Account') {
        navigate('/generalpartner')
      } else {
        navigate('/home')
      }
    }, 800)
  }

  return (
    <div className="login-screen">
      {/* Title */}
      <div className="login-title">
        <span className="title-light">Silia </span>
        <span className="title-bold">Log in</span>
      </div>

      {/* Form area */}
      <form className="login-form" onSubmit={handleConfirm}>

        {/* Account type dropdown */}
        <div className="account-dropdown-wrap" ref={dropdownRef}>
          <button
            type="button"
            className="field account-field"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <span className="field-text muted">{accountType}</span>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none"
              style={{ transform: dropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease', flexShrink: 0 }}>
              <path d="M1 1L6 6L11 1" stroke="#bcbbbb" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {dropdownOpen && (
            <div className="account-dropdown">
              {accountTypes.map((type) => (
                <div
                  key={type}
                  className={`account-dropdown-item ${accountType === type ? 'active' : ''}`}
                  onClick={() => { setAccountType(type); setDropdownOpen(false) }}
                >
                  {type}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Email */}
        <div className="field">
          <input
            type="email"
            className="field-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email address"
            autoComplete="email"
          />
          <div className="field-divider" />
        </div>

        {/* Password */}
        <div className="field">
          <input
            type={showPw ? 'text' : 'password'}
            className="field-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            autoComplete="current-password"
          />
          <button
            type="button"
            className="eye-toggle"
            onClick={() => setShowPw(!showPw)}
            aria-label={showPw ? 'Hide password' : 'Show password'}
          >
            {showPw ? <EyeOpenIcon /> : <EyeClosedIcon />}
          </button>
        </div>

        {/* Confirm button */}
        <button type="submit" className="confirm-btn" disabled={loading}>
          {loading ? <span className="spinner" /> : 'Confirm'}
        </button>
      </form>

      {/* Forgot password */}
      <button type="button" className="forgot-link">Forgot Password?</button>

      {/* VULUE branding */}
      <div className="login-brand">
        <img className="brand-mascot" src={assets.mascot} alt="VULUE" />
        <span className="brand-name">VULUE</span>
      </div>
    </div>
  )
}
