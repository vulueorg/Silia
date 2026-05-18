import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import './BottomNav.css'
import navHomeIcon from '../assets/Group 5001.svg'
import navHomeInactiveIcon from '../assets/Group 5004.svg'
import navMenuIcon from '../assets/Group 5000.svg'
import navWalletIcon from '../assets/Group 5002.svg'
import navWalletActiveIcon from '../assets/Group 5005.svg'
import navProfileIcon from '../assets/Group 5003.svg'
import navProfileActiveIcon from '../assets/Group 5006.svg'

export default function BottomNav() {
  const navigate = useNavigate()
  const location = useLocation()
  const [activeTab, setActiveTab] = useState('home')
  const [showInvestModal, setShowInvestModal] = useState(false)

  // Update active tab based on current route
  useEffect(() => {
    if (location.pathname === '/home' || location.pathname === '/') {
      setActiveTab('home')
    } else if (location.pathname === '/settings' || location.pathname.startsWith('/settings')) {
      setActiveTab('account')
    } else if (location.pathname === '/portfolio' || location.pathname === '/ngx-breakdown') {
      setActiveTab('portfolio')
    } else if (location.pathname === '/markets' || location.pathname === '/sole-risk' || location.pathname.startsWith('/markets/')) {
      setActiveTab('markets')
    }
  }, [location.pathname])

  const handleNavigation = (tab, route) => {
    setActiveTab(tab)
    if (route) {
      navigate(route)
    }
  }

  const [activeInvestOption, setActiveInvestOption] = useState(null)

  // Sync invest option with current route when modal opens
  const handleInvestClick = () => {
    setActiveTab('markets')
    if (location.pathname === '/markets') setActiveInvestOption('lp')
    else if (location.pathname === '/sole-risk') setActiveInvestOption('solo')
    else setActiveInvestOption(null)
    setShowInvestModal(true)
  }

  return (
    <>
      <nav className="bottom-nav">
        <div className="bottom-nav-glass" />
        <div className="bottom-nav-content">
          <button 
            className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
            onClick={() => handleNavigation('home', '/home')}
          >
            <div className="nav-icon">
              <img src={activeTab === 'home' ? navHomeIcon : navHomeInactiveIcon} alt="Home" className="nav-icon-img" />
              <span className="nav-label">Home</span>
            </div>
          </button>
          <button 
            className={`nav-item ${activeTab === 'markets' ? 'active' : ''}`}
            onClick={handleInvestClick}
          >
            <div className="nav-icon">
              <img src={navMenuIcon} alt="Invest" className="nav-icon-img" />
              <span className="nav-label">Invest</span>
            </div>
          </button>
          <button 
            className={`nav-item ${activeTab === 'portfolio' ? 'active' : ''}`}
            onClick={() => handleNavigation('portfolio', '/portfolio')}
          >
            <div className="nav-icon">
              <img src={activeTab === 'portfolio' ? navWalletActiveIcon : navWalletIcon} alt="Portfolio" className="nav-icon-img" />
              <span className="nav-label">Portfolio</span>
            </div>
          </button>
          <button 
            className={`nav-item ${activeTab === 'account' ? 'active' : ''}`}
            onClick={() => handleNavigation('account', '/settings')}
          >
            <div className="nav-icon">
              <img src={activeTab === 'account' ? navProfileActiveIcon : navProfileIcon} alt="Account" className="nav-icon-img" />
              <span className="nav-label">Account</span>
            </div>
          </button>
        </div>
      </nav>

      {/* Invest Modal */}
      {showInvestModal && (
        <div className="invest-modal-overlay" onClick={() => setShowInvestModal(false)}>
          <div className="invest-modal" onClick={(e) => e.stopPropagation()}>
            <div className="invest-modal-content">
              <button 
                className={`invest-modal-option ${activeInvestOption === 'lp' ? 'invest-modal-option-active' : ''}`}
                onClick={() => {
                  setActiveInvestOption('lp')
                  setShowInvestModal(false)
                  navigate('/markets')
                }}
              >
                Invest with my LP
              </button>
              <button 
                className={`invest-modal-option ${activeInvestOption === 'solo' ? 'invest-modal-option-active' : ''}`}
                onClick={() => {
                  setActiveInvestOption('solo')
                  setShowInvestModal(false)
                  navigate('/sole-risk')
                }}
              >
                Invest by myself
              </button>
              <button 
                className={`invest-modal-option ${activeInvestOption === 'others' ? 'invest-modal-option-active' : ''}`}
                onClick={() => {
                  setActiveInvestOption('others')
                  setShowInvestModal(false)
                }}
              >
                Invest with others
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
