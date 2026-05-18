import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './choose-strategies.css'

import stratCilia from '../assets/strat-cilia.png'
import stratKreta from '../assets/strat-kreta.png'
import stratTyche from '../assets/strat-tyche.png'
import stratVestia from '../assets/strat-vestia.png'
import stratZypher from '../assets/strat-zypher.png'

const strategies = [
  {
    name: 'Cilia',
    nameColor: '#fff',
    img: stratCilia,
    min: '₦200,000',
    defaultSelected: true,
    defaultPct: 100,
    defaultAmt: '₦500,000',
  },
  {
    name: 'Kreta',
    nameColor: '#085c4c',
    img: stratKreta,
    min: '₦200,000',
  },
  {
    name: 'Tyche',
    nameColor: '#476098',
    img: stratTyche,
    min: '₦300,000',
    flipImg: true,
  },
  {
    name: 'Vestia',
    nameColor: '#0c89f0',
    img: stratVestia,
    min: '₦300,000',
  },
  {
    name: 'Zypher',
    nameColor: '#050244',
    img: stratZypher,
    min: '₦500,000',
  },
]

export default function ChooseStrategiesPage() {
  const navigate = useNavigate()
  const [selected, setSelected] = useState({ 0: true })
  const [pcts, setPcts] = useState({ 0: '100' })

  const toggle = (i) => {
    setSelected(prev => ({ ...prev, [i]: !prev[i] }))
  }

  const updatePct = (i, val) => {
    setPcts(prev => ({ ...prev, [i]: val }))
  }

  return (
    <div className="cs-screen">
      <div className="cs-header">
        <button className="back-btn" onClick={() => navigate('/create-plan')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>
      <h1 className="cs-title">Choose Strategies for this Plan</h1>

      <div className="cs-list">
        {strategies.map((s, i) => (
          <div key={i} className="cs-card">
            <div className="cs-banner">
              <img
                className={`cs-banner-img${s.flipImg ? ' flipped' : ''}`}
                src={s.img}
                alt={s.name}
              />
              <span className="cs-name" style={{ color: s.nameColor }}>{s.name}</span>
              {s.defaultSelected && <span className="cs-default-tag">Selected by default</span>}
            </div>
            <div className="cs-card-bottom">
              <p className="cs-min">
                <span className="cs-min-light">Min. investment starts from </span>
                <span className="cs-min-bold">{s.min}.</span>
              </p>
              <div className="cs-alloc-row">
                <span className="cs-alloc-label">Amount allocated</span>
                <div className="cs-pct-box">
                  <input
                    type="text"
                    className="cs-pct-input"
                    value={pcts[i] || '0'}
                    onChange={(e) => updatePct(i, e.target.value)}
                  />
                  <span className="cs-pct-sign">%</span>
                </div>
                <span className="cs-alloc-amt">
                  {selected[i] && pcts[i] ? `₦${(parseInt(pcts[i]) / 100 * 500000).toLocaleString()}` : '₦0'}
                </span>
              </div>
              <button
                className={`cs-check${selected[i] ? ' checked' : ''}`}
                onClick={() => toggle(i)}
                aria-label={`Select ${s.name}`}
              >
                {selected[i] && <span className="cs-checkmark">✓</span>}
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="cs-confirm" onClick={() => navigate('/plan-created')}>Confirm</button>
    </div>
  )
}
