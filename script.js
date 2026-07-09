const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const revealItems = document.querySelectorAll('.reveal');
const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
const yearTarget = document.querySelector('[data-current-year]');

const savedTheme = window.localStorage.getItem('vivek-portfolio-theme');
if (savedTheme) {
  root.dataset.theme = savedTheme;
}

if (!root.dataset.theme) {
  root.dataset.theme = 'light';
}

const updateThemeButton = () => {
  if (!themeToggle) {
    return;
  }

  const isLight = root.dataset.theme === 'light';
  themeToggle.setAttribute('aria-label', isLight ? 'Switch to dark theme' : 'Switch to light theme');
  themeToggle.querySelector('.theme-toggle__icon').textContent = isLight ? '◑' : '◐';
};

updateThemeButton();

themeToggle?.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  window.localStorage.setItem('vivek-portfolio-theme', root.dataset.theme);
  updateThemeButton();
});

if (yearTarget) {
  yearTarget.textContent = String(new Date().getFullYear());
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealItems.forEach((item) => observer.observe(item));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      navLinks.forEach((link) => {
        const isActive = link.getAttribute('href') === `#${entry.target.id}`;
        link.setAttribute('aria-current', isActive ? 'page' : 'false');
        if (!isActive) {
          link.removeAttribute('aria-current');
        }
      });
    });
  },
  { rootMargin: '-35% 0px -55% 0px' }
);

document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));
