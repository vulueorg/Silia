import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './PortfolioPage.css'
import BottomNav from './BottomNav'
import vestiaImg from '../assets/portfolio-vestia.png'
import koboImg from '../assets/portfolio-kobo.png'
import partnerAvatarImg from '../assets/portfolio-partner-avatar.png'
import tycheImg from '../assets/portfolio-tyche.png'
import serosImg from '../assets/portfolio-seros.png'
import secNgxThumb from '../assets/sec-ngx-thumb.png'
import secFlagUs from '../assets/sec-flag-us.png'
import secFlagUk from '../assets/sec-flag-uk.png'
import secFlagEu from '../assets/sec-flag-eu.png'
import secFlagJapan from '../assets/sec-flag-japan.png'
import secFlagHk from '../assets/sec-flag-hk.png'
import secFlagPoland from '../assets/sec-flag-poland.png'
import secFlagFrankfurt from '../assets/sec-flag-frankfurt.png'

const assetTabs = ['Stocks', 'Bonds', 'FI Funds', 'MM', 'PE', 'Real Estate', 'Others']

const imgPerfChart = "https://www.figma.com/api/mcp/asset/118ff122-99ee-4965-97bb-43eb9f440fca"
const TIME_FILTERS = ['1 D', '1W', '1 M', '3 M', '6 M', 'YTD', '1 Y', '5 Y']

const topUpBars = [
  { height: 4,   color: '#2f6b54' },
  { height: 10,  color: '#3b916e' },
  { height: 20,  color: '#348867' },
  { height: 40,  color: '#45ce9a' },
  { height: 70,  color: '#4ddfa8' },
  { height: 140, color: '#7dffcc' },
]
const topUpMonths = ['Jan 2025','Feb 2025','Mar 2025','Apr 2025','May 2025','Jun 2025']

const withdrawBars = [
  { height: 4,   color: '#9a3838' },
  { height: 10,  color: '#b13b3b' },
  { height: 20,  color: '#c33030' },
  { height: 40,  color: '#ea3535' },
  { height: 70,  color: '#f72f2f' },
  { height: 140, color: '#ff2929' },
]


const stockPortfolios = [
  { flag: secNgxThumb, name: 'NGX Portfolio', val: '₦1,572,904.05', primary: true, route: '/ngx-breakdown' },
  { flag: secFlagUs, name: 'U.S. Portfolio', val: '$0.00' },
  { flag: secFlagUk, name: 'UK Portfolio', val: '£0.00' },
  { flag: secFlagEu, name: 'Euronext Portfolio', val: '€0.00' },
  { flag: secFlagJapan, name: 'Japan Portfolio', val: '$0.00' },
  { flag: secFlagHk, name: 'Hong Kong Portfolio', val: '£0.00' },
  { flag: secFlagPoland, name: 'Poland Portfolio', val: '€0.00' },
  { flag: secFlagFrankfurt, name: 'Frankfurt Portfolio', val: '$0.00' },
]

