import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './WalletsPage.css'

import ngnFlag from '../assets/flag-nigeria.svg'
import eurFlag from '../assets/wallet-eur.png'
import gbpFlag from '../assets/wallet-gbp.png'
import usdFlag from '../assets/wallet-usd.png'
import aedFlag from '../assets/wallet-aed.png'
import brlFlag from '../assets/wallet-brl.png'
import zarFlag from '../assets/wallet-zar.png'
import kesFlag from '../assets/wallet-kes.png'
import walletMascot from '../assets/vulue-mascot.png'

const flags = {
  ngn: ngnFlag,
  eur: eurFlag,
  gbp: gbpFlag,
  usd: usdFlag,
  aed: aedFlag,
  brl: brlFlag,
  zar: zarFlag,
  kes: kesFlag,
}

import usdtIcon from '../assets/crypto-usdt.png'
import btcIcon from '../assets/crypto-btc.png'
import ethIcon from '../assets/crypto-eth.png'
import xrpIcon from '../assets/crypto-xrp.png'
import solIcon from '../assets/crypto-sol.png'
import trxIcon from '../assets/crypto-trx.png'
import polIcon from '../assets/crypto-pol.png'

const cryptoIcons = {
  usdt: usdtIcon,
  btc: btcIcon,
  eth: ethIcon,
  xrp: xrpIcon,
  sol: solIcon,
  trx: trxIcon,
  pol: polIcon,
}
const mascot = walletMascot

const wallets = [
  { flag: flags.ngn, label: 'Naira Wallet Balance', balance: '₦395,680.24', primary: true },
  { flag: flags.eur, label: 'Euro Wallet Balance', balance: '€0.00' },
  { flag: flags.gbp, label: 'Great British Pound Wallet Balance', balance: '£0.00' },
  { flag: flags.usd, label: 'U.S. Dollar Wallet Balance', balance: '$0.00' },
  { flag: flags.aed, label: 'United Arab Emirates Dirham Wallet Balance', balance: '$0.00' },
  { flag: flags.brl, label: 'Brazilian Real Wallet Balance', balance: 'R$0.00' },
  { flag: flags.zar, label: 'South Africa Rand Wallet Balance', balance: 'R0.00' },
  { flag: flags.kes, label: 'Kenyan Shilling Wallet Balance', balance: 'KSh0.00' },
]

const cryptoWallets = [
  { flag: cryptoIcons.usdt, label: 'USDT Wallet Balance', balance: '0.00', primary: true },
  { flag: cryptoIcons.btc, label: 'BTC Wallet Balance', balance: '£0.00' },
  { flag: cryptoIcons.eth, label: 'ETH Wallet Balance', balance: '$0.00' },
  { flag: cryptoIcons.xrp, label: 'XRP Wallet Balance', balance: 'HK$0.00' },
  { flag: cryptoIcons.sol, label: 'SOL Wallet Balance', balance: 'S$0.00' },
  { flag: cryptoIcons.trx, label: 'TRX Wallet Balance', balance: '$0.00' },
  { flag: cryptoIcons.pol, label: 'POL Wallet Balance', balance: 'R$0.00' },
]

export default function WalletsPage() {
  const navigate = useNavigate()
  const [tab, setTab] = useState('fiat')

  return (
    <div className="wallets-screen">
      <div className="wallets-header">
        <button className="back-btn" onClick={() => navigate('/home')} aria-label="Go back">
          <svg width="12" height="18" viewBox="0 0 8 14" fill="none"><path d="M7 1L1 7l6 6" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </button>
        <h1 className="wallets-title">My Wallets</h1>
      </div>

      <div className="wallets-tabs">
        <button className={`wtab${tab === 'fiat' ? ' active' : ''}`} onClick={() => setTab('fiat')}>Fiat</button>
        <button className={`wtab${tab === 'crypto' ? ' active' : ''}`} onClick={() => setTab('crypto')}>Crypto</button>
      </div>

      <div className="wallets-content">
        {tab === 'fiat' && (
          <div className="wallets-column">
            <p className="section-label">My Primary Fiat Wallet</p>
            <div className="wallet-list">
              {wallets.map((w, i) => (
                <div key={i} className={`wallet-row${w.primary ? ' primary' : ''}`}>
                  <img className="wallet-flag" src={w.flag} alt="" />
                  <div className="wallet-info">
                    <span className="wallet-label">{w.label}</span>
                    <span className="wallet-bal">{w.balance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === 'crypto' && (
          <div className="wallets-column">
            <p className="section-label">My Primary Crypto Wallet</p>
            <div className="wallet-list">
              {cryptoWallets.map((w, i) => (
                <div key={i} className={`wallet-row${w.primary ? ' primary' : ''}`}>
                  <img className="wallet-flag" src={w.flag} alt="" />
                  <div className="wallet-info">
                    <span className="wallet-label">{w.label}</span>
                    <span className="wallet-bal">{w.balance}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="wallets-column wallets-column-desktop">
          <p className="section-label">My Primary Fiat Wallet</p>
          <div className="wallet-list">
            {wallets.map((w, i) => (
              <div key={i} className={`wallet-row${w.primary ? ' primary' : ''}`}>
                <img className="wallet-flag" src={w.flag} alt="" />
                <div className="wallet-info">
                  <span className="wallet-label">{w.label}</span>
                  <span className="wallet-bal">{w.balance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="wallets-column wallets-column-desktop">
          <p className="section-label">My Primary Crypto Wallet</p>
          <div className="wallet-list">
            {cryptoWallets.map((w, i) => (
              <div key={i} className={`wallet-row${w.primary ? ' primary' : ''}`}>
                <img className="wallet-flag" src={w.flag} alt="" />
                <div className="wallet-info">
                  <span className="wallet-label">{w.label}</span>
                  <span className="wallet-bal">{w.balance}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wallets-brand">
        <img src={mascot} alt="" className="brand-icon" />
        <span className="brand-text">VULUE</span>
      </div>
    </div>
  )
}
