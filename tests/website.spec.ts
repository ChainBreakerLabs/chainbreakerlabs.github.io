import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

test('loads the complete company story and only local resources', async ({ page }) => {
  const failures: string[] = [];
  const external: string[] = [];
  page.on('pageerror', (error) => failures.push(error.message));
  page.on('request', (request) => {
    if (!request.url().startsWith('http://127.0.0.1:4178/'))
      external.push(request.url());
  });
  await page.goto('/');
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Tu vida.Sin cadenas.',
  );
  await page.locator('#vision').scrollIntoViewIfNeeded();
  await expect(page.locator('.vision-pillar')).toHaveCount(3);
  await expect
    .poll(() =>
      page
        .locator('img')
        .evaluateAll((images) =>
          images.every(
            (image) =>
              image instanceof HTMLImageElement &&
              image.complete &&
              image.naturalWidth > 0,
          ),
        ),
    )
    .toBe(true);
  expect(external).toEqual([]);
  expect(failures).toEqual([]);
  const destinations = await page.locator('a[target="_blank"]').evaluateAll((links) =>
    links.map((link) => ({
      href: link.getAttribute('href'),
      rel: link.getAttribute('rel'),
    })),
  );
  expect(
    destinations.every(
      (link) =>
        link.href?.startsWith('https://chainbreakerlabs.com/infinyte-page-web/') &&
        link.rel?.includes('noopener') &&
        link.rel.includes('noreferrer'),
    ),
  ).toBe(true);
});

test('the main action navigates to the real product section', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('link', { name: 'Explora nuestro universo' }).click();
  await expect(page).toHaveURL(/#universe$/);
  await expect(
    page.getByRole('heading', { name: /^Una gran visión\.\s*Un comienzo real\.$/ }),
  ).toBeInViewport();
  await expect(
    page.getByRole('link', { name: 'Descubre Infinyte', exact: true }),
  ).toHaveAttribute('href', 'https://chainbreakerlabs.com/infinyte-page-web/');
});

test('mobile navigation closes with Escape, restores focus and follows anchors', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Abrir menú' });
  await toggle.click();
  await expect(
    page.getByRole('navigation', { name: 'Navegación móvil' }),
  ).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(toggle).toBeFocused();
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await toggle.click();
  await page
    .getByRole('navigation', { name: 'Navegación móvil' })
    .getByRole('link', { name: 'Nuestro universo' })
    .click();
  await expect(page).toHaveURL(/#universe$/);
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('#mobile-nav')).toHaveAttribute('inert', '');
});

test('history restoration resets an open menu and preserves the chosen language', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.getByLabel('Idioma', { exact: true }).selectOption('en');
  await page.getByRole('button', { name: 'Open menu' }).click();
  await expect(page.locator('#mobile-nav')).toBeVisible();
  // pagehide/pageshow are the browser boundary; production initialization runs unchanged.
  await page.evaluate(() => {
    window.dispatchEvent(new PageTransitionEvent('pagehide', { persisted: true }));
    window.dispatchEvent(new PageTransitionEvent('pageshow', { persisted: true }));
  });
  const toggle = page.getByRole('button', { name: /^(Open|Close) menu$/ });
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
});

test('scroll advances the visual chapters and reversing scroll restores the first chapter', async ({
  page,
}) => {
  await page.goto('/');
  async function scrollStory(progress: number): Promise<void> {
    await page.locator('#story').evaluate((element, position) => {
      const header = document.querySelector<HTMLElement>('#header');
      const headerHeight = header?.offsetHeight ?? 78;
      const distance = element.clientHeight - (window.innerHeight - headerHeight);
      window.scrollTo({
        top:
          element.getBoundingClientRect().top +
          window.scrollY -
          headerHeight +
          distance * position,
        behavior: 'instant',
      });
    }, progress);
  }
  for (const [progress, chapter, headline] of [
    [0.02, '01', 'El primer límite es el que aceptamos.'],
    [0.5, '02', 'Nada cambia. Hasta que tú cambias.'],
    [0.97, '03', 'El espacio que queda es tuyo para crear.'],
    [0.02, '01', 'El primer límite es el que aceptamos.'],
  ] as const) {
    await scrollStory(progress);
    await expect(page.locator('#story-current')).toHaveText(chapter);
    await expect(
      page.getByRole('heading', { name: headline, exact: true }),
    ).toBeInViewport();
  }
});

