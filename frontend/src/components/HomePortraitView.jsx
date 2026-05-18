import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './HomePortraitView.css'
import BottomNav from './BottomNav'
import vectorIcon from '../assets/vector.png'
import eyeClosedIcon from '../assets/icons8-eye-96.png'
import notifIcon from '../assets/Group 4875.png'

import flagUs from '../assets/flag-us.png'
import flagUk from '../assets/flag-uk.png'
import flagEu from '../assets/flag-eu.png'
import homeMascot from '../assets/home-mascot.png'
import homeNgxThumb from '../assets/home-ngx-thumb.png'
import homeCardGlow from '../assets/home-card-glow.svg'
import homeStratPartner from '../assets/home-strat-partner.png'
import homeStratBadge from '../assets/home-strat-badge.png'
import homeBottomImg from '../assets/home-bottom-img.png'
import homeGlowOrb from '../assets/home-glow-orb.svg'
import homeSettingsIcon from '../assets/home-settings-icon.svg'
import homeCollapseIcon from '../assets/Group 4927.png'
import homePartnersFeed from '../assets/home-partners-feed.png'
import homePartnerBadge from '../assets/home-partner-badge.svg'
import homePartnerIndicator from '../assets/home-partner-indicator.svg'
import homeTriangle from '../assets/home-triangle.svg'
import homeBellIcon from '../assets/home-bell-icon.svg'
import homeEyeIcon from '../assets/home-eye-icon.svg'
import homeNotifDot from '../assets/home-notif-dot.svg'

/* Bond portfolio icons as inline data URIs */
import collabIcon from '../assets/collab-group-icon.svg'
import bondFlagUs from '../assets/bond-flag-us.png'
import bondFlagEgypt from '../assets/bond-flag-egypt.png'
import bondFlagBrazil from '../assets/bond-flag-brazil.png'
import bondFlagMexico from '../assets/bond-flag-mexico.png'
import bondFlagSa from '../assets/bond-flag-sa.png'
import bondFlagPoland from '../assets/bond-flag-poland.png'
import bondFlagUae from '../assets/bond-flag-uae.png'
import stratMinerva from '../assets/strat-minerva.png'

const bondNgIcon = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><rect width="34" height="34" rx="8" fill="#364050"/><rect x="8" y="18" width="4" height="10" rx="1" fill="#7aa2d4"/><rect x="15" y="12" width="4" height="16" rx="1" fill="#7aa2d4"/><rect x="22" y="8" width="4" height="20" rx="1" fill="#7aa2d4"/></svg>`)
const bondGlobalIcon = "data:image/svg+xml," + encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34 34"><rect width="34" height="34" rx="8" fill="#364050"/><circle cx="17" cy="17" r="9" stroke="#7aa2d4" stroke-width="1.5" fill="none"/><ellipse cx="17" cy="17" rx="5" ry="9" stroke="#7aa2d4" stroke-width="1" fill="none"/><line x1="8" y1="14" x2="26" y2="14" stroke="#7aa2d4" stroke-width="1"/><line x1="8" y1="20" x2="26" y2="20" stroke="#7aa2d4" stroke-width="1"/></svg>`)

const A = {
  mascot: homeMascot,
  partnersFeed: homePartnersFeed,
  ngxThumb: homeNgxThumb,
  stratPartner: homeStratPartner,
  stratBadge: homeStratBadge,
  bottomImg: homeBottomImg,
  glowOrb: homeGlowOrb,
  cardGlow: homeCardGlow,
  eyeIcon: homeEyeIcon,
  bellIcon: homeBellIcon,
  scanIcon: homeNotifDot,
  partnerIndicator: homePartnerIndicator,
  triangle: homeTriangle,
  settingsIcon: homeSettingsIcon,
  partnerBadge: homePartnerBadge,
}

