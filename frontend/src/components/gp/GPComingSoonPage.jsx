import { useOutletContext } from 'react-router-dom'

export default function GPComingSoonPage({ label }) {
  // Support both direct prop and outlet context
  const context = (() => {
    try {
      return useOutletContext()
    } catch {
      return null
    }
  })()

  const ComingSoon = context?.comingSoonPage

  if (ComingSoon) return <ComingSoon label={label} />

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: 'calc(100vh - 64px)',
      gap: 16,
      color: '#455a64',
      fontFamily: "'Anek Odia', sans-serif",
    }}>
      <div style={{
        width: 64, height: 64,
        background: '#18202b',
        borderRadius: 16,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2254d4" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      </div>
      <h2 style={{ fontSize: 22, fontWeight: 700, color: '#fff', margin: 0 }}>{label || 'Coming Soon'}</h2>
      <p style={{ fontSize: 14, color: '#94a3b8', margin: 0 }}>This section is coming soon. Stay tuned.</p>
    </div>
  )
}
