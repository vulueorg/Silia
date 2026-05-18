import { useState } from 'react'
import './GPStrategiesPage.css'

// ── Mock data ─────────────────────────────────────────────────────────────────

const STRATEGIES = [
  {
    id: 1,
    name: 'Aggressive Tech Growth',
    status: 'Active',
    visibility: 'Marketplace',
    category: 'Directional',
    targetReturn: '15.5%',
    currentReturn: '+18.2%',
    currentPositive: true,
    riskLevel: 4,
    subscribers: 12,
    invested: '₦2.50M',
    fund: 'Vulue Growth Fund I',
  },
  {
    id: 2,
    name: 'Conservative Bonds Portfolio',
    status: 'Active',
    visibility: 'Private',
    category: 'Passive Holding',
    targetReturn: '8.0%',
    currentReturn: '+7.8%',
    currentPositive: true,
    riskLevel: 1,
    subscribers: 8,
    invested: '₦1.20M',
    fund: 'Vulue Income Fund',
  },
  {
    id: 3,
    name: 'Balanced Growth Strategy',
    status: 'Active',
    visibility: 'Marketplace',
    category: 'Active Rebalancing',
    targetReturn: '12.0%',
    currentReturn: '+11.5%',
    currentPositive: true,
    riskLevel: 3,
    subscribers: 5,
    invested: '₦980K',
    fund: 'Vulue Balanced Fund',
  },
  {
    id: 4,
    name: 'Crypto Diversification',
    status: 'Paused',
    visibility: 'Private',
    category: 'Long/Short',
    targetReturn: '25.0%',
    currentReturn: '-5.3%',
    currentPositive: false,
    riskLevel: 5,
    subscribers: 5,
    invested: '₦500K',
    fund: 'Vulue Growth Fund I',
  },
  {
    id: 5,
    name: 'Draft ESG Strategy',
    status: 'Draft',
    visibility: 'Private',
    category: 'Market Neutral',
    targetReturn: '10.0%',
    currentReturn: '0%',
    currentPositive: true,
    riskLevel: 2,
    subscribers: 0,
    invested: '₦0',
    fund: 'Vulue Growth Fund I',
  },
]

const FILTER_TABS = [
  { label: 'All',               value: 'All' },
  { label: 'Directional',       value: 'Directional' },
  { label: 'Long/Short',        value: 'Long/Short' },
  { label: 'Market Neutral',    value: 'Market Neutral' },
  { label: 'Passive Holding',   value: 'Passive Holding' },
  { label: 'Active Rebalancing',value: 'Active Rebalancing' },
  { label: 'Arbitrage',         value: 'Arbitrage', locked: true },
]

const LP_FUNDS = ['Vulue Growth Fund I', 'Vulue Income Fund', 'Vulue Balanced Fund']

const SUB_ACCOUNTS = [
  { id: 1, name: 'Global Diversified', balance: '₦5.75M', tethers: 10 },
  { id: 2, name: 'Income Portfolio',   balance: '₦2.10M', tethers: 5  },
]

const WIZARD_STEPS = [
  'Strategy Settings',
  'Basic Info',
  'Code of Ethics',
  'Sub-Account',
  'Assets',
  'Review',
]

// ── Icons ─────────────────────────────────────────────────────────────────────

const LockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="11" width="18" height="11" rx="2"/>
    <path d="M7 11V7a5 5 0 0110 0v4"/>
  </svg>
)

const PlusIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
)

const EditIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/>
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/>
  </svg>
)

const DuplicateIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="9" y="9" width="13" height="13" rx="2"/>
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
  </svg>
)

const OpenIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
)

const TrashIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/>
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
    <path d="M10 11v6M14 11v6"/>
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
  </svg>
)

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)

// ── Helpers ───────────────────────────────────────────────────────────────────

function StatusBadge({ status }) {
  const map = {
    Active: 'st-badge-active',
    Paused: 'st-badge-paused',
    Draft:  'st-badge-draft',
  }
  return <span className={`st-badge ${map[status] || 'st-badge-draft'}`}>{status}</span>
}

function VisibilityBadge({ visibility }) {
  return (
    <span className={`st-vis-badge ${visibility === 'Marketplace' ? 'st-vis-market' : 'st-vis-private'}`}>
      {visibility}
    </span>
  )
}

