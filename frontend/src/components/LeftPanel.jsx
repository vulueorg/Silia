import { useNavigate } from 'react-router-dom'
import vulueMascot from '../assets/vulue-mascot.png'
import './LeftPanel.css'

export default function LeftPanel({ onBack }) {
  const navigate = useNavigate()

  const handleBack = () => {
    if (onBack) onBack()
    else navigate(-1)
  }

  return (
    <div className="left-panel">
      <button className="left-panel-back-btn" onClick={handleBack} aria-label="Go back">
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 1L1 10L15 19" fill="white" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <p className="left-panel-tagline">Thanks for choosing to grow with Us!</p>
      <div className="left-panel-brand">
        <img src={vulueMascot} alt="" className="left-panel-mascot" />
        <span className="left-panel-brand-name">VULUE</span>
      </div>
    </div>
  )
}
