import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './bank-details.css'

const plusCircle = "https://www.figma.com/api/mcp/asset/22b54bdb-a4d1-46bb-ad4b-b86a46bc2bbf"

const bankList = [
  { name: 'Access Bank', color: '#F37021', logo: new URL('../assets/banks/access.svg', import.meta.url).href },
  { name: 'Citibank Nigeria', color: '#003B70', logo: new URL('../assets/banks/citibank.svg', import.meta.url).href },
  { name: 'Ecobank Nigeria', color: '#00529B', logo: new URL('../assets/banks/ecobank.svg', import.meta.url).href },
  { name: 'Fidelity Bank', color: '#00A651', logo: new URL('../assets/banks/fidelity.svg', import.meta.url).href },
  { name: 'First Bank of Nigeria', color: '#003366', logo: new URL('../assets/banks/firstbank.svg', import.meta.url).href },
  { name: 'First City Monument Bank', color: '#5C2D91', logo: new URL('../assets/banks/fcmb.svg', import.meta.url).href },
  { name: 'Globus Bank', color: '#E31937', logo: new URL('../assets/banks/globus.svg', import.meta.url).href },
  { name: 'Guaranty Trust Bank', color: '#E36A1E', logo: new URL('../assets/banks/gtbank.svg', import.meta.url).href },
  { name: 'Heritage Bank', color: '#006B3F', logo: new URL('../assets/banks/heritage.svg', import.meta.url).href },
  { name: 'Jaiz Bank', color: '#00843D', logo: new URL('../assets/banks/jaiz.svg', import.meta.url).href },
  { name: 'Keystone Bank', color: '#00AEEF', logo: new URL('../assets/banks/keystone.svg', import.meta.url).href },
  { name: 'Kuda Bank', color: '#40196D', logo: new URL('../assets/banks/kuda.svg', import.meta.url).href },
  { name: 'Moniepoint', color: '#0055FF', logo: new URL('../assets/banks/moniepoint.svg', import.meta.url).href },
  { name: 'Opay', color: '#1DCE59', logo: new URL('../assets/banks/opay.svg', import.meta.url).href },
  { name: 'Palmpay', color: '#6C3FBF', logo: new URL('../assets/banks/palmpay.svg', import.meta.url).href },
  { name: 'Polaris Bank', color: '#8B1A4A', logo: new URL('../assets/banks/polaris.svg', import.meta.url).href },
  { name: 'Providus Bank', color: '#002D72', logo: new URL('../assets/banks/providus.svg', import.meta.url).href },
  { name: 'Stanbic IBTC Bank', color: '#0033A0', logo: new URL('../assets/banks/stanbic.svg', import.meta.url).href },
  { name: 'Standard Chartered', color: '#007A33', logo: new URL('../assets/banks/standard-chartered.svg', import.meta.url).href },
  { name: 'Sterling Bank', color: '#CC0000', logo: new URL('../assets/banks/sterling.svg', import.meta.url).href },
  { name: 'Titan Trust Bank', color: '#1B3A5C', logo: new URL('../assets/banks/titan.svg', import.meta.url).href },
  { name: 'Union Bank', color: '#003DA5', logo: new URL('../assets/banks/union.svg', import.meta.url).href },
  { name: 'United Bank for Africa', color: '#CC0000', logo: new URL('../assets/banks/uba.svg', import.meta.url).href },
  { name: 'Unity Bank', color: '#006B3F', logo: new URL('../assets/banks/unity.svg', import.meta.url).href },
  { name: 'Wema Bank', color: '#800080', logo: new URL('../assets/banks/wema.svg', import.meta.url).href },
  { name: 'Zenith Bank', color: '#CC0000', logo: new URL('../assets/banks/zenith.svg', import.meta.url).href },
]

export default function BankDetailsPage() {
  const navigate = useNavigate()
  const [showForm, setShowForm] = useState(false)
  const [selectedBank, setSelectedBank] = useState(null)
  const [showBankList, setShowBankList] = useState(false)
  const [accounts, setAccounts] = useState([
    { name: 'Ekwe Yousuf', number: 'XXXXXXXXXX', bank: 'Guaranty Trust Bank', logo: new URL('../assets/banks/gtbank.svg', import.meta.url).href }
  ])
  const [acctNumber, setAcctNumber] = useState('')
  const [acctName, setAcctName] = useState('')

  const handleAdd = () => {
    if (selectedBank && acctNumber && acctName) {
      setAccounts([...accounts, { name: acctName, number: acctNumber, bank: selectedBank.name, logo: selectedBank.logo }])
      setSelectedBank(null)
      setAcctNumber('')
      setAcctName('')
      setShowForm(false)
    }
  }

  return (
    <div className="bd-screen">
      <div className="bd-gradient" />
      <div className="bd-header">
        <button className="back-btn" onClick={() => navigate('/profile')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="bd-title">Bank Details</h1>

      <button className="bd-add-pill" onClick={() => setShowForm(!showForm)}>
        <img className="bd-plus" src={plusCircle} alt="" />
        <span>Add Bank Account In Your Name</span>
      </button>

      {showForm && (
        <div className="bd-form">
          {/* Bank selector */}
          <button className="bd-input bd-bank-select" onClick={() => setShowBankList(!showBankList)}>
            {selectedBank ? (
              <div className="bd-selected-bank">
                <img className="bd-bank-thumb" src={selectedBank.logo} alt="" />
                <span>{selectedBank.name}</span>
              </div>
            ) : (
              <span className="bd-placeholder">Select Bank</span>
            )}
            <span className="bd-chevron">▼</span>
          </button>

          {showBankList && (
            <div className="bd-bank-list">
              {bankList.map((b, i) => (
                <button
                  key={i}
                  className={`bd-bank-option${selectedBank?.name === b.name ? ' selected' : ''}`}
                  onClick={() => { setSelectedBank(b); setShowBankList(false); }}
                >
                  <img className="bd-bank-thumb" src={b.logo} alt="" />
                  <span>{b.name}</span>
                </button>
              ))}
            </div>
          )}

          <input className="bd-input" placeholder="Account Number" value={acctNumber} onChange={e => setAcctNumber(e.target.value)} />
          <input className="bd-input" placeholder="Account Name" value={acctName} onChange={e => setAcctName(e.target.value)} />
          <button className={`bd-save${selectedBank && acctNumber && acctName ? ' active' : ''}`} onClick={handleAdd}>Save Account</button>
        </div>
      )}

      <p className="bd-saved-label">Saved Accounts</p>

      {accounts.map((a, i) => (
        <div key={i} className="bd-account-card">
          <div className="bd-account-info">
            <p className="bd-account-name">{a.name}</p>
            <p className="bd-account-number">{a.number}</p>
            <p className="bd-account-bank">{a.bank}</p>
          </div>
          <img className="bd-bank-logo" src={a.logo} alt="" />
        </div>
      ))}
    </div>
  )
}
