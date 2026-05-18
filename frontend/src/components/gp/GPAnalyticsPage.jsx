import { useState } from 'react'
import './GPAnalyticsPage.css'

// ── Mock data ─────────────────────────────────────────────────────────────────

const FUNDS = ['All Funds', 'Vulue Growth Fund I', 'Vulue Income Fund', 'Vulue Balanced Fund']
const TIME_FILTERS = ['1M', '3M', '6M', '1Y', 'All']

const AUM_TREND = [
  { month: 'Oct', height: 52 },
  { month: 'Nov', height: 62 },
  { month: 'Dec', height: 70 },
  { month: 'Jan', height: 78 },
  { month: 'Feb', height: 88 },
  { month: 'Mar', height: 100 },
]

const STRATEGY_PERF = [
  { name: 'Aggressive Tech Growth',    pct: 18.2, color: '#2254d4' },
  { name: 'Conservative Bonds',        pct: 7.8,  color: '#8b5cf6' },
  { name: 'Balanced Growth',           pct: 11.5, color: '#23d223' },
  { name: 'Crypto Diversification',    pct: 5.3,  color: '#f59e0b' },
  { name: 'Draft ESG Strategy',        pct: 0,    color: '#455a64' },
]

const ASSET_CLASSES = [
  { name: 'Equities',     pct: 35, color: '#2254d4' },
  { name: 'Fixed Income', pct: 25, color: '#8b5cf6' },
  { name: 'Real Estate',  pct: 20, color: '#f59e0b' },
  { name: 'Commodities',  pct: 12, color: '#23d223' },
  { name: 'Cash',         pct: 8,  color: '#455a64' },
]

const TOP_HOLDINGS = [
  { rank: 1, symbol: 'AAPL', name: 'Apple Inc.',      value: '₦450,000', pct: '18%',  perf: '+12.5%', positive: true  },
  { rank: 2, symbol: 'NVDA', name: 'NVIDIA Corp.',    value: '₦250,000', pct: '10%',  perf: '+45.8%', positive: true  },
  { rank: 3, symbol: 'BTC',  name: 'Bitcoin',         value: '₦200,000', pct: '8%',   perf: '-3.2%',  positive: false },
  { rank: 4, symbol: 'MSFT', name: 'Microsoft Corp.', value: '₦180,000', pct: '7.2%', perf: '+8.1%',  positive: true  },
  { rank: 5, symbol: 'GLD',  name: 'SPDR Gold ETF',   value: '₦120,000', pct: '4.8%', perf: '+2.3%',  positive: true  },
]

const OVERALL_STATS = [
  { label: 'Total AUM',         value: '₦250M',  positive: false },
  { label: 'Total Members',     value: '45',     positive: false },
  { label: 'Total LPs',         value: '5',      positive: false },
  { label: 'Avg LP Size',       value: '₦50M',   positive: false },
  { label: 'Total Return',      value: '+14.25%',positive: true  },
  { label: 'Active Strategies', value: '4',      positive: false },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

const TrendUpIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
    <polyline points="17 6 23 6 23 12"/>
  </svg>
)

const TrendDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/>
    <polyline points="17 18 23 18 23 12"/>
  </svg>
)

// ── LP Performance Tab ────────────────────────────────────────────────────────

