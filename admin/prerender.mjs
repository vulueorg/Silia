import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  'users',
  'funds',
  'kyc',
  'transactions',
  'strategies',
  'approvals',
  'analytics',
  'settings',
  'audit',
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