export default function HomePortraitView() {
  const [showBalance, setShowBalance] = useState(true)
  const [showMore, setShowMore] = useState(false)
  const [eqExpanded, setEqExpanded] = useState(true)
  const [portfolioTab, setPortfolioTab] = useState('Stocks')
  const [globalBondExpanded, setGlobalBondExpanded] = useState(false)
  const navigate = useNavigate()

  return (
    <div className="screen">
      <img className="glow-orb" src={A.glowOrb} alt="" />

      {/* Header — always full width */}
      <div className="header">
        <div className="greeting-pill">
          <div className="avatar-wrap">
            <img className="avatar" src={A.mascot} alt="" />
          </div>
          <p className="greeting">
            <span className="light">Thanks for choosing to grow with us</span>{' '}
            <span className="bold">Ekwe!</span>
          </p>
        </div>
        <button className="notif-btn" aria-label="Notifications" onClick={() => navigate('/notifications')}>
          <img src={notifIcon} alt="" />
        </button>
      </div>

      {/* Desktop: two-column layout wrapper */}
      <div className="main-layout">

        {/* LEFT COLUMN: Balance + Actions + Collabs */}
        <div className="col-left">
          <div className="balance-area">
            <div className="balance-label-row">
              <span className="balance-label">Naira Wallet balance</span>
              <button className="eye-btn" onClick={() => setShowBalance(!showBalance)} aria-label="Toggle balance visibility">
                <img src={showBalance ? vectorIcon : eyeClosedIcon} alt="" className={showBalance ? '' : 'eye-closed'} />
              </button>
            </div>
            <div className="balance-row">
              {showBalance ? (
                <>
                  <span className="naira">₦</span>
                  <span className="big-num">0</span>
                  <span className="dim-dot">.</span>
                  <span className="dim-dec">00</span>
                </>
              ) : (
                <span className="balance-hidden">****</span>
              )}
            </div>
            <p className="sub-balance">
              Total Balance Across Wallets and Portfolios{' '}
              <span className="sub-naira">₦0</span>
              <span className="sub-dec">.00</span>
            </p>
          </div>

          <div className="quick-actions">
            <div className="actions-row">
              <button className="act-btn" onClick={() => navigate('/topup')}>
                <span className="plus-icon">+</span> Top Up
              </button>
              <button className="act-btn" onClick={() => navigate('/withdraw')}>
                <span className="minus-icon">—</span> Withdraw
              </button>
              <button className="act-btn scan-btn" onClick={() => navigate('/wallets')}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#ebf0ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/><path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>
              </button>
            </div>
            {showMore && (
              <div className="more-panel">
                <div className="more-row">
                  <button className="more-btn outlined" onClick={() => navigate('/redeem')}>
                    <span className="more-icon">↓</span>
                    Redeem
                  </button>
                  <button className="more-btn outlined" onClick={() => navigate('/internal-transfer')}>
                    <span className="more-icon arrow-diag">↗</span>
                    Internal Transfer
                  </button>
                </div>
                <div className="more-row">
                  <button className="more-btn muted" onClick={() => navigate('/collab')}>
                    <img src={collabIcon} alt="" className="more-icon-img" />
                    Collab
                  </button>
                  <button className="more-btn outlined">
                    <span className="more-icon">⇄</span>
                    Swap
                  </button>
                  <button className="more-btn outlined small">
                    trailX
                  </button>
                </div>
              </div>
            )}
            <button className="see-more-btn" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'See Less' : 'See More'}
            </button>
          </div>

          <div className="tabs-scroll">
            {['Stocks', 'Bonds', 'FI Funds', 'MM', 'PE', 'Real Estate', 'Others'].map(tab => (
              <button
                key={tab}
                className={`ptab${portfolioTab === tab ? ' active' : ''}`}
                onClick={() => { setPortfolioTab(tab); setEqExpanded(false); }}
              >{tab}</button>
            ))}
          </div>

          {portfolioTab === 'Stocks' && (
            <div className="equities-card">
              <img className="eq-glow" src={A.cardGlow} alt="" />
              <div className="eq-inner">
                <p className="eq-subtitle">Your Public Equities Portfolio</p>
                <div className="eq-balance">
                  <span className="eq-naira">₦</span>
                  <span className="eq-num">578,923</span>
                  <span className="eq-dot">.</span>
                  <span className="eq-dec">24</span>
                </div>
                <p className="eq-label">Holdings Overview</p>
                <div className="eq-change-row">
                  <span className="eq-change-pct green">2.47%</span>
                </div>
              </div>
              <button className={`eq-settings${eqExpanded ? ' expanded' : ''}`} onClick={() => setEqExpanded(!eqExpanded)}>
                <img src={eqExpanded ? homeCollapseIcon : A.settingsIcon} alt="" />
              </button>

              <div className="ngx-row-inner" onClick={() => navigate('/ngx-portfolio')} style={{ cursor: 'pointer' }}>
                <img className="ngx-thumb" src={A.ngxThumb} alt="" />
                <div className="ngx-info">
                  <span className="ngx-name">NGX Portfolio</span>
                  <span className="ngx-val"><span className="w">₦1,572,904</span><span className="w">.05</span></span>
                </div>
                <svg className="ngx-chevron" width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>

              {eqExpanded && (
                <div className="eq-extra-portfolios">
                  <div className="eq-portfolio-row">
                    <img className="eq-port-flag" src={flagUs} alt="" />
                    <div className="eq-port-info">
                      <span className="eq-port-label">U.S. Portfolio</span>
                      <span className="eq-port-val">$0.00</span>
                    </div>
                    <svg className="eq-port-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="eq-portfolio-row">
                    <img className="eq-port-flag" src={flagUk} alt="" />
                    <div className="eq-port-info">
                      <span className="eq-port-label">UK Portfolio</span>
                      <span className="eq-port-val">£0.00</span>
                    </div>
                    <svg className="eq-port-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                  <div className="eq-portfolio-row">
                    <img className="eq-port-flag" src={flagEu} alt="" />
                    <div className="eq-port-info">
                      <span className="eq-port-label">Euronext Portfolio</span>
                      <span className="eq-port-val">€0.00</span>
                    </div>
                    <svg className="eq-port-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>
                </div>
              )}
            </div>
          )}

          {portfolioTab === 'Bonds' && (
            <div className="equities-card">
              <img className="eq-glow" src={A.cardGlow} alt="" />
              <div className="eq-inner">
                <p className="eq-subtitle">Your Bonds Portfolio</p>
                <div className="eq-balance">
                  <span className="eq-naira">₦</span>
                  <span className="eq-num">100,904</span>
                  <span className="eq-dot">.</span>
                  <span className="eq-dec">05</span>
                </div>
                <p className="eq-label">Holdings Overview</p>
                <div className="eq-change-row">
                  <span className="eq-change-pct green">2.47%</span>
                </div>
              </div>
              <button className="eq-settings">
                <img src={A.settingsIcon} alt="" />
              </button>

              <div className="ngx-row-inner">
                <div className="ngx-thumb-icons">
                  <img className="ngx-thumb" src={bondNgIcon} alt="" />
                </div>
                <div className="ngx-info">
                  <span className="ngx-name">Nigerian Bond Portfolio</span>
                  <span className="ngx-val"><span className="w">₦1,572,904</span><span className="w">.05</span></span>
                </div>
                <svg className="ngx-chevron" width="6" height="10" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>

              <div className="eq-portfolio-row" style={{ marginTop: 12, position: 'relative', zIndex: 1, cursor: 'pointer', border: globalBondExpanded ? '1.5px solid rgba(255,255,255,0.5)' : 'none' }} onClick={() => setGlobalBondExpanded(!globalBondExpanded)}>
                <img className="eq-port-flag" src={bondGlobalIcon} alt="" />
                <div className="eq-port-info">
                  <span className="eq-port-label">Global Bond Portfolio</span>
                  <span className="eq-port-val">$0.00</span>
                </div>
                <svg className="eq-port-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>

              {globalBondExpanded && (
                <div className="eq-others-list">
                  {[
                    { name: 'US Bond Portfolio', flag: bondFlagUs },
                    { name: 'Egypt Bond Portfolio', flag: bondFlagEgypt },
                    { name: 'Brazil Bond Portfolio', flag: bondFlagBrazil },
                    { name: 'Mexico Bond Portfolio', flag: bondFlagMexico },
                    { name: 'South Africa Bond Portfolio', flag: bondFlagSa },
                    { name: 'Poland Bond Portfolio', flag: bondFlagPoland },
                    { name: 'United Arab Emirates Bond Portfolio', flag: bondFlagUae },
                  ].map((b) => (
                    <div key={b.name} className="eq-others-row">
                      <img className="eq-others-flag" src={b.flag} alt="" />
                      <span className="eq-others-name">{b.name}</span>
                      <span className="eq-others-val">$0.00</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {portfolioTab === 'FI Funds' && (
            <div className="equities-card">
              <img className="eq-glow" src={A.cardGlow} alt="" />
              <div className="eq-inner">
                <p className="eq-subtitle">Your Fixed Income Portfolio</p>
                <div className="eq-balance">
                  <span className="eq-naira">$</span>
                  <span className="eq-num">1,005</span>
                  <span className="eq-dot">.</span>
                  <span className="eq-dec">05</span>
                </div>
                <p className="eq-label">Holdings Overview</p>
                <div className="eq-change-row">
                  <span className="eq-change-pct green">2.47%</span>
                </div>
              </div>
              <button className="eq-settings">
                <img src={A.settingsIcon} alt="" />
              </button>
            </div>
          )}

          {portfolioTab === 'MM' && (
            <div className="equities-card">
              <img className="eq-glow" src={A.cardGlow} alt="" />
              <div className="eq-inner">
                <p className="eq-subtitle">Your Money Market Portfolio</p>
                <div className="eq-balance">
                  <span className="eq-naira">₦</span>
                  <span className="eq-num">100,904</span>
                  <span className="eq-dot">.</span>
                  <span className="eq-dec">05</span>
                </div>
                <p className="eq-label">Holdings Overview</p>
                <div className="eq-change-row">
                  <span className="eq-change-pct green">2.47%</span>
                </div>
              </div>
              <button className="eq-settings">
                <img src={A.settingsIcon} alt="" />
              </button>
            </div>
          )}

          {!['Stocks', 'Bonds', 'FI Funds', 'MM'].includes(portfolioTab) && (
            <div className="equities-card">
              <img className="eq-glow" src={A.cardGlow} alt="" />
              <div className="eq-inner">
                <p className="eq-subtitle">{portfolioTab === 'Others' ? 'Your Other Portfolios' : `Your ${portfolioTab} Portfolio`}</p>
                <div className="eq-balance">
                  <span className="eq-naira">{portfolioTab === 'Others' ? '$' : '₦'}</span>
                  <span className="eq-num">0</span>
                  <span className="eq-dot">.</span>
                  <span className="eq-dec">00</span>
                </div>
                <p className="eq-label">Holdings Overview</p>
                <div className="eq-change-row">
                  <span className="eq-change-pct green">2.47%</span>
                </div>
              </div>
              <button className="eq-settings">
                <img src={A.settingsIcon} alt="" />
              </button>

              {portfolioTab === 'Others' && (
                <div className="eq-others-list">
                  {['Crypto Spot Portfolio', 'Crypto Futures & Perps Portfolio', 'Arb Multi-Strat Portfolio', 'FX CFD Portfolio', 'ETF CFD Portfolio', 'Event-Prediction Markets Portfolio'].map((name) => (
                    <div key={name} className="eq-others-row">
                      <span className="eq-others-name">{name}</span>
                      <span className="eq-others-val">$0.00</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="collabs collabs-desktop">
            <div className="collabs-left">
              <div className="cstat"><span className="cn">0</span><span className="cl">Single Asset Collabs</span></div>
              <div className="cstat"><span className="cn">0</span><span className="cl">Strategy Collabs</span></div>
            </div>
            <div className="collabs-line" />
            <div className="collabs-right">
              <div className="cstat"><span className="cn">0</span><span className="cl">Strategy Basket Collabs</span></div>
              <div className="cstat"><span className="cn">0</span><span className="cl">Sole Risk Plans</span></div>
            </div>
          </div>

          {/* Partner Banner — left col on desktop */}
          <div className="partner-banner partner-desktop" style={{ display: 'none' }}>
            <img className="partner-avatar" src={A.stratPartner} alt="" />
            <p className="partner-text">Default Strategies aggregated by Proprietary Partners LLP</p>
          </div>
        </div>

        {/* RIGHT COLUMN: Strategies */}
        <div className="col-right">
          <div className="collabs collabs-mobile">
            <div className="collabs-left">
              <div className="cstat"><span className="cn">0</span><span className="cl">Single Asset Collabs</span></div>
              <div className="cstat"><span className="cn">0</span><span className="cl">Strategy Collabs</span></div>
            </div>
            <div className="collabs-line" />
            <div className="collabs-right">
              <div className="cstat"><span className="cn">0</span><span className="cl">Strategy Basket Collabs</span></div>
              <div className="cstat"><span className="cn">0</span><span className="cl">Sole Risk Plans</span></div>
            </div>
          </div>

          {/* Strategy cards side by side on desktop */}
          <div className="strategies-grid">
            <div className="strat-wrap">
              <p className="sec-label">My Top Strategy Basket</p>
              <div className="strat-card">
                <div className="strat-top">
                  <div>
                    <span className="strat-name">Tyche</span>
                    <div className="strat-dots"><span /><span /><span /></div>
                  </div>
                  <img className="strat-badge" src={A.stratBadge} alt="" />
                </div>
                <div className="strat-balance">
                  <span className="strat-naira">₦0</span>
                  <span className="strat-dec">.00</span>
                </div>
                <div className="strat-pnl">
                  <img src={A.triangle} alt="" className="tri" />
                  <span className="pnl-pct">0.0%</span>
                  <span className="pnl-label">Holdings Floating PnL</span>
                </div>
                <div className="strat-actions">
                  <button className="strat-act-outline" onClick={() => navigate('/transaction-history')}>
                    <div className="mini-bars red"><span /><span /><span /></div>
                    <div className="act-text"><span>Transaction</span><span>History</span></div>
                  </button>
                  <button className="strat-act-fill">
                    <div className="mini-bars gray"><span /><span /><span /></div>
                    <span>Performance Summary</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="strat-wrap strat-wrap-duplicate">
              <div className="strat-card">
                <div className="strat-top">
                  <div>
                    <span className="strat-name">Tyche</span>
                    <div className="strat-dots"><span /><span /><span /></div>
                  </div>
                  <img className="strat-badge" src={A.stratBadge} alt="" />
                </div>
                <div className="strat-balance">
                  <span className="strat-naira">₦0</span>
                  <span className="strat-dec">.00</span>
                </div>
                <div className="strat-pnl">
                  <img src={A.triangle} alt="" className="tri" />
                  <span className="pnl-pct">0.0%</span>
                  <span className="pnl-label">Holdings Floating PnL</span>
                </div>
                <div className="strat-actions">
                  <button className="strat-act-outline" onClick={() => navigate('/transaction-history')}>
                    <div className="mini-bars red"><span /><span /><span /></div>
                    <div className="act-text"><span>Transaction</span><span>History</span></div>
                  </button>
                  <button className="strat-act-fill">
                    <div className="mini-bars gray"><span /><span /><span /></div>
                    <span>Performance Summary</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="strat-wrap">
              <p className="sec-label">My Top Strategy</p>
              <div className="strat-card minerva-card" onClick={() => navigate('/minerva')} style={{ cursor: 'pointer' }}>
                <div className="strat-minerva-img-wrap">
                  <img className="strat-minerva-img" src={stratMinerva} alt="" />
                </div>
                <span className="minerva-name">Minerva</span>
                <div className="strat-minerva-content">
                  <svg className="minerva-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="minerva-balance">₦304,780.81</span>
                  <div className="minerva-return-row">
                    <span className="minerva-gain">+₦478.08</span>
                    <span className="minerva-return-label">Today's return</span>
                  </div>
                  <p className="minerva-unlock">
                    Unlocks at <span className="bold">March 31, 2026</span>{'           '}17% Maturity
                  </p>
                </div>
              </div>
            </div>

            <div className="strat-wrap strat-wrap-duplicate">
              <div className="strat-card minerva-card" onClick={() => navigate('/minerva')} style={{ cursor: 'pointer' }}>
                <div className="strat-minerva-img-wrap">
                  <img className="strat-minerva-img" src={stratMinerva} alt="" />
                </div>
                <span className="minerva-name">Minerva</span>
                <div className="strat-minerva-content">
                  <svg className="minerva-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="minerva-balance">₦304,780.81</span>
                  <div className="minerva-return-row">
                    <span className="minerva-gain">+₦478.08</span>
                    <span className="minerva-return-label">Today's return</span>
                  </div>
                  <p className="minerva-unlock">
                    Unlocks at <span className="bold">March 31, 2026</span>{'           '}17% Maturity
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="partner-banner partner-mobile">
            <img className="partner-avatar" src={A.stratPartner} alt="" />
            <p className="partner-text">Default Strategies aggregated by Proprietary Partners LLP</p>
          </div>

          <div className="feed-section feed-inline-desktop">
            <div className="feed-pill">
              <div className="feed-icon-wrap">
                <img src={A.partnerBadge} alt="" className="feed-badge" />
                <img src={A.partnerIndicator} alt="" className="feed-indicator" />
              </div>
              <span>Partners Feed</span>
            </div>
            <div className="feed-img-top">
              <img src={A.partnersFeed} alt="Partners Feed" />
            </div>
            <div className="feed-img-bottom">
              <img src={A.bottomImg} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* FULL WIDTH BOTTOM SECTIONS */}
      <div className="divider divider-feed" />

      <div className="bottom-grid">
        <div className="feed-section feed-bottom-grid">
          <div className="feed-pill">
            <div className="feed-icon-wrap">
              <img src={A.partnerBadge} alt="" className="feed-badge" />
              <img src={A.partnerIndicator} alt="" className="feed-indicator" />
            </div>
            <span>Partners Feed</span>
          </div>
          <div className="feed-img-top">
            <img src={A.partnersFeed} alt="Partners Feed" />
          </div>
          <div className="feed-img-bottom">
            <img src={A.bottomImg} alt="" />
          </div>
        </div>
      </div>

      <div className="divider divider-recent" />

      <div className="recent-section">
        <p className="recent-title">Recent Naira Transactions</p>
        <p className="recent-empty">Nothing yet!</p>
      </div>

      <BottomNav />
    </div>
  )
}