function RiskDots({ level }) {
  return (
    <div className="st-risk-dots">
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} className={`st-risk-dot${i <= level ? ' filled' : ''}`} />
      ))}
    </div>
  )
}

// ── Strategy Card ─────────────────────────────────────────────────────────────

function StrategyCard({ strategy }) {
  const isPaused = strategy.status === 'Paused'

  return (
    <div className="st-card">
      {/* Top row */}
      <div className="st-card-top">
        <div className="st-card-badges">
          <StatusBadge status={strategy.status} />
          <VisibilityBadge visibility={strategy.visibility} />
        </div>
        <button className="st-icon-btn" title="Duplicate"><DuplicateIcon /></button>
      </div>

      {/* Name + fund */}
      <h3 className="st-card-name">{strategy.name}</h3>
      <p className="st-card-fund">{strategy.fund}</p>

      {/* Category */}
      <span className="st-category-tag">{strategy.category}</span>

      {/* Risk */}
      <div className="st-risk-row">
        <span className="st-risk-label">Risk</span>
        <RiskDots level={strategy.riskLevel} />
      </div>

      {/* Stats */}
      <div className="st-stats-row">
        <div className="st-stat-item">
          <span className="st-stat-label">Target</span>
          <span className="st-stat-value">{strategy.targetReturn}</span>
        </div>
        <div className="st-stat-divider" />
        <div className="st-stat-item">
          <span className="st-stat-label">Current</span>
          <span className={`st-stat-value ${strategy.currentPositive ? 'positive' : 'negative'}`}>
            {strategy.currentReturn}
          </span>
        </div>
        <div className="st-stat-divider" />
        <div className="st-stat-item">
          <span className="st-stat-label">Subscribers</span>
          <span className="st-stat-value">{strategy.subscribers}</span>
        </div>
        <div className="st-stat-divider" />
        <div className="st-stat-item">
          <span className="st-stat-label">Invested</span>
          <span className="st-stat-value">{strategy.invested}</span>
        </div>
      </div>

      {/* Actions */}
      <div className="st-card-footer">
        {isPaused ? (
          <button className="st-resume-btn">Resume</button>
        ) : (
          <button className="st-edit-btn"><EditIcon /> Edit</button>
        )}
        <button className="st-open-btn"><OpenIcon /> Open</button>
      </div>
    </div>
  )
}

// ── Wizard Step Indicator ─────────────────────────────────────────────────────

function WizardSteps({ current }) {
  return (
    <div className="wiz-steps">
      {WIZARD_STEPS.map((label, i) => (
        <div key={i} className="wiz-step-item">
          <div className={`wiz-step-circle${i < current ? ' done' : i === current ? ' active' : ''}`}>
            {i < current ? <CheckIcon /> : <span>{i + 1}</span>}
          </div>
          <span className={`wiz-step-label${i === current ? ' active' : i < current ? ' done' : ''}`}>
            {label}
          </span>
          {i < WIZARD_STEPS.length - 1 && (
            <div className={`wiz-step-line${i < current ? ' done' : ''}`} />
          )}
        </div>
      ))}
    </div>
  )
}

// ── Wizard Steps Content ──────────────────────────────────────────────────────

function Step1({ data, update }) {
  return (
    <div className="wiz-step-content">
      <h3 className="wiz-step-title">Strategy Settings</h3>
      <div className="wiz-field">
        <label className="wiz-label">Fund / LP</label>
        <select className="wiz-select" value={data.fund} onChange={e => update('fund', e.target.value)}>
          {LP_FUNDS.map(f => <option key={f}>{f}</option>)}
        </select>
      </div>
      <div className="wiz-row">
        <div className="wiz-field">
          <label className="wiz-label">Minimum Investment (₦)</label>
          <input
            className="wiz-input"
            type="number"
            placeholder="e.g. 100000"
            value={data.minInvestment}
            onChange={e => update('minInvestment', e.target.value)}
            min="0"
          />
        </div>
        <div className="wiz-field">
          <label className="wiz-label">Maximum Investment (₦)</label>
          <input
            className="wiz-input"
            type="number"
            placeholder="e.g. 5000000"
            value={data.maxInvestment}
            onChange={e => update('maxInvestment', e.target.value)}
            min="0"
          />
        </div>
      </div>
      <div className="wiz-field">
        <label className="wiz-label">Lock Period</label>
        <select className="wiz-select" value={data.lockPeriod} onChange={e => update('lockPeriod', e.target.value)}>
          <option>3 months</option>
          <option>6 months</option>
          <option>1 year</option>
          <option>2 years</option>
        </select>
      </div>
    </div>
  )
}

