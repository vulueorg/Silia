import { useNavigate } from 'react-router-dom'
import './fx.css'
import BottomNav from './bottom-nav'
import imgCommercio    from '../assets/fx-commercio.png'
import imgNorrenberger from '../assets/fx-norrenberger.png'
import imgStanbic      from '../assets/fx-stanbic.png'
import imgSubnavIcon   from '../assets/mm-subnav-icon.svg'

// Card order: Commercio(y=311), Norrenberger(y=802), Stanbic(y=1287)
const cards = [
  {
    name: 'Commercio Partners DF',
    sub: 'Profit Participation Note',
    pct: '1.1%',
    tenor: '364-Day Tenor',
    img: imgCommercio,
    bg: '#3b4080',
    color: '#fff',
    desc: 'Commercio Partners DF PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Commercio Partners Dollar Fund. Starts from',
    from: 'US$1,000.',
  },
  {
    name: 'Norrenberger DF',
    sub: 'Profit Participation Note',
    pct: '0.8%',
    tenor: '364-Day Tenor',
    img: imgNorrenberger,
    bg: '#fff9f8',
    color: '#f14422',
    desc: 'Norrenberger DF PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Norrenberger Dollar Fund. Starts from',
    from: 'US$500.',
  },
  {
    name: 'Stanbic DF',
    sub: 'Profit Participation Note',
    pct: '1.9%',
    tenor: null,
    img: imgStanbic,
    bg: '#fff',
    color: '#003399',
    desc: 'Stanbic IBTC DF PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Stanbic IBTC Dollar Fund. Starts from',
    from: '₦5,000.',
  },
]

export default function FXPage() {
  const navigate = useNavigate()

  return (
    <div className="fx-screen">

      <h1 className="fx-title">LP Plans</h1>
      <p className="fx-subtitle">
        Get to explore assets, strategies, strategy baskets made available to your LP
      </p>

      {/* Tab bar */}
      <div className="fx-tab-bar">
        <button className="fx-tab-btn active" onClick={() => navigate('/markets')}>Strategies</button>
        <button className="fx-tab-btn" onClick={() => navigate('/markets')}>Strategy Baskets</button>
        <button className="fx-tab-btn" onClick={() => navigate('/markets/spv')}>SPVs</button>
      </div>

      {/* Sub-nav — FX active */}
      <div className="fx-subnav">
        <button className="fx-subnav-btn" onClick={() => navigate('/markets')}>Equities</button>
        <button className="fx-subnav-btn" onClick={() => navigate('/markets/money-market')}>Money Market</button>
        <button className="fx-subnav-btn" onClick={() => navigate('/markets/balanced')}>Balanced</button>
        <button className="fx-subnav-btn active">
          <img src={imgSubnavIcon} alt="" className="fx-subnav-icon" />
          FX
        </button>
      </div>

      {/* Cards */}
      <div className="fx-cards">
        {cards.map((c, i) => (
          <div key={i} className="fx-card" style={{ background: c.bg, border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="fx-card-top">
              <div>
                <h2 className="fx-card-name" style={{ color: c.color }}>{c.name}</h2>
                <p className="fx-card-sub" style={{ color: c.color }}>{c.sub}</p>
              </div>
              <img src={c.img} alt={c.name} className="fx-card-img" />
            </div>
            {c.tenor && <p className="fx-card-tenor" style={{ color: c.color }}>{c.tenor}</p>}
            <div className="fx-card-stat">
              <span className="fx-card-pct" style={{ color: c.color }}>{c.pct}</span>
              <span className="fx-card-period" style={{ color: c.color }}>up this month</span>
            </div>
            <div className="fx-card-footer">
              <button className="fx-card-link" style={{ color: c.color }} onClick={() => navigate('/portfolio')}>
                See my plans
              </button>
            </div>
            <div className="fx-card-desc-box">
              <p className="fx-card-desc">
                {c.desc} <strong style={{ color: '#bcbbbb' }}>{c.from}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="fx-disclaimer">
        <p>
          <strong>DISCLAIMER</strong><br /><br />
          The strategies herein are solely provided within the context of a private placement basis, as a proprietary capital firm, with its pioneer and intending members and limited partners solely.<br /><br />
          The information provided on this platform is intended solely to demonstrate the types of products available on the Vulue platform and is subject to change in future. Notwithstanding the proper and reasonable care that has been exercised in the preparation of this report, no responsibility or liability is accepted by Vulue, its employees nor its affiliates for any error, omission or opinion expressed or implied here. The instrument, vehicle, security, strategy, or process description is not intended to serve as an investment advise and should not be regarded as such. Without any exceptions, Vulue makes no representations, warranties and assumes no obligations with regard to any strategy and/or performance within its ecosystem.<br /><br />
          Investing involves risks, including illiquidity and the loss of capital and should be done with full acknowledgement that historical returns or expected returns are hypothetical in nature and may not reflect actual future performance of strategies provided. Please read our Client Agreements. Note that listed financial and non-financial instruments, strategies, strategy baskets, SPVs and other structured products, unlike deposits are not insured by NDIC before investing.<br /><br />
          <a href="mailto:contact@vulue.ng" className="fx-disclaimer-link">contact@vulue.ng</a>
        </p>
      </div>

      <BottomNav />
    </div>
  )
}
