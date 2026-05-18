import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './personal-info.css'

const lockIcon = "https://www.figma.com/api/mcp/asset/7bdf256c-5d74-4f1e-8002-78e112154c4c"

const fieldDefs = [
  { label: 'First Name', key: 'firstName', locked: true },
  { label: 'Last Name', key: 'lastName', locked: true },
  { label: 'E-mail Address', key: 'email', locked: false },
  { label: 'Phone Number', key: 'phone', locked: false },
  { label: 'Gender', key: 'gender', locked: true },
  { label: 'Marital Status', key: 'marital', locked: false, dropdown: true },
]

export default function PersonalInfoPage() {
  const navigate = useNavigate()
  const [editing, setEditing] = useState(false)
  const [values, setValues] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    gender: '', marital: '', address: ''
  })

  const update = (key, val) => setValues(prev => ({ ...prev, [key]: val }))

  return (
    <div className="pi-screen">
      <div className="pi-gradient" />
      <div className="pi-header">
        <button className="back-btn" onClick={() => navigate('/profile')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
      </div>

      <h1 className="pi-title">{editing ? 'Edit Personal Info' : 'Personal Info'}</h1>

      {editing && (
        <p className="pi-locked-notice">
          Some fields are locked from editing, Please Contact us <span className="pi-link">here</span> for assistance.
        </p>
      )}

      {!editing && (
        <div className="pi-edit-row">
          <button className="pi-edit" onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}

      <div className="pi-fields">
        {fieldDefs.map((f, i) => (
          <div key={i} className="pi-field">
            <span className="pi-label">{f.label}</span>
            {editing ? (
              <div className="pi-input-box">
                <input
                  className="pi-input"
                  placeholder={f.label}
                  value={values[f.key]}
                  onChange={(e) => update(f.key, e.target.value)}
                  disabled={f.locked}
                />
                {f.locked && <img className="pi-lock" src={lockIcon} alt="Locked" />}
                {f.dropdown && <span className="pi-dropdown-arrow">▼</span>}
              </div>
            ) : (
              <div className="pi-divider" />
            )}
          </div>
        ))}
      </div>

      <p className="pi-section-title">Address information</p>
      <div className="pi-field">
        <span className="pi-label">House Address</span>
        {editing ? (
          <div className="pi-input-box">
            <input
              className="pi-input"
              placeholder="House Address"
              value={values.address}
              onChange={(e) => update('address', e.target.value)}
              disabled
            />
            <img className="pi-lock" src={lockIcon} alt="Locked" />
          </div>
        ) : (
          <div className="pi-divider" />
        )}
      </div>

      {editing && (
        <div className="pi-save-row">
          <span className="pi-save-label">Save edited changes</span>
          <button className="pi-save-btn" onClick={() => setEditing(false)}>
            Save<br />Changes
          </button>
        </div>
      )}
    </div>
  )
}
