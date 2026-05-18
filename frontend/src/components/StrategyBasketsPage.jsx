import { useNavigate } from 'react-router-dom'
import './StrategyBasketsPage.css'
import BottomNav from './BottomNav'
import imgTyche     from '../assets/sb-tyche.png'
import imgSeros     from '../assets/sb-seros.png'
import imgTycheDots from '../assets/Group 5007.png'
import imgSerosDots from '../assets/Group 5008.png'

const cards = [
  {
    name: 'Tyche',
    nameColor: '#fff',
    dotsImg: imgTycheDots,
    img: imgTyche,
    pct: '1.9%',
    pctColor: '#fff',
    linkColor: '#040404',
    desc: 'Tyche is backed by Norrenberger Dollar Fund, Gold CFD and Vestia long-term U.S. Public Equities Value Investing Rebalancing PPN Strategy Basket by PP LLP. Starts from',
    from: 'US$1,000.',
  },
  {
    name: 'Seros',
    nameColor: '#162db9',
    dotsImg: imgSerosDots,
    img: imgSeros,
    pct: null,
    pctColor: '#fff',
    linkColor: '#fff',
    desc: 'Seros is backed by diverse strategies that are linked to Kobo and Vestia long-term Public Equities Value Investing Rebalancing Strategies, SPYV ETF & GLD ETF CFDs holding strategies by PP LLP. Starts from',
    from: 'US$500.',
  },
]

export default function StrategyBasketsPage() {
  const navigate = useNavigate()

  return (
    <div className="sb-screen">

      <h1 className="sb-title">LP Plans</h1>
      <p className="sb-subtitle">
        Get to explore assets, strategies, strategy baskets made available to your LP
      </p>

      {/* Tab bar — Strategy Baskets active */}
      <div className="sb-tab-bar">
        <button className="sb-tab-btn" onClick={() => navigate('/markets')}>Strategies</button>
        <button className="sb-tab-btn active">Strategy Baskets</button>
        <button className="sb-tab-btn" onClick={() => navigate('/markets/spv')}>SPVs</button>
      </div>

      {/* Cards */}
      <div className="sb-cards">
        {cards.map((c, i) => (
          <div key={i} className="sb-card">
            {/* Full background image */}
            <div className="sb-card-img-wrap">
              <img src={c.img} alt={c.name} className="sb-card-img" />
            </div>

            {/* Name + dots overlay */}
            <div className="sb-card-overlay">
              <div className="sb-card-name-row">
                <span className="sb-card-name" style={{ color: c.nameColor }}>{c.name}</span>
                <img src={c.dotsImg} alt="" className="sb-card-dots" />
              </div>

              {/* Percentage */}
              {c.pct && (
                <div className="sb-card-stat">
                  <span className="sb-card-pct" style={{ color: c.pctColor }}>{c.pct}</span>
                  <span className="sb-card-period" style={{ color: c.pctColor }}>up this month</span>
                </div>
              )}

              {/* See my plans */}
              <button className={`sb-card-link${!c.pct ? ' sb-card-link-bottom' : ''}`} style={{ color: c.linkColor }} onClick={() => navigate('/portfolio')}>
                See my plans
              </button>
            </div>

            {/* Description strip */}
            <div className="sb-card-desc-box">
              <p className="sb-card-desc">
                {c.desc} <strong style={{ color: '#bcbbbb' }}>{c.from}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Disclaimer */}
      <div className="sb-disclaimer">
        <p>
          <strong>DISCLAIMER</strong><br /><br />
          The strategies herein are solely provided within the context of a private placement basis, as a proprietary capital firm, with its pioneer and intending members and limited partners solely.<br /><br />
          The information provided on this platform is intended solely to demonstrate the types of products available on the Vulue platform and is subject to change in future. Notwithstanding the proper and reasonable care that has been exercised in the preparation of this report, no responsibility or liability is accepted by Vulue, its employees nor its affiliates for any error, omission or opinion expressed or implied here. The instrument, vehicle, security, strategy, or process description is not intended to serve as an investment advise and should not be regarded as such. Without any exceptions, Vulue makes no representations, warranties and assumes no obligations with regard to any strategy and/or performance within its ecosystem.<br /><br />
          Investing involves risks, including illiquidity and the loss of capital and should be done with full acknowledgement that historical returns or expected returns are hypothetical in nature and may not reflect actual future performance of strategies provided. Please read our Client Agreements. Note that listed financial and non-financial instruments, strategies, strategy baskets, SPVs and other structured products, unlike deposits are not insured by NDIC before investing.<br /><br />
          <a href="mailto:contact@vulue.ng" className="sb-disclaimer-link">contact@vulue.ng</a>
        </p>
      </div>

      <BottomNav />
    </div>
  )
}
