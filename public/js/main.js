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
      <!-- Burbuja de saludo predefinido -->
      <div class="ai-chat-greeting" id="aiChatGreeting" role="button" tabindex="0">
        <button class="ai-chat-greeting-close" id="aiChatGreetingClose" aria-label="Ocultar saludo">&times;</button>
        ¡Hola! Soy tu asistente. ¿En qué te puedo ayudar hoy?
      </div>
      <!-- Botón Flotante con icono de la marca (por arriba de Contactanos) -->
      <button class="ai-chat-float" id="aiChatToggle" aria-label="Abrir Asistente Virtual" title="Asistente Virtual">
        <span class="ai-chat-brand-icon" aria-hidden="true"></span>
        <span class="ai-chat-online-dot" aria-hidden="true"></span>
      </button>

      <!-- Ventana Flotante del Chatbot -->
      <div class="ai-chat-window" id="aiChatWindow">
        <button class="ai-chat-btn-close-floating" id="aiChatClose" aria-label="Cerrar chat" title="Cerrar">
          <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" stroke-width="2.5" fill="none"><path d="M18 6L6 18M6 6l12 12"/></svg>
        </button>
        <div class="ai-chat-iframe-container">
          <iframe 
            id="aiChatIframe"
            src="https://asesor-comercial-ai.vercel.app/?tenant=RHTdvIML8DSz4HkJQVUeOucu5ih2" 
            title="Asesor Náutico AI - Náutica Aire Libre"
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
  const aiChatGreeting = document.getElementById('aiChatGreeting');
  const aiChatGreetingClose = document.getElementById('aiChatGreetingClose');

  const hideGreeting = () => {
    aiChatWidget.classList.remove('greeting-visible');
    sessionStorage.setItem('aiChatGreetingHidden', 'true');
  };

  const openAiChat = () => {
    setWhatsAppMenuState(false);
    hideGreeting();
    aiChatWidget.classList.add('open');
  };

  aiChatGreeting.addEventListener('click', (e) => {
    e.stopPropagation();
    openAiChat();
  });
  aiChatGreetingClose.addEventListener('click', (e) => {
    e.stopPropagation();
    hideGreeting();
  });

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
  if (sessionStorage.getItem('aiChatGreetingHidden') !== 'true') {
    setTimeout(() => {
      if (!aiChatWidget.classList.contains('open')) {
        aiChatWidget.classList.add('greeting-visible');
      }
    }, 1500);
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

