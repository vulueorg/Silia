import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './ngx-breakdown.css'
import BottomNav from './bottom-nav'
import ngxThumb from '../assets/ngx-thumb.png'
import dangsugarImg from '../assets/ngx-stock-dangsugar.png'
import oandoImg from '../assets/ngx-stock-oando.png'
import vulueimsImg from '../assets/ngx-stock-vulueims.png'
import unileverImg from '../assets/ngx-stock-unilever.png'

const holdings = [
  {
    img: dangsugarImg,
    ticker: 'DANGSUGAR',
    name: 'Dangote Sugar Plc',
    price: '416.420',
    priceColor: '#cc2727',
    value: '₦120,700.32',
    valueBg: '#05a54f',
    change: '160.08%',
    changeColor: '#23d223',
    addIcon: true,
    sector: 'Consumer Goods',
    capital: '₦41,434.70',
    portfolio: '13.74',
    volume: '200.0 shares',
  },
  {
    img: oandoImg,
    ticker: 'OANDA',
    name: 'Oando Plc',
    price: '172.620',
    priceColor: '#cc2727',
    value: '₦120,514.24',
    valueBg: '#05a54f',
    change: '103.18%',
    changeColor: '#23d223',
    addIcon: false,
    sector: 'Energy',
    capital: '₦59,200.00',
    portfolio: '12.10',
    volume: '340.0 shares',
  },
  {
    img: vulueimsImg,
    ticker: 'VULUEIMS',
    name: 'Vulue Nigeria',
    price: '1,432.500',
    priceColor: '#23d223',
    value: '₦14,325.00',
    valueBg: '#455a64',
    change: '0.00%',
    changeColor: '#455a64',
    addIcon: true,
    sector: 'Technology',
    capital: '₦14,325.00',
    portfolio: '1.36',
    volume: '10.0 shares',
  },
  {
    img: unileverImg,
    ticker: 'UNILEVER',
    name: 'Unilever Nigeria Plc',
    price: '172.620',
    priceColor: '#cc2727',
    value: '₦38,434.28',
    valueBg: '#cc2727',
    change: '-7.56%',
    changeColor: '#cc2727',
    addIcon: false,
    sector: 'Consumer Goods',
    capital: '₦41,434.70',
    portfolio: '13.74',
    volume: '200.0 shares',
  },
]

