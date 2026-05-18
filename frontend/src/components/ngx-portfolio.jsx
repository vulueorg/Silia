import { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import './ngx-portfolio.css'

import polygonIcon from '../assets/ngx-polygon.svg'
import heroImg from '../assets/ngx-portfolio-hero.png'
import calendarIcon from '../assets/ngx-calendar.svg'
import ellipseIcon from '../assets/ngx-ellipse.svg'
import vectorIcon from '../assets/ngx-vector.svg'
import dangsugarImg from '../assets/ngx-image99.png'
import oandaImg from '../assets/ngx-image103.png'
import vulueImg from '../assets/ngx-image255.png'
import unileverImg from '../assets/ngx-image-unilever.png'

const stocks = [
  {
    img: dangsugarImg,
    roundImg: 'round-35',
    name: 'DANGSUGAR',
    nameFont: '',
    sub: 'Dangote Sugar Plc',
    subFont: 'anek',
    price: '416.420',
    priceColor: 'red',
    badge: '₦120,700.32',
    badgeColor: 'green',
    badgeRadius: '',
    change: ' 160.08%',
    changeColor: 'green',
    addSrc: 'ellipse',
    sector: 'Food Products',
    capital: '₦75,200.00',
    portfolio: '47.84',
    volume: '180.0 shares',
  },
  {
    img: oandaImg,
    roundImg: '',
    name: 'OANDA',
    nameFont: 'poppins',
    sub: 'Oando Plc',
    subFont: 'poppins',
    price: '172.620',
    priceColor: 'red',
    badge: '₦120,514.24',
    badgeColor: 'green',
    badgeRadius: 'round-20',
    change: '103.18%',
    changeColor: 'green',
    addSrc: 'vector',
    sector: 'Oil & Gas',
    capital: '₦59,320.50',
    portfolio: '38.02',
    volume: '350.0 shares',
  },
  {
    img: vulueImg,
    roundImg: 'round-35',
    name: 'VULUEIMS',
    nameFont: 'poppins',
    sub: 'Vulue Nigeria',
    subFont: 'poppins',
    price: '1,432.500',
    priceColor: 'green',
    badge: '₦14,325.00',
    badgeColor: 'gray',
    badgeRadius: 'round-20',
    change: '0.00%',
    changeColor: 'gray',
    addSrc: 'ellipse',
    sector: 'Financial Services',
    capital: '₦14,325.00',
    portfolio: '0.91',
    volume: '10.0 shares',
  },
  {
    img: unileverImg,
    roundImg: '',
    name: 'UNILEVER',
    nameFont: 'poppins',
    sub: 'Unilever Nigeria Plc',
    subFont: 'poppins',
    price: '172.620',
    priceColor: 'red',
    badge: '₦38,434.28',
    badgeColor: 'red',
    badgeRadius: 'round-20',
    change: '-7.56%',
    changeColor: 'red',
    addSrc: 'vector',
    sector: 'Consumer Goods',
    capital: '₦41,434.70',
    portfolio: '13.74',
    volume: '200.0 shares',
  },
]

export default function NgxPortfolioPage() {
  const navigate = useNavigate()
  const [expandedIdx, setExpandedIdx] = useState(null)
  const stockListRef = useRef(null)

  useEffect(() => {
    if (expandedIdx === null) return
    const handleClick = (e) => {
      if (stockListRef.current && !stockListRef.current.contains(e.target)) {
        setExpandedIdx(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [expandedIdx])

  return (
    <div className="ngx-portfolio-screen">
      <div className="ngx-portfolio-content">
        {/* Header */}
        <div className="ngx-portfolio-header">
          <button className="ngx-back-btn" onClick={() => navigate('/home')} aria-label="Go back">
            <img src={polygonIcon} alt="" />
          </button>
          <h1 className="ngx-portfolio-title">NGX Portfolio Breakdown</h1>
        </div>

        {/* Hero card */}
        <div className="ngx-hero-card">
          <img className="ngx-hero-img" src={heroImg} alt="" />
          <div className="ngx-hero-info">
            <span className="ngx-hero-label">NGX Portfolio</span>
            <span className="ngx-hero-balance">
              <span className="naira">₦</span>
              <span className="amount">1,572,904.05</span>
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="ngx-description">
          While the portfolio total balance covers both LP Collabs and Sole Risk investments this securities breakdown covers only Sole Risk investments.
        </p>

        {/* Holdings / Watchlist */}
        <div className="ngx-holdings-section">
          <button className="ngx-section-tab">HOLDINGS</button>
          <button className="ngx-section-tab inactive">WATCHLIST</button>
        </div>

        {/* Positions text + trade history + calendar */}
        <div className="ngx-positions-row">
          <p className="ngx-positions-text">
            Your recent positions in this market can be viewed here.
          </p>
          <a href="#" className="ngx-trade-link">View trade history</a>
          <img className="ngx-calendar-icon" src={calendarIcon} alt="" />
        </div>

        {/* Order tabs */}
        <div className="ngx-order-tabs-row">
          <button className="ngx-order-tab-open">OPEN</button>
          <button className="ngx-order-tab-orders">ORDERS</button>
          <button className="ngx-order-tab-closed">CLOSED</button>
          <span className="ngx-order-sort">Sorted by recent open time</span>
        </div>

        {/* Line separator */}
        <div className="ngx-order-line-row">
          <svg className="ngx-order-line-active" viewBox="0 0 54 3" fill="none">
            <line x1="0" y1="1.5" x2="54" y2="1.5" stroke="#fff" strokeWidth="3" />
          </svg>
          <svg className="ngx-order-line-full" viewBox="0 0 249 1" fill="none">
            <line x1="0" y1="0.5" x2="249" y2="0.5" stroke="#333" strokeWidth="1" />
          </svg>
        </div>

        {/* Stats row */}
        <div className="ngx-stats-row">
          <div className="ngx-stat">
            <span className="ngx-stat-label">Instruments</span>
            <span className="ngx-stat-value">7 Assets</span>
          </div>
          <div className="ngx-stat">
            <span className="ngx-stat-label">Today's Return</span>
            <span className="ngx-stat-value red">-1.3%</span>
          </div>
          <div className="ngx-stat">
            <span className="ngx-stat-label">Total Return</span>
            <span className="ngx-stat-value green">12.5%</span>
          </div>
          <div className="ngx-stat">
            <span className="ngx-stat-label">Capital</span>
            <span className="ngx-stat-value">₦1,051,226.6</span>
          </div>
        </div>

        {/* Table header */}
        <div className="ngx-table-header">
          <span className="ngx-th ngx-th-instrument">INSTRUMENT</span>
          <span className="ngx-th ngx-th-mkt">MKT PRICE (₦)</span>
          <span className="ngx-th ngx-th-holdings">HOLDINGS VALUE CHANGE(%)</span>
        </div>

        {/* Stock list */}
        <div className="ngx-stock-list" ref={stockListRef}>
          {stocks.map((s, i) => (
            <div key={i}>
              <div
                className="ngx-stock-row"
                onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
                style={{ cursor: 'pointer' }}
              >
                <img className={`ngx-stock-row-img ${s.roundImg}`} src={s.img} alt="" />
                <span className={`ngx-stock-row-name ${s.nameFont}`}>{s.name}</span>
                <span className={`ngx-stock-row-sub ${s.subFont}`}>{s.sub}</span>
                <span className={`ngx-stock-row-price ${s.priceColor}`}>{s.price}</span>
                <div className="ngx-stock-row-add">
                  <img src={s.addSrc === 'ellipse' ? ellipseIcon : vectorIcon} alt="" />
                </div>
                <div className={`ngx-stock-row-badge ${s.badgeColor} ${s.badgeRadius}`}>
                  <span className="ngx-stock-row-badge-text">{s.badge}</span>
                </div>
                <span className={`ngx-stock-row-change ${s.changeColor}`}>{s.change}</span>
              </div>

              {expandedIdx === i && (
                <div className="ngx-detail-panel">
                  <div className="ngx-detail-meta">
                    <div className="ngx-detail-row">
                      <span className="ngx-detail-label">Sector</span>
                      <span className="ngx-detail-val">{s.sector}</span>
                    </div>
                    <div className="ngx-detail-row">
                      <span className="ngx-detail-label">Capital invested</span>
                      <span className="ngx-detail-val">{s.capital}</span>
                    </div>
                    <div className="ngx-detail-row">
                      <span className="ngx-detail-label">Volume held</span>
                      <span className="ngx-detail-val">{s.volume}</span>
                    </div>
                    <div className="ngx-detail-row">
                      <span className="ngx-detail-label">% of portfolio</span>
                      <span className="ngx-detail-val">{s.portfolio}</span>
                    </div>
                  </div>
                  <svg className="ngx-detail-chart" viewBox="0 0 60 30" fill="none">
                    <polyline
                      points={s.changeColor === 'red'
                        ? '2,8 8,12 14,6 20,18 26,14 32,22 38,16 44,24 50,20 56,26'
                        : '2,26 8,22 14,24 20,16 26,18 32,10 38,14 44,8 50,6 56,4'}
                      stroke={s.changeColor === 'red' ? '#cc2727' : s.changeColor === 'green' ? '#23d223' : '#455a64'}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <div className="ngx-detail-actions">
                    <button className="ngx-detail-buy">Buy</button>
                    <button className="ngx-detail-sell">Sell</button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
