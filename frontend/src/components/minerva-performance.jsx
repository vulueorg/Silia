import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './minerva-performance.css'
import heroImg from '../assets/minerva-hero.png'

const periods = ['1 D', '1W', '1 M', '3 M', '6 M', 'YTD', '1 Y', '2 Y', 'All']

export default function MinervaPerformancePage() {
  const navigate = useNavigate()
  const [activePeriod, setActivePeriod] = useState('1 M')

  return (
    <div className="mp-screen">
      {/* Hero */}
      <div className="mp-hero">
        <img className="mp-hero-img" src={heroImg} alt="" />
        <div className="mp-header">
          <button className="mp-back" onClick={() => navigate('/minerva')} aria-label="Go back">
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"><polygon points="5,0 0,10 10,10" fill="#00007e" transform="rotate(-90 5 5.5)"/></svg>
          </button>
          <h1 className="mp-title">Minerva Historical Performance</h1>
        </div>
        <div className="mp-stat">
          <span className="mp-pct">4.56%</span>
          <span className="mp-pct-label">up this month</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="mp-tabs">
        <button className="mp-tab active">Overview</button>
        <div className="mp-tab-spacer" />
        <button className="mp-tab light" onClick={() => navigate('/minerva?tab=invest')}>Invest</button>
      </div>
      <div className="mp-lines-wrap">
        <div className="mp-tab-line-active" />
        <div className="mp-tab-line" />
      </div>

      {/* Chart area */}
      <div className="mp-chart-area">
        <svg className="mp-chart-svg" viewBox="0 0 375 200" fill="none">
          <polyline
            points="0,180 30,160 60,140 90,155 120,120 150,100 180,110 210,80 240,60 270,70 300,40 330,30 360,20 375,15"
            stroke="#2254d4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
        <div className="mp-chart-baseline" />
        <div className="mp-chart-dates">
          <span>2025 1-03</span>
          <span>2025 2-03</span>
        </div>
      </div>

      {/* Period selectors */}
      <div className="mp-periods">
        {periods.map(p => (
          <button
            key={p}
            className={`mp-period${activePeriod === p ? ' active' : ''}`}
            onClick={() => setActivePeriod(p)}
          >{p}</button>
        ))}
      </div>

      {/* Returns */}
      <div className="mp-returns">
        <span className="mp-return-label">Today's return</span>
        <span className="mp-return-val green">0.15%</span>
        <span className="mp-return-label">Total return (from Jan 2023):</span>
        <span className="mp-return-val green">58%</span>
      </div>

      {/* Stats box */}
      <div className="mp-stats-box">
        <div className="mp-stats-left">
          <div className="mp-stat-item">
            <span className="mp-stat-num">02</span>
            <span className="mp-stat-desc">Your units of this plan ongoing</span>
          </div>
          <div className="mp-stat-item">
            <span className="mp-stat-num">11.8%</span>
            <span className="mp-stat-desc">This plan's weight in your portfolio via your LP(s)</span>
          </div>
        </div>
        <div className="mp-stats-divider" />
        <div className="mp-stats-right">
          <div className="mp-stat-item">
            <span className="mp-stat-num">₦304,780.81</span>
            <span className="mp-stat-desc">Your ongoing invested amount in this strategy</span>
          </div>
          <div className="mp-stat-item">
            <span className="mp-stat-num">2%</span>
            <span className="mp-stat-desc">This plan's weight in your portfolio via Sole Risk</span>
          </div>
        </div>
      </div>
    </div>
  )
}
