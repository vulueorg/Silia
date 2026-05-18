import { Routes, Route, Navigate } from 'react-router-dom'
import AdminLayout from './components/layout/AdminLayout.jsx'
import OverviewPage from './components/pages/OverviewPage.jsx'
import UsersPage from './components/pages/UsersPage.jsx'
import FundsPage from './components/pages/FundsPage.jsx'
import KYCPage from './components/pages/KYCPage.jsx'
import TransactionsPage from './components/pages/TransactionsPage.jsx'
import StrategiesPage from './components/pages/StrategiesPage.jsx'
import ApprovalsPage from './components/pages/ApprovalsPage.jsx'
import AnalyticsPage from './components/pages/AnalyticsPage.jsx'
import SettingsPage from './components/pages/SettingsPage.jsx'
import AuditLogPage from './components/pages/AuditLogPage.jsx'

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
