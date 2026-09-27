import { chromium, expect } from '@playwright/test';
import { mkdir, writeFile } from 'node:fs/promises';

const output = '/private/tmp/chainbreaker-visual-qa';
await mkdir(output, { recursive: true });
const browser = await chromium.launch({
  executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
});
const errors = [];
try {
  for (const [name, width, height] of [
    ['desktop', 1440, 1000],
    ['mobile', 390, 844],
    ['small-mobile', 320, 740],
    ['tablet', 768, 1024],
  ]) {
    const page = await browser.newPage({
      viewport: { width, height },
      deviceScaleFactor: 1,
    });
    page.on('pageerror', (error) => errors.push(`${name}: ${error.message}`));
    await page.goto('http://127.0.0.1:4178/', { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    await page.screenshot({ path: `${output}/${name}-hero.png` });
    await page.locator('#universe').scrollIntoViewIfNeeded();
    await page.locator('.product-card').scrollIntoViewIfNeeded();
    await expect(page.locator('.product-card')).not.toHaveClass(/is-pending/);
    await expect(page.locator('.product-card')).toHaveCSS('opacity', '1');
    await page
      .locator('.product-card')
      .screenshot({ path: `${output}/${name}-product.png` });
    await page.locator('#vision').scrollIntoViewIfNeeded();
    for (const element of await page.locator('#vision .reveal').all()) {
      await element.scrollIntoViewIfNeeded();
      await expect(element).not.toHaveClass(/is-pending/);
      await expect(element).toHaveCSS('opacity', '1');
    }
    await page.locator('#vision').screenshot({ path: `${output}/${name}-vision.png` });
    await page.locator('#story').evaluate((element) => {
      const headerHeight = document.querySelector('#header').offsetHeight;
      const distance = element.offsetHeight - (window.innerHeight - headerHeight);
      window.scrollTo({
        top:
          element.getBoundingClientRect().top +
          window.scrollY -
          headerHeight +
          distance * 0.5,
        behavior: 'instant',
      });
    });
    await page.waitForFunction(() => {
      const caption = document.querySelector('.story-caption.is-current');
      return (
        caption?.getAttribute('data-chapter') === '1' &&
        getComputedStyle(caption).opacity === '1'
      );
    });
    await page.screenshot({ path: `${output}/${name}-story.png` });
    const overflow = await page.evaluate(
      () => document.documentElement.scrollWidth > window.innerWidth,
    );
    const loadedImages = await page
      .locator('img')
      .evaluateAll((images) =>
        images.every((image) => image.complete && image.naturalWidth > 0),
      );
    console.log(JSON.stringify({ name, overflow, loadedImages }));
    await page.close();
  }
  await writeFile(`${output}/errors.json`, JSON.stringify(errors, null, 2));
  if (errors.length) throw new Error(errors.join('\n'));
} finally {
  await browser.close();
}
