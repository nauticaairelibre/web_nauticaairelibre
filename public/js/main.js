/* Navbar scroll toggle */
const navbar = document.getElementById('navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });
}

/* Mobile menu toggle */
const menuToggle = document.getElementById('menuToggle');
const navContactToggle = document.getElementById('navContactToggle');
const navContactDropdown = document.getElementById('navContactDropdown');

if (menuToggle && navbar) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navbar.classList.toggle('menu-open');
    document.body.classList.toggle('no-scroll', isOpen);
    if (!isOpen && navContactDropdown && navContactToggle) {
      navContactDropdown.classList.remove('open');
      navContactToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* Mobile Nav Contact Accordion Toggle */
if (navContactToggle && navContactDropdown) {
  navContactToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isExpanded = navContactDropdown.classList.toggle('open');
    navContactToggle.setAttribute('aria-expanded', isExpanded ? 'true' : 'false');
  });
}

// Close mobile menu when navigation links or branch contact links are clicked
const navActionLinks = document.querySelectorAll('.nav-links a');
navActionLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (navbar) {
      navbar.classList.remove('menu-open');
      document.body.classList.remove('no-scroll');
      if (navContactDropdown && navContactToggle) {
        navContactDropdown.classList.remove('open');
        navContactToggle.setAttribute('aria-expanded', 'false');
      }
    }
  });
});

/* WhatsApp Multi-Sucursal Widget Toggle */
const waWidget = document.getElementById('waWidget');
const waToggle = document.getElementById('waToggle');
const waMenuClose = document.getElementById('waMenuClose');

if (waWidget && waToggle) {
  waToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = waWidget.classList.toggle('open');
    waToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  if (waMenuClose) {
    waMenuClose.addEventListener('click', (e) => {
      e.stopPropagation();
      waWidget.classList.remove('open');
      waToggle.setAttribute('aria-expanded', 'false');
    });
  }

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!waWidget.contains(e.target)) {
      waWidget.classList.remove('open');
      waToggle.setAttribute('aria-expanded', 'false');
    }
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && waWidget.classList.contains('open')) {
      waWidget.classList.remove('open');
      waToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

