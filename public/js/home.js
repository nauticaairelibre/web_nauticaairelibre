(() => {
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
})();