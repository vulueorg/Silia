import { HashRouter, Routes, Route } from 'react-router-dom'
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
    <HashRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<OverviewPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="funds" element={<FundsPage />} />
          <Route path="kyc" element={<KYCPage />} />
          <Route path="transactions" element={<TransactionsPage />} />
          <Route path="strategies" element={<StrategiesPage />} />
          <Route path="approvals" element={<ApprovalsPage />} />
          <Route path="analytics" element={<AnalyticsPage />} />
          <Route path="settings" element={<SettingsPage />} />
          <Route path="audit" element={<AuditLogPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