test('reduced motion exposes all chapters without requiring a pinned scroll', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  for (const heading of [
    'El primer límite es el que aceptamos.',
    'Nada cambia. Hasta que tú cambias.',
    'El espacio que queda es tuyo para crear.',
  ]) {
    await expect(
      page.getByRole('heading', { name: heading, exact: true }),
    ).toBeVisible();
  }
  expect(
    await page
      .locator('.story-sticky')
      .evaluate((element) => getComputedStyle(element).position),
  ).toBe('relative');
  await expect(page.locator('.story-progress')).toBeHidden();
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect(page.locator('#story-current')).toBeVisible();
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(
    page.getByRole('heading', {
      name: 'Nada cambia. Hasta que tú cambias.',
      exact: true,
    }),
  ).toBeVisible();
});

test('each supported language fits narrow screens and updates accessible controls', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 740 });
  await page.goto('/');
  for (const [language, title, menu] of [
    ['en', 'Your life.', 'Open menu'],
    ['pt', 'Sua vida.', 'Abrir menu'],
    ['es', 'Tu vida.', 'Abrir menú'],
  ] as const) {
    await page.locator('#language').selectOption(language);
    await expect(page.locator('html')).toHaveAttribute('lang', language);
    await expect(page.locator('.hero-line')).toHaveText(title);
    await expect(page.getByRole('button', { name: menu, exact: true })).toBeVisible();
    await page.evaluate(() => document.fonts.ready);
    const clipped = await page.locator('.hero-serif').evaluate((element) => {
      const range = document.createRange();
      range.selectNodeContents(element);
      return range.getBoundingClientRect().right > window.innerWidth - 4;
    });
    expect(clipped, `${language} hero title must remain fully readable`).toBe(false);
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth,
      ),
    ).toBe(false);
  }
});

test('the website remains silent during navigation and scrolling', async ({ page }) => {
  await page.addInitScript(() => {
    Object.defineProperty(window, 'AudioContext', {
      value: class {
        constructor() {
          throw new Error('Unexpected audio initialization');
        }
      },
      configurable: true,
    });
  });
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.goto('/');
  await expect(page.locator('audio, video, #sound-toggle')).toHaveCount(0);
  await page.getByRole('link', { name: 'Explora nuestro universo' }).click();
  await expect(page).toHaveURL(/#universe$/);
  await expect(page.locator('.phone-screen')).toHaveAttribute(
    'src',
    '/images/infinyte-dashboard.webp',
  );
  expect(errors).toEqual([]);
});

test('the content and product destination remain available without JavaScript', async ({
  browser,
}) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const page = await context.newPage();
  try {
    await page.goto('http://127.0.0.1:4178/');
    await expect(page.getByRole('heading', { level: 1 })).toHaveText(
      'Tu vida.Sin cadenas.',
    );
    for (const headline of [
      'El primer límite es el que aceptamos.',
      'Nada cambia. Hasta que tú cambias.',
      'El espacio que queda es tuyo para crear.',
    ])
      await expect(
        page.getByRole('heading', { name: headline, exact: true }),
      ).toBeVisible();
    await expect(
      page.getByRole('link', { name: 'Descubre Infinyte', exact: true }),
    ).toHaveAttribute('href', 'https://chainbreakerlabs.com/infinyte-page-web/');
  } finally {
    await context.close();
  }
});

test('visible content satisfies WCAG AA accessibility rules', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await page.locator('#vision').scrollIntoViewIfNeeded();
  const audit = await new AxeBuilder({ page })
    .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
    .analyze();
  expect(audit.violations).toEqual([]);
});
