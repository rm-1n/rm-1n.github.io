'use strict';
document.documentElement.classList.add('js');
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
const mobile = window.matchMedia('(max-width: 1000px)');
function closeMenu(returnFocus = false) {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.querySelector('span').textContent = toggle.dataset.open;
  toggle.setAttribute('aria-label', toggle.dataset.open);
  if (returnFocus) toggle.focus();
}
toggle.setAttribute('aria-label', toggle.dataset.open);
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  nav.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
  const label = open ? toggle.dataset.close : toggle.dataset.open;
  toggle.querySelector('span').textContent = label;
  toggle.setAttribute('aria-label', label);
});
nav.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header') && toggle.getAttribute('aria-expanded') === 'true') closeMenu();
});
mobile.addEventListener('change', () => closeMenu());
function languageTargets() {
  document.querySelectorAll('[data-lang-link]').forEach(link => {
    const base = link.getAttribute('href').split('#')[0];
    link.setAttribute('href', base + window.location.hash);
  });
}
languageTargets();
window.addEventListener('hashchange', languageTargets);
if (document.body.dataset.page === 'index') {
  const sections = [...document.querySelectorAll('main > section[id]')];
  const links = [...nav.querySelectorAll('a[href^="#"]')];
  let pending = false;
  function updateActiveSection() {
    pending = false;
    const marker = document.querySelector('.header').offsetHeight + 100;
    const active = sections.filter(section => section.getBoundingClientRect().top <= marker).pop();
    links.forEach(link => {
      if (active && link.getAttribute('href') === '#' + active.id) link.setAttribute('aria-current','location');
      else link.removeAttribute('aria-current');
    });
  }
  function scheduleActiveSection() {
    if (!pending) { pending = true; requestAnimationFrame(updateActiveSection); }
  }
  window.addEventListener('scroll', scheduleActiveSection, {passive:true});
  window.addEventListener('resize', scheduleActiveSection);
  window.addEventListener('load', updateActiveSection);
  updateActiveSection();
}
document.querySelectorAll('[data-copy]').forEach(button => {
  button.addEventListener('click', async () => {
    const status = document.querySelector('.copy-status');
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(button.dataset.copy);
      } else {
        const field = document.createElement('textarea');
        field.value = button.dataset.copy;
        field.style.cssText='position:fixed;left:-9999px';
        document.body.appendChild(field);field.select();
        const copied = document.execCommand('copy');field.remove();button.focus();
        if (!copied) throw new Error('Clipboard unavailable');
      }
      status.textContent = button.dataset.success;
    } catch (_) { status.textContent = button.dataset.failure; }
  });
});
