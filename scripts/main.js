/* ============================================================
   I18N DICTIONARY
   ============================================================ */
const translations = {
  es: {
    'nav.features':   'Características',
    'nav.about':      'Sobre el juego',
    'nav.status':     'Estado',
    'nav.team':       'Equipo',
    'nav.community':  'Comunidad',
    'nav.download':   'Descargar',
    'nav.downloads':  'Descargas',

    'hero.badge':          'Pre-Alpha · v0.2.1',
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
    'status.recent':   'Últimas novedades · v0.2.1',

    'cl.added':   'Añadido',
    'cl.changed': 'Mejorado',
    'cl.fixed':   'Arreglado',
    'cl.1': 'Soporte de URL de imagen de perfil para jugadores',
    'cl.2': 'Rank de SoloQ y localización de impacto de staff añadidos',
    'cl.3': 'Gestión de transferencias y destino de plantilla mejorados',
    'cl.4': 'Resolución de rol de jugador unificada en todas las vistas',
    'cl.10': 'Sistema multileague: múltiples competiciones activas simultáneamente',
    'cl.11': 'Navegador de competiciones con calendario, clasificaciones, equipos y jugadores',
    'cl.12': 'UI responsive mejorada para todas las resoluciones de escritorio',
    'status.dev': 'En desarrollo · develop',

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

    'team.label':              'Equipo',
    'team.title':              'Programadores principales',
    'team.role.founder':       'Fundador & Lead Developer',
    'team.bio.aalonsolopez':   'Software Engineer · Madrid',
    'team.role.cofounder':     'Co-Fundador & Developer',
    'team.bio.chasemrs':       'Software Developer',

    'contrib.label': 'Contribuidores',
    'contrib.title': 'Gente que hace esto posible',
    'contrib.game':  '🎮 Juego',
    'contrib.web':   '🌐 Web',
    'contrib.db':      '📊 Base de datos',
    'contrib.db.unit': 'datos aportados',

    'footer.desc':      'Juego de gestión de esports libre y de código abierto.',
    'footer.links':     'Enlaces',
    'footer.contribute':'Contribuir',
    'footer.community': 'Comunidad',
    'footer.legal':     'Legal',
    'footer.copy':      '© 2026 OpenLeagueManager. Licencia GPL-3.0.',
    'footer.made':      'Hecho con ❤ por la comunidad.',

    'downloads.label':      'Descargas',
    'downloads.title':      'Descarga OLManager',
    'downloads.subtitle':   'Elige tu plataforma y comienza a gestionar tu equipo.',
    'downloads.popular':    'Más popular',
    'downloads.whatsnew.toggle': '¿Qué hay de nuevo en v0.2.1?',
    'downloads.verified.tooltip': 'Firma PGP verificada',
    'downloads.verified.aria':    'Verificado',
    'downloads.whatsnew.content': '<h4>v0.2.1 — 2026-05-13</h4><p><strong>Añadido:</strong></p><ul><li>Soporte de URL de imagen de perfil para jugadores y componentes del frontend.</li><li>Cadenas de localización para SoloQ rank e impacto del staff en los idiomas soportados.</li></ul><p><strong>Mejorado:</strong></p><ul><li>Gestión de transferencias en flujos de plantilla, incluyendo el comportamiento de destino y tests relacionados.</li><li>Resolución del rol del jugador: el rol de la alineación activa y la posición natural se manejan de forma consistente entre vista de partido, dashboard, plantilla y entrenamiento.</li></ul>',
    'downloads.windows.exe':'Instalador (.exe)',
    'downloads.windows.msi':'Paquete MSI',
    'downloads.macos.dmg':  'DMG (Apple Silicon)',
    'downloads.macos.app':  'App Bundle (.tar.gz)',
    'downloads.linux.appimage':'AppImage',
    'downloads.linux.deb':  'Debian / Ubuntu (.deb)',
    'downloads.linux.rpm':  'Fedora / openSUSE (.rpm)',
    'downloads.android.apk':'APK',
    'downloads.source.title':'Código fuente',
    'downloads.source.tar': 'Source (.tar.gz)',
  },

  en: {
    'nav.features':   'Features',
    'nav.about':      'About',
    'nav.status':     'Status',
    'nav.team':       'Team',
    'nav.community':  'Community',
    'nav.download':   'Download',
    'nav.downloads':  'Downloads',

    'hero.badge':          'Pre-Alpha · v0.2.1',
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
    'status.recent':   'Latest highlights · v0.2.1',

    'cl.added':   'Added',
    'cl.changed': 'Improved',
    'cl.fixed':   'Fixed',
    'cl.1': 'Player profile image URL support',
    'cl.2': 'SoloQ rank and staff impact localisation strings added',
    'cl.3': 'Improved transfer handling and roster destination behaviour',
    'cl.4': 'Unified player role resolution across all views',
    'cl.10': 'Multi-league system: multiple competitions running simultaneously',
    'cl.11': 'Competitions browser with calendar, standings, teams and players',
    'cl.12': 'Responsive UI for all desktop resolutions (960px to ultrawide)',
    'status.dev': 'In development · develop',

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

    'team.label':              'Team',
    'team.title':              'Core developers',
    'team.role.founder':       'Founder & Lead Developer',
    'team.bio.aalonsolopez':   'Software Engineer · Madrid',
    'team.role.cofounder':     'Co-Founder & Developer',
    'team.bio.chasemrs':       'Software Developer',

    'contrib.label': 'Contributors',
    'contrib.title': 'People who make this possible',
    'contrib.game':  '🎮 Game',
    'contrib.web':   '🌐 Web',
    'contrib.db':      '📊 Database',
    'contrib.db.unit': 'data contributions',

    'footer.desc':      'Free, open-source esports management game.',
    'footer.links':     'Links',
    'footer.contribute':'Contribute',
    'footer.community': 'Community',
    'footer.legal':     'Legal',
    'footer.copy':      '© 2026 OpenLeagueManager. GPL-3.0 License.',
    'footer.made':      'Made with ❤ by the community.',

    'downloads.label':      'Downloads',
    'downloads.title':      'Download OLManager',
    'downloads.subtitle':   'Choose your platform and start managing your team.',
    'downloads.popular':    'Most popular',
    'downloads.whatsnew.toggle': "What's new in v0.2.1?",
    'downloads.verified.tooltip': 'PGP signature verified',
    'downloads.verified.aria':    'Verified',
    'downloads.whatsnew.content': '<h4>v0.2.1 — 2026-05-13</h4><p><strong>Added:</strong></p><ul><li>Profile image URL support for players and related frontend components.</li><li>Localisation strings for SoloQ rank and staff impact across supported languages.</li></ul><p><strong>Changed:</strong></p><ul><li>Improved transfer handling in squad flows, including roster destination behaviour and related transfer tests.</li><li>Improved player role resolution so active lineup role data and natural position are handled consistently across live match, dashboard, squad and training views.</li></ul>',
    'downloads.windows.exe':'Installer (.exe)',
    'downloads.windows.msi':'MSI Package',
    'downloads.macos.dmg':  'DMG (Apple Silicon)',
    'downloads.macos.app':  'App Bundle (.tar.gz)',
    'downloads.linux.appimage':'AppImage',
    'downloads.linux.deb':  'Debian / Ubuntu (.deb)',
    'downloads.linux.rpm':  'Fedora / openSUSE (.rpm)',
    'downloads.android.apk':'APK',
    'downloads.source.title':'Source code',
    'downloads.source.tar': 'Source (.tar.gz)',
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

  // innerHTML variants (for content with markup)
  document.querySelectorAll('[data-i18n-html]').forEach(el => {
    const key = el.getAttribute('data-i18n-html');
    const val = translations[lang][key];
    if (val !== undefined) el.innerHTML = val;
  });

  // attribute variants: data-i18n-attr="title:k1;aria-label:k2"
  document.querySelectorAll('[data-i18n-attr]').forEach(el => {
    el.getAttribute('data-i18n-attr').split(';').forEach(pair => {
      const [attr, key] = pair.split(':').map(s => s && s.trim());
      if (!attr || !key) return;
      const val = translations[lang][key];
      if (val !== undefined) el.setAttribute(attr, val);
    });
  });

  // Refresh pushed-at text in current language
  document.querySelectorAll('[data-stat="pushed-at"]').forEach(el => {
    el.textContent = timeAgo(_pushedAt, lang);
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

/* ============================================================
   LIVE GITHUB DATA (stars, forks, latest release)
   Caches results in localStorage for 1h to respect API limits
   ============================================================ */
const LIVE_REPO  = 'OpenLeagueManager/OLManager';
const LIVE_CACHE = 'olm_live_cache';
const LIVE_TTL   = 60 * 60 * 1000; // 1 hour

let _pushedAt = null; // cached for i18n-aware relative time updates

applyLang(currentLang);

function timeAgo(dateStr, lang) {
  if (!dateStr) return lang === 'es' ? 'Actualizado recientemente' : 'Updated recently';
  const diff = Date.now() - new Date(dateStr).getTime();
  const mins = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days  = Math.floor(diff / 86400000);
  if (mins < 1)   return lang === 'es' ? 'Ahora mismo' : 'Just now';
  if (mins < 60)  return lang === 'es' ? `Hace ${mins} min` : `${mins}m ago`;
  if (hours < 24) return lang === 'es' ? `Hace ${hours} h` : `${hours}h ago`;
  if (days < 30)  return lang === 'es' ? `Hace ${days} días` : `${days}d ago`;
  return lang === 'es' ? 'El mes pasado' : 'Last month';
}

function readCache() {
  try {
    const raw = localStorage.getItem(LIVE_CACHE);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.ts > LIVE_TTL) return null;
    return parsed.data;
  } catch { return null; }
}

function writeCache(data) {
  try {
    localStorage.setItem(LIVE_CACHE, JSON.stringify({ ts: Date.now(), data }));
  } catch { /* quota errors are non-fatal */ }
}

async function fetchLiveData() {
  // Try cache first
  const cached = readCache();
  if (cached) { applyLiveData(cached); populatePushedAt(cached); return; }

  // Fetch both endpoints in parallel
  try {
    const [repoRes, relRes] = await Promise.all([
      fetch(`https://api.github.com/repos/${LIVE_REPO}`),
      fetch(`https://api.github.com/repos/${LIVE_REPO}/releases/latest`),
    ]);
    if (!repoRes.ok || !relRes.ok) return;
    const repo = await repoRes.json();
    const rel  = await relRes.json();
    const data = {
      stars: repo.stargazers_count,
      forks: repo.forks_count,
      pushed_at: repo.pushed_at,
      version: rel.tag_name,
    };
    writeCache(data);
    applyLiveData(data);
    populatePushedAt(data);
  } catch (e) {
    // Network error: keep hardcoded values silently
  }
}

function applyLiveData(data) {
  // Update stat elements
  document.querySelectorAll('[data-stat]').forEach(el => {
    const key = el.getAttribute('data-stat');
    if (key === 'stars' && typeof data.stars === 'number') el.textContent = data.stars.toLocaleString();
    if (key === 'forks' && typeof data.forks === 'number') el.textContent = data.forks.toLocaleString();
  });
  // Update version badge
  if (data.version) {
    document.querySelectorAll('[data-version]').forEach(el => {
      el.textContent = data.version;
    });
    // Replace __VERSION__ in all download URLs
    document.querySelectorAll('a[href*="__VERSION__"]').forEach(a => {
      a.href = a.href.replace(/__VERSION__/g, data.version);
    });
  }
}

function populatePushedAt(data) {
  if (data.pushed_at) {
    _pushedAt = data.pushed_at;
    const lang = currentLang || localStorage.getItem('olm-lang') || 'es';
    document.querySelectorAll('[data-stat="pushed-at"]').forEach(el => {
      el.textContent = timeAgo(_pushedAt, lang);
    });
  }
}

// Fire on DOM ready
fetchLiveData();

// Auto-refresh every hour
setInterval(fetchLiveData, 60 * 60 * 1000);
