import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = resolve(__dirname, '../public/resume.html');
const pdfPath  = resolve(__dirname, '../public/resume.pdf');

const browser = await puppeteer.launch({ headless: true });
const page    = await browser.newPage();

await page.goto(`file:///${htmlPath.replace(/\\/g, '/')}`, { waitUntil: 'networkidle0' });

await page.pdf({
  path: pdfPath,
  format: 'A4',
  printBackground: true,
  margin: { top: '0.5in', bottom: '0.5in', left: '0.6in', right: '0.6in' },
  displayHeaderFooter: false,
});

await browser.close();
console.log('PDF generated at:', pdfPath);
