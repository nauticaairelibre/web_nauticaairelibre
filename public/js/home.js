(() => {
  /* ── Parallax header ── */
  const bgBoat = document.getElementById('bgBoat');
  let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth  - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  });
  (function animate() {
    currentX += (mouseX - currentX) * 0.035;
    currentY += (mouseY - currentY) * 0.035;
    if (bgBoat) {
      bgBoat.style.transform = `translate(${currentX * -16}px, ${currentY * -16}px) scale(1.06)`;
    }
    requestAnimationFrame(animate);
  })();

  /* ── Entrada cinematográfica con IntersectionObserver ── */
  const cells = document.querySelectorAll('.brand-cell');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,       /* dispara cuando el 15% de la celda es visible */
    rootMargin: '0px 0px -40px 0px'
  });

  cells.forEach(cell => observer.observe(cell));

  /* ── Click header to scroll to brands section ── */
  const header = document.getElementById('header');
  if (header) {
    header.addEventListener('click', (e) => {
      if (e.target.closest('.navbar')) {
        return;
      }
      const brandsSection = document.querySelector('.brands-section');
      if (brandsSection) {
        brandsSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
})();
  