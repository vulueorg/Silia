import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  'home',
  'notifications',
  'wallets',
  'topup',
  'bank-transfer',
  'transfer-confirm',
  'withdraw',
  'withdraw-transfer',
  'withdraw-confirm',
  'redeem',
  'internal-transfer',
  'member-transfer',
  'transaction-history',
  'collab',
  'create-collab',
  'create-plan',
  'choose-strategies',
  'plan-created',
  'join-plan',
  'settings',
  'profile',
  'personal-info',
  'bank-details',
  'next-of-kin',
  'language',
  'account-type',
  'statements',
  'security',
  'change-password',
  'account-activities',
  'linked-devices',
  'login-activity',
  'ngx-portfolio',
  'ngx-breakdown',
  'minerva',
  'minerva-performance',
  'minerva-invest',
  'portfolio',
  'markets',
  'sole-risk',
  'generalpartner',
  'generalpartner/lps',
  'generalpartner/communications',
  'generalpartner/approvals',
  'generalpartner/members',
  'generalpartner/strategies',
  'generalpartner/collaborations',
  'generalpartner/analytics',
  'generalpartner/reports',
  'markets/money-market',
  'markets/fx',
  'markets/balanced',
  'markets/strategy-baskets',
  'markets/spv',
];

const distDir = path.resolve(__dirname, 'dist');
const indexHtml = path.join(distDir, 'index.html');

if (!fs.existsSync(indexHtml)) {
  console.error('dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const html = fs.readFileSync(indexHtml, 'utf-8');

for (const route of routes) {
  const dir = path.join(distDir, route);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), html);
  console.log(`✅ ${route}/index.html`);
}

console.log('\nDone — all route directories created.');
