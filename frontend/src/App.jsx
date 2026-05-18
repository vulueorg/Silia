import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LoginPage from './components/LoginPage'
import GPLayout from './components/gp/GPLayout'
import GPDashboardPage from './components/gp/GPDashboardPage'
import GPMyLPsPage from './components/gp/GPMyLPsPage'
import GPCommunicationsPage from './components/gp/GPCommunicationsPage'
import GPApprovalsPage from './components/gp/GPApprovalsPage'
import GPComingSoonPage from './components/gp/GPComingSoonPage'
import GPAnalyticsPage from './components/gp/GPAnalyticsPage'
import GPMembersPage from './components/gp/GPMembersPage'
import GPStrategiesPage from './components/gp/GPStrategiesPage'
import HomePortraitView from './components/HomePortraitView'
import NotificationsPage from './components/NotificationsPage'
import WalletsPage from './components/WalletsPage'
import TopUpPage from './components/TopUpPage'
import BankTransferPage from './components/BankTransferPage'
import TransferConfirmPage from './components/TransferConfirmPage'
import WithdrawPage from './components/WithdrawPage'
import WithdrawTransferPage from './components/WithdrawTransferPage'
import WithdrawConfirmPage from './components/WithdrawConfirmPage'
import RedeemPage from './components/RedeemPage'
import InternalTransferPage from './components/InternalTransferPage'
import MemberTransferPage from './components/MemberTransferPage'
import TransactionHistoryPage from './components/TransactionHistoryPage'
import CollabPage from './components/CollabPage'
import CreateCollabPage from './components/CreateCollabPage'
import CreatePlanPage from './components/CreatePlanPage'
import ChooseStrategiesPage from './components/ChooseStrategiesPage'
import PlanCreatedPage from './components/PlanCreatedPage'
import JoinPlanPage from './components/JoinPlanPage'
import SettingsPage from './components/SettingsPage'
import ProfilePage from './components/ProfilePage'
import PersonalInfoPage from './components/PersonalInfoPage'
import BankDetailsPage from './components/BankDetailsPage'
import NextOfKinPage from './components/NextOfKinPage'
import LanguagePage from './components/LanguagePage'
import AccountTypePage from './components/AccountTypePage'
import StatementsPage from './components/StatementsPage'
import SecuritySettingsPage from './components/SecuritySettingsPage'
import ChangePasswordPage from './components/ChangePasswordPage'
import AccountActivitiesPage from './components/AccountActivitiesPage'
import LinkedDevicesPage from './components/LinkedDevicesPage'
import LoginActivityPage from './components/LoginActivityPage'
import NgxPortfolioPage from './components/NgxPortfolioPage'
import NgxBreakdownPage from './components/NgxBreakdownPage'
import MinervaPage from './components/MinervaPage'
import MinervaPerformancePage from './components/MinervaPerformancePage'
import MinervaInvestPage from './components/MinervaInvestPage'
import PortfolioPage from './components/PortfolioPage'
import MarketsPage from './components/MarketsPage'
import MoneyMarketPage from './components/MoneyMarketPage'
import FXPage from './components/FXPage'
import BalancedPage from './components/BalancedPage'
import StrategyBasketsPage from './components/StrategyBasketsPage'
import SPVPage from './components/SPVPage'
import SoleRiskPage from './components/SoleRiskPage'

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
