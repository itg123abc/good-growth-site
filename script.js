const body = document.body;
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#site-nav');
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();
if (navToggle && nav) {
 const mobile = window.matchMedia('(max-width: 920px)');
 const setOpen = (open) => {
  navToggle.setAttribute('aria-expanded', String(open));
  body.classList.toggle('nav-open', open);
  nav.inert = mobile.matches && !open;
 };
 body.classList.add('js-ready');
 setOpen(false);
 navToggle.addEventListener('click', () => setOpen(navToggle.getAttribute('aria-expanded') !== 'true'));
 nav.addEventListener('click', (event) => { if (event.target.closest('a')) setOpen(false); });
 window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') { setOpen(false); navToggle.focus(); }
 });
 mobile.addEventListener('change', () => setOpen(false));
}