function Step2({ data, update }) {
  return (
    <div className="wiz-step-content">
      <h3 className="wiz-step-title">Basic Information</h3>
      <div className="wiz-field">
        <label className="wiz-label">Strategy Name <span className="wiz-required">*</span></label>
        <input
          className="wiz-input"
          type="text"
          placeholder="e.g. Aggressive Tech Growth"
          value={data.name}
          onChange={e => update('name', e.target.value)}
        />
      </div>
      <div className="wiz-field">
        <label className="wiz-label">Description</label>
        <textarea
          className="wiz-textarea"
          placeholder="Describe your strategy..."
          value={data.description}
          onChange={e => update('description', e.target.value)}
          rows={3}
        />
      </div>
      <div className="wiz-field">
        <label className="wiz-label">Investor Type</label>
        <div className="wiz-radio-group">
          {['Retail Investors', 'Institutions', 'Strategic Investors'].map(t => (
            <label key={t} className="wiz-radio-label">
              <input
                type="radio"
                name="investorType"
                value={t}
                checked={data.investorType === t}
                onChange={() => update('investorType', t)}
              />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="wiz-field">
        <label className="wiz-label">Risk Level</label>
        <div className="wiz-risk-selector">
          {[1, 2, 3, 4, 5].map(n => (
            <button
              key={n}
              type="button"
              className={`wiz-risk-dot-btn${data.riskLevel >= n ? ' active' : ''}`}
              onClick={() => update('riskLevel', n)}
            />
          ))}
        </div>
        <p className="wiz-risk-hint">
          {data.riskLevel === 1 ? 'Very Low' : data.riskLevel === 2 ? 'Low' : data.riskLevel === 3 ? 'Medium' : data.riskLevel === 4 ? 'High' : 'Very High'} risk
        </p>
      </div>
    </div>
  )
}

function Step3({ data, update }) {
  return (
    <div className="wiz-step-content">
      <h3 className="wiz-step-title">Code of Ethics</h3>
      <div className="wiz-ethics-box">
        <p className="wiz-ethics-text">
          As a strategy provider on Vulue, you agree to maintain transparency in all strategy
          communications, disclose all material risks to investors, provide accurate and honest
          performance data, and act in the best interests of your subscribers at all times.
        </p>
      </div>
      <label className="wiz-checkbox-label">
        <input
          type="checkbox"
          checked={data.ethicsAccepted}
          onChange={e => update('ethicsAccepted', e.target.checked)}
        />
        <span>I have read and agree to the Code of Ethics</span>
      </label>
    </div>
  )
}

function Step4({ data, update }) {
  return (
    <div className="wiz-step-content">
      <h3 className="wiz-step-title">Select Sub-Account</h3>
      <p className="wiz-step-desc">Choose the sub-account that will be linked to this strategy.</p>
      <div className="wiz-subaccount-list">
        {SUB_ACCOUNTS.map(sa => (
          <div
            key={sa.id}
            className={`wiz-subaccount-card${data.subAccountId === sa.id ? ' selected' : ''}`}
            onClick={() => update('subAccountId', sa.id)}
          >
            <div className="wiz-subaccount-info">
              <p className="wiz-subaccount-name">{sa.name}</p>
              <p className="wiz-subaccount-meta">Balance: {sa.balance} · Active Tethers: {sa.tethers}</p>
            </div>
            <div className={`wiz-subaccount-radio${data.subAccountId === sa.id ? ' selected' : ''}`}>
              {data.subAccountId === sa.id && <CheckIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function Step5({ data, update }) {
  const totalAlloc = data.assets.reduce((sum, a) => sum + (parseFloat(a.allocation) || 0), 0)
  const remaining = 100 - totalAlloc

  const addAsset = () => {
    update('assets', [...data.assets, { symbol: '', name: '', allocation: '' }])
  }

  const removeAsset = (idx) => {
    update('assets', data.assets.filter((_, i) => i !== idx))
  }

  const updateAsset = (idx, key, val) => {
    const next = data.assets.map((a, i) => i === idx ? { ...a, [key]: val } : a)
    update('assets', next)
  }

  return (
    <div className="wiz-step-content">
      <h3 className="wiz-step-title">Add Assets</h3>
      <div className="wiz-assets-list">
        {data.assets.map((asset, idx) => (
          <div key={idx} className="wiz-asset-row">
            <input
              className="wiz-input wiz-asset-symbol"
              type="text"
              placeholder="Symbol"
              value={asset.symbol}
              onChange={e => updateAsset(idx, 'symbol', e.target.value)}
            />
            <input
              className="wiz-input wiz-asset-name"
              type="text"
              placeholder="Asset Name"
              value={asset.name}
              onChange={e => updateAsset(idx, 'name', e.target.value)}
            />
            <div className="wiz-asset-alloc-wrap">
              <input
                className="wiz-input wiz-asset-alloc"
                type="number"
                placeholder="%"
                value={asset.allocation}
                onChange={e => updateAsset(idx, 'allocation', e.target.value)}
                min="0"
                max="100"
              />
              <span className="wiz-asset-pct-sign">%</span>
            </div>
            <button
              type="button"
              className="wiz-asset-remove"
              onClick={() => removeAsset(idx)}
              disabled={data.assets.length <= 1}
            >
              <TrashIcon />
            </button>
          </div>
        ))}
      </div>
      <button type="button" className="wiz-add-asset-btn" onClick={addAsset}>
        <PlusIcon /> Add Asset
      </button>
      <div className={`wiz-remaining${remaining < 0 ? ' over' : ''}`}>
        Remaining: {remaining.toFixed(1)}%
        {remaining < 0 && <span className="wiz-over-label"> (over by {Math.abs(remaining).toFixed(1)}%)</span>}
      </div>
    </div>
  )
}

function Step6({ data, onClose, onSuccess }) {
  const subAccount = SUB_ACCOUNTS.find(s => s.id === data.subAccountId)

  return (
    <div className="wiz-step-content">
      <h3 className="wiz-step-title">Review</h3>
      <div className="wiz-review-section">
        <h4 className="wiz-review-section-title">Strategy Settings</h4>
        <div className="wiz-review-rows">
          <div className="wiz-review-row"><span>Fund</span><span>{data.fund}</span></div>
          <div className="wiz-review-row"><span>Min Investment</span><span>{data.minInvestment ? `₦${Number(data.minInvestment).toLocaleString()}` : '—'}</span></div>
          <div className="wiz-review-row"><span>Max Investment</span><span>{data.maxInvestment ? `₦${Number(data.maxInvestment).toLocaleString()}` : '—'}</span></div>
          <div className="wiz-review-row"><span>Lock Period</span><span>{data.lockPeriod}</span></div>
        </div>
      </div>
      <div className="wiz-review-section">
        <h4 className="wiz-review-section-title">Basic Info</h4>
        <div className="wiz-review-rows">
          <div className="wiz-review-row"><span>Name</span><span>{data.name || '—'}</span></div>
          <div className="wiz-review-row"><span>Description</span><span>{data.description || '—'}</span></div>
          <div className="wiz-review-row"><span>Investor Type</span><span>{data.investorType}</span></div>
          <div className="wiz-review-row"><span>Risk Level</span><span>{data.riskLevel} / 5</span></div>
        </div>
      </div>
      <div className="wiz-review-section">
        <h4 className="wiz-review-section-title">Sub-Account</h4>
        <div className="wiz-review-rows">
          <div className="wiz-review-row">
            <span>Selected</span>
            <span>{subAccount ? subAccount.name : '—'}</span>
          </div>
        </div>
      </div>
      <div className="wiz-review-section">
        <h4 className="wiz-review-section-title">Assets</h4>
        <div className="wiz-review-rows">
          {data.assets.filter(a => a.symbol).map((a, i) => (
            <div key={i} className="wiz-review-row">
              <span>{a.symbol} {a.name && `— ${a.name}`}</span>
              <span>{a.allocation}%</span>
            </div>
          ))}
          {data.assets.filter(a => a.symbol).length === 0 && (
            <div className="wiz-review-row"><span>No assets added</span><span>—</span></div>
          )}
        </div>
      </div>
      <button className="wiz-create-btn" onClick={onSuccess}>
        Create Strategy
      </button>
    </div>
  )
}

// ── Create Strategy Modal ─────────────────────────────────────────────────────

function CreateStrategyModal({ onClose }) {
  const [step, setStep] = useState(0)
  const [success, setSuccess] = useState(false)
  const [data, setData] = useState({
    fund: LP_FUNDS[0],
    minInvestment: '',
    maxInvestment: '',
    lockPeriod: '6 months',
    name: '',
    description: '',
    investorType: 'Retail Investors',
    riskLevel: 3,
    ethicsAccepted: false,
    subAccountId: null,
    assets: [
      { symbol: '', name: '', allocation: '' },
      { symbol: '', name: '', allocation: '' },
    ],
  })

  const update = (key, val) => setData(prev => ({ ...prev, [key]: val }))

  const canNext = () => {
    if (step === 0) return !!data.fund
    if (step === 1) return data.name.trim().length > 0
    if (step === 2) return data.ethicsAccepted
    if (step === 3) return data.subAccountId !== null
    if (step === 4) {
      const total = data.assets.reduce((s, a) => s + (parseFloat(a.allocation) || 0), 0)
      return total <= 100
    }
    return true
  }

  const handleSuccess = () => {
    setSuccess(true)
    setTimeout(() => onClose(), 2000)
  }

  return (
    <div className="wiz-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="wiz-modal">
        <div className="wiz-modal-header">
          <h2 className="wiz-modal-title">Create Strategy</h2>
          <button className="wiz-close-btn" onClick={onClose}><CloseIcon /></button>
        </div>

        {success ? (
          <div className="wiz-success">
            <div className="wiz-success-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#23d223" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <p className="wiz-success-text">Strategy created successfully!</p>
          </div>
        ) : (
          <>
            <WizardSteps current={step} />

            <div className="wiz-body">
              {step === 0 && <Step1 data={data} update={update} />}
              {step === 1 && <Step2 data={data} update={update} />}
              {step === 2 && <Step3 data={data} update={update} />}
              {step === 3 && <Step4 data={data} update={update} />}
              {step === 4 && <Step5 data={data} update={update} />}
              {step === 5 && <Step6 data={data} onClose={onClose} onSuccess={handleSuccess} />}
            </div>

            <div className="wiz-footer">
              {step > 0 && (
                <button className="wiz-back-btn" onClick={() => setStep(s => s - 1)}>
                  ← Back
                </button>
              )}
              <div style={{ flex: 1 }} />
              {step < 5 && (
                <button
                  className="wiz-next-btn"
                  onClick={() => setStep(s => s + 1)}
                  disabled={!canNext()}
                >
                  Next →
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────────────────────────

export default function GPStrategiesPage() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [showCreate, setShowCreate] = useState(false)

  const filtered = activeFilter === 'All'
    ? STRATEGIES
    : STRATEGIES.filter(s => s.category === activeFilter)

  return (
    <div className="gp-strategies">
      {/* Header */}
      <div className="st-header">
        <h1 className="st-title">Strategies</h1>
        <button className="st-create-btn" onClick={() => setShowCreate(true)}>
          <PlusIcon /> Create Strategy
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="st-filter-tabs">
        {FILTER_TABS.map(tab => (
          <button
            key={tab.value}
            className={`st-filter-tab${activeFilter === tab.value ? ' active' : ''}${tab.locked ? ' locked' : ''}`}
            onClick={() => !tab.locked && setActiveFilter(tab.value)}
            disabled={tab.locked}
          >
            {tab.label}
            {tab.locked && <span className="st-lock-icon"><LockIcon /></span>}
          </button>
        ))}
      </div>

      {/* Strategy Cards Grid */}
      {filtered.length === 0 ? (
        <div className="st-empty">
          <p>No strategies in this category.</p>
        </div>
      ) : (
        <div className="st-cards-grid">
          {filtered.map(s => (
            <StrategyCard key={s.id} strategy={s} />
          ))}
        </div>
      )}

      {/* Archive Link */}
      <div className="st-archive-link">
        <button className="st-archive-btn">See Archive</button>
      </div>

      {/* Create Modal */}
      {showCreate && <CreateStrategyModal onClose={() => setShowCreate(false)} />}
    </div>
  )
}
