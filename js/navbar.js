document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('current'));
      link.classList.add('current');
    });
  });
});