/**
 * ══════════════════════════════════════════════════════════════════════
 *  NÁUTICA AIRE LIBRE — SISTEMA DE ANALÍTICA AVANZADA (GA4 + GTM + GADS)
 * ══════════════════════════════════════════════════════════════════════
 *  - Compatible con Google Analytics 4 (GA4)
 *  - Compatible con Google Tag Manager (GTM)
 *  - Compatible con Google Ads Conversion Tracking & Smart Bidding
 *  - Arquitectura orientada a eventos (dataLayer)
 */

(() => {
  'use strict';

  /* ══ 1. CONFIGURACIÓN GLOBAL ══════════════════════════════════════ */
  // Colocar aquí tus IDs cuando los crees o recibas:
  const ANALYTICS_CONFIG = {
    gtmId: 'GTM-XXXXXXX',      // Reemplazar por tu ID de GTM (ej: GTM-ABC1234)
    ga4Id: 'G-XXXXXXXXXX',     // Reemplazar por tu ID de GA4 (ej: G-7J8K9L0M)
    gadsId: 'AW-XXXXXXXXX',    // Opcional: ID de Google Ads (ej: AW-123456789)
    debug: false               // true para ver cada evento en la consola del navegador
  };

  /* ══ 2. INICIALIZACIÓN DEL DATALAYER ══════════════════════════════ */
  window.dataLayer = window.dataLayer || [];
  
  function gtag() {
    window.dataLayer.push(arguments);
  }
  window.gtag = gtag;

  // Registrar timestamp inicial y modo
  window.dataLayer.push({
    event: 'analytics_initialized',
    site_version: '2026.1',
    site_name: 'Náutica Aire Libre'
  });

  /* ══ 3. INYECCIÓN AUTOMÁTICA DE SCRIPTS (GTM & GA4) ═══════════════ */
  // Si el usuario ingresa un ID válido que no sea placeholder, se cargan solos
  const isRealGtm = ANALYTICS_CONFIG.gtmId && !ANALYTICS_CONFIG.gtmId.includes('XXXXXXX');
  const isRealGa4 = ANALYTICS_CONFIG.ga4Id && !ANALYTICS_CONFIG.ga4Id.includes('XXXXXXXXXX');

  if (isRealGtm) {
    (function(w,d,s,l,i){
      w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
      var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer',ANALYTICS_CONFIG.gtmId);

    if (ANALYTICS_CONFIG.debug) console.log('[Analytics] GTM cargado con ID:', ANALYTICS_CONFIG.gtmId);
  } else if (isRealGa4) {
    const s = document.createElement('script');
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_CONFIG.ga4Id}`;
    document.head.appendChild(s);

    gtag('js', new Date());
    gtag('config', ANALYTICS_CONFIG.ga4Id, {
      send_page_view: true,
      cookie_flags: 'SameSite=None;Secure'
    });

    if (ANALYTICS_CONFIG.gadsId && !ANALYTICS_CONFIG.gadsId.includes('XXXXXXXXX')) {
      gtag('config', ANALYTICS_CONFIG.gadsId);
    }

    if (ANALYTICS_CONFIG.debug) console.log('[Analytics] GA4 cargado con ID:', ANALYTICS_CONFIG.ga4Id);
  }

  /* ══ 4. ESTIMADOR DE VALOR DE LEAD (SMART BIDDING) ════════════════ */
  // Para optimización por valor en Google Ads (tROAS)
  function estimateLeadValue(category, priceStr) {
    if (priceStr) {
      // Extrae números si los hay (ej: USD 38.000 -> 38000)
      const num = parseFloat(priceStr.replace(/[^0-9]/g, ''));
      if (!isNaN(num) && num > 0) {
        // Asignamos 1% del valor estimado de la embarcación como puntaje del lead
        return Math.round(num * 0.01);
      }
    }
    const cat = (category || '').toLowerCase();
    if (cat.includes('lanchaplan') || cat.includes('plan')) return 250;
    if (cat.includes('usad')) return 300;
    if (cat.includes('motor')) return 150;
    if (cat.includes('bermuda') || cat.includes('eclipse')) return 400;
    return 100; // Valor base por defecto
  }

  /* ══ 5. API GLOBAL NÁUTICA ANALYTICS ═══════════════════════════════ */
  window.NauticaAnalytics = {
    config: ANALYTICS_CONFIG,

    // Función base para disparar cualquier evento al dataLayer
    trackEvent(eventName, eventData = {}) {
      const payload = {
        event: eventName,
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname + window.location.search,
        timestamp: new Date().toISOString(),
        ...eventData
      };

      window.dataLayer.push(payload);

      if (ANALYTICS_CONFIG.debug) {
        console.group(`[Analytics Event] ${eventName}`);
        console.table(payload);
        console.groupEnd();
      }
    },

    // Evento de Lead (Conversión principal para Google Ads y GA4)
    trackLead({ branch, phone, model, category, price, source, message }) {
      const value = estimateLeadValue(category, price);

      this.trackEvent('generate_lead', {
        event_category: 'Conversiones',
        event_action: 'Contacto WhatsApp',
        event_label: `${branch} · ${model || 'General'}`,
        lead_channel: 'whatsapp',
        branch_name: branch || 'Sin especificar',
        phone_destination: phone || '',
        boat_model: model || 'Consulta general',
        boat_category: category || 'General',
        boat_price: price || null,
        lead_source: source || 'boton_web',
        currency: 'USD',
        value: value
      });

      // Disparador gemelo específico para WhatsApp
      this.trackEvent('whatsapp_click', {
        branch: branch,
        phone: phone,
        boat_model: model,
        source: source
      });
    },

    // Evento de visualización de producto (Ficha de lancha / motor / usado)
    trackViewItem({ name, brand, category, price, isUsed }) {
      const priceNum = price ? parseFloat(price.replace(/[^0-9]/g, '')) : 0;
      this.trackEvent('view_item', {
        ecommerce: {
          currency: 'USD',
          value: priceNum || 0,
          items: [{
            item_name: name,
            item_brand: brand || 'Náutica Aire Libre',
            item_category: category || (isUsed ? 'Usados' : 'Embarcaciones'),
            price: priceNum || 0
          }]
        },
        boat_model: name,
        boat_brand: brand,
        boat_price: price,
        is_used: Boolean(isUsed)
      });
    },

    // Evento de consulta por Lancha Plan
    trackLanchaPlanInquiry({ branch, phone }) {
      this.trackEvent('lanchaplan_inquiry', {
        event_category: 'Financiación',
        plan_type: 'Nuevo Lancha Plan 80/20 (36 cuotas)',
        branch_name: branch,
        phone_destination: phone,
        value: 350,
        currency: 'USD'
      });
    },

    // Evento de navegación por categoría / marca en catálogo
    trackCategoryView(brandName) {
      this.trackEvent('view_item_list', {
        item_list_name: `Catálogo ${brandName}`,
        brand_category: brandName
      });
    }
  };

  /* ══ 6. AUTO-LISTENER INTELIGENTE DE CLICS EN SUCURSALES Y WHATSAPP ═══ */
  document.addEventListener('DOMContentLoaded', () => {
    // Interceptor delegado en document para asegurar capturar todos los clics
    document.addEventListener('click', (e) => {
      const waLink = e.target.closest('.wa-item, .branch-modal-item, .nav-contact-item');
      if (!waLink) return;

      // Determinar nombre de sucursal
      const nameEl = waLink.querySelector('.wa-item-name, .nav-contact-name');
      const branch = nameEl ? nameEl.textContent.trim() : (waLink.dataset.branch || 'Sucursal');
      const phone = waLink.dataset.phone || '';

      // Determinar si proviene del modal contextual de ficha o catálogo
      const modalModelEl = document.getElementById('branchModalModel');
      const modalPriceEl = document.getElementById('branchModalPrice');
      const isModal = Boolean(waLink.closest('#branchModalWrap'));

      let modelName = '';
      let priceVal = '';
      let source = 'floating_widget';

      if (isModal && modalModelEl) {
        modelName = modalModelEl.textContent.trim();
        priceVal = modalPriceEl ? modalPriceEl.textContent.trim() : '';
        source = 'modal_cta_sucursales';
      } else if (waLink.closest('.nav-contact-dropdown')) {
        source = 'navbar_dropdown';
      } else if (waLink.closest('#waWidget')) {
        source = 'floating_contactanos';
      }

      // Si es Lancha Plan
      if (modelName.toUpperCase().includes('LANCHA PLAN') || window.location.search.includes('lanchaplan')) {
        window.NauticaAnalytics.trackLanchaPlanInquiry({ branch, phone });
      }

      // Disparar Lead principal
      window.NauticaAnalytics.trackLead({
        branch: branch,
        phone: phone,
        model: modelName || null,
        price: priceVal || null,
        source: source
      });
    });

    // Clics en los botones primarios que abren el selector de sucursales
    const heroCta = document.getElementById('detailHeroCta');
    if (heroCta) {
      heroCta.addEventListener('click', () => {
        window.NauticaAnalytics.trackEvent('initiate_quote_request', {
          cta_location: 'hero_detail',
          cta_text: heroCta.textContent.trim().replace(/\s+/g, ' ')
        });
      });
    }

    const lanchaplanBtn = document.getElementById('lanchaplanCtaBtn');
    if (lanchaplanBtn) {
      lanchaplanBtn.addEventListener('click', () => {
        window.NauticaAnalytics.trackEvent('initiate_lanchaplan_request', {
          cta_location: 'lanchaplan_card'
        });
      });
    }
  });

})();
