import { useNavigate } from 'react-router-dom'
import './money-market.css'
import BottomNav from './bottom-nav'
import imgNorrenberger from '../assets/mm-norrenberger.png'
import imgSfs          from '../assets/mm-sfs.png'
import imgMeristem     from '../assets/mm-meristem.png'
import imgZedcrest     from '../assets/mm-zedcrest.png'
import imgStanbic      from '../assets/mm-stanbic.png'
import imgSubnavIcon   from '../assets/mm-subnav-icon.svg'
import coronationTriangle from '../assets/coronation-triangle.svg'

const cards = [
  {
    name: 'Norrenberger MM',
    sub: 'Profit Participation Note',
    pct: '1.1%',
    img: imgNorrenberger,
    bg: '#fff9f8',
    color: '#f14422',
    desc: 'Norrenberger MM PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Norrenberger Money Market Fund. Starts from',
    from: '₦5,000.',
  },
  {
    name: 'Meristem MM',
    sub: 'Profit Participation Note',
    pct: '1.35%',
    img: imgMeristem,
    bg: '#27784e',
    color: '#fff',
    desc: 'Meristem PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Meristem provided Money Market Fund. Starts from',
    from: '₦10,000.',
  },
  {
    name: 'SFS MM',
    sub: 'Profit Participation Note',
    pct: '1.4%',
    img: imgSfs,
    bg: '#171a39',
    color: '#fff',
    desc: 'SFS PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily SFS provided Money Market Fund. Starts from',
    from: '₦10,000.',
  },
  {
    name: 'Coronation MM',
    sub: 'Profit Participation Note',
    pct: '1.9%',
    img: null,
    bg: '#000',
    color: '#fff',
    desc: 'Coronation PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Coronation provided Money Market Fund. Starts from',
    from: '₦10,000.',
  },
  {
    name: 'Zedcrest HYN',
    sub: 'Profit Participation Note',
    pct: '2.3%',
    img: imgZedcrest,
    bg: '#2d1b62',
    color: '#fff',
    desc: 'Zedcrest HYN PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Zedcrest High Yield Naira Fund. Starts from',
    from: '₦1,000,000.',
  },
  {
    name: 'Stanbic MM',
    sub: 'Profit Participation Note',
    pct: '1.9%',
    img: imgStanbic,
    bg: '#fff',
    color: '#003399',
    desc: 'Stanbic IBTC MM PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Stanbic IBTC Money Market Fund. Starts from',
    from: '₦5,000.',
  },
]

export default function MoneyMarketPage() {
  const navigate = useNavigate()

  return (
    <div className="mm-screen">

      <h1 className="mm-title">LP Plans</h1>
      <p className="mm-subtitle">
        Get to explore assets, strategies, strategy baskets made available to your LP
      </p>

      <div className="mm-tab-bar">
        <button className="mm-tab-btn active" onClick={() => navigate('/markets')}>Strategies</button>
        <button className="mm-tab-btn" onClick={() => navigate('/markets')}>Strategy Baskets</button>
        <button className="mm-tab-btn" onClick={() => navigate('/markets/spv')}>SPVs</button>
      </div>

      <div className="mm-subnav">
        <button className="mm-subnav-btn" onClick={() => navigate('/markets')}>Equities</button>
        <button className="mm-subnav-btn active">Money Market</button>
        <button className="mm-subnav-btn" onClick={() => navigate('/markets/balanced')}>Balanced</button>
        <button className="mm-subnav-btn" onClick={() => navigate('/markets/fx')}>
          <img src={imgSubnavIcon} alt="" className="mm-subnav-icon" />
          FX
        </button>
      </div>

      <div className="mm-cards">
        {cards.map((c, i) => (
          <div key={i} className="mm-card" style={{ background: c.bg, border: '1px solid rgba(255,255,255,0.15)' }}>
            <div className="mm-card-top">
              <div>
                <h2 className="mm-card-name" style={{ color: c.color }}>{c.name}</h2>
                <p className="mm-card-sub" style={{ color: c.color }}>{c.sub}</p>
              </div>
              {c.img && <img src={c.img} alt={c.name} className="mm-card-img" />}
              {!c.img && c.name === 'Coronation MM' && (
                <img src={coronationTriangle} alt="" className="mm-card-img" style={{ objectFit: 'contain' }} />
              )}
            </div>
            <div className="mm-card-stat">
              <span className="mm-card-pct" style={{ color: c.color }}>{c.pct}</span>
              <span className="mm-card-period" style={{ color: c.color }}>up this month</span>
            </div>
            <div className="mm-card-footer">
              <button className="mm-card-link" style={{ color: c.color }} onClick={() => navigate('/portfolio')}>
                See my plans
              </button>
            </div>
            <div className="mm-card-desc-box">
              <p className="mm-card-desc">
                {c.desc} <strong style={{ color: '#bcbbbb' }}>{c.from}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mm-disclaimer">
        <p>
          <strong>DISCLAIMER</strong><br /><br />
          The strategies herein are solely provided within the context of a private placement basis, as a proprietary capital firm, with its pioneer and intending members and limited partners solely.<br /><br />
          The information provided on this platform is intended solely to demonstrate the types of products available on the Vulue platform and is subject to change in future. No responsibility or liability is accepted by Vulue, its employees nor its affiliates for any error, omission or opinion expressed or implied here.<br /><br />
          Investing involves risks, including illiquidity and the loss of capital. Note that listed instruments, unlike deposits, are not insured by NDIC before investing.<br /><br />
          <a href="mailto:contact@vulue.ng" className="mm-disclaimer-link">contact@vulue.ng</a>
        </p>
      </div>

      <BottomNav />
    </div>
  )
}
