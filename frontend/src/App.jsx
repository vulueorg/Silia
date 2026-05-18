import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LoginPage from './components/login'
import GPLayout from './components/gp/layout'
import GPDashboardPage from './components/gp/dashboard'
import GPMyLPsPage from './components/gp/lps'
import GPCommunicationsPage from './components/gp/communications'
import GPApprovalsPage from './components/gp/approvals'
import GPComingSoonPage from './components/gp/coming-soon'
import GPAnalyticsPage from './components/gp/analytics'
import GPMembersPage from './components/gp/members'
import GPStrategiesPage from './components/gp/strategies'
import HomePortraitView from './components/home'
import NotificationsPage from './components/notifications'
import WalletsPage from './components/wallets'
import TopUpPage from './components/topup'
import BankTransferPage from './components/bank-transfer'
import TransferConfirmPage from './components/transfer-confirm'
import WithdrawPage from './components/withdraw'
import WithdrawTransferPage from './components/withdraw-transfer'
import WithdrawConfirmPage from './components/withdraw-confirm'
import RedeemPage from './components/redeem'
import InternalTransferPage from './components/internal-transfer'
import MemberTransferPage from './components/member-transfer'
import TransactionHistoryPage from './components/transaction-history'
import CollabPage from './components/collab'
import CreateCollabPage from './components/create-collab'
import CreatePlanPage from './components/create-plan'
import ChooseStrategiesPage from './components/choose-strategies'
import PlanCreatedPage from './components/plan-created'
import JoinPlanPage from './components/join-plan'
import SettingsPage from './components/settings'
import ProfilePage from './components/profile'
import PersonalInfoPage from './components/personal-info'
import BankDetailsPage from './components/bank-details'
import NextOfKinPage from './components/next-of-kin'
import LanguagePage from './components/language'
import AccountTypePage from './components/account-type'
import StatementsPage from './components/statements'
import SecuritySettingsPage from './components/security'
import ChangePasswordPage from './components/change-password'
import AccountActivitiesPage from './components/account-activities'
import LinkedDevicesPage from './components/linked-devices'
import LoginActivityPage from './components/login-activity'
import NgxPortfolioPage from './components/ngx-portfolio'
import NgxBreakdownPage from './components/ngx-breakdown'
import MinervaPage from './components/minerva'
import MinervaPerformancePage from './components/minerva-performance'
import MinervaInvestPage from './components/minerva-invest'
import PortfolioPage from './components/portfolio'
import MarketsPage from './components/markets'
import MoneyMarketPage from './components/money-market'
import FXPage from './components/fx'
import BalancedPage from './components/balanced'
import StrategyBasketsPage from './components/strategy-baskets'
import SPVPage from './components/spv'
import SoleRiskPage from './components/sole-risk'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePortraitView />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/wallets" element={<WalletsPage />} />
        <Route path="/topup" element={<TopUpPage />} />
        <Route path="/bank-transfer" element={<BankTransferPage />} />
        <Route path="/transfer-confirm" element={<TransferConfirmPage />} />
        <Route path="/withdraw" element={<WithdrawPage />} />
        <Route path="/withdraw-transfer" element={<WithdrawTransferPage />} />
        <Route path="/withdraw-confirm" element={<WithdrawConfirmPage />} />
        <Route path="/redeem" element={<RedeemPage />} />
        <Route path="/internal-transfer" element={<InternalTransferPage />} />
        <Route path="/member-transfer" element={<MemberTransferPage />} />
        <Route path="/transaction-history" element={<TransactionHistoryPage />} />
        <Route path="/collab" element={<CollabPage />} />
        <Route path="/create-collab" element={<CreateCollabPage />} />
        <Route path="/create-plan" element={<CreatePlanPage />} />
        <Route path="/choose-strategies" element={<ChooseStrategiesPage />} />
        <Route path="/plan-created" element={<PlanCreatedPage />} />
        <Route path="/join-plan" element={<JoinPlanPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/personal-info" element={<PersonalInfoPage />} />
        <Route path="/bank-details" element={<BankDetailsPage />} />
        <Route path="/next-of-kin" element={<NextOfKinPage />} />
        <Route path="/language" element={<LanguagePage />} />
        <Route path="/account-type" element={<AccountTypePage />} />
        <Route path="/statements" element={<StatementsPage />} />
        <Route path="/security" element={<SecuritySettingsPage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />
        <Route path="/account-activities" element={<AccountActivitiesPage />} />
        <Route path="/linked-devices" element={<LinkedDevicesPage />} />
        <Route path="/login-activity" element={<LoginActivityPage />} />
        <Route path="/ngx-portfolio" element={<NgxPortfolioPage />} />
        <Route path="/ngx-breakdown" element={<NgxBreakdownPage />} />
        <Route path="/minerva" element={<MinervaPage />} />
        <Route path="/minerva-performance" element={<MinervaPerformancePage />} />
        <Route path="/minerva-invest" element={<MinervaInvestPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/markets" element={<MarketsPage />} />
        <Route path="/markets/money-market" element={<MoneyMarketPage />} />
        <Route path="/markets/fx" element={<FXPage />} />
        <Route path="/markets/balanced" element={<BalancedPage />} />
        <Route path="/markets/strategy-baskets" element={<StrategyBasketsPage />} />
        <Route path="/markets/spv" element={<SPVPage />} />
        <Route path="/sole-risk" element={<SoleRiskPage />} />

        {/* GP Dashboard */}
        <Route path="/generalpartner" element={<GPLayout />}>
          <Route index element={<GPDashboardPage />} />
          <Route path="lps" element={<GPMyLPsPage />} />
          <Route path="communications" element={<GPCommunicationsPage />} />
          <Route path="approvals" element={<GPApprovalsPage />} />
          <Route path="members" element={<GPMembersPage />} />
          <Route path="strategies" element={<GPStrategiesPage />} />
          <Route path="collaborations" element={<GPComingSoonPage label="Collaborations" />} />
          <Route path="analytics" element={<GPAnalyticsPage />} />
          <Route path="reports" element={<GPComingSoonPage label="Reports" />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  )
}
