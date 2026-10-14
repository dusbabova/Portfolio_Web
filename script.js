const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('nav');
const links = nav.querySelectorAll('a');

// Mobile menu open/close
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});

// Close the menu after tapping a link
links.forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Highlight the menu item of the section currently in view
const sections = document.querySelectorAll('main section');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + entry.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();
