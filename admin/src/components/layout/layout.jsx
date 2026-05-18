import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './layout.css'
import vulueMascot from '../../assets/vulue-mascot.png'

const navItems = [
  {
    label: 'Overview',
    path: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    label: 'Users',
    path: '/users',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    label: 'Funds',
    path: '/funds',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9v.01" />
        <path d="M9 12v.01" />
        <path d="M9 15v.01" />
        <path d="M9 18v.01" />
      </svg>
    ),
  },
  {
    label: 'KYC & Compliance',
    path: '/kyc',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
  },
  {
    label: 'Transactions',
    path: '/transactions',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
  {
    label: 'Strategies',
    path: '/strategies',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    label: 'Approvals',
    path: '/approvals',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M9 14l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Analytics',
    path: '/analytics',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    label: 'Settings',
    path: '/settings',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
  },
  {
    label: 'Audit Log',
    path: '/audit',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

const pageTitles = {
  '/': 'Overview',
  '/users': 'Users',
  '/funds': 'Funds',
  '/kyc': 'KYC & Compliance',
  '/transactions': 'Transactions',
  '/strategies': 'Strategies',
  '/approvals': 'Approvals',
  '/analytics': 'Analytics',
  '/settings': 'Settings',
  '/audit': 'Audit Log',
}

export default function AdminLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
  const location = useLocation()

  const pageTitle = pageTitles[location.pathname] || 'Admin'

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className={`admin-layout ${collapsed ? 'admin-layout--collapsed' : ''}`}>
      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="admin-overlay"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${mobileOpen ? 'admin-sidebar--mobile-open' : ''}`}>
        {/* Brand */}
        <div className="admin-sidebar__brand">
          <div className="admin-sidebar__brand-icon">
            <img src={vulueMascot} alt="Vulue" className="admin-brand-mascot" />
          </div>
          {!collapsed && (
            <div className="admin-sidebar__brand-text">
              <span className="admin-sidebar__brand-name">Silia</span>
              <span className="admin-sidebar__brand-sub">Admin Panel</span>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="admin-sidebar__nav">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `admin-sidebar__nav-item ${isActive ? 'admin-sidebar__nav-item--active' : ''}`
              }
              title={collapsed ? item.label : undefined}
            >
              <span className="admin-sidebar__nav-icon">{item.icon}</span>
              {!collapsed && (
                <span className="admin-sidebar__nav-label">{item.label}</span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* User info */}
        {!collapsed && (
          <div className="admin-sidebar__user">
            <div className="admin-sidebar__user-avatar">
              <img src={vulueMascot} alt="Admin" className="admin-brand-mascot" />
            </div>
            <div className="admin-sidebar__user-info">
              <span className="admin-sidebar__user-name">Super Admin</span>
              <span className="admin-sidebar__user-role">Administrator</span>
            </div>
          </div>
        )}
        {collapsed && (
          <div className="admin-sidebar__user admin-sidebar__user--collapsed">
            <div className="admin-sidebar__user-avatar">
              <img src={vulueMascot} alt="Admin" className="admin-brand-mascot" />
            </div>
          </div>
        )}
      </aside>

      {/* Topbar */}
      <header className="admin-topbar">
        <div className="admin-topbar__left">
          <button
            className="admin-topbar__hamburger"
            onClick={() => {
              if (isMobile) {
                setMobileOpen(prev => !prev)
              } else {
                setCollapsed(prev => !prev)
              }
            }}
            aria-label="Toggle sidebar"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          </button>
          <h1 className="admin-topbar__title">{pageTitle}</h1>
        </div>
        <div className="admin-topbar__right">
          <button className="admin-topbar__icon-btn" aria-label="Notifications">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" />
            </svg>
            <span className="admin-topbar__badge">3</span>
          </button>
          <div className="admin-topbar__user">
            <div className="admin-topbar__avatar">
              <img src={vulueMascot} alt="Admin" className="admin-brand-mascot" />
            </div>
            <span className="admin-topbar__username">Admin</span>
          </div>
          <button className="admin-topbar__logout">Logout</button>
        </div>
      </header>

      {/* Main content */}
      <main className="admin-main">
        {children}
      </main>
    </div>
  )
}