function LPPerformanceTab() {
  const [fund, setFund] = useState('All Funds')
  const [time, setTime] = useState('1Y')

  return (
    <div className="an-tab-content">
      {/* Controls */}
      <div className="an-controls">
        <select className="an-select" value={fund} onChange={e => setFund(e.target.value)}>
          {FUNDS.map(f => <option key={f}>{f}</option>)}
        </select>
        <div className="an-time-filters">
          {TIME_FILTERS.map(t => (
            <button
              key={t}
              className={`an-time-btn${time === t ? ' active' : ''}`}
              onClick={() => setTime(t)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* 3 Metric Cards */}
      <div className="an-metrics-row">
        <div className="an-metric-card">
          <p className="an-metric-label">AUM</p>
          <p className="an-metric-value">₦50.0M</p>
          <p className="an-metric-change positive">
            <TrendUpIcon /> +₦5.0M growth
          </p>
        </div>
        <div className="an-metric-card">
          <p className="an-metric-label">Members</p>
          <p className="an-metric-value">15</p>
          <p className="an-metric-change positive">
            <TrendUpIcon /> +2 this month
          </p>
        </div>
        <div className="an-metric-card">
          <p className="an-metric-label">Performance</p>
          <p className="an-metric-value positive">+12.50%</p>
          <p className="an-metric-change positive">
            <TrendUpIcon /> YTD
          </p>
        </div>
      </div>

      {/* 3 Activity Cards */}
      <div className="an-activity-row">
        <div className="an-activity-card">
          <p className="an-activity-label">New Investments</p>
          <p className="an-activity-value">₦5.0M</p>
          <p className="an-activity-change positive">
            <TrendUpIcon /> +11.1% vs last period
          </p>
        </div>
        <div className="an-activity-card">
          <p className="an-activity-label">Withdrawals</p>
          <p className="an-activity-value">₦2.5M</p>
          <p className="an-activity-change negative">
            <TrendDownIcon /> -2.5% vs last period
          </p>
        </div>
        <div className="an-activity-card">
          <p className="an-activity-label">Distributions</p>
          <p className="an-activity-value">₦3.8M</p>
          <p className="an-activity-change neutral">7.5% of AUM</p>
        </div>
      </div>

      {/* AUM Trend Bar Chart */}
      <div className="an-section-card">
        <div className="an-section-header">
          <h3 className="an-section-title">AUM Trend</h3>
          <span className="an-section-sub">Oct 2024 – Mar 2025</span>
        </div>
        <div className="an-bar-chart">
          {AUM_TREND.map(item => (
            <div key={item.month} className="an-bar-col">
              <div className="an-bar-track">
                <div className="an-bar-fill" style={{ height: `${item.height}%` }} />
              </div>
              <span className="an-bar-label">{item.month}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Performance by Strategy */}
      <div className="an-section-card">
        <div className="an-section-header">
          <h3 className="an-section-title">Performance by Strategy</h3>
        </div>
        <div className="an-hbar-list">
          {STRATEGY_PERF.map(item => (
            <div key={item.name} className="an-hbar-row">
              <span className="an-hbar-name">{item.name}</span>
              <div className="an-hbar-track">
                <div
                  className="an-hbar-fill"
                  style={{ width: `${(item.pct / 25) * 100}%`, background: item.color }}
                />
              </div>
              <span className="an-hbar-pct">{item.pct}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ── Overall Performance Tab ───────────────────────────────────────────────────

function OverallPerformanceTab() {
  return (
    <div className="an-tab-content">
      {/* 6 Stat Cards */}
      <div className="an-stats-grid">
        {OVERALL_STATS.map(s => (
          <div key={s.label} className="an-stat-card">
            <p className="an-stat-label">{s.label}</p>
            <p className={`an-stat-value${s.positive ? ' positive' : ''}`}>{s.value}</p>
          </div>
        ))}
      </div>

      {/* Asset Class Distribution */}
      <div className="an-section-card">
        <div className="an-section-header">
          <h3 className="an-section-title">Asset Class Distribution</h3>
        </div>
        <div className="an-asset-list">
          {ASSET_CLASSES.map(a => (
            <div key={a.name} className="an-asset-row">
              <span className="an-asset-name">{a.name}</span>
              <div className="an-asset-track">
                <div
                  className="an-asset-fill"
                  style={{ width: `${a.pct}%`, background: a.color }}
                />
              </div>
              <span className="an-asset-pct">{a.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Holdings Table */}
      <div className="an-section-card">
        <div className="an-section-header">
          <h3 className="an-section-title">Top Holdings</h3>
        </div>
        <div className="an-table-wrap">
          <table className="an-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Value</th>
                <th>% of Portfolio</th>
                <th>Performance</th>
              </tr>
            </thead>
            <tbody>
              {TOP_HOLDINGS.map(h => (
                <tr key={h.rank}>
                  <td className="an-rank-cell">#{h.rank}</td>
                  <td>
                    <div className="an-holding-name-cell">
                      <span className="an-symbol-badge">{h.symbol}</span>
                      <span className="an-holding-name">{h.name}</span>
                    </div>
                  </td>
                  <td className="an-holding-value">{h.value}</td>
                  <td className="an-holding-pct">{h.pct}</td>
                  <td>
                    <span className={`an-perf-badge${h.positive ? ' positive' : ' negative'}`}>
                      {h.positive ? <TrendUpIcon /> : <TrendDownIcon />}
                      {h.perf}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function GPAnalyticsPage() {
  const [activeTab, setActiveTab] = useState('lp')

  return (
    <div className="gp-analytics">
      <div className="an-header">
        <h1 className="an-title">Analytics</h1>
      </div>

      <div className="an-tabs">
        <button
          className={`an-tab${activeTab === 'lp' ? ' active' : ''}`}
          onClick={() => setActiveTab('lp')}
        >
          LP Performance
        </button>
        <button
          className={`an-tab${activeTab === 'overall' ? ' active' : ''}`}
          onClick={() => setActiveTab('overall')}
        >
          Overall Performance
        </button>
      </div>

      {activeTab === 'lp' ? <LPPerformanceTab /> : <OverallPerformanceTab />}
    </div>
  )
}
