import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './next-of-kin.css'

const fieldDefs1 = [
  { label: 'Full Name', key: 'fullName' },
  { label: 'Next of kin relationship', key: 'relationship' },
  { label: 'Phone Number', key: 'phone' },
  { label: 'Email Address', key: 'email' },
]
const fieldDefs2 = [
  { label: 'Address', key: 'address' },
  { label: 'Select State', key: 'state' },
]

export default function NextOfKinPage() {
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [values, setValues] = useState({
    fullName: '', relationship: '', phone: '', email: '', address: '', state: ''
  })

  const update = (key, val) => setValues(prev => ({ ...prev, [key]: val }))

  return (
    <div className="nok-screen">
      <div className="nok-gradient" />
      <div className="nok-header">
        <button className="back-btn" onClick={() => navigate('/profile')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="nok-title">{editing ? 'Edit Next of Kin' : 'Next of Kin'}</h1>

      <div className="nok-section-row">
        <span className="nok-section-label">Next of Kin information</span>
        {!editing && <button className="nok-edit" onClick={() => setEditing(true)}>Edit</button>}
      </div>

      <div className="nok-fields">
        {fieldDefs1.map((f, i) => (
          <div key={i} className="nok-field">
            <span className="nok-label">{f.label}</span>
            {editing ? (
              <div className="nok-input-box">
                <input className="nok-input" placeholder={f.label} value={values[f.key]} onChange={e => update(f.key, e.target.value)} />
              </div>
            ) : (
              <div className="nok-divider" />
            )}
          </div>
        ))}
      </div>

      <p className="nok-section-label second">Next of Kin Address</p>

      <div className="nok-fields">
        {fieldDefs2.map((f, i) => (
          <div key={i} className="nok-field">
            <span className="nok-label">{f.label}</span>
            {editing ? (
              <div className="nok-input-box">
                <input className="nok-input" placeholder={f.label} value={values[f.key]} onChange={e => update(f.key, e.target.value)} />
              </div>
            ) : (
              <div className="nok-divider" />
            )}
          </div>
        ))}
      </div>

      {editing && (
        <div className="nok-save-row">
          <span className="nok-save-label">Save edited changes</span>
          <button className="nok-save-btn" onClick={() => setEditing(false)}>Save<br/>Changes</button>
        </div>
      )}
    </div>
  )
}
