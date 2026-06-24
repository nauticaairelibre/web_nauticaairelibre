/* Navbar scroll toggle */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* Mobile menu toggle */
const menuToggle = document.getElementById('menuToggle');
if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll', navbar.classList.contains('menu-open'));
  });
}

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbar) {
      navbar.classList.remove('menu-open');
      document.body.classList.remove('no-scroll');
    }
  });
});

