import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './TransactionHistoryPage.css'

const categories = ['All categories', 'Wallet Top Up', 'Wallet withdrawal', 'Investment funded', 'Investment redeemed', 'Exchanged']
const statuses = ['Any status', 'Successful', 'Pending', 'Failed']

const transactions = [
  { name: 'Kobo Plan Investment', amount: '- ₦200,000', date: 'August 21, 11:04', status: 'Successful', cat: 'Investment funded' },
  { name: 'Wallet Top Up', amount: '+ ₦250,000', date: 'August 20, 11:04', status: 'Successful', cat: 'Wallet Top Up' },
  { name: 'Tyche Plan Redeemed', amount: '+ ₦20,000', date: 'August 11, 11:04', status: 'Successful', cat: 'Investment redeemed' },
  { name: 'Wallet Withdrawal', amount: '- ₦10,000', date: 'August 08, 11:04', status: 'Pending', cat: 'Wallet withdrawal' },
  { name: 'Group Investing Plan', amount: '- ₦100,000', date: 'August 01, 11:04', status: 'Pending', cat: 'Investment funded' },
  { name: 'Tyche Plan Investment', amount: '- ₦300,000', date: 'August 21, 11:04', status: 'Successful', cat: 'Investment funded' },
  { name: 'Wallet Top Up', amount: '+ ₦250,000', date: 'August 20, 11:04', status: 'Successful', cat: 'Wallet Top Up' },
  { name: 'Kreta Plan Redeemed', amount: '+ ₦20,000', date: 'August 11, 11:04', status: 'Successful', cat: 'Investment redeemed' },
  { name: 'Wallet Withdrawal', amount: '- ₦10,000', date: 'August 08, 11:04', status: 'Pending', cat: 'Wallet withdrawal' },
  { name: 'Group Investing Plan', amount: '- ₦100,000', date: 'August 01, 11:04', status: 'Pending', cat: 'Investment funded' },
]

export default function TransactionHistoryPage() {
  const navigate = useNavigate()
  const [showCats, setShowCats] = useState(false)
  const [showStats, setShowStats] = useState(false)
  const [selCat, setSelCat] = useState('All categories')
  const [selStat, setSelStat] = useState('Any status')

  const filtered = transactions.filter(t => {
    if (selCat !== 'All categories' && t.cat !== selCat) return false
    if (selStat !== 'Any status' && t.status !== selStat) return false
    return true
  })

  return (
    <div className="th-screen">
      <div className="th-header-bg" />
      <div className="th-header">
        <button className="back-btn" onClick={() => navigate(-1)} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="th-title">Transaction History</h1>
      </div>

      <div className="th-search-bar">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#02174e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        <span className="th-search-placeholder">Search</span>
      </div>

      <div className="th-filters">
        <button className="th-filter" onClick={() => { setShowCats(!showCats); setShowStats(false); }}>
          {selCat} <span className="th-arrow">▼</span>
        </button>
        <button className="th-filter" onClick={() => { setShowStats(!showStats); setShowCats(false); }}>
          {selStat} <span className="th-arrow">▼</span>
        </button>
      </div>

      {/* Category dropdown */}
      {showCats && (
        <div className="th-dropdown">
          {categories.map((c, i) => (
            <button
              key={i}
              className={`th-dropdown-pill${selCat === c ? ' active' : ''}`}
              onClick={() => { setSelCat(c); setShowCats(false); }}
            >
              {c}
            </button>
          ))}
        </div>
      )}

      {/* Status dropdown */}
      {showStats && (
        <div className="th-dropdown">
          {statuses.map((s, i) => (
            <button
              key={i}
              className={`th-dropdown-pill${selStat === s ? ' active' : ''}`}
              onClick={() => { setSelStat(s); setShowStats(false); }}
            >
              {s}
            </button>
          ))}
        </div>
      )}

      <div className="th-list">
        {filtered.map((t, i) => (
          <div key={i} className="th-item">
            <div className="th-item-left">
              <span className="th-item-name">{t.name}</span>
              <span className="th-item-date">{t.date}</span>
            </div>
            <div className="th-item-right">
              <span className="th-item-amount">{t.amount}</span>
              <span className={`th-item-status ${t.status === 'Successful' ? 'success' : t.status === 'Pending' ? 'pending' : 'failed'}`}>
                {t.status}
              </span>
            </div>
          </div>
        ))}
        {filtered.length === 0 && <p className="th-empty">No transactions found.</p>}
      </div>
    </div>
  )
}
