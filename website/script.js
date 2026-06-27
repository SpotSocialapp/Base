const toggle = document.querySelector('[data-menu-toggle]');
const nav = document.querySelector('[data-site-nav]');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = document.body.classList.toggle('nav-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const tabButtons = document.querySelectorAll('[data-tab-target]');
const tabPanels = document.querySelectorAll('[data-tab-panel]');
const packageSection = document.querySelector('#launch-package');

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.getAttribute('data-tab-target');

    tabButtons.forEach((item) => {
      item.classList.toggle('is-active', item === button);
    });

    tabPanels.forEach((panel) => {
      panel.classList.toggle('is-active', panel.getAttribute('data-tab-panel') === target);
    });

    if (packageSection) {
      packageSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
