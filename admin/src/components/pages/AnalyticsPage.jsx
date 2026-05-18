import './AnalyticsPage.css'

const analyticsStats = [
  { label: 'Total AUM', value: '₦2.84B', sub: 'Across all funds' },
  { label: 'Monthly Inflow', value: '₦184M', sub: '+22% vs last month' },
  { label: 'Monthly Outflow', value: '₦47M', sub: '-8% vs last month' },
  { label: 'Active Investors', value: '1,089', sub: '87% of total users' },
]

const topFunds = [
  { name: 'Zenith Income Fund', gp: 'Chioma Obi', aum: '₦720,000,000', returnPct: '+14.2%' },
  { name: 'Alpha Growth Fund', gp: 'Emeka Nwosu', aum: '₦480,000,000', returnPct: '+11.8%' },
  { name: 'Nwosu Capital Partners', gp: 'Emeka Nwosu', aum: '₦210,000,000', returnPct: '+9.4%' },
  { name: 'Horizon Balanced Fund', gp: 'Babatunde Lawal', aum: '₦350,000,000', returnPct: '+7.6%' },
  { name: 'Garba Fixed Income', gp: 'Yusuf Garba', aum: '₦85,000,000', returnPct: '+6.1%' },
]

const userGrowth = [
  { month: 'Jan', signups: 82 },
  { month: 'Feb', signups: 105 },
  { month: 'Mar', signups: 134 },
  { month: 'Apr', signups: 118 },
  { month: 'May', signups: 162 },
  { month: 'Jun', signups: 198 },
]

const maxSignups = Math.max(...userGrowth.map((m) => m.signups))

export default function AnalyticsPage() {
  return (
    <div className="admin-analytics">
      {/* Stats row */}
      <div className="admin-analytics__stats">
        {analyticsStats.map((s) => (
          <div key={s.label} className="admin-analytics__stat-card">
            <div className="admin-analytics__stat-label">{s.label}</div>
            <div className="admin-analytics__stat-value">{s.value}</div>
            <div className="admin-analytics__stat-sub">{s.sub}</div>
          </div>
        ))}
      </div>

      <div className="admin-analytics__grid">
        {/* Top Performing Funds */}
        <div className="admin-card">
          <div className="admin-card__header">
            <h2 className="admin-card__title">Top Performing Funds</h2>
          </div>
          <div className="admin-table-wrap">
            <table className="admin-table" style={{ minWidth: 520 }}>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Fund Name</th>
                  <th>GP</th>
                  <th>AUM</th>
                  <th>Return</th>
                </tr>
              </thead>
              <tbody>
                {topFunds.map((f, i) => (
                  <tr key={f.name}>
                    <td className="admin-analytics__rank">{i + 1}</td>
                    <td>{f.name}</td>
                    <td className="admin-table__muted">{f.gp}</td>
                    <td className="admin-analytics__aum">{f.aum}</td>
                    <td className="admin-analytics__return">{f.returnPct}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* User Growth Chart */}
        <div className="admin-card">
          <div className="admin-card__header">
            <h2 className="admin-card__title">User Growth (Last 6 Months)</h2>
          </div>
          <div className="admin-analytics__chart">
            {userGrowth.map((m) => {
              const heightPct = (m.signups / maxSignups) * 100
              return (
                <div key={m.month} className="admin-analytics__bar-group">
                  <div className="admin-analytics__bar-value">{m.signups}</div>
                  <div className="admin-analytics__bar-wrap">
                    <div
                      className="admin-analytics__bar"
                      style={{ height: `${heightPct}%` }}
                    />
                  </div>
                  <div className="admin-analytics__bar-label">{m.month}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
