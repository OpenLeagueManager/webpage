/* ============================================================
   I18N DICTIONARY
   ============================================================ */
const translations = {
  es: {
    'nav.features':   'Características',
    'nav.about':      'Sobre el juego',
    'nav.status':     'Estado',
    'nav.community':  'Comunidad',
    'nav.download':   'Descargar',

    'hero.badge':          'Pre-Alpha · v0.1.2',
    'hero.title':          'Construye tu dinastía',
    'hero.subtitle':       'Juego de gestión de esports gratuito y de código abierto para League of Legends. Dirige tu equipo desde las ligas regionales hasta los campeonatos mundiales.',
    'hero.cta.download':   'Descargar gratis',
    'hero.cta.discord':    'Únete al Discord',
    'hero.stats.license':  'Licencia',

    'about.label': 'El juego',
    'about.title': '¿Qué es Open League Manager?',
    'about.p1':    'Open League Manager es un juego de gestión de escritorio donde tomas el control de un equipo profesional de League of Legends. Gestiona fichajes, diseña tácticas, planifica entrenamientos y administra las finanzas del club con un único objetivo: convertirte en campeón.',
    'about.p2':    'Construido con Tauri, Rust y React, OLManager es un proyecto completamente independiente dedicado al ecosistema de los esports. Gratuito, de código abierto y desarrollado por y para la comunidad.',
    'about.card':  '"Lleva a tu equipo desde las ligas regionales hasta los campeonatos mundiales"',

    'features.label': 'Funcionalidades',
    'features.title': 'Todo lo que necesitas para gestionar tu equipo',
    'features.roster.title':     'Plantilla y contratos',
    'features.roster.desc':      'Ficha, renueva y vende jugadores. Gestiona contratos, salarios y el mercado de transferencias con total control.',
    'features.training.title':   'Entrenamientos y scrims',
    'features.training.desc':    'Planifica sesiones de entrenamiento, agenda scrims contra rivales y prepara tácticamente a tu equipo para cada partido.',
    'features.seasons.title':    'Temporadas y torneos',
    'features.seasons.desc':     'Compite en ligas regionales con clasificaciones estilo LoL y avanza a playoffs. Progresión a competiciones internacionales próximamente.',
    'features.simulation.title': 'Simulación de partidas',
    'features.simulation.desc':  'Resultados generados con estadísticas detalladas, ventaja de oro en tiempo real y análisis de rendimiento post-partido.',
    'features.draft.title':      'Draft AI',
    'features.draft.desc':       'Inteligencia artificial de draft que evita picks sin sentido, gestiona bans por rol y toma decisiones coherentes en series.',
    'features.stats.title':      'Estadísticas detalladas',
    'features.stats.desc':       'Gráficas de ventaja de oro, clasificaciones con formato Maps estilo LoL y seguimiento de rendimiento por jugador y equipo.',

    'status.label':    'Estado del proyecto',
    'status.title':    'En desarrollo activo',
    'status.phase':    'Pre-Alpha',
    'status.desc':     'OLManager es software en pre-alpha. Los sistemas de juego están en construcción activa, los formatos de guardado evolucionan y la documentación se actualiza frecuentemente mientras el proyecto se prepara para la colaboración pública.',
    'status.changelog':'Ver changelog completo →',
    'status.recent':   'Últimas novedades · v0.1.2',

    'cl.added':   'Añadido',
    'cl.changed': 'Mejorado',
    'cl.fixed':   'Arreglado',
    'cl.1': 'Vista de calendario de scrims con logo del rival',
    'cl.2': 'Objetivos de junta realistas basados en habilidad del roster',
    'cl.3': 'Gráfica de ventaja de oro con gradiente y segmentos por color de equipo',
    'cl.4': 'Clasificaciones con formato Maps LoL (ej: "12-4", "+8")',
    'cl.5': 'Finalización correcta de series Bo3/Bo5',

    'oss.label':         'Código abierto',
    'oss.title':         'Construido por la comunidad, para la comunidad',
    'oss.desc':          'Open League Manager es software libre bajo licencia GPL-3.0. Cualquiera puede contribuir, reportar errores, sugerir mejoras o hacer un fork. El proyecto valora la transparencia, la mantenibilidad y la correcta atribución de datos.',
    'oss.step1':         'Abre un issue o únete a Discussions con tu idea',
    'oss.step2':         'Espera aprobación del mantenedor (status:approved)',
    'oss.step3':         'Crea una rama desde development y abre tu PR',
    'oss.cta.contribute':'Cómo contribuir',
    'oss.cta.github':    'Ver en GitHub',

    'community.label':        'Comunidad',
    'community.title':        'Únete a la comunidad',
    'community.subtitle':     'Comparte ideas, reporta bugs, sigue el desarrollo y contribuye al proyecto.',
    'community.discord.title':'Discord',
    'community.discord.desc': 'Únete al servidor oficial. Habla con los desarrolladores, propón ideas y sigue las novedades en tiempo real.',
    'community.discord.cta':  'Unirse al servidor →',
    'community.github.desc':  'Explora el código fuente, abre issues, revisa el roadmap y envía tus contribuciones.',
    'community.github.cta':   'Ver repositorio →',

    'footer.desc':      'Juego de gestión de esports libre y de código abierto.',
    'footer.links':     'Enlaces',
    'footer.contribute':'Contribuir',
    'footer.community': 'Comunidad',
    'footer.legal':     'Legal',
    'footer.copy':      '© 2026 OpenLeagueManager. Licencia GPL-3.0.',
    'footer.made':      'Hecho con ❤ por la comunidad.',
  },

  en: {
    'nav.features':   'Features',
    'nav.about':      'About',
    'nav.status':     'Status',
    'nav.community':  'Community',
    'nav.download':   'Download',

    'hero.badge':          'Pre-Alpha · v0.1.2',
    'hero.title':          'Build your dynasty',
    'hero.subtitle':       'Free, open-source esports management game for League of Legends. Lead your team from regional leagues all the way to world championships.',
    'hero.cta.download':   'Download for free',
    'hero.cta.discord':    'Join Discord',
    'hero.stats.license':  'License',

    'about.label': 'The game',
    'about.title': 'What is Open League Manager?',
    'about.p1':    'Open League Manager is a desktop management game where you take control of a professional League of Legends team. Handle transfers, design tactics, schedule training sessions and manage club finances — all with one goal: become a champion.',
    'about.p2':    'Built with Tauri, Rust and React, OLManager is a fully independent project dedicated to the esports ecosystem. Free, open-source and built by and for the community.',
    'about.card':  '"Lead your team from regional leagues to world championships"',

    'features.label': 'Features',
    'features.title': 'Everything you need to manage your team',
    'features.roster.title':     'Roster & contracts',
    'features.roster.desc':      'Sign, renew and sell players. Manage contracts, salaries and the transfer market with full control.',
    'features.training.title':   'Training & scrims',
    'features.training.desc':    'Plan training sessions, schedule scrims against opponents and tactically prepare your team for every match.',
    'features.seasons.title':    'Seasons & tournaments',
    'features.seasons.desc':     'Compete in regional leagues with LoL-style standings and advance to playoffs. Progression to international competitions coming soon.',
    'features.simulation.title': 'Match simulation',
    'features.simulation.desc':  'Results generated with detailed statistics, real-time gold advantage charts and post-match performance analysis.',
    'features.draft.title':      'Draft AI',
    'features.draft.desc':       'Draft AI that avoids nonsensical picks, handles bans by role and makes coherent decisions throughout a series.',
    'features.stats.title':      'Detailed statistics',
    'features.stats.desc':       'Gold advantage charts, LoL-format Maps standings (e.g. "12-4", "+8") and per-player & team performance tracking.',

    'status.label':    'Project status',
    'status.title':    'Actively in development',
    'status.phase':    'Pre-Alpha',
    'status.desc':     'OLManager is pre-alpha software. Gameplay systems are under active construction, save formats are evolving and documentation is frequently updated as the project prepares for public open-source collaboration.',
    'status.changelog':'View full changelog →',
    'status.recent':   'Latest highlights · v0.1.2',

    'cl.added':   'Added',
    'cl.changed': 'Improved',
    'cl.fixed':   'Fixed',
    'cl.1': 'Scrim calendar view showing opponent name and logo',
    'cl.2': 'Realistic board objectives based on roster skill vs. league',
    'cl.3': 'Gold advantage chart with gradient and team-colored segments',
    'cl.4': 'LoL-format Maps standings (e.g. "12-4", "+8")',
    'cl.5': 'Correct Bo3/Bo5 series completion detection',

    'oss.label':         'Open source',
    'oss.title':         'Built by the community, for the community',
    'oss.desc':          'Open League Manager is free software under the GPL-3.0 license. Anyone can contribute, report bugs, suggest improvements or fork the project. The project values transparency, maintainability and correct data attribution.',
    'oss.step1':         'Open an issue or join Discussions with your idea',
    'oss.step2':         'Wait for maintainer approval (status:approved)',
    'oss.step3':         'Branch from development and open your PR',
    'oss.cta.contribute':'How to contribute',
    'oss.cta.github':    'View on GitHub',

    'community.label':        'Community',
    'community.title':        'Join the community',
    'community.subtitle':     'Share ideas, report bugs, follow development and contribute to the project.',
    'community.discord.title':'Discord',
    'community.discord.desc': 'Join the official server. Talk to developers, propose ideas and follow updates in real time.',
    'community.discord.cta':  'Join the server →',
    'community.github.desc':  'Explore the source code, open issues, review the roadmap and submit your contributions.',
    'community.github.cta':   'View repository →',

    'footer.desc':      'Free, open-source esports management game.',
    'footer.links':     'Links',
    'footer.contribute':'Contribute',
    'footer.community': 'Community',
    'footer.legal':     'Legal',
    'footer.copy':      '© 2026 OpenLeagueManager. GPL-3.0 License.',
    'footer.made':      'Made with ❤ by the community.',
  }
};

/* ============================================================
   I18N ENGINE
   ============================================================ */
let currentLang = localStorage.getItem('olm-lang') || detectLang();

function detectLang() {
  const b = navigator.language || navigator.userLanguage || 'es';
  return b.startsWith('es') ? 'es' : 'en';
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('olm-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = translations[lang][key];
    if (val !== undefined) el.textContent = val;
  });

  const label = document.getElementById('lang-label');
  if (label) label.textContent = lang === 'es' ? 'EN' : 'ES';
}

/* ============================================================
   NAVBAR: scroll + burger
   ============================================================ */
const navbar   = document.getElementById('navbar');
const burger   = document.getElementById('nav-burger');
const navLinks = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  burger.classList.toggle('active');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    burger.classList.remove('active');
  });
});

/* ============================================================
   LANGUAGE TOGGLE
   ============================================================ */
document.getElementById('lang-toggle').addEventListener('click', () => {
  applyLang(currentLang === 'es' ? 'en' : 'es');
});

/* ============================================================
   REVEAL ON SCROLL
   ============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   INIT
   ============================================================ */
applyLang(currentLang);
