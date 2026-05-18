import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LanguagePage.css'

const languages = ['English', 'French', 'Arabic', 'Hausa', 'Igbo', 'Yoruba', 'Pidgin']

export default function LanguagePage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState('English')

  return (
    <div className="lang-screen">
      <div className="lang-gradient" />
      <div className="lang-header">
        <button className="back-btn" onClick={() => navigate('/settings')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="lang-title">Language</h1>

      <div className="lang-list">
        {languages.map((lang, i) => (
          <button
            key={i}
            className={`lang-item${selected === lang ? ' active' : ''}`}
            onClick={() => setSelected(lang)}
          >
            <span>{lang}</span>
            {selected === lang && (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#23d223" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
