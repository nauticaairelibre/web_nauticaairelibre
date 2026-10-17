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

function setWhatsAppMenuState(open) {
  if (!waWidget || !waToggle) return;
  waWidget.classList.toggle('open', open);
  waToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  document.body.classList.toggle('wa-menu-open', open);

  const aiWidget = document.getElementById('aiChatWidget');
  if (aiWidget) {
    aiWidget.classList.toggle('wa-open', open);
    if (open && aiWidget.classList.contains('open')) {
      aiWidget.classList.remove('open');
      sessionStorage.setItem('aiChatDismissed', 'true');
    }
  }
}

if (waWidget && waToggle) {
  waToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    const willOpen = !waWidget.classList.contains('open');
    setWhatsAppMenuState(willOpen);
  });

  if (waMenuClose) {
    waMenuClose.addEventListener('click', (e) => {
      e.stopPropagation();
      setWhatsAppMenuState(false);
    });
  }

  // Cerrar WhatsApp al hacer clic en cualquiera de las sucursales
  document.querySelectorAll('.wa-item').forEach(item => {
    item.addEventListener('click', () => setWhatsAppMenuState(false));
  });

  // Close when clicking outside
  document.addEventListener('click', (e) => {
    if (!waWidget.contains(e.target)) {
      setWhatsAppMenuState(false);
    }
  });

  // Close when pressing Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && waWidget.classList.contains('open')) {
      setWhatsAppMenuState(false);
    }
  });
}

/* ═══════════════════════════════════════════════════════════════════
   🤖 ASESOR COMERCIAL AI (CHATBOT FLOTANTE)
   ═══════════════════════════════════════════════════════════════════ */
function initAiChatbot() {
  if (document.getElementById('aiChatWidget')) return;

  const widgetHtml = `
    <div class="ai-chat-widget" id="aiChatWidget">
      <!-- Botón Flotante (ubicado por arriba del chat de contactanos) -->
      <button class="ai-chat-float" id="aiChatToggle" aria-label="Abrir Asesor Comercial AI" title="Consultar con nuestro Asesor Virtual">
        <div class="ai-chat-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2 2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z"/>
            <rect x="3" y="8" width="18" height="12" rx="4"/>
            <circle cx="8.5" cy="13.5" r="1.5" fill="currentColor"/>
            <circle cx="15.5" cy="13.5" r="1.5" fill="currentColor"/>
            <path d="M9 17h6"/>
          </svg>
        </div>
        <span class="ai-chat-text">Asesor IA</span>
        <span class="ai-chat-badge">Online</span>
      </button>

      <!-- Ventana Flotante del Chatbot -->
      <div class="ai-chat-window" id="aiChatWindow">
        <div class="ai-chat-header">
          <div class="ai-chat-header-info">
            <span class="ai-chat-status-dot"></span>
            <span class="ai-chat-header-title">Asesor Comercial AI</span>
            <span class="ai-chat-header-tag">Náutica Aire Libre</span>
          </div>
          <div class="ai-chat-header-actions">
            <button class="ai-chat-btn-minimize" id="aiChatClose" aria-label="Minimizar chat" title="Minimizar">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
          </div>
        </div>
        <div class="ai-chat-iframe-container">
          <iframe 
            id="aiChatIframe"
            src="https://asesor-comercial-ai.onrender.com/admin?tenant=RHTdvIML8DSz4HkJQVUeOucu5ih2#/chat" 
            title="Asesor Comercial AI - Náutica Aire Libre"
            allow="clipboard-write; microphone">
          </iframe>
        </div>
      </div>
    </div>
  `;

  document.body.insertAdjacentHTML('beforeend', widgetHtml);

  const aiChatWidget = document.getElementById('aiChatWidget');
  const aiChatToggle = document.getElementById('aiChatToggle');
  const aiChatClose = document.getElementById('aiChatClose');

  const openAiChat = () => {
    setWhatsAppMenuState(false);
    aiChatWidget.classList.add('open');
  };

  const closeAiChat = () => {
    aiChatWidget.classList.remove('open');
    sessionStorage.setItem('aiChatDismissed', 'true');
  };

  aiChatToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    openAiChat();
  });

  aiChatClose.addEventListener('click', (e) => {
    e.stopPropagation();
    closeAiChat();
  });

  // Tecla Escape para cerrar chat
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aiChatWidget.classList.contains('open')) {
      closeAiChat();
    }
  });

  // Estado inicial:
  // En pantallas de escritorio, abrir por defecto la primera vez para que esté activo;
  // si el usuario lo minimizó, recordar en sessionStorage para no resultar intrusivo.
  const isMobile = window.innerWidth <= 768;
  const wasDismissed = sessionStorage.getItem('aiChatDismissed') === 'true';
  if (!isMobile && !wasDismissed) {
    openAiChat();
  }
}

// Iniciar cuando el DOM esté listo y si existe el widget de WhatsApp (páginas públicas)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('waWidget')) initAiChatbot();
  });
} else {
  if (document.getElementById('waWidget')) initAiChatbot();
}

