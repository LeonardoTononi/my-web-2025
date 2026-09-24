import { chromium } from 'playwright';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.resolve(__dirname, '../static/projects');

const shots = [
	{ file: 'hotel-vittoria-shot.jpg', url: 'https://hotelvittoriamaderno.it/' },
	{ file: 'borgo-antico-shot.jpg', url: 'https://borgoanticoapartments.com/' },
	{ file: 'sitochefunziona-shot.jpg', url: 'https://www.sitochefunziona.it/' },
	{ file: 'bernardita-shot.jpg', url: 'https://www.terapiaconbernardita.com/' },
	{ file: 'joaquina-shot.jpg', url: 'https://www.joaquinatrainer.com/' }
];

const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({
	viewport: { width: 1440, height: 900 },
	deviceScaleFactor: 1,
	userAgent:
		'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
});

for (const shot of shots) {
	const page = await context.newPage();
	try {
		await page.goto(shot.url, { waitUntil: 'networkidle', timeout: 60000 });
		await page.waitForTimeout(1200);
		const dest = path.join(outDir, shot.file);
		await page.screenshot({ path: dest, type: 'jpeg', quality: 82, fullPage: false });
		console.log('ok', shot.file);
	} catch (err) {
		console.error('fail', shot.file, err.message);
	} finally {
		await page.close();
	}
}

await browser.close();
