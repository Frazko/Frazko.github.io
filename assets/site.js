(() => {
  "use strict";

  const translations = {
  "en": {
    "meta.description": "Frazko Apps Lab builds mobile apps, web products and experiments across communities, shared memories, cinema, planning and field tools.",
    "nav.label": "Main navigation",
    "nav.apps": "Apps",
    "nav.services": "What we build",
    "nav.stack": "Stack",
    "language.label": "Language",
    "details.open": "View details",
    "details.openAria": "View details of {app}",
    "hero.eyebrow": "Independent products, shipped with care",
    "hero.title": "We build apps that people actually use.",
    "hero.copy": "Frazko Apps Lab is where Francisco Murillo builds and ships apps, prototypes and product experiments across communities, shared memories, cinema, planning and field tools.",
    "hero.apps": "View apps",
    "hero.contact": "Get in touch",
    "stats.projects": "Apps and experiments across mobile, web and nearby communication.",
    "stats.mobile": "Built for iPhone and Android with Expo, Flutter and native services.",
    "stats.realtime.title": "Realtime",
    "stats.realtime": "Supabase-backed systems for auth, storage, chat, state sync and live updates.",
    "stats.shipping.title": "Ship-focused",
    "stats.shipping": "From idea to release, including subscriptions, ads, review fixes and launch polish.",
    "focus.title": "Current focus",
    "focus.consumer.title": "Consumer apps",
    "focus.consumer": "Products people open often, understand quickly and keep using.",
    "focus.iteration.title": "Fast iteration",
    "focus.iteration": "Lean cycles across UX, backend, monetization and store release work.",
    "focus.foundations.title": "Clean foundations",
    "focus.foundations": "Typed codebases, pragmatic architecture and shipping discipline.",
    "apps.title": "Apps & experiments",
    "apps.copy": "Published apps, products in development and focused experiments. Each one starts with a clear use case.",
    "status.published": "Published",
    "status.android": "Available on Android",
    "status.web": "Available on the web",
    "website.visit": "Visit website",
    "website.cinesAria": "Open the Cines CR website in a new tab",
    "status.progress": "In development",
    "status.prototype": "Prototype",
    "status.lab": "Lab / SDK",
    "status.unavailable": "No public listing",
    "store.apple": "Download on the",
    "store.google": "Get it on",
    "store.unavailable": "Not available",
    "store.downloadAria": "Download {app} from {store}",
    "store.unavailableAria": "{app} is not currently available on {store}",
    "chip.maps": "Maps",
    "chip.notifications": "Notifications",
    "chip.location": "Location",
    "chip.bluetooth": "Bluetooth",
    "services.title": "What we build",
    "services.copy": "The lab is centered on useful software, thoughtful product design and the work it takes to ship.",
    "services.mobile.title": "Mobile apps",
    "services.mobile": "Consumer products for iPhone and Android, from first prototype to store release.",
    "services.realtime.title": "Realtime systems",
    "services.realtime": "Chat, sync, notifications and app flows that depend on fresh shared state.",
    "services.monetization.title": "Monetization",
    "services.monetization": "Subscriptions, paywalls, ad integrations and the practical details around them.",
    "services.iteration.title": "Product iteration",
    "services.iteration": "Rapid cycles across design, implementation, testing, release and reviewer feedback.",
    "stack.title": "Core stack",
    "stack.copy": "Tools chosen for speed, maintainability and production delivery.",
    "footer": "Frazko Apps Lab · Built by Francisco Murillo",
    "app.swapper-club.description": "A collectible sticker trading app focused on albums, swaps, ownership tracking and community-driven content.",
    "app.swapper-club.alt": "Swapper Club artwork with collectible cards, a sticker album and a swap interface in purple and gold.",
    "app.aquiando.description": "A location-aware mobile app built for real-world utility, field workflows, maps and live device context.",
    "app.aquiando.alt": "Aquiando artwork with a dark terrain map, location markers and a turquoise route.",
    "app.convoy.description": "A mobile product for 4x4 groups, outdoor coordination, routes, planning and shared trip context.",
    "app.convoy.alt": "Convoy artwork with offroad vehicles on a mountain trail and a live route map.",
    "app.viberroom.description": "A messaging app where each conversation can carry its own visual identity, with a strong emphasis on product feel.",
    "app.viberroom.alt": "ViberRoom artwork with layered chat rooms in purple, blue and amber.",
    "app.seeya.description": "Make time for your people. Private friend circles, shared places and social planning built around availability and real-life moments.",
    "app.seeya.alt": "SeeYa concept artwork with friends at sunset, a shared calendar and floating coral and violet panels.",
    "app.rewind.description": "Relive the moment. Bring shared videos and group memories together, and see the same experience from different perspectives.",
    "app.rewind.alt": "REWIND concept artwork with an aqua video gallery, shared adventure memories and its white brush wordmark.",
    "app.cines-cr.description": "Find your next movie night. Cinema listings, movie details and showtimes from theaters across Costa Rica, together in one app.",
    "app.cines-cr.alt": "Cines CR concept artwork with a red cinema auditorium, original movie posters and golden showtime panels.",
    "app.week-planner.description": "Plan your week and understand your days. A thoughtful space for activities, habits, personal reflection and a more balanced use of time.",
    "app.week-planner.alt": "Week Planner concept artwork with a seven-day calendar, activity checkmarks and habit charts in sage and lilac.",
    "app.quoteflow.description": "An experimental parts assistant for exploring a catalog, checking vehicle compatibility and preparing clear, itemized quotes.",
    "app.quoteflow.alt": "QuoteFlow concept artwork with precision automotive parts, a catalog and a floating quotation panel in amber.",
    "app.mesh-lab.description": "A nearby communication lab and SDK for exchanging text, location and voice notes between phones without internet for local transport.",
    "app.mesh-lab.alt": "Mesh Lab concept artwork with nearby phones connected by luminous cyan links over a terrain map."
  },
  "es": {
    "meta.description": "Frazko Apps Lab crea apps móviles, productos web y experimentos de comunidades, recuerdos compartidos, cine, planificación y herramientas de campo.",
    "nav.label": "Navegación principal",
    "nav.apps": "Apps",
    "nav.services": "Qué creamos",
    "nav.stack": "Tecnologías",
    "language.label": "Idioma",
    "details.open": "Ver detalles",
    "details.openAria": "Ver detalles de {app}",
    "hero.eyebrow": "Productos independientes, creados con cuidado",
    "hero.title": "Creamos apps que la gente usa de verdad.",
    "hero.copy": "Frazko Apps Lab es donde Francisco Murillo crea y publica apps, prototipos y experimentos de comunidades, recuerdos compartidos, cine, planificación y herramientas de campo.",
    "hero.apps": "Ver apps",
    "hero.contact": "Hablemos",
    "stats.projects": "Apps y experimentos para móviles, web y comunicación entre dispositivos cercanos.",
    "stats.mobile": "Desarrollo para iPhone y Android con Expo, Flutter y servicios nativos.",
    "stats.realtime.title": "Tiempo real",
    "stats.realtime": "Sistemas con Supabase para acceso, archivos, chat, sincronización y actualizaciones en vivo.",
    "stats.shipping.title": "De la idea al lanzamiento",
    "stats.shipping": "Desarrollo y publicación, incluidas suscripciones, anuncios, revisiones y detalles de lanzamiento.",
    "focus.title": "Nuestro enfoque",
    "focus.consumer.title": "Apps para el día a día",
    "focus.consumer": "Productos fáciles de entender que las personas abren seguido y quieren seguir usando.",
    "focus.iteration.title": "Mejora continua",
    "focus.iteration": "Ciclos ágiles de experiencia de uso, backend, monetización y publicación en tiendas.",
    "focus.foundations.title": "Bases sólidas",
    "focus.foundations": "Código tipado, arquitectura práctica y atención a los detalles de cada lanzamiento.",
    "apps.title": "Apps y experimentos",
    "apps.copy": "Apps publicadas, productos en desarrollo y experimentos concretos. Cada uno parte de una necesidad clara.",
    "status.published": "Publicada",
    "status.android": "Disponible en Android",
    "status.web": "Web disponible",
    "website.visit": "Visitar web",
    "website.cinesAria": "Abrir la web de Cines CR en una pestaña nueva",
    "status.progress": "En desarrollo",
    "status.prototype": "Prototipo",
    "status.lab": "Laboratorio / SDK",
    "status.unavailable": "Sin ficha pública",
    "store.apple": "Descárgala en",
    "store.google": "Disponible en",
    "store.unavailable": "No disponible",
    "store.downloadAria": "Descargar {app} desde {store}",
    "store.unavailableAria": "{app} no está disponible actualmente en {store}",
    "chip.maps": "Mapas",
    "chip.notifications": "Notificaciones",
    "chip.location": "Ubicación",
    "chip.bluetooth": "Bluetooth",
    "services.title": "Qué creamos",
    "services.copy": "El laboratorio se enfoca en software útil, diseño de producto cuidado y el trabajo necesario para publicarlo.",
    "services.mobile.title": "Apps móviles",
    "services.mobile": "Productos para iPhone y Android, desde el primer prototipo hasta su publicación.",
    "services.realtime.title": "Sistemas en tiempo real",
    "services.realtime": "Chat, sincronización, notificaciones y experiencias con información compartida al día.",
    "services.monetization.title": "Monetización",
    "services.monetization": "Suscripciones, planes de pago, anuncios y los detalles de su integración.",
    "services.iteration.title": "Evolución del producto",
    "services.iteration": "Ciclos ágiles de diseño, desarrollo, pruebas, publicación y respuesta a revisiones.",
    "stack.title": "Nuestras tecnologías",
    "stack.copy": "Herramientas elegidas por su agilidad, facilidad de mantenimiento y capacidad para llevar productos a producción.",
    "footer": "Frazko Apps Lab · Creado por Francisco Murillo",
    "app.swapper-club.description": "Una app para coleccionar e intercambiar stickers, organizar álbumes, llevar el control de tu colección y compartir con la comunidad.",
    "app.swapper-club.alt": "Ilustración de Swapper Club con cartas coleccionables, un álbum e interfaz de intercambio en violeta y dorado.",
    "app.aquiando.description": "Una app de ubicación para actividades de campo, mapas y herramientas que aprovechan el contexto del dispositivo en tiempo real.",
    "app.aquiando.alt": "Ilustración de Aquiando con mapa de terreno oscuro, marcadores de ubicación y una ruta turquesa.",
    "app.convoy.description": "Una app para grupos 4x4: coordinar salidas, explorar rutas, planear aventuras y mantener al grupo conectado durante el recorrido.",
    "app.convoy.alt": "Ilustración de Convoy con vehículos 4x4 en una ruta de montaña y un mapa del recorrido.",
    "app.viberroom.description": "Una app de mensajería donde cada conversación puede tener su propia identidad visual, con especial cuidado en la experiencia de uso.",
    "app.viberroom.alt": "Ilustración de ViberRoom con salas de chat superpuestas en violeta, azul y ámbar.",
    "app.seeya.description": "Encuentra tiempo para tu gente. Círculos privados de amigos, lugares compartidos y planes alrededor de la disponibilidad y los encuentros en persona.",
    "app.seeya.alt": "Ilustración conceptual de SeeYa con amigos al atardecer, calendario compartido y paneles flotantes en coral y violeta.",
    "app.rewind.description": "Reviví el momento. Reúne videos y recuerdos de tus grupos para disfrutar una misma experiencia desde distintas perspectivas.",
    "app.rewind.alt": "Ilustración conceptual de REWIND con galería de videos aqua, recuerdos de aventuras y su logotipo blanco de pincel.",
    "app.cines-cr.description": "Encuentra tu próxima salida al cine. Cartelera, información de películas y horarios de cines de Costa Rica reunidos en una app.",
    "app.cines-cr.alt": "Ilustración conceptual de Cines CR con sala de cine roja, afiches de películas e interfaces de horarios doradas.",
    "app.week-planner.description": "Organiza tu semana y comprende tus días. Un espacio para actividades, hábitos, reflexión personal y un uso más equilibrado del tiempo.",
    "app.week-planner.alt": "Ilustración conceptual de Week Planner con calendario de siete días, actividades y gráficos de hábitos en verde salvia y lila.",
    "app.quoteflow.description": "Un asistente experimental de repuestos para consultar el catálogo, revisar compatibilidad con vehículos y preparar cotizaciones detalladas.",
    "app.quoteflow.alt": "Ilustración conceptual de QuoteFlow con repuestos automotrices, catálogo y panel flotante de cotización en ámbar.",
    "app.mesh-lab.description": "Un laboratorio y SDK de comunicación cercana para intercambiar mensajes, ubicación y notas de voz entre teléfonos sin internet para el transporte local.",
    "app.mesh-lab.alt": "Ilustración conceptual de Mesh Lab con teléfonos cercanos conectados por enlaces luminosos cian sobre un mapa de terreno."
  }
};
  const storageKey = "frazko-apps-language";
  const buttons = document.querySelectorAll("[data-language]");
  let savedLanguage = null;

  try {
    savedLanguage = localStorage.getItem(storageKey);
  } catch {
    // Browser privacy settings may disable storage; switching still works.
  }

  const systemLanguage = (navigator.languages?.[0] || navigator.language || "en")
    .toLowerCase().split("-")[0];
  const initialLanguage = Object.hasOwn(translations, savedLanguage)
    ? savedLanguage
    : (Object.hasOwn(translations, systemLanguage) ? systemLanguage : "en");

  function applyLanguage(language) {
    if (!Object.hasOwn(translations, language)) return;
    const copy = translations[language];
    document.documentElement.lang = language;
    document.querySelector('meta[name="description"]').content = copy["meta.description"];

    for (const [attribute, target] of [
      ["data-i18n", null],
      ["data-i18n-alt", "alt"],
      ["data-i18n-aria", "aria-label"],
    ]) {
      document.querySelectorAll("[" + attribute + "]").forEach((element) => {
        const value = copy[element.getAttribute(attribute)];
        if (value === undefined) return;
        if (target) element.setAttribute(target, value);
        else element.textContent = value;
      });
    }

    document.querySelectorAll("[data-store-app]").forEach((element) => {
      const key = element.hasAttribute("href") ? "store.downloadAria" : "store.unavailableAria";
      element.setAttribute("aria-label", copy[key]
        .replace("{app}", element.dataset.storeApp)
        .replace("{store}", element.dataset.storePlatform));
    });

    document.querySelectorAll("[data-project-details]").forEach((button) => {
      const name = button.closest(".project").querySelector("h3").textContent;
      button.setAttribute("aria-label", copy["details.openAria"].replace("{app}", name));
    });

    buttons.forEach((button) => {
      button.setAttribute("aria-pressed", String(button.dataset.language === language));
    });
    document.dispatchEvent(new CustomEvent("portfolio:languagechange", { detail: { language } }));
  }

  applyLanguage(initialLanguage);
  document.querySelector(".language-switch").hidden = false;

  buttons.forEach((button) => button.addEventListener("click", () => {
    const language = button.dataset.language;
    applyLanguage(language);
    try {
      localStorage.setItem(storageKey, language);
    } catch {
      // Keep the selected language for this visit even without persistence.
    }
  }));
})();
