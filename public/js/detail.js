(() => {
  /* Video */
  const VIDEO_ID = 'TU_VIDEO_ID_AQUI';
  const playBtn = document.getElementById('playBtn');
  const videoPoster = document.getElementById('videoPoster');
  const videoFrameWrap = document.getElementById('videoFrameWrap');
  function activateVideo() {
    videoPoster.style.transition = 'opacity 0.5s ease';
    videoPoster.style.opacity = '0';
    setTimeout(() => {
      videoPoster.style.display = 'none';
      videoFrameWrap.style.display = 'block';
      videoFrameWrap.style.opacity = '0';
      videoFrameWrap.style.transition = 'opacity 0.4s ease';
      const iframe = document.createElement('iframe');
      iframe.src = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0&modestbranding=1`;
      iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
      iframe.allowFullscreen = true;
      videoFrameWrap.appendChild(iframe);
      requestAnimationFrame(() => requestAnimationFrame(() => videoFrameWrap.style.opacity = '1'));
    }, 450);
  }
  if (playBtn && videoPoster) {
    playBtn.addEventListener('click', activateVideo);
    videoPoster.addEventListener('click', (e) => { if (!playBtn.contains(e.target)) activateVideo(); });
  }

  /* Gallery IntersectionObserver */
  const gCells = document.querySelectorAll('.g-cell');
  const gObs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('g-visible'); gObs.unobserve(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
  gCells.forEach(c => gObs.observe(c));

  /* Lightbox */
  const images = [
    { src: 'var(--img-safari-1)', tag: 'Exterior' },
    { src: 'var(--img-safari-5)', tag: 'En movimiento' },
    { src: 'var(--img-safari-2)', tag: 'Detalle proa' },
    { src: 'var(--img-safari-1)', tag: 'Navegación' },
    { src: 'var(--img-safari-4)', tag: 'Cockpit' },
    { src: 'var(--img-safari-3)', tag: 'Motor' },
    { src: 'var(--img-safari-5)', tag: 'Perfil lateral' },
    { src: 'var(--img-safari-1)', tag: 'Agua abierta' },
  ];

  // Build real src map from CSS vars
  const imgSrcs   = [
    '/img/safari-1.jpg',
    '/img/safari-5.jpg',
    '/img/safari-2.jpg',
    '/img/safari-1.jpg',
    '/img/safari-4.jpg',
    '/img/safari-3.jpg',
    '/img/safari-5.jpg',
    '/img/safari-1.jpg'
  ];
  const imgTags   = ['Exterior','En movimiento','Detalle proa','Navegación','Cockpit','Motor','Perfil lateral','Agua abierta'];

  const lightbox  = document.getElementById('lightbox');
  const lbImg     = document.getElementById('lbImg');
  const lbCaption = document.getElementById('lbCaption');
  const lbDots    = document.getElementById('lbDots');
  let currentIdx  = 0;

  if (lightbox && lbDots) {
    // Build dots
    imgSrcs.forEach((_,i) => {
      const d = document.createElement('div');
      d.className = 'lb-dot' + (i===0?' active':'');
      d.addEventListener('click', () => showLb(i));
      lbDots.appendChild(d);
    });

    function showLb(idx) {
      currentIdx = (idx + imgSrcs.length) % imgSrcs.length;
      if (lbImg) lbImg.src = imgSrcs[currentIdx];
      if (lbCaption) lbCaption.textContent = imgTags[currentIdx];
      document.querySelectorAll('.lb-dot').forEach((d,i) => d.classList.toggle('active', i===currentIdx));
    }
    function openLb(idx) {
      showLb(idx);
      lightbox.classList.add('lb-open');
      document.body.style.overflow = 'hidden';
    }
    function closeLb() {
      lightbox.classList.remove('lb-open');
      document.body.style.overflow = '';
    }

    gCells.forEach(cell => {
      cell.addEventListener('click', () => openLb(parseInt(cell.dataset.index)));
    });
    const lbClose = document.getElementById('lbClose');
    const lbBackdrop = document.getElementById('lbBackdrop');
    const lbPrev = document.getElementById('lbPrev');
    const lbNext = document.getElementById('lbNext');

    if (lbClose) lbClose.addEventListener('click', closeLb);
    if (lbBackdrop) lbBackdrop.addEventListener('click', closeLb);
    if (lbPrev) lbPrev.addEventListener('click', () => showLb(currentIdx - 1));
    if (lbNext) lbNext.addEventListener('click', () => showLb(currentIdx + 1));
    document.addEventListener('keydown', e => {
      if (!lightbox.classList.contains('lb-open')) return;
      if (e.key === 'ArrowLeft')  showLb(currentIdx - 1);
      if (e.key === 'ArrowRight') showLb(currentIdx + 1);
      if (e.key === 'Escape')     closeLb();
    });
  }
})();
  