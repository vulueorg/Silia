import { useState } from 'react'
import './SettingsPage.css'

export default function SettingsPage() {
  const [fees, setFees] = useState({ management: '1.5', performance: '20' })
  const [flags, setFlags] = useState({
    newRegistrations: true,
    kycRequired: true,
    maintenanceMode: false,
  })
  const [notifications, setNotifications] = useState({
    newUser: true,
    kycSubmission: true,
    largeTransaction: true,
    fundLaunch: false,
    systemAlerts: true,
  })
  const [saved, setSaved] = useState(false)

  function handleSave() {
    setSaved(true)
    setTimeout(() => setSaved(false), 2500)
  }

  return (
    <div className="admin-settings">
      {/* Platform Fees */}
      <div className="admin-settings__section">
        <div className="admin-settings__section-header">
          <h2 className="admin-settings__section-title">Platform Fees</h2>
          <p className="admin-settings__section-desc">Configure the default fee structure applied to all funds on the platform.</p>
        </div>
        <div className="admin-settings__fields">
          <div className="admin-settings__field">
            <label className="admin-settings__label">Management Fee (%)</label>
            <div className="admin-settings__input-wrap">
              <input
                type="number"
                className="admin-settings__input"
                value={fees.management}
                min="0"
                max="10"
                step="0.1"
                onChange={(e) => setFees({ ...fees, management: e.target.value })}
              />
              <span className="admin-settings__input-suffix">%</span>
            </div>
            <span className="admin-settings__hint">Annual management fee charged on AUM</span>
          </div>
          <div className="admin-settings__field">
            <label className="admin-settings__label">Performance Fee (%)</label>
            <div className="admin-settings__input-wrap">
              <input
                type="number"
                className="admin-settings__input"
                value={fees.performance}
                min="0"
                max="50"
                step="1"
                onChange={(e) => setFees({ ...fees, performance: e.target.value })}
              />
              <span className="admin-settings__input-suffix">%</span>
            </div>
            <span className="admin-settings__hint">Fee charged on profits above the hurdle rate</span>
          </div>
        </div>
      </div>

      {/* Feature Flags */}
      <div className="admin-settings__section">
        <div className="admin-settings__section-header">
          <h2 className="admin-settings__section-title">Feature Flags</h2>
          <p className="admin-settings__section-desc">Enable or disable platform features globally.</p>
        </div>
        <div className="admin-settings__toggles">
          <div className="admin-settings__toggle-row">
            <div className="admin-settings__toggle-info">
              <span className="admin-settings__toggle-label">New Registrations</span>
              <span className="admin-settings__toggle-desc">Allow new users to register on the platform</span>
            </div>
            <button
              className={`admin-toggle ${flags.newRegistrations ? 'admin-toggle--on' : ''}`}
              onClick={() => setFlags({ ...flags, newRegistrations: !flags.newRegistrations })}
              aria-label="Toggle new registrations"
            >
              <span className="admin-toggle__thumb" />
            </button>
          </div>
          <div className="admin-settings__toggle-row">
            <div className="admin-settings__toggle-info">
              <span className="admin-settings__toggle-label">KYC Required</span>
              <span className="admin-settings__toggle-desc">Require KYC verification before investing</span>
            </div>
            <button
              className={`admin-toggle ${flags.kycRequired ? 'admin-toggle--on' : ''}`}
              onClick={() => setFlags({ ...flags, kycRequired: !flags.kycRequired })}
              aria-label="Toggle KYC requirement"
            >
              <span className="admin-toggle__thumb" />
            </button>
          </div>
          <div className="admin-settings__toggle-row admin-settings__toggle-row--danger">
            <div className="admin-settings__toggle-info">
              <span className="admin-settings__toggle-label">Maintenance Mode</span>
              <span className="admin-settings__toggle-desc">Take the platform offline for maintenance</span>
            </div>
            <button
              className={`admin-toggle ${flags.maintenanceMode ? 'admin-toggle--on admin-toggle--danger' : ''}`}
              onClick={() => setFlags({ ...flags, maintenanceMode: !flags.maintenanceMode })}
              aria-label="Toggle maintenance mode"
            >
              <span className="admin-toggle__thumb" />
            </button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="admin-settings__section">
        <div className="admin-settings__section-header">
          <h2 className="admin-settings__section-title">Notification Settings</h2>
          <p className="admin-settings__section-desc">Choose which events trigger admin notifications.</p>
        </div>
        <div className="admin-settings__checkboxes">
          {[
            { key: 'newUser', label: 'New user registration' },
            { key: 'kycSubmission', label: 'KYC document submitted' },
            { key: 'largeTransaction', label: 'Large transaction (>₦1M)' },
            { key: 'fundLaunch', label: 'New fund launch request' },
            { key: 'systemAlerts', label: 'System alerts and errors' },
          ].map(({ key, label }) => (
            <label key={key} className="admin-settings__checkbox-row">
              <input
                type="checkbox"
                className="admin-settings__checkbox"
                checked={notifications[key]}
                onChange={() => setNotifications({ ...notifications, [key]: !notifications[key] })}
              />
              <span className="admin-settings__checkbox-label">{label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Save */}
      <div className="admin-settings__footer">
        {saved && (
          <span className="admin-settings__saved-msg">
            ✓ Settings saved successfully
          </span>
        )}
        <button className="admin-btn admin-btn--primary" onClick={handleSave}>
          Save Changes
        </button>
      </div>
    </div>
  )
}
