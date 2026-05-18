import { useNavigate } from 'react-router-dom'
import './balanced.css'
import BottomNav from './bottom-nav'
import imgArm     from '../assets/balanced-arm.png'
import imgStanbic from '../assets/balanced-stanbic.png'
import imgSubnavIcon from '../assets/mm-subnav-icon.svg'

// Card order: ARM Balanced (y=309), Stanbic Balanced (y=800)
const cards = [
  {
    name: 'ARM Balanced',
    sub: 'Profit Participation Note',
    pct: '1.95%',
    img: imgArm,
    bg: '#000',
    color: '#fff',
    desc: 'ARM Balanced PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily ARM Discovery Balanced Fund. Starts from',
    from: '₦5,000.',
  },
  {
    name: 'Stanbic Balanced',
    sub: 'Profit Participation Note',
    pct: '1.1%',
    img: imgStanbic,
    bg: '#fff',
    color: '#003399',
    desc: 'Stanbic Balanced PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Stanbic Balanced Fund. Starts from',
    from: '₦5,000.',
  },
]

export default function BalancedPage() {
  const navigate = useNavigate()

  return (
    <div className="bal-screen">

      <h1 className="bal-title">LP Plans</h1>
      <p className="bal-subtitle">
        Get to explore assets, strategies, strategy baskets made available to your LP
      </p>

      {/* Tab bar */}
      <div className="bal-tab-bar">
        <button className="bal-tab-btn active" onClick={() => navigate('/markets')}>Strategies</button>
        <button className="bal-tab-btn" onClick={() => navigate('/markets')}>Strategy Baskets</button>
        <button className="bal-tab-btn" onClick={() => navigate('/markets/spv')}>SPVs</button>
      </div>

      {/* Sub-nav — Balanced active */}
      <div className="bal-subnav">
        <button className="bal-subnav-btn" onClick={() => navigate('/markets')}>Equities</button>
        <button className="bal-subnav-btn" onClick={() => navigate('/markets/money-market')}>Money Market</button>
        <button className="bal-subnav-btn active">Balanced</button>
        <button className="bal-subnav-btn" onClick={() => navigate('/markets/fx')}>
          <img src={imgSubnavIcon} alt="" className="bal-subnav-icon" />
          FX
        </button>
      </div>

      {/* Cards */}
      <div className="bal-cards">
        {cards.map((c, i) => (
          <div key={i} className="bal-card" style={{ background: c.bg, border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="bal-card-top">
              <div>
                <h2 className="bal-card-name" style={{ color: c.color }}>{c.name}</h2>
                <p className="bal-card-sub" style={{ color: c.color }}>{c.sub}</p>
              </div>
              <img src={c.img} alt={c.name} className="bal-card-img" />
            </div>
            <div className="bal-card-stat">
              <span className="bal-card-pct" style={{ color: c.color }}>{c.pct}</span>
              <span className="bal-card-period" style={{ color: c.color }}>up this month</span>
            </div>
            <div className="bal-card-footer">
              <button className="bal-card-link" style={{ color: c.color }} onClick={() => navigate('/portfolio')}>
                See my plans
              </button>
            </div>
            <div className="bal-card-desc-box">
              <p className="bal-card-desc">
                {c.desc} <strong style={{ color: '#bcbbbb' }}>{c.from}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="bal-disclaimer">
        <p>
          <strong>DISCLAIMER</strong><br /><br />
          The strategies herein are solely provided within the context of a private placement basis, as a proprietary capital firm, with its pioneer and intending members and limited partners solely.<br /><br />
          The information provided on this platform is intended solely to demonstrate the types of products available on the Vulue platform and is subject to change in future. Notwithstanding the proper and reasonable care that has been exercised in the preparation of this report, no responsibility or liability is accepted by Vulue, its employees nor its affiliates for any error, omission or opinion expressed or implied here. The instrument, vehicle, security, strategy, or process description is not intended to serve as an investment advise and should not be regarded as such. Without any exceptions, Vulue makes no representations, warranties and assumes no obligations with regard to any strategy and/or performance within its ecosystem.<br /><br />
          Investing involves risks, including illiquidity and the loss of capital and should be done with full acknowledgement that historical returns or expected returns are hypothetical in nature and may not reflect actual future performance of strategies provided. Please read our Client Agreements. Note that listed financial and non-financial instruments, strategies, strategy baskets, SPVs and other structured products, unlike deposits are not insured by NDIC before investing.<br /><br />
          <a href="mailto:contact@vulue.ng" className="bal-disclaimer-link">contact@vulue.ng</a>
        </p>
      </div>

      <BottomNav />
    </div>
  )
}
