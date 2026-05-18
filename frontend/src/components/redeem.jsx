import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './redeem.css'
import vulueMascot from '../assets/vulue-mascot.png'
import LeftPanel from './left-panel'
import vestiaImg from '../assets/strat-vestia.png'

const mascot = vulueMascot

export default function RedeemPage() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('ongoing')
  const [selected, setSelected] = useState(false)

  return (
    <div className="redeem-screen">
      <LeftPanel />

      <div className="redeem-right-panel">
        <div className="redeem-header">
          <button className="back-btn back-btn-mobile" onClick={() => navigate('/home')} aria-label="Go back">
            <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h1 className="redeem-title">Redeem</h1>
        </div>

        <div className="redeem-tabs">
          <button className={`rtab${tab === 'ongoing' ? ' active' : ''}`} onClick={() => setTab('ongoing')}>Ongoing</button>
          <button className={`rtab${tab === 'pending' ? ' active' : ''}`} onClick={() => setTab('pending')}>Pending</button>
          <button className={`rtab${tab === 'completed' ? ' active' : ''}`} onClick={() => setTab('completed')}>Completed</button>
        </div>

        {tab === 'ongoing' && (
          <>
            <div className={`invest-card${selected ? ' selected' : ''}`} onClick={() => setSelected(!selected)} style={{ cursor: 'pointer' }}>
              <img className="invest-img" src={vestiaImg} alt="Vestia" />
              <div className="invest-content">
                <div className="invest-top">
                  <span className="invest-name">Vestia</span>
                  <svg className="invest-chevron" width="5" height="9" viewBox="0 0 6 10" fill="none"><path d="M1 1L5 5L1 9" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </div>
                <p className="invest-amount">₦249,600.00</p>
                <p className="invest-maturity">
                  <span className="green">Unlocked on </span>
                  <span className="green bold">March 31, 2026</span>
                  <span className="green">           100% Maturity</span>
                </p>
              </div>
            </div>
            {selected && (
              <div className="redeem-info">
                <p className="redeem-info-label">Your amount to be redeemed into your wallet:</p>
                <p className="redeem-info-amount">₦249,600.00</p>
              </div>
            )}
          </>
        )}

        {tab === 'pending' && <p className="empty-tab">No pending redemptions.</p>}
        {tab === 'completed' && <p className="empty-tab">No completed redemptions.</p>}

        <button
          className={`redeem-confirm${selected ? ' active' : ''}`}
          onClick={() => selected && navigate('/home')}
        >
          Confirm
        </button>

        <div className="redeem-brand">
          <img src={mascot} alt="" className="brand-icon" />
          <span className="brand-text">VULUE</span>
        </div>
      </div>
    </div>
  )
}
