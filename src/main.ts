/// <reference types="vite/client" />
import { isLanguage, setLanguage, translate } from './i18n';
import { initializeMotion } from './motion';

document.documentElement.classList.remove('no-script');
document.documentElement.classList.add('js');
function initializeWebsite(): () => void {
  const menuButton = document.querySelector<HTMLButtonElement>('#menu-toggle');
  const mobileNav = document.querySelector<HTMLElement>('#mobile-nav');
  const languageSelect = document.querySelector<HTMLSelectElement>('#language');
  const year = document.querySelector<HTMLElement>('#year');
  const listeners = new AbortController();
  const listenerOptions = { signal: listeners.signal };
  let menuOpen = false;

  function updateLabels(): void {
    menuButton?.setAttribute(
      'aria-label',
      translate(menuOpen ? 'menuClose' : 'menuOpen'),
    );
    languageSelect?.setAttribute('aria-label', translate('languageLabel'));
  }

  function setMenuOpen(open: boolean): void {
    menuOpen = open;
    menuButton?.setAttribute('aria-expanded', String(open));
    mobileNav?.classList.toggle('is-open', open);
    if (mobileNav) mobileNav.inert = !open;
    updateLabels();
  }

  menuButton?.addEventListener('click', () => setMenuOpen(!menuOpen), listenerOptions);
  mobileNav?.addEventListener(
    'click',
    (event) => {
      if (event.target instanceof Element && event.target.closest('a'))
        setMenuOpen(false);
    },
    listenerOptions,
  );
  document.addEventListener(
    'keydown',
    (event) => {
      if (event.key === 'Escape' && menuOpen) {
        setMenuOpen(false);
        menuButton?.focus();
      }
    },
    listenerOptions,
  );
  document.addEventListener(
    'click',
    (event) => {
      if (
        menuOpen &&
        event.target instanceof Node &&
        !mobileNav?.contains(event.target) &&
        !menuButton?.contains(event.target)
      )
        setMenuOpen(false);
    },
    listenerOptions,
  );
  languageSelect?.addEventListener(
    'change',
    () => {
      const language = languageSelect.value;
      if (isLanguage(language)) {
        setLanguage(language);
        updateLabels();
      }
    },
    listenerOptions,
  );
  if (year) year.textContent = String(new Date().getFullYear());
  const initialLanguage = languageSelect?.value ?? 'es';
  setLanguage(isLanguage(initialLanguage) ? initialLanguage : 'es');
  setMenuOpen(false);

  const disposeMotion = initializeMotion();

  function dispose(): void {
    listeners.abort();
    disposeMotion();
  }

  return dispose;
}

let disposeWebsite = initializeWebsite();
function handlePageHide(): void {
  disposeWebsite();
}
function handlePageShow(event: PageTransitionEvent): void {
  if (event.persisted) disposeWebsite = initializeWebsite();
}
window.addEventListener('pagehide', handlePageHide);
window.addEventListener('pageshow', handlePageShow);
if (import.meta.hot)
  import.meta.hot.dispose(() => {
    disposeWebsite();
    window.removeEventListener('pagehide', handlePageHide);
    window.removeEventListener('pageshow', handlePageShow);
  });
