import { useState } from 'react'
import './sole-risk.css'
import BottomNav from './bottom-nav'
import assetImg181 from '../assets/sole-risk-img181.png'
import assetImg109 from '../assets/sole-risk-img109.png'
import assetImg180 from '../assets/sole-risk-img180.png'
import assetImg171 from '../assets/sole-risk-img171.png'
import assetImg172 from '../assets/sole-risk-img172.png'
import assetImg123 from '../assets/sole-risk-img123.png'
import assetImg124 from '../assets/sole-risk-img124.png'
import assetImg270 from '../assets/sole-risk-img270.png'

const TABS = ['Assets', 'Strategies', 'Baskets', 'SPVs']
const SUB_TABS = ['Stocks', 'Bonds', 'Commercial Papers', 'PE']

export default function SoleRiskPage() {
  const [activeTab, setActiveTab] = useState('Assets')
  const [activeSubTab, setActiveSubTab] = useState('Stocks')

  return (
    <div className="sole-risk-screen">
      {/* Header */}
      <div className="sole-risk-header">
        <h1 className="sole-risk-title">Sole Risk</h1>
      </div>
      <p className="sole-risk-subtitle">
        Get to explore assets, strategies, strategy baskets made available to you as you invest on your own.
      </p>

      {/* Tab toggle */}
      <div className="sole-risk-tab-bar">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`sole-risk-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sub-nav */}
      <div className="sole-risk-subnav">
        {SUB_TABS.map(tab => (
          <button
            key={tab}
            className={`sole-risk-subnav-btn${activeSubTab === tab ? ' active' : ''}`}
            onClick={() => setActiveSubTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search bar */}
      <div className="sole-risk-search">
        <div className="sole-risk-search-icon">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22282c" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
          </svg>
        </div>
        <input 
          type="text" 
          placeholder="Search for an asset"
          className="sole-risk-search-input"
        />
      </div>

      {/* Asset icons strip */}
      <div className="sole-risk-icons-bar">
        <div className="sole-risk-ngx-pill">
          <img src={assetImg109} alt="NGX" className="sole-risk-ngx-logo" />
          <span className="sole-risk-ngx-label">NGX</span>
        </div>
        <div className="sole-risk-icons-scroll">
          <div className="sole-risk-asset-icon"><img src={assetImg181} alt="" /></div>
          <div className="sole-risk-asset-icon"><img src={assetImg180} alt="" /></div>
          <div className="sole-risk-asset-icon"><img src={assetImg171} alt="" /></div>
          <div className="sole-risk-asset-icon"><img src={assetImg172} alt="" /></div>
          <div className="sole-risk-asset-icon"><img src={assetImg123} alt="" /></div>
          <div className="sole-risk-asset-icon"><img src={assetImg124} alt="" /></div>
          <div className="sole-risk-asset-icon"><img src={assetImg270} alt="" /></div>
        </div>
        <span className="sole-risk-cfd-label">CFD</span>
      </div>

      {/* Asset categories tabs */}
      <div className="sole-risk-categories">
        <div className="sole-risk-category-tabs">
          <button className="sole-risk-category-tab">Watchlist</button>
          <button className="sole-risk-category-tab active">Stocks</button>
          <button className="sole-risk-category-tab">ETFs</button>
          <button className="sole-risk-category-tab">Indices</button>
        </div>
        <div className="sole-risk-category-underline" />
      </div>

      <div className="sole-risk-divider" />

      {/* Table header */}
      <div className="sole-risk-table-header">
        <span className="sole-risk-table-col">INSTRUMENT</span>
        <span className="sole-risk-table-col">PRICE (₦)</span>
        <span className="sole-risk-table-col">CHANGE (%)</span>
      </div>

      {/* Stock item */}
      <div className="sole-risk-stock-item">
        <div className="sole-risk-stock-info">
          <h3 className="sole-risk-stock-name">BUAFOODS</h3>
          <p className="sole-risk-stock-desc">BUA Foods Plc</p>
        </div>
        <div className="sole-risk-stock-price">416.420</div>
        <div className="sole-risk-stock-change">-0.22%</div>
      </div>



      <BottomNav />
    </div>
  )
}