export default function PortfolioPage() {
  const navigate = useNavigate()
  const [secTab, setSecTab] = useState('plans')
  const [viewTab, setViewTab] = useState('plans')
  const [subTab, setSubTab] = useState('strategies')
  const [assetTab, setAssetTab] = useState('Stocks')
  const [perfTimeFilter, setPerfTimeFilter] = useState('1 M')

  return (
    <div className="portfolio-screen">

      {/* Title */}
      <h1 className="portfolio-title">Portfolio</h1>

      {/* Total Wealth */}
      <p className="portfolio-wealth-label">TOTAL WEALTH</p>
      <div className="portfolio-balance-row">
        <span className="portfolio-naira">₦2,572,904</span>
        <span className="portfolio-dec">.05</span>
        <span className="portfolio-currency">in NGN</span>
      </div>
      <div className="portfolio-gain-row">
        <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
          <polygon points="5.5,1 10.5,10.5 0.5,10.5" fill="#23d223"/>
        </svg>
        <span className="portfolio-gain">+46,014.14 (16.45%)</span>
      </div>
      <p className="portfolio-note">
        This Portfolio Balance excludes total balance across fiat wallets.
      </p>

      {/* Plans & Assets / Performance / Allocation */}
      <div className="portfolio-section-tabs">
        <button className={`psec-tab${secTab === 'plans' ? ' active' : ''}`} onClick={() => setSecTab('plans')}>Plans &amp; Assets</button>
        <button className={`psec-tab${secTab === 'performance' ? ' active' : ''}`} onClick={() => setSecTab('performance')}>Performance</button>
        <button className={`psec-tab${secTab === 'allocation' ? ' active' : ''}`} onClick={() => setSecTab('allocation')}>Allocation</button>
      </div>
      <div className="portfolio-divider" />

      {/* View based on */}
      {secTab !== 'performance' && <p className="portfolio-view-label">View based on</p>}

      {/* Plans / Securities Breakdown toggle */}
      {secTab !== 'performance' && (
        <div className="portfolio-view-toggle">
          <button className={`pvtab${viewTab === 'plans' ? ' active' : ''}`} onClick={() => setViewTab('plans')}>Plans</button>
          <button className={`pvtab${viewTab === 'securities' ? ' active' : ''}`} onClick={() => setViewTab('securities')}>Securities Breakdown</button>
        </div>
      )}

      {/* ── PERFORMANCE VIEW ── */}
      {secTab === 'performance' && <>

        {/* LP Collab / Sole Risk toggle */}
        <div className="perf-collab-toggle">
          <button className="perf-collab-btn active">LP Collab</button>
          <button className="perf-collab-btn">Sole Risk</button>
        </div>

        {/* Stats row — Figma x positions: Plans=28, Today's=129, Total=243, Capital=340 */}
        <div className="perf-stats-row">
          <div className="perf-stat">
            <span className="perf-stat-label">Plans</span>
            <span className="perf-stat-value">5</span>
          </div>
          <div className="perf-stat">
            <span className="perf-stat-label">Today's Return</span>
            <span className="perf-stat-value perf-negative">-1.3%</span>
          </div>
          <div className="perf-stat">
            <span className="perf-stat-label">Total Return</span>
            <span className="perf-stat-value perf-positive">12.5%</span>
          </div>
          <div className="perf-stat" style={{ textAlign: 'right' }}>
            <span className="perf-stat-label">Initial Capital</span>
            <span className="perf-stat-value">₦233,634.7</span>
          </div>
        </div>

        {/* Main line chart */}
        <div className="perf-chart-wrap">
          <img src={imgPerfChart} alt="Portfolio performance chart" className="perf-chart-img" />
        </div>

        {/* Time filters */}
        <div className="perf-time-filters">
          {TIME_FILTERS.map(f => (
            <button key={f} className={`perf-time-btn${perfTimeFilter === f ? ' active' : ''}`} onClick={() => setPerfTimeFilter(f)}>{f}</button>
          ))}
        </div>

        {/* Portfolio Top-Ups */}
        <p className="perf-section-title">Portfolio Top-Ups</p>
        <p className="perf-section-note">This shows the amounts which you have invested in the past.</p>
        <div className="perf-bar-chart">
          <div className="perf-bar-y-axis">
            {['₦10M+','₦5 M','₦1 M','₦500k','₦250k','<₦50k'].map(l => (
              <span key={l} className="perf-y-label">{l}</span>
            ))}
          </div>
          <div className="perf-bars-grid">
            {['100%','71.4%','57.1%','28.6%','14.3%','0%'].map(b => (
              <div key={b} className="perf-grid-line" style={{ bottom: b }} />
            ))}
            <div className="perf-bars-row">
              {topUpBars.map((b, i) => (
                <div key={i} className="perf-bar-col">
                  <div className="perf-bar" style={{ height: b.height, background: b.color }} />
                  <span className="perf-x-label">{topUpMonths[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="perf-time-filters perf-time-filters-sm">
          {['M','6 M','1 Y','5 Y'].map((f, i) => (
            <button key={f} className={`perf-time-btn${i === 0 ? ' active' : ''}`}>{f}</button>
          ))}
        </div>

        {/* Portfolio Withdrawals */}
        <p className="perf-section-title">Portfolio Withdrawals</p>
        <p className="perf-section-note">This shows the amounts which you have withdrawn in the past.</p>
        <div className="perf-bar-chart">
          <div className="perf-bar-y-axis">
            {['₦10M+','₦5 M','₦1 M','₦500k','₦250k','<₦50k'].map(l => (
              <span key={l} className="perf-y-label">{l}</span>
            ))}
          </div>
          <div className="perf-bars-grid">
            {['100%','71.4%','57.1%','28.6%','14.3%','0%'].map(b => (
              <div key={b} className="perf-grid-line" style={{ bottom: b }} />
            ))}
            <div className="perf-bars-row">
              {withdrawBars.map((b, i) => (
                <div key={i} className="perf-bar-col">
                  <div className="perf-bar" style={{ height: b.height, background: b.color }} />
                  <span className="perf-x-label">{topUpMonths[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="perf-time-filters perf-time-filters-sm">
          {['M','6 M','1 Y','5 Y'].map((f, i) => (
            <button key={f} className={`perf-time-btn${i === 0 ? ' active' : ''}`}>{f}</button>
          ))}
        </div>

        {/* Dividends Received */}
        <p className="perf-section-title">Dividends Received</p>
        <div className="perf-div-chart">
          <div className="perf-div-y-axis">
            {['11000','10000','9000','8000','7000','6000','5000','4000','3000','2000','1000','0'].map(l => (
              <span key={l} className="perf-y-label">{l}</span>
            ))}
          </div>
          <div className="perf-div-area">
            <svg viewBox="0 0 328 169" preserveAspectRatio="none" className="perf-div-svg">
              <polyline points="0,169 54,140 103,120 148,95 192,70 233,50 269,30 328,5" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" />
            </svg>
            <div className="perf-div-x-labels">
              {['Sep 17','Jul 18','May 19','Mar 20','Jun 21','Sep 18','Nov 21','Mar 22'].map(l => (
                <span key={l} className="perf-x-label-diag">{l}</span>
              ))}
            </div>
          </div>
        </div>
        <div className="perf-div-footer">
          <div className="perf-time-filters perf-time-filters-sm">
            {['M','6 M','1 Y','5 Y'].map((f, i) => (
              <button key={f} className={`perf-time-btn${i === 0 ? ' active' : ''}`}>{f}</button>
            ))}
          </div>
          <span className="perf-div-total" style={{ marginTop: '-30px' }}>Total dividends <span className="perf-positive">+51,273.40</span></span>
        </div>

        {/* Dividends Received by Company */}
        <p className="perf-section-title">Dividends Received by Company</p>
        <div className="perf-divco-wrap">
          <svg
            viewBox="0 0 398 180"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
            className="perf-divco-svg"
          >
            {/* Y-axis grid lines & labels */}
            {/* ₦8000 → y=0, ₦6000 → y=28.5, ₦4000 → y=57, ₦2000 → y=85.5, 0 → y=114 */}
            {[
              { label: '₦8000', y: 0   },
              { label: '₦6000', y: 28.5},
              { label: '₦4000', y: 57  },
              { label: '₦2000', y: 85.5},
              { label: '0',     y: 114 },
            ].map(({ label, y }) => (
              <g key={label}>
                <line x1="39" y1={y} x2="398" y2={y} stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
                <text x="0" y={y + 4} fill="#a6a6a6" fontSize="6" fontFamily="Poppins, sans-serif">{label}</text>
              </g>
            ))}

            {/* Bars — x positions from Figma: 72,102,131,161,190 (relative to frame x=21, so subtract 21+16padding=37 → 35,65,94,124,153) */}
            {[
              { x: 35,  h: 92,  color: '#346bf9', label: 'TRANSCOHOT' },
              { x: 65,  h: 61,  color: '#0047ff', label: 'GTCO'       },
              { x: 94,  h: 114, color: '#0047ff', label: 'DANGSUGAR'  },
              { x: 124, h: 22,  color: '#0047ff', label: 'OANDA'      },
              { x: 153, h: 46,  color: '#0047ff', label: 'UNILEVER'   },
            ].map(({ x, h, color, label }) => (
              <g key={label}>
                <rect x={x} y={114 - h} width="11" height={h} fill={color} rx="2" />
                {/* Diagonal label — rotated -45° from bottom of bar */}
                <text
                  x={x + 5}
                  y={150}
                  fill="#a6a6a6"
                  fontSize="6"
                  fontFamily="Poppins, sans-serif"
                  transform={`rotate(-45, ${x + 5}, 150)`}
                >{label}</text>
              </g>
            ))}
          </svg>
        </div>
        <div className="perf-time-filters perf-time-filters-sm" style={{ marginTop: '20px' }}>
          {['M','6 M','1 Y','5 Y'].map((f, i) => (
            <button key={f} className={`perf-time-btn${i === 0 ? ' active' : ''}`}>{f}</button>
          ))}
        </div>

        {/* Summary box */}
        <div className="perf-summary-box">
          <span className="perf-summary-period">All time</span>
          <p className="perf-summary-label">Total invested in Strategies</p>
          <p className="perf-summary-value">₦5,115,953.17</p>
          <div className="perf-summary-pill">
            <span className="perf-summary-pill-text">Total earned </span>
            <span className="perf-positive">+3,312,643.81</span>
          </div>
        </div>

      </>}

      {/* ── PLANS VIEW ── */}
      {secTab !== 'performance' && viewTab === 'plans' && <>
        {/* Strategies / Strategy Baskets / SPVs sub-toggle */}
        <div className="portfolio-sub-toggle">
          <button className={`psubtab${subTab === 'strategies' ? ' active' : ''}`} onClick={() => setSubTab('strategies')}>Strategies</button>
          <button className={`psubtab${subTab === 'baskets' ? ' active' : ''}`} onClick={() => setSubTab('baskets')}>Strategy Baskets</button>
          <button className={`psubtab${subTab === 'spvs' ? ' active' : ''}`} onClick={() => setSubTab('spvs')}>SPVs</button>
        </div>

        <div className="portfolio-cards">
          {subTab === 'strategies' && <>
            <div className="pstrat-card">
              <div className="pstrat-img-wrap"><img src={vestiaImg} alt="Vestia" className="pstrat-img" /></div>
              <span className="pstrat-name">Vestia</span>
              <div className="pstrat-right">
                <span className="pstrat-balance">₦204,780.81</span>
                <div className="pstrat-return-row">
                  <span className="pstrat-return-label">Today's return</span>
                  <span className="pstrat-gain-val">+₦478.08</span>
                </div>
                <p className="pstrat-unlock">Unlocks at <span className="bold">March 31, 2026</span>{'  '}17% Maturity</p>
              </div>
              <svg className="pstrat-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="pstrat-card">
              <div className="pstrat-img-wrap"><img src={koboImg} alt="Kobo" className="pstrat-img" /></div>
              <span className="pstrat-name bold">Kobo</span>
              <div className="pstrat-right">
                <span className="pstrat-balance">₦104,780.81</span>
                <div className="pstrat-return-row">
                  <span className="pstrat-return-label">Today's return</span>
                  <span className="pstrat-gain-val">+₦478.08</span>
                </div>
                <p className="pstrat-unlock">Unlocks at <span className="bold">March 31, 2026</span>{'  '}17% Maturity</p>
              </div>
              <svg className="pstrat-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </>}

          {subTab === 'baskets' && <>
            <div className="pstrat-card">
              <div className="pstrat-img-wrap"><img src={tycheImg} alt="Tyche" className="pstrat-img" /></div>
              <span className="pstrat-name">Tyche</span>
              <div className="pstrat-right">
                <span className="pstrat-balance">₦104,780.81</span>
                <div className="pstrat-return-row">
                  <span className="pstrat-return-label">Today's return</span>
                  <span className="pstrat-gain-val">+₦478.08</span>
                </div>
                <p className="pstrat-unlock">Unlocks at <span className="bold">March 31, 2026</span>{'  '}17% Maturity</p>
              </div>
              <svg className="pstrat-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <div className="pstrat-card">
              <div className="pstrat-img-wrap"><img src={serosImg} alt="Seros" className="pstrat-img" /></div>
              <span className="pstrat-name" style={{ color: '#162db9' }}>Seros</span>
              <div className="pstrat-right">
                <span className="pstrat-balance">₦104,780.81</span>
                <div className="pstrat-return-row">
                  <span className="pstrat-return-label">Today's return</span>
                  <span className="pstrat-gain-val">+₦478.08</span>
                </div>
                <p className="pstrat-unlock">Unlocks at <span className="bold">March 31, 2026</span>{'  '}17% Maturity</p>
              </div>
              <svg className="pstrat-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
          </>}

          {subTab === 'spvs' && (
            <p style={{ color: '#455a64', fontSize: 13, textAlign: 'center', marginTop: 40 }}>No SPVs yet</p>
          )}
        </div>
      </>}

      {/* ── SECURITIES BREAKDOWN VIEW ── */}
      {secTab !== 'performance' && viewTab === 'securities' && <>
        {/* Asset type tabs */}
        <div className="sec-asset-tabs">
          {assetTabs.map(t => (
            <button key={t} className={`sec-asset-tab${assetTab === t ? ' active' : ''}`} onClick={() => setAssetTab(t)}>{t}</button>
          ))}
        </div>

        {/* Equities summary card */}
        <div className="sec-eq-card">
          <p className="sec-eq-subtitle">Your Public Equities Portfolio</p>
          <div className="sec-eq-balance">
            <span className="sec-eq-naira">₦</span>
            <span className="sec-eq-num">2,572,904</span>
            <span className="sec-eq-dot">.</span>
            <span className="sec-eq-dec">05</span>
          </div>
          <div className="sec-eq-gain-row">
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <polygon points="6,1 11,11 1,11" fill="#28db0b"/>
            </svg>
            <span className="sec-eq-pct">2.47%</span>
          </div>
        </div>

        {/* Portfolio list */}
        <div className="sec-portfolio-list">
          {stockPortfolios.map((p, i) => (
            <div key={i} className={`sec-port-row${p.primary ? ' primary' : ''}${p.route ? ' clickable' : ''}`} onClick={() => p.route && navigate(p.route)}>
              <img src={p.flag} alt="" className="sec-port-flag" />
              <div className="sec-port-info">
                <span className="sec-port-name">{p.name}</span>
                <span className="sec-port-val">{p.val}</span>
              </div>
              <svg width="5" height="9" viewBox="0 0 6 10" fill="none" style={{ opacity: 0.6, flexShrink: 0 }}>
                <path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          ))}
        </div>
      </>}

      {/* Partner banner */}
      <div className="portfolio-partner-banner">
        <img className="portfolio-partner-avatar" src={partnerAvatarImg} alt="" />
        <p className="portfolio-partner-text">Default Strategies provided by Proprietary Partners LLP</p>
      </div>

      <BottomNav />
    </div>
  )
}
