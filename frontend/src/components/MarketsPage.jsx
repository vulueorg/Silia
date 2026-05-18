import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './MarketsPage.css'
import BottomNav from './BottomNav'
import imgVestia      from '../assets/markets-vestia.png'
import imgKobo        from '../assets/markets-kobo.png'
import imgStanbic     from '../assets/markets-stanbic.png'
import imgCardFrame2  from '../assets/markets-card-frame2.png'
import imgCardFrame3  from '../assets/markets-card-frame3.png'

import imgSubnavIcon  from '../assets/mm-subnav-icon.svg'

const TABS = ['Strategies', 'Strategy Baskets', 'SPVs']
const SUB_TABS = ['Equities', 'Money Market', 'Balanced', 'FX']

export default function MarketsPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('Strategies')

  return (
    <div className="markets-screen">

      {/* Header */}
      <div className="markets-header">
        <h1 className="markets-title">LP Plans</h1>
      </div>
      <p className="markets-subtitle">
        Get to explore assets, strategies, strategy baskets made available to your LP
      </p>

      {/* Tab toggle */}
      <div className="markets-tab-bar">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`markets-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => {
              if (tab === 'Strategy Baskets') { navigate('/markets/strategy-baskets'); return; }
              if (tab === 'SPVs') { navigate('/markets/spv'); return; }
              setActiveTab(tab)
            }}
          >{tab}</button>        ))}
      </div>

      {/* Sub-nav */}
      <div className="markets-subnav">
        {SUB_TABS.map(tab => (
          <button
            key={tab}
            className={`markets-subnav-btn${tab === 'Equities' ? ' active' : ''}`}
            onClick={() => {
              if (tab === 'Money Market') navigate('/markets/money-market')
              if (tab === 'FX') navigate('/markets/fx')
              if (tab === 'Balanced') navigate('/markets/balanced')
            }}
          >
            {tab === 'FX' && <img src={imgSubnavIcon} alt="" className="markets-subnav-icon" />}
            {tab}
          </button>
        ))}
      </div>

      {/* ── Strategies ── */}
      {activeTab === 'Strategies' && (
        <div className="markets-cards">

          {/* Vestia */}
          <div className="mkt-card">
            <img src={imgCardFrame2} alt="" className="mkt-card-frame" />
            <img src={imgVestia} alt="Vestia" className="mkt-card-img" />
            <div className="mkt-card-content">
              <h2 className="mkt-card-name">Vestia</h2>
              <div className="mkt-card-stat">
                <span className="mkt-card-pct">2.15%</span>
                <span className="mkt-card-period">YTD</span>
              </div>
              <button className="mkt-card-link" onClick={() => navigate('/portfolio')}>See my plans</button>
              <p className="mkt-card-desc">
                Vestia PPN is backed by an open-ended Private Profit Participation Note for long-term U.S. Public Equities Value Investing Rebalancing Strategy by PP LLP. Starts from <strong>$100.</strong>
              </p>
            </div>
          </div>

          {/* Kobo */}
          <div className="mkt-card">
            <img src={imgCardFrame3} alt="" className="mkt-card-frame" />
            <img src={imgKobo} alt="Kobo" className="mkt-card-img" />
            <div className="mkt-card-content">
              <h2 className="mkt-card-name">Kobo</h2>
              <div className="mkt-card-stat">
                <span className="mkt-card-pct">3.75%</span>
                <span className="mkt-card-period">YTD</span>
              </div>
              <button className="mkt-card-link" onClick={() => navigate('/portfolio')}>See my plans</button>
              <p className="mkt-card-desc">
                Kobo PPN is backed by an open-ended Private Profit Participation Note for long term Nigerian Equities &amp; Money Market Value Investing Rebalancing Strategy by PP LLP. Starts from <strong>₦100,000.</strong>
              </p>
            </div>
          </div>

          {/* Stanbic NGX */}
          <div className="mkt-card mkt-card-light">
            <div className="mkt-card-content">
              <div className="mkt-card-stanbic-header">
                <div>
                  <h2 className="mkt-card-name mkt-card-name-blue">Stanbic NGX</h2>
                  <p className="mkt-card-name-sub">Profit Participation Note</p>
                </div>
                <img src={imgStanbic} alt="Stanbic" className="mkt-card-stanbic-img" />
              </div>
              <div className="mkt-card-stat">
                <span className="mkt-card-pct mkt-card-pct-blue">1.1%</span>
                <span className="mkt-card-period mkt-card-period-blue">up this month</span>
              </div>
              <button className="mkt-card-link mkt-card-link-blue" onClick={() => navigate('/portfolio')}>See my plans</button>
              <p className="mkt-card-desc">
                Stanbic NGX PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Stanbic IBTC NGX Equity Fund. Starts from <strong>₦10,000.</strong>
              </p>
            </div>
          </div>

        </div>
      )}

      {activeTab === 'Strategy Baskets' && (
        <p className="markets-empty">No strategy baskets available yet.</p>
      )}

      {activeTab === 'SPVs' && (
        <p className="markets-empty">No SPVs available yet.</p>
      )}

      {/* Disclaimer */}
      <div className="markets-disclaimer">
        <p>
          <strong>DISCLAIMER</strong><br /><br />
          The strategies herein are solely provided within the context of a private placement basis, as a proprietary capital firm, with its pioneer and intending members and limited partners solely.<br /><br />
          The information provided on this platform is intended solely to demonstrate the types of products available on the Vulue platform and is subject to change in future. Notwithstanding the proper and reasonable care that has been exercised in the preparation of this report, no responsibility or liability is accepted by Vulue, its employees nor its affiliates for any error, omission or opinion expressed or implied here. The instrument, vehicle, security, strategy, or process description is not intended to serve as an investment advise and should not be regarded as such. Without any exceptions, Vulue makes no representations, warranties and assumes no obligations with regard to any strategy and/or performance within its ecosystem.<br /><br />
          Investing involves risks, including illiquidity and the loss of capital and should be done with full acknowledgement that historical returns or expected returns are hypothetical in nature and may not reflect actual future performance of strategies provided. Please read our Client Agreements. Note that listed financial and non-financial instruments, strategies, strategy baskets, SPVs and other structured products, unlike deposits are not insured by NDIC before investing.<br /><br />
          <a href="mailto:contact@vulue.ng" className="markets-disclaimer-link">contact@vulue.ng</a>
        </p>
      </div>

      <BottomNav />
    </div>
  )
}
