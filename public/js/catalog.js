(() => {
  /* ── Dynamic Brand Routing ── */
  const urlParams = new URLSearchParams(window.location.search);
  const brand = (urlParams.get('brand') || 'bermuda').toLowerCase();

  const brandInfo = {
    bermuda: {
      name: "Bermuda",
      logo: "/images/logo-bermuda.png",
      heroBg: "/img/discovery-190.png"
    },
    eclipse: {
      name: "Eclipse",
      logo: "/images/logo-eclipse.png",
      heroBg: "/img/eclipse-21ss.jpg",
      waMsg: "Hola! Quisiera obtener información y catálogo sobre las lanchas Eclipse."
    },
    geuna: {
      name: "Geuna",
      logo: "/images/logo-geuna.png",
      waMsg: "Hola! Quisiera obtener información y catálogo sobre las embarcaciones Geuna."
    },
    pampamarin: {
      name: "Pampa Marin",
      logo: "/images/logo-pampamarin.png",
      waMsg: "Hola! Quisiera obtener información y catálogo sobre las embarcaciones Pampa Marin."
    },
    drakkar: {
      name: "Drakkar",
      logo: "/images/logo-drakkar.png",
      waMsg: "Hola! Quisiera obtener información y catálogo sobre las embarcaciones Drakkar."
    },
    usados: {
      name: "Usados",
      logo: "/images/logo-usados.png",
      waMsg: "Hola! Quisiera obtener información y el catálogo de embarcaciones usadas disponibles en stock."
    },
    mercury: {
      name: "Mercury",
      logo: "/images/logo-mercury.png",
      waMsg: "Hola! Quisiera obtener información y catálogo de motores fuera de borda Mercury."
    },
    hidea: {
      name: "Hidea",
      logo: "/images/logo-hidea.png",
      waMsg: "Hola! Quisiera obtener información y catálogo de motores fuera de borda Hidea."
    }
  };

  const info = brandInfo[brand] || brandInfo.bermuda;

  // Update Page Metadata
  document.title = `${info.name} — Náutica Aire Libre`;

  // Grab Elements
  const breadcrumbBrand = document.getElementById('catalogBreadcrumbBrand');
  const heroBrandLogo = document.getElementById('catalogHeroBrandLogo');
  const sectionTitle = document.getElementById('catalogSectionTitle');
  const catalogGrid = document.getElementById('catalogGrid');
  const comingSoonContainer = document.getElementById('comingSoonContainer');
  const comingSoonBrand = document.getElementById('comingSoonBrand');
  const comingSoonWhatsAppBtn = document.getElementById('comingSoonWhatsAppBtn');
  const heroPhoto = document.getElementById('catalogHeroPhoto');

  // Toggle View State
  if (breadcrumbBrand) breadcrumbBrand.textContent = info.name;
  if (heroBrandLogo) {
    heroBrandLogo.src = info.logo;
    heroBrandLogo.alt = info.name;
  }
  if (sectionTitle) sectionTitle.textContent = `Modelos ${info.name}`;
  if (heroPhoto) {
    heroPhoto.style.backgroundImage = `url('${info.heroBg || "/images/bg-boat.jpg"}')`;
  }

  if (brand === 'bermuda' || brand === 'eclipse') {
    if (catalogGrid) catalogGrid.style.display = 'grid';
    if (comingSoonContainer) comingSoonContainer.style.display = 'none';
    
    // Filter cells by data-brand
    const cells = catalogGrid.querySelectorAll('.brand-cell');
    cells.forEach(cell => {
      if (cell.dataset.brand) {
        if (cell.dataset.brand === brand) {
          cell.style.display = '';
        } else {
          cell.style.display = 'none';
        }
      }
    });
  } else {
    if (catalogGrid) catalogGrid.style.display = 'none';
    if (comingSoonContainer) comingSoonContainer.style.display = 'flex';
    if (comingSoonBrand) comingSoonBrand.textContent = info.name;
    if (comingSoonWhatsAppBtn) {
      const baseNum = "5493794000000"; // pre-existing contact number
      const encodedMsg = encodeURIComponent(info.waMsg || "");
      comingSoonWhatsAppBtn.href = `https://wa.me/${baseNum}?text=${encodedMsg}`;
    }
  }

  /* ── Entrada cinematográfica ── */
  const cells = document.querySelectorAll('.brand-cell');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });
  cells.forEach(c => observer.observe(c));
})();