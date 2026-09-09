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
      heroBg: "/img/geuna-212.webp",
      waMsg: "Hola! Quisiera obtener información y catálogo sobre las embarcaciones Geuna."
    },
    pampamarin: {
      name: "Pampa Marin",
      logo: "/images/logo-pampamarin.png",
      heroBg: "/img/pampa-sf470-1.webp",
      waMsg: "Hola! Quisiera obtener información y catálogo sobre las embarcaciones Pampa Marin."
    },
    drakkar: {
      name: "Drakkar",
      logo: "/images/logo-drakkar.png",
      heroBg: "/img/drakkar-23-6.webp",
      waMsg: "Hola! Quisiera obtener información y catálogo sobre las embarcaciones Drakkar."
    },
    usados: {
      name: "Usados",
      sectionTitle: "Embarcaciones Usadas",
      logo: "/images/logo-usados.png",
      heroBg: "/img/cover-usados.png",
      waMsg: "Hola! Quisiera obtener información y el catálogo de embarcaciones usadas disponibles en stock."
    },
    mercury: {
      name: "Mercury",
      sectionTitle: "Motores Mercury",
      logo: "/images/logo-mercury.png?v=2",
      heroBg: "/img/cover-mercury.jpg",
      waMsg: "Hola! Quisiera obtener información y catálogo de motores fuera de borda Mercury."
    },
    hidea: {
      name: "Hidea",
      sectionTitle: "Motores Hidea",
      logo: "/images/logo-hidea.png",
      waMsg: "Hola! Quisiera obtener información y catálogo de motores fuera de borda Hidea."
    },
    ofertas: {
      name: "Ofertas",
      sectionTitle: "Ofertas y Oportunidades",
      sectionLabel: "Oportunidades",
      logo: "/images/logo-ofertas.png",
      heroBg: "/img/cover-ofertas.jpg",
      waMsg: "Hola! Quisiera obtener información sobre las ofertas y promociones especiales de embarcaciones."
    },
    automoviles: {
      name: "Automóviles Usados",
      sectionTitle: "Automóviles Usados",
      logo: "/images/logo-automoviles.png",
      heroBg: "/img/cover-automoviles.png",
      waMsg: "Hola! Quisiera obtener información sobre el catálogo de automóviles usados disponibles."
    },
    promociones: {
      name: "Promociones Vigentes",
      sectionTitle: "Promociones Vigentes",
      sectionLabel: "Oportunidades",
      logo: "/images/logo-promociones.png",
      heroBg: "/img/cover-promociones.jpg",
      waMsg: "Hola! Quisiera consultar sobre las promociones vigentes por tiempo limitado."
    },
    lanchaplan: {
      name: "Lancha Plan",
      sectionTitle: "Nuevo Lancha Plan 80/20",
      sectionLabel: "Financiación Exclusiva",
      logo: "/images/logo-lanchaplan.png",
      heroBg: "/img/cover-lanchaplan.jpg",
      waMsg: "Hola! Quisiera consultar por el NUEVO LANCHA PLAN (Plan 80/20 en 36 cuotas) para adquirir una embarcación."
    }
  };

  const info = brandInfo[brand] || brandInfo.bermuda;

  // Update Page Metadata
  document.title = `${info.name} — Náutica Aire Libre`;

  // Grab Elements
  const breadcrumbBrand = document.getElementById('catalogBreadcrumbBrand');
  const heroBrandLogo = document.getElementById('catalogHeroBrandLogo');
  const heroBrandTitle = document.getElementById('catalogHeroBrandTitle');
  const sectionTitle = document.getElementById('catalogSectionTitle');
  const catalogGrid = document.getElementById('catalogGrid');
  const comingSoonContainer = document.getElementById('comingSoonContainer');
  const comingSoonBrand = document.getElementById('comingSoonBrand');
  const comingSoonWhatsAppBtn = document.getElementById('comingSoonWhatsAppBtn');
  const lanchaplanContainer = document.getElementById('lanchaplanContainer');
  const heroPhoto = document.getElementById('catalogHeroPhoto');

  // Toggle View State
  if (breadcrumbBrand) breadcrumbBrand.textContent = info.name;
  if (info.useTextTitle) {
    if (heroBrandLogo) heroBrandLogo.style.display = 'none';
    if (heroBrandTitle) {
      heroBrandTitle.textContent = info.name.toUpperCase();
      heroBrandTitle.style.display = 'block';
    }
  } else {
    if (heroBrandTitle) heroBrandTitle.style.display = 'none';
    if (heroBrandLogo) {
      heroBrandLogo.style.display = 'block';
      heroBrandLogo.src = info.logo;
      heroBrandLogo.alt = info.name;
      if (brand === 'promociones') {
        heroBrandLogo.classList.add('logo-promociones');
      } else {
        heroBrandLogo.classList.remove('logo-promociones');
      }
    }
  }
  const sectionLabel = document.querySelector('.catalog-label');
  if (sectionLabel && info.sectionLabel) {
    sectionLabel.textContent = info.sectionLabel;
  }
  if (sectionTitle) sectionTitle.textContent = info.sectionTitle || `Modelos ${info.name}`;
  if (heroPhoto) {
    heroPhoto.style.backgroundImage = `url('${info.heroBg || "/images/bg-boat.jpg"}')`;
  }

  // Update floating WhatsApp widget and modal items with current brand context
  const whatsappMsg = encodeURIComponent(info.waMsg || ("Hola! Quisiera consultar sobre " + info.name));
  const waItems = document.querySelectorAll('.wa-item, .nav-contact-item');
  waItems.forEach(item => {
    const phone = item.dataset.phone;
    if (phone) {
      item.href = `https://wa.me/${phone}?text=${whatsappMsg}`;
    }
  });

  // Bermuda exclusivity check (sold exclusively in Posadas, Misiones)
  const isBermudaBrand = (brand === 'bermuda');

  // Hide or show Resistencia (Chaco) branch contacts
  const resistenciaElements = document.querySelectorAll('[data-phone="543625455852"]');
  resistenciaElements.forEach(el => {
    el.style.display = isBermudaBrand ? 'none' : '';
  });

  // Branch Selection Modal Setup (for CTA buttons)
  const branchModalWrap = document.getElementById('branchModalWrap');
  const branchModalClose = document.getElementById('branchModalClose');
  const branchModalBackdrop = document.getElementById('branchModalBackdrop');
  const modalModel = document.getElementById('branchModalModel');
  const modalPrice = document.getElementById('branchModalPrice');

  function openBranchModal(contextTitle, contextSub, customMsg) {
    if (!branchModalWrap) return;
    if (modalModel && contextTitle) modalModel.textContent = contextTitle;
    if (modalPrice) {
      if (contextSub) {
        modalPrice.textContent = contextSub;
        modalPrice.style.display = 'inline-block';
      } else if (isBermudaBrand) {
        modalPrice.textContent = 'Posadas · Misiones';
        modalPrice.style.display = 'inline-block';
      } else {
        modalPrice.textContent = '';
        modalPrice.style.display = 'none';
      }
    }
    const msgToUse = customMsg ? encodeURIComponent(customMsg) : whatsappMsg;
    const modalLinks = branchModalWrap.querySelectorAll('.branch-modal-item');
    modalLinks.forEach(item => {
      const phone = item.dataset.phone;
      if (phone) item.href = `https://wa.me/${phone}?text=${msgToUse}`;
      if (phone === '543625455852') {
        item.style.display = isBermudaBrand ? 'none' : '';
      }
    });
    branchModalWrap.classList.add('open');
    branchModalWrap.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeBranchModal() {
    if (!branchModalWrap) return;
    branchModalWrap.classList.remove('open');
    branchModalWrap.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (branchModalClose) {
    branchModalClose.addEventListener('click', (e) => {
      e.stopPropagation();
      closeBranchModal();
    });
  }
  if (branchModalBackdrop) {
    branchModalBackdrop.addEventListener('click', closeBranchModal);
  }
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBranchModal();
  });

  const branchModalLinks = document.querySelectorAll('.branch-modal-item');
  branchModalLinks.forEach(link => {
    link.addEventListener('click', () => {
      closeBranchModal();
    });
  });

  // Lancha Plan CTA Button
  const lanchaplanCtaBtn = document.getElementById('lanchaplanCtaBtn') || document.querySelector('.lanchaplan-cta-btn');
  if (lanchaplanCtaBtn) {
    lanchaplanCtaBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openBranchModal(
        "NUEVO LANCHA PLAN",
        "PLAN 80/20 · 36 CUOTAS",
        "Hola! Quisiera consultar por el NUEVO LANCHA PLAN (Plan 80/20 en 36 cuotas) para adquirir una embarcación."
      );
    });
  }

  if (comingSoonWhatsAppBtn) {
    comingSoonWhatsAppBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openBranchModal(
        info.name,
        "",
        info.waMsg || ("Hola! Quisiera consultar sobre " + info.name)
      );
    });
  }

  const promocionesContainer = document.getElementById('promocionesContainer');
  const promoLightbox = document.getElementById('promoLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxClose = document.getElementById('lightboxClose');

  if (brand === 'bermuda' || brand === 'eclipse' || brand === 'mercury' || brand === 'usados' || brand === 'automoviles' || brand === 'geuna' || brand === 'pampamarin' || brand === 'drakkar') {
    if (catalogGrid) catalogGrid.style.display = 'grid';
    if (comingSoonContainer) comingSoonContainer.style.display = 'none';
    if (promocionesContainer) promocionesContainer.style.display = 'none';
    if (lanchaplanContainer) lanchaplanContainer.style.display = 'none';
    
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

    // Setup Lightbox trigger for Used Boats
    if (brand === 'usados' && promoLightbox && lightboxImg && lightboxClose) {
      const usedCards = catalogGrid.querySelectorAll('.used-boat-card');
      usedCards.forEach(card => {
        card.addEventListener('click', (e) => {
          e.preventDefault();
          const flyerSrc = card.dataset.flyer;
          const modelName = card.querySelector('.model-name').textContent;
          if (flyerSrc) {
            lightboxImg.src = flyerSrc;
            lightboxImg.alt = `${modelName} Usado`;
            promoLightbox.classList.add('open');
            document.body.style.overflow = 'hidden';
          }
        });
      });

      const closeLightbox = () => {
        promoLightbox.classList.remove('open');
        document.body.style.overflow = '';
      };

      lightboxClose.addEventListener('click', closeLightbox);
      promoLightbox.addEventListener('click', (e) => {
        if (e.target === promoLightbox) {
          closeLightbox();
        }
      });
      // ESC key to close
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && promoLightbox.classList.contains('open')) {
          closeLightbox();
        }
      });
    }
  } else if (brand === 'promociones') {
    if (catalogGrid) catalogGrid.style.display = 'none';
    if (comingSoonContainer) comingSoonContainer.style.display = 'none';
    if (lanchaplanContainer) lanchaplanContainer.style.display = 'none';
    if (promocionesContainer) promocionesContainer.style.display = 'block';

    // Setup Lightbox logic with swipe slider
    if (promocionesContainer && promoLightbox && lightboxImg && lightboxClose) {
      const wrappers = Array.from(promocionesContainer.querySelectorAll('.promo-photo-wrapper'));
      let currentPromoIdx = 0;
      const promoList = wrappers.map(w => {
        const img = w.querySelector('.promo-img');
        return { src: img ? img.src : '', alt: img ? img.alt : '' };
      });

      function showPromo(idx, direction) {
        if (!promoList.length) return;
        currentPromoIdx = (idx + promoList.length) % promoList.length;
        lightboxImg.src = promoList[currentPromoIdx].src;
        lightboxImg.alt = promoList[currentPromoIdx].alt;
      }

      wrappers.forEach((wrapper, i) => {
        wrapper.addEventListener('click', () => {
          showPromo(i);
          promoLightbox.classList.add('open');
          document.body.style.overflow = 'hidden';
        });
      });

      const closeLightbox = () => {
        promoLightbox.classList.remove('open');
        document.body.style.overflow = '';
        if (lightboxImg) {
          lightboxImg.style.transform = 'translateX(0)';
          lightboxImg.style.opacity = '1';
        }
      };

      lightboxClose.addEventListener('click', closeLightbox);
      promoLightbox.addEventListener('click', (e) => {
        if (e.target === promoLightbox) {
          closeLightbox();
        }
      });
      // ESC key to close & arrow keys
      document.addEventListener('keydown', (e) => {
        if (!promoLightbox.classList.contains('open')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') showPromo(currentPromoIdx - 1);
        if (e.key === 'ArrowRight') showPromo(currentPromoIdx + 1);
      });

      // Swipe navigation for promos
      let pTouchStartX = 0;
      let pTouchStartY = 0;
      let pTouchDeltaX = 0;
      let pIsDragging = false;

      function onPromoTouchStart(e) {
        if (!promoLightbox.classList.contains('open')) return;
        if (e.target.closest('#lightboxClose')) return;
        const touch = e.touches ? e.touches[0] : e;
        pTouchStartX = touch.clientX;
        pTouchStartY = touch.clientY;
        pTouchDeltaX = 0;
        pIsDragging = true;
      }

      function onPromoTouchMove(e) {
        if (!pIsDragging) return;
        const touch = e.touches ? e.touches[0] : e;
        const deltaX = touch.clientX - pTouchStartX;
        const deltaY = touch.clientY - pTouchStartY;
        if (Math.abs(deltaX) > Math.abs(deltaY) || !e.touches) {
          if (e.cancelable && e.touches) e.preventDefault();
          pTouchDeltaX = deltaX;
        }
      }

      function onPromoTouchEnd() {
        if (!pIsDragging) return;
        pIsDragging = false;
        if (pTouchDeltaX < -40) {
          showPromo(currentPromoIdx + 1);
        } else if (pTouchDeltaX > 40) {
          showPromo(currentPromoIdx - 1);
        }
        pTouchDeltaX = 0;
      }

      promoLightbox.addEventListener('touchstart', onPromoTouchStart, { passive: false });
      promoLightbox.addEventListener('touchmove', onPromoTouchMove, { passive: false });
      promoLightbox.addEventListener('touchend', onPromoTouchEnd);
      promoLightbox.addEventListener('mousedown', onPromoTouchStart);
      window.addEventListener('mousemove', onPromoTouchMove);
      window.addEventListener('mouseup', onPromoTouchEnd);
    }
  } else if (brand === 'lanchaplan') {
    if (catalogGrid) catalogGrid.style.display = 'none';
    if (comingSoonContainer) comingSoonContainer.style.display = 'none';
    if (promocionesContainer) promocionesContainer.style.display = 'none';
    if (lanchaplanContainer) lanchaplanContainer.style.display = 'block';
  } else {
    if (catalogGrid) catalogGrid.style.display = 'none';
    if (comingSoonContainer) comingSoonContainer.style.display = 'flex';
    if (promocionesContainer) promocionesContainer.style.display = 'none';
    if (lanchaplanContainer) lanchaplanContainer.style.display = 'none';
    if (comingSoonBrand) comingSoonBrand.textContent = info.name;
    if (comingSoonWhatsAppBtn) {
      const baseNum = "5493764711617"; // pre-existing contact number
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