export default function NgxBreakdownPage() {
  const navigate = useNavigate()
  const [orderTab, setOrderTab] = useState('open')
  const [expandedIdx, setExpandedIdx] = useState(null)

  const toggleExpand = (i) => setExpandedIdx(expandedIdx === i ? null : i)

  return (
    <div className="ngxb-screen">

      {/* Header */}
      <div className="ngxb-header">
        <button className="ngxb-back" onClick={() => navigate(-1)} aria-label="Go back">
          <svg width="10" height="11" viewBox="0 0 10 11" fill="none">
            <polygon points="10,0 0,5.5 10,11" fill="#fff"/>
          </svg>
        </button>
        <h1 className="ngxb-title">NGX Portfolio Breakdown</h1>
      </div>

      {/* NGX Portfolio row */}
      <div className="ngxb-port-row">
        <img src={ngxThumb} alt="" className="ngxb-port-flag" />
        <div className="ngxb-port-info">
          <span className="ngxb-port-name">NGX Portfolio</span>
          <span className="ngxb-port-val">
            <span className="ngxb-naira">₦</span>1,572,904.05
          </span>
        </div>
      </div>

      {/* Note */}
      <p className="ngxb-note">
        While the portfolio total balance covers both LP Collabs and Sole Risk investments this securities breakdown covers only Sole Risk investments.
      </p>

      {/* Holdings bar */}
      <div className="ngxb-holdings-bar">
        <span className="ngxb-holdings-label">HOLDINGS</span>
        <span className="ngxb-watchlist">WATCHLIST</span>
      </div>

      {/* Positions note + View trade history */}
      <div className="ngxb-positions-note">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
          <rect x="3" y="4" width="18" height="18" rx="2" stroke="#646363" strokeWidth="1.5"/>
          <path d="M16 2v4M8 2v4M3 10h18" stroke="#646363" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
        <div>
          <p className="ngxb-positions-text">Your recent positions in this market can be viewed here.</p>
          <span className="ngxb-view-history">View trade history</span>
        </div>
      </div>

      {/* OPEN / ORDERS / CLOSED tabs */}
      <div className="ngxb-order-tabs">
        <button className={`ngxb-otab${orderTab === 'open' ? ' active' : ''}`} onClick={() => setOrderTab('open')}>OPEN</button>
        <button className={`ngxb-otab${orderTab === 'orders' ? ' active' : ''}`} onClick={() => setOrderTab('orders')}>ORDERS</button>
        <button className={`ngxb-otab${orderTab === 'closed' ? ' active' : ''}`} onClick={() => setOrderTab('closed')}>CLOSED</button>
        <span className="ngxb-sort-label">Sorted by recent open time</span>
      </div>
      <div className="ngxb-order-divider" />

      {/* Stats row */}
      <div className="ngxb-stats">
        <div className="ngxb-stat">
          <span className="ngxb-stat-label">Instruments</span>
          <span className="ngxb-stat-val">7 Assets</span>
        </div>
        <div className="ngxb-stat">
          <span className="ngxb-stat-label">Today's Return</span>
          <span className="ngxb-stat-val red">-1.3%</span>
        </div>
        <div className="ngxb-stat">
          <span className="ngxb-stat-label">Total Return</span>
          <span className="ngxb-stat-val green">12.5%</span>
        </div>
        <div className="ngxb-stat">
          <span className="ngxb-stat-label">Capital</span>
          <span className="ngxb-stat-val">₦1,051,226.6</span>
        </div>
      </div>

      {/* Table header */}
      <div className="ngxb-table-header">
        <span className="ngxb-th-instrument">INSTRUMENT</span>
        <span className="ngxb-th-price">MKT PRICE (₦)</span>
        <span className="ngxb-th-value">HOLDINGS VALUE CHANGE(%)</span>
      </div>

      {/* Holdings list */}
      <div className="ngxb-holdings-list">
        {holdings.map((h, i) => (
          <div key={i}>
            {/* Row */}
            <div className="ngxb-holding-row" onClick={() => toggleExpand(i)} style={{ cursor: 'pointer' }}>
              <img src={h.img} alt={h.ticker} className="ngxb-stock-img" />
              <div className="ngxb-stock-info">
                <span className="ngxb-ticker">{h.ticker}</span>
                <span className="ngxb-company">{h.name}</span>
              </div>
              <div className="ngxb-price-col">
                <span className="ngxb-price" style={{ color: h.priceColor }}>{h.price}</span>
                <svg className="ngxb-plus-icon" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"
                  style={h.ticker === 'VULUEIMS' ? { marginLeft: '-8px' } : h.ticker === 'UNILEVER' ? { marginLeft: '2px' } : {}}>
                  <circle cx="9" cy="9" r="9" fill="#5b9bd5" fillOpacity="0.35"/>
                  <path d="M9 5v8M5 9h8" stroke="#fff" strokeWidth="1.8" strokeLinecap="round"/>
                </svg>
              </div>
              <div className="ngxb-value-col">
                <div className="ngxb-value-badge" style={{ background: h.valueBg }}>
                  <span className="ngxb-value">{h.value}</span>
                </div>
                <span className="ngxb-change" style={{ color: h.changeColor }}>{h.change}</span>
              </div>
            </div>

            {/* Expanded detail panel */}
            {expandedIdx === i && (
              <div className="ngxb-detail-panel">
                <div className="ngxb-detail-top">
                  <img src={h.img} alt={h.ticker} className="ngxb-detail-img" />
                  <div className="ngxb-detail-info">
                    <span className="ngxb-ticker">{h.ticker}</span>
                    <span className="ngxb-company">{h.name}</span>
                    <div className="ngxb-value-badge" style={{ background: h.valueBg, marginTop: 6, alignSelf: 'flex-start' }}>
                      <span className="ngxb-value">{h.value}</span>
                    </div>
                  </div>
                  <div className="ngxb-detail-meta">
                    <p className="ngxb-meta-row"><span className="ngxb-meta-label">Sector</span><span className="ngxb-meta-val">{h.sector}</span></p>
                    <p className="ngxb-meta-row"><span className="ngxb-meta-label">Capital invested</span><span className="ngxb-meta-val">{h.capital}</span></p>
                    <p className="ngxb-meta-row"><span className="ngxb-meta-label">% of portfolio</span><span className="ngxb-meta-val">{h.portfolio}</span></p>
                    <p className="ngxb-meta-row"><span className="ngxb-meta-label">Volume held</span><span className="ngxb-meta-val">{h.volume}</span></p>
                  </div>
                </div>
                <div className="ngxb-detail-actions">
                  <button className="ngxb-buy-btn">Buy</button>
                  <button className="ngxb-sell-btn">Sell</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <BottomNav />
    </div>
  )
}
