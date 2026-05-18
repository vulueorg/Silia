import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './spv.css'
import BottomNav from './bottom-nav'
import imgMinerva from '../assets/strat-minerva.png'
import imgCoronation from '../assets/coronation-triangle.svg'
import imgUnitedCapital from '../assets/image 289.png'
import imgAvaGam from '../assets/image 291.png'

const TABS = ['Strategies', 'Strategy Baskets', 'SPVs']
const SUB_TABS = ['Private Placement', 'Buy-outs', 'Infra-Project Finance', 'VC Financing', 'Private Market Secondaries', 'Growth Capital']

export default function SPVPage() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('SPVs')
  const [activeSubTab, setActiveSubTab] = useState('Private Placement')

  return (
    <div className="spv-screen">
      {/* Header */}
      <h1 className="spv-title">LP Plans</h1>
      <p className="spv-subtitle">
        Get to explore assets, strategies, strategy baskets made available to your LP
      </p>

      {/* Tab toggle */}
      <div className="spv-tab-bar">
        {TABS.map(tab => (
          <button
            key={tab}
            className={`spv-tab${activeTab === tab ? ' active' : ''}`}
            onClick={() => {
              if (tab === 'Strategies') navigate('/markets')
              else if (tab === 'Strategy Baskets') navigate('/markets/strategy-baskets')
              else setActiveTab(tab)
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Sub-nav */}
      <div className="spv-subnav-container">
        <div className="spv-subnav-row spv-subnav-top">
          {SUB_TABS.slice(0, 3).map(tab => (
            <button
              key={tab}
              className={`spv-subnav-btn${activeSubTab === tab ? ' active' : ''}`}
              onClick={() => setActiveSubTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="spv-subnav-row spv-subnav-bottom">
          {SUB_TABS.slice(3, 6).map(tab => (
            <button
              key={tab}
              className={`spv-subnav-btn${activeSubTab === tab ? ' active' : ''}${tab === 'Private Market Secondaries' ? ' spv-subnav-btn-wide spv-subnav-btn-blue' : ''}${tab === 'VC Financing' ? ' spv-subnav-btn-narrow' : ''}${tab === 'Growth Capital' ? ' spv-subnav-btn-growth' : ''}`}
              onClick={() => setActiveSubTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* SPV Cards */}
      {activeSubTab === 'Private Placement' && (
        <div className="spv-cards">
          {/* Minerva SPV Card */}
          <div className="spv-card">
            <div className="spv-card-img-wrap">
              <img src={imgMinerva} alt="Minerva" className="spv-card-img" />
            </div>
            <div className="spv-card-content">
              <h2 className="spv-card-name">Minerva</h2>
              <div className="spv-card-stat">
                <span className="spv-card-pct">4.56%</span>
                <span className="spv-card-period">up this month</span>
              </div>
              <button className="spv-card-link" onClick={() => navigate('/minerva')}>
                See my plans
              </button>
              <p className="spv-card-desc">
                Minerva SPV is backed by a close-ended Private Profit Participation Note for vetted independent analysts with knowledge of Securities Industry essentials, premium risk management protocols, sufficient track records on Quantamental-centric <span className="spv-card-desc-highlight">FX CFD Derivatives</span> Directional Trading. Starts from <strong>₦200,000</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubTab === 'Infra-Project Finance' && (
        <div className="spv-cards">
          {/* Coronation Infrastructure Card */}
          <div className="spv-infra-card spv-infra-card-dark">
            <div className="spv-infra-header">
              <h2 className="spv-infra-name">
                Coronation <span className="spv-infra-name-light">Infrastructure Participation Note</span>
              </h2>
              <img src={imgCoronation} alt="Coronation" className="spv-infra-logo" />
            </div>
            <div className="spv-infra-stat">
              <span className="spv-infra-pct">1.9%</span>
              <span className="spv-infra-period">up this month</span>
            </div>
            <button className="spv-infra-link" onClick={() => navigate('/portfolio')}>
              See my plans
            </button>
            <div className="spv-infra-desc-box">
              <p className="spv-infra-desc">
                Coronation Infra PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily Coronation issued Infrastructure Fund. Starts from <strong>₦1,000,000</strong>.
              </p>
            </div>
          </div>

          {/* United Capital Infrastructure Card */}
          <div className="spv-infra-card spv-infra-card-light">
            <div className="spv-infra-header">
              <h2 className="spv-infra-name spv-infra-name-red">
                United Capital <span className="spv-infra-name-light">Infrastructure Participation Note</span>
              </h2>
              <img src={imgUnitedCapital} alt="United Capital" className="spv-infra-logo" />
            </div>
            <div className="spv-infra-stat">
              <span className="spv-infra-pct spv-infra-pct-red">2.05%</span>
              <span className="spv-infra-period spv-infra-period-red">up this month</span>
            </div>
            <button className="spv-infra-link spv-infra-link-red" onClick={() => navigate('/portfolio')}>
              See my plans
            </button>
            <div className="spv-infra-desc-box">
              <p className="spv-infra-desc">
                United Capital Infra PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily United Capital issued Infrastructure Fund. Starts from <strong>₦50,000,000</strong>.
              </p>
            </div>
          </div>

          {/* AVA GAM Infrastructure Card */}
          <div className="spv-infra-card spv-infra-card-light">
            <div className="spv-infra-header">
              <h2 className="spv-infra-name spv-infra-name-purple">
                AVA GAM <span className="spv-infra-name-light">Infrastructure Participation Note</span>
              </h2>
              <img src={imgAvaGam} alt="AVA GAM" className="spv-infra-logo" />
            </div>
            <div className="spv-infra-stat">
              <span className="spv-infra-pct spv-infra-pct-purple">2.05%</span>
              <span className="spv-infra-period spv-infra-period-purple">up this month</span>
            </div>
            <button className="spv-infra-link spv-infra-link-purple" onClick={() => navigate('/portfolio')}>
              See my plans
            </button>
            <div className="spv-infra-desc-box">
              <p className="spv-infra-desc">
                AVA GAM Infra PPN is backed by a Private Profit Participation Note for Profit Before Tax Share in PP LLP investing activities in primarily AVA GAM issued Infrastructure Fund. Starts from <strong>₦1,000,000</strong>.
              </p>
            </div>
          </div>
        </div>
      )}

      {activeSubTab !== 'Private Placement' && activeSubTab !== 'Infra-Project Finance' && (
        <p className="spv-empty">No {activeSubTab} SPVs available yet.</p>
      )}

      {/* Disclaimer */}
      <div className="spv-disclaimer">
        <p>
          <strong>DISCLAIMER</strong><br /><br />
          The strategies herein are solely provided within the context of a private placement basis, as a proprietary capital firm, with its pioneer and intending members and limited partners solely.<br /><br />
          The information provided on this platform is intended solely to demonstrate the types of products available on the Vulue platform and is subject to change in future. Notwithstanding the proper and reasonable care that has been exercised in the preparation of this report, no responsibility or liability is accepted by Vulue, its employees nor its affiliates for any error, omission or opinion expressed or implied here. The instrument, vehicle, security, strategy, or process description is not intended to serve as an investment advise and should not be regarded as such. Without any exceptions, Vulue makes no representations, warranties and assumes no obligations with regard to any strategy and/or performance within its ecosystem.<br /><br />
          Investing involves risks, including illiquidity and the loss of capital and should be done with full acknowledgement that historical returns or expected returns are hypothetical in nature and may not reflect actual future performance of strategies provided. Please read our Client Agreements. Note that listed financial and non-financial instruments, strategies, strategy baskets, SPVs and other structured products, unlike deposits are not insured by NDIC before investing.<br /><br />
          <a href="mailto:contact@vulue.ng" className="spv-disclaimer-link">contact@vulue.ng</a>
        </p>
      </div>

      <BottomNav />
    </div>
  )
}
