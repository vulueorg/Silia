import { useState, useEffect } from 'react'
import { useNavigate, useLocation, Outlet } from 'react-router-dom'
import vulueMascot from '../../assets/vulue-mascot.png'
import './GPLayout.css'

// ── Inline SVG Icons ──────────────────────────────────────────────────────────

const HouseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z"/>
    <path d="M9 21V12h6v9"/>
  </svg>
)

const BuildingIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>
  </svg>
)

const PeopleIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="7" r="3"/>
    <path d="M3 21v-2a4 4 0 014-4h4a4 4 0 014 4v2"/>
    <path d="M16 3.13a4 4 0 010 7.75"/>
    <path d="M21 21v-2a4 4 0 00-3-3.87"/>
  </svg>
)

const TargetIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="5"/>
    <circle cx="12" cy="12" r="1" fill="currentColor"/>
  </svg>
)

const CollabIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="7" cy="8" r="3"/>
    <circle cx="17" cy="8" r="3"/>
    <path d="M1 20v-1a5 5 0 015-5h4"/>
    <path d="M14 20v-1a5 5 0 015-5h0a5 5 0 015 5v1"/>
  </svg>
)

const ChatIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
  </svg>
)

const ClipboardIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1"/>
    <path d="M16 4h2a2 2 0 012 2v14a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2h2"/>
    <path d="M9 12h6M9 16h4"/>
  </svg>
)

const BarChartIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="9"/>
    <rect x="10" y="7" width="4" height="14"/>
    <rect x="17" y="3" width="4" height="18"/>
  </svg>
)

const DocumentIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
    <path d="M14 2v6h6M9 13h6M9 17h4"/>
  </svg>
)

const MenuIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M3 6h18M3 12h18M3 18h18"/>
  </svg>
)

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M18 6L6 18M6 6l12 12"/>
  </svg>
)

const LogoutIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4"/>
    <polyline points="16 17 21 12 16 7"/>
    <line x1="21" y1="12" x2="9" y2="12"/>
  </svg>
)

// ── Nav config ────────────────────────────────────────────────────────────────

const NAV_ITEMS = [
  { label: 'Dashboard',       path: '/generalpartner',                icon: HouseIcon,     comingSoon: false },
  { label: 'My LPs',          path: '/generalpartner/lps',            icon: BuildingIcon,  comingSoon: false },
  { label: 'Members',         path: '/generalpartner/members',        icon: PeopleIcon,    comingSoon: false },
  { label: 'Strategies',      path: '/generalpartner/strategies',     icon: TargetIcon,    comingSoon: false },
  { label: 'Collaborations',  path: '/generalpartner/collaborations', icon: CollabIcon,    comingSoon: true  },
  { label: 'Communications',  path: '/generalpartner/communications', icon: ChatIcon,      comingSoon: false },
  { label: 'Approvals',       path: '/generalpartner/approvals',      icon: ClipboardIcon, comingSoon: false },
  { label: 'Analytics',       path: '/generalpartner/analytics',      icon: BarChartIcon,  comingSoon: false },
  { label: 'Reports',         path: '/generalpartner/reports',        icon: DocumentIcon,  comingSoon: true  },
]

// ── Coming Soon page ──────────────────────────────────────────────────────────

function ComingSoonPage({ label }) {
  return (
    <div className="gp-coming-soon">
      <div className="gp-coming-soon-icon">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2254d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      </div>
      <h2>{label}</h2>
      <p>This section is coming soon. Stay tuned.</p>
    </div>
  )
}

// ── GPLayout ──────────────────────────────────────────────────────────────────

export default function GPLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false)
      }
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const currentNav = NAV_ITEMS.find(item => {
    if (item.path === '/generalpartner') {
      return location.pathname === '/generalpartner' || location.pathname === '/generalpartner/'
    }
    return location.pathname.startsWith(item.path)
  })

  const handleNavClick = (item) => {
    if (item.comingSoon) {
      // Navigate to a coming-soon sub-path handled by the outlet
      navigate(item.path)
    } else {
      navigate(item.path)
    }
    if (window.innerWidth < 768) setMobileOpen(false)
  }

  const toggleSidebar = () => {
    if (window.innerWidth < 768) {
      setMobileOpen(prev => !prev)
    } else {
      setCollapsed(prev => !prev)
    }
  }

  return (
    <div className="gp-layout">
      {/* Mobile overlay */}
      <div
        className={`gp-sidebar-overlay${mobileOpen ? ' visible' : ''}`}
        onClick={() => setMobileOpen(false)}
      />

      {/* Sidebar */}
      <aside className={`gp-sidebar${collapsed ? ' collapsed' : ''}${mobileOpen ? ' mobile-open' : ''}`}>
        {/* Brand */}
        <div className="gp-sidebar-brand">
          <div className="gp-brand-logo">
            <img src={vulueMascot} alt="Vulue" className="gp-brand-mascot" />
          </div>
          <div className="gp-brand-text">
            <span className="gp-brand-name">Vulue</span>
            <span className="gp-brand-role">General Partner</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="gp-sidebar-nav">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = currentNav?.path === item.path
            return (
              <button
                key={item.path}
                className={`gp-nav-item${isActive ? ' active' : ''}`}
                onClick={() => handleNavClick(item)}
                title={collapsed ? item.label : undefined}
              >
                <span className="gp-nav-icon"><Icon /></span>
                <span className="gp-nav-label">{item.label}</span>
                {item.comingSoon && <span className="gp-nav-badge">Soon</span>}
              </button>
            )
          })}
        </nav>

        {/* Footer */}
        <div className="gp-sidebar-footer">
          <div className="gp-sidebar-avatar">
            <img src={vulueMascot} alt="" className="gp-brand-mascot" />
          </div>
          <div className="gp-sidebar-user-info">
            <div className="gp-sidebar-user-name">Ekwe Yeosuf</div>
            <div className="gp-sidebar-user-role">General Partner</div>
          </div>
        </div>
      </aside>

      {/* Topbar */}
      <header className={`gp-topbar${collapsed ? ' sidebar-collapsed' : ''}`}>
        <div className="gp-topbar-left">
          <button className="gp-toggle-btn" onClick={toggleSidebar} aria-label="Toggle sidebar">
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
          <span className="gp-topbar-title">{currentNav?.label || 'General Partner'}</span>
        </div>
        <div className="gp-topbar-right">
          <div className="gp-topbar-user">
            <div className="gp-topbar-avatar">
              <img src={vulueMascot} alt="" className="gp-brand-mascot" />
            </div>
            <span className="gp-topbar-name">Ekwe Yeosuf</span>
          </div>
          <button className="gp-logout-btn" onClick={() => navigate('/')}>
            <LogoutIcon /> Logout
          </button>
        </div>
      </header>

      {/* Main content */}
      <main className={`gp-main${collapsed ? ' sidebar-collapsed' : ''}`}>
        <Outlet context={{ comingSoonPage: ComingSoonPage }} />
      </main>
    </div>
  )
}
