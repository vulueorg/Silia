import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './components/layout/layout.jsx'
import OverviewPage from './components/pages/overview.jsx'
import UsersPage from './components/pages/users.jsx'
import FundsPage from './components/pages/funds.jsx'
import KYCPage from './components/pages/kyc.jsx'
import TransactionsPage from './components/pages/transactions.jsx'
import StrategiesPage from './components/pages/strategies.jsx'
import ApprovalsPage from './components/pages/approvals.jsx'
import AnalyticsPage from './components/pages/analytics.jsx'
import SettingsPage from './components/pages/settings.jsx'
import AuditLogPage from './components/pages/audit.jsx'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout><OverviewPage /></AdminLayout>} />
      <Route path="/users" element={<AdminLayout><UsersPage /></AdminLayout>} />
      <Route path="/funds" element={<AdminLayout><FundsPage /></AdminLayout>} />
      <Route path="/kyc" element={<AdminLayout><KYCPage /></AdminLayout>} />
      <Route path="/transactions" element={<AdminLayout><TransactionsPage /></AdminLayout>} />
      <Route path="/strategies" element={<AdminLayout><StrategiesPage /></AdminLayout>} />
      <Route path="/approvals" element={<AdminLayout><ApprovalsPage /></AdminLayout>} />
      <Route path="/analytics" element={<AdminLayout><AnalyticsPage /></AdminLayout>} />
      <Route path="/settings" element={<AdminLayout><SettingsPage /></AdminLayout>} />
      <Route path="/audit" element={<AdminLayout><AuditLogPage /></AdminLayout>} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
