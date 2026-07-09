const root = document.documentElement;
const revealItems = document.querySelectorAll('.reveal');
const navLinks = Array.from(document.querySelectorAll('.nav a[href^="#"]'));
const yearTarget = document.querySelector('[data-current-year]');

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