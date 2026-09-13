# CyberWiki Hub v5.0

Enciclopedia de ciberseguridad #1 en español. PWA con 2,800+ artículos, chat IA, terminal CTF, quiz gamificado y más.

## Inicio rápido

```bash
npm install
npm run dev        # Servidor dev en http://localhost:3000
npm run build      # Build de producción en dist/
npm run preview    # Preview del build
npm run test:run   # Ejecutar tests
npm run lint       # Linting
```

## Arquitectura

```
src/
├── main.js                    # Entry point, inicialización
├── core/
│   ├── state.js               # Estado reactivo con persistencia
│   ├── events.js              # EventBus singleton
│   ├── storage.js             # Abstracción localStorage
│   ├── cache.js               # LRU cache con TTL
│   ├── router.js              # Client-side router
│   ├── error-handler.js       # Error boundaries + CircuitBreaker
│   ├── lazy-loader.js         # Lazy loading de módulos
│   ├── data-loader.js         # Carga de datos chunked
│   ├── seo-integration.js     # SEO dinámico
│   ├── structured-data.js     # JSON-LD schemas
│   ├── sitemap-generator.js   # Sitemap XML dinámico
│   └── a11y-*.js              # Accesibilidad (focus, keyboard, motion, screen-reader)
├── components/
│   ├── sidebar.js             # Navegación lateral + categorías
│   ├── header.js              # Stats, reloj, búsqueda
│   ├── modal.js               # Modal de artículos con TOC
│   ├── theme-toggle.js        # Dark/Light theme
│   ├── particles.js           # Efectos canvas (partículas + Matrix)
│   └── loading.js             # Skeletons de carga
├── modules/
│   ├── articles/              # Grid de artículos con paginación
│   ├── search/                # Búsqueda full-text + autocomplete
│   ├── chat/                  # Chat IA multi-proveedor (Ollama/Gemini)
│   ├── terminal/              # Terminal CTF con VFS + SSH stacking
│   ├── quiz/                  # Quiz gamificado (10 niveles, 7 ligas)
│   ├── glossary/              # Glosario técnico
│   ├── owasp/                 # OWASP Top 10
│   ├── cheatsheets/           # Cheatsheets y comandos
│   ├── bookmarks/             # Favoritos
│   ├── history/               # Historial de lectura
│   ├── tags/                  # Nube de tags
│   └── pwa/                   # Service worker + PWA
├── utils/
│   ├── dom.js                 # Helpers DOM (delegate, debounce, etc.)
│   ├── html.js                # Sanitizador HTML + formatMarkdown
│   ├── format.js              # Formateo de datos
│   ├── performance.js         # Monitoreo web vitals
│   ├── animation-optimizer.js # Detección de dispositivo bajo
│   ├── virtual-scroll.js      # Scroll virtual para listas grandes
│   └── font-loader.js         # Carga no bloqueante de fuentes
└── styles/
    ├── tokens.css             # Design tokens (colores, spacing)
    ├── themes.css             # Variables dark/light
    ├── base.css               # Reset + estilos base
    ├── cyberpunk.css          # Layer visual cyberpunk
    ├── main.css               # Entry point CSS (imports todos)
    └── components-*.css       # Estilos por componente
```

## Funcionalidades

- **2,800+ artículos** de ciberseguridad (MITRE ATT&CK, OWASP, CVE, Red Team, Blue Team)
- **Chat IA** con streaming, RAG sobre la wiki, multi-proveedor (Ollama local + Gemini)
- **Terminal CTF** con sistema de archivos virtual, SSH stacking, XP/achievements
- **Quiz gamificado** con 10 niveles, 7 ligas, 30+ NPCs, sonidos Web Audio
- **Búsqueda full-text** con fuzzy matching y autocomplete
- **Guías visuales** interactivas
- **PWA completa** con service worker multi-estrategia
- **Capacitor** para build Android (APK)
- **SEO completo**: JSON-LD, Open Graph, sitemap dinámico, meta tags por artículo
- **Accesibilidad**: focus trap, ARIA live regions, reduced-motion, high contrast
- **Themes**: dark, light, cyberpunk layer

## Tecnologías

- **Runtime**: Vanilla JS (ES Modules)
- **Build**: Vite 6 + Terser
- **Tests**: Vitest + jsdom
- **Lint**: ESLint 9
- **Mobile**: Capacitor 8
- **CSS**: Custom Properties + CSS Modules
- **Fonts**: Fira Code, Inter, Rajdhani (Google Fonts, async loaded)
- **Syntax highlighting**: Prism.js (self-hosted)

## Scripts npm

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build de producción |
| `npm run preview` | Preview del build |
| `npm run test:run` | Tests unitarios |
| `npm run test:coverage` | Tests con cobertura |
| `npm run lint` | ESLint |
| `npm run lint:fix` | ESLint + auto-fix |
| `npm run format` | Prettier |
| `npm run typecheck` | TypeScript check |
| `npm run analyze` | Bundle analysis |

## Licencia

MIT
