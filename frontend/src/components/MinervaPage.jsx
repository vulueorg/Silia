import { useState } from 'react'
import { useNavigate, Link, useSearchParams } from 'react-router-dom'
import './MinervaPage.css'
import heroImg from '../assets/minerva-hero.png'

export default function MinervaPage() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') === 'invest' ? 'invest' : 'overview')
  const [tenorSelected, setTenorSelected] = useState(false)

  return (
    <div className="minerva-screen">
      {/* Hero */}
      <div className="minerva-hero">
        <img className="minerva-hero-img" src={heroImg} alt="" />
        <div className="minerva-header">
          <button className="minerva-back" onClick={() => navigate('/home')} aria-label="Go back">
            <svg width="10" height="11" viewBox="0 0 10 11" fill="none"><polygon points="5,0 0,10 10,10" fill="#00007e" transform="rotate(-90 5 5.5)"/></svg>
          </button>
          <h1 className="minerva-page-title">Minerva</h1>
        </div>
        <div className="minerva-stat">
          <span className="minerva-pct">1.08%</span>
          <span className="minerva-pct-label">up this month</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="minerva-tabs">
        <button className={`minerva-tab${activeTab === 'overview' ? '' : ' light'}`} onClick={() => setActiveTab('overview')}>Overview</button>
        <div className="minerva-tab-spacer" />
        <button className={`minerva-tab${activeTab === 'invest' ? '' : ' light'}`} onClick={() => setActiveTab('invest')}>Invest</button>
      </div>
      <div className="minerva-lines-wrap">
        <div className="minerva-tab-line-active" style={{ marginLeft: activeTab === 'invest' ? 'auto' : 0 }} />
        <div className="minerva-tab-line" />
      </div>

      {/* Body */}
      {activeTab === 'overview' && (
        <>
        <div className="minerva-body">
        <p>
          Minerva SPV Plan is backed by a Private Profit Participation Note take advantage of 90% Profit Before Tax Share of yields earned by providing support a select pool of vetted independent analysts. Each participant has demonstrated competence in securities industry essentials, adheres to premium risk management protocols, and maintains a verified track record in quantamental-driven strategies including OTC derivatives and spot equities directional trading'-Proprietary Partners LLP.
        </p>
        <p>
          Each Minerva plan mirrors the performance of the underlying Minerva Strategy, in which capital is deployed through structured private credit lending arrangements and private placements, primarily extending leveraged capital to approved securities traders. These arrangements generate yield through active speculative trading activity.
        </p>
        <p>
          Vulue's infrastructure ensures that the strategy is continuously monitored and reconciled, while reporting and yield distributions are updated frequently to maintain transparency and liquidity for holders.
        </p>
        <p>
          The Minerva strategy is designed to give investors exposure to alternatives strategies that as a liquidity provider to proprietary trading firms, or private capital desks. Vulue enables fractional access, portability, and transparency without diluting the quality of the strategy.
        </p>
        <p>
          Importantly, Minerva PPNs are not exchange-traded. Their value is directly tied to the yield performance of the underlying private credit arrangements and trading outcomes, ensuring that price is always anchored to real cash flows and results.
        </p>
        <ul>
          <li>Objective: Capture high-yield opportunities via structured private credit placements into vetted independent traders and analysts, with strict high risk oversight.</li>
          <li>Profile: Aggressive yield-oriented with high-grade monitoring and safeguards.</li>
          <li>Composition:
            <ul>
              <li>100% Private Profit Participation Note allocated to vetted independent analysts talent sourced by Proprietary Partners LLP.</li>
              <li>Deployed across OTC derivatives and directional equities with strict risk management &amp; premium oversight.</li>
            </ul>
          </li>
        </ul>
        <ul>
          <li>Objective: Capture high-yield aggressive risk profiled opportunities through controlled private credit placements while diversifying away from traditional equities.</li>
        </ul>
        <p>
          Past performance are not necessarily indicative of future results. See Historical <Link to="/minerva-performance" className="link">Net Performance Data.</Link>
        </p>
      </div>

      {/* Stats box */}
      <div className="minerva-stats-box">
        <div className="minerva-stats-left">
          <div className="minerva-stat-item">
            <span className="minerva-stat-num">02</span>
            <span className="minerva-stat-desc">Your units of this plan ongoing</span>
          </div>
          <div className="minerva-stat-item">
            <span className="minerva-stat-num">11.8%</span>
            <span className="minerva-stat-desc">This plan's weight in your portfolio via your LP(s)</span>
          </div>
        </div>
        <div className="minerva-stats-divider" />
        <div className="minerva-stats-right">
          <div className="minerva-stat-item">
            <span className="minerva-stat-num">₦304,780.81</span>
            <span className="minerva-stat-desc">Your ongoing invested amount in this strategy</span>
          </div>
          <div className="minerva-stat-item">
            <span className="minerva-stat-num">2%</span>
            <span className="minerva-stat-desc">This plan's weight in your portfolio via Sole Risk</span>
          </div>
        </div>
      </div>
        </>
      )}

      {activeTab === 'invest' && (
        <div className="minerva-invest">
          <h2 className="minerva-invest-title">Before You Invest</h2>

          <p className="minerva-invest-label">Chosen Tenor Duration</p>

          <div className="minerva-tenor-box">
            <div className="minerva-tenor-row">
              <div>
                <span className="minerva-tenor-val">12 Months</span>
                <span className="minerva-tenor-sub">Duration</span>
              </div>
              <button className="minerva-tenor-check" onClick={() => setTenorSelected(!tenorSelected)}>
                <svg width="15" height="15" viewBox="0 0 15 15">
                  <circle cx="7.5" cy="7.5" r="7" stroke={tenorSelected ? '#fff' : '#455a64'} strokeWidth="1" fill="none"/>
                  {tenorSelected && <circle cx="7.5" cy="7.5" r="4" fill="#fff"/>}
                </svg>
              </button>
            </div>
            <p className="minerva-tenor-note">
              Past net performances after contractual service deductions in our <span className="blue">terms of business</span>. They may not reflect nor guarantee future performance.
            </p>
            <span className="minerva-tenor-default">Default</span>
          </div>

          <p className="minerva-invest-warning">
            Please ensure that the details are correct as any loss of funds will not be covered by Vulue.
          </p>

          <button className={`minerva-invest-confirm${tenorSelected ? ' active' : ''}`} onClick={() => tenorSelected && navigate('/minerva-invest')}>Confirm</button>
        </div>
      )}
    </div>
  )
}
