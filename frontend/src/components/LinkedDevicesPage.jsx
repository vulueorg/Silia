import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './LinkedDevicesPage.css'

const initialDevices = [
  { name: 'Infinix HOT 50', type: 'phone', date: '11/08/2023 - 09:45:34', location: 'Port Harcourt, Nigeria', ip: '123.456.789.123' },
  { name: 'HP X32 (Windows)', type: 'laptop', date: '10/08/2023 - 09:45:34', location: 'Lagos, Nigeria', ip: '123.987.654.321' },
  { name: 'Sony Xperience 319', type: 'laptop', date: '08/08/2023 - 09:45:34', location: 'Abuja, Nigeria', ip: '123.123.456.456' },
  { name: 'Sony Xperience 319', type: 'laptop', date: '08/08/2023 - 09:45:34', location: 'Abuja, Nigeria', ip: '123.123.456.456' },
]

export default function LinkedDevicesPage() {
  const navigate = useNavigate()
  const [removeMode, setRemoveMode] = useState(false)
  const [devices, setDevices] = useState(initialDevices)

  const removeDevice = (index) => {
    setDevices(devices.filter((_, i) => i !== index))
  }

  return (
    <div className="ld-screen">
      <div className="ld-gradient" />
      <div className="ld-top-row">
        <button className="back-btn" onClick={() => navigate('/account-activities')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="ld-title">Linked Devices</h1>
        <button className="ld-remove" onClick={() => setRemoveMode(!removeMode)}>
          {removeMode ? 'Done' : 'Remove'}
        </button>
      </div>
      <p className="ld-desc">These are the devices currently allowed to access your account</p>

      <div className="ld-list">
        {devices.map((d, i) => (
          <div key={i}>
            <div className="ld-device">
              {removeMode && (
                <button className="ld-x-btn" onClick={() => removeDevice(i)}>✕</button>
              )}
              <span className="ld-device-icon">{d.type === 'phone' ? '📱' : '💻'}</span>
              <span className="ld-device-name">{d.name}</span>
            </div>
            <div className="ld-details">
              <div className="ld-row"><span className="ld-key">Date:</span><span className="ld-val">{d.date}</span></div>
              <div className="ld-row"><span className="ld-key">Location:</span><span className="ld-val">{d.location}</span></div>
              <div className="ld-row"><span className="ld-key">IP:</span><span className="ld-val">{d.ip}</span></div>
            </div>
            {i < devices.length - 1 && <div className="ld-divider" />}
          </div>
        ))}
      </div>
    </div>
  )
}
