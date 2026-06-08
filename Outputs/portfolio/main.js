document.addEventListener('DOMContentLoaded', () => {
  // Hamburger toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
    document.addEventListener('click', e => {
      if (!e.target.closest('nav')) links.classList.remove('open');
    });
  }

  // Active nav link based on current filename
  const file = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === file) a.classList.add('active');
  });

  // Fade in main
  const main = document.querySelector('main');
  if (main) main.classList.add('fade-in');
});
