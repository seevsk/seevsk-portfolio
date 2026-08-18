# AGENTS.md — seevsk-dev portfolio

Portafolio personal de Sebastian Salas (Next.js 15 / React 19 / Tailwind v4),
inspirado en la estructura de https://tamalsen.dev/ para el diseño de la
home (sección única con navegación por anclas: `#home`, `#skills-exp`,
`#projects`), y en `ecommerce-nextcart` (proyecto del curso de Next del
usuario) para la organización de carpetas: route group + componentes
colocados junto a la ruta que los usa.

## Stack

- Next.js 15 (App Router, Turbopack) + React 19 + TypeScript
- Tailwind CSS v4, componentes base estilo shadcn/ui (`src/components/ui`)
- `framer-motion`, `embla-carousel-react` (+ autoplay), `react-icons`
- Alias de imports: `@/*` → `src/*` (ver `tsconfig.json`)

## Mapa de carpetas

```
public/                 # estáticos servidos en la raíz del sitio (ruta string, no import)
  icons/                 # svgs de tecnologías + marks.svg + menu-open/close.svg
  photos/                # fotos usadas en Feedback/inspirations
  bg.png                 # fondo del Hero (.bg-hero en globals.css)
src/
  app/
    layout.tsx            # shell global: html/body, fuentes, metadata, {children}. SIN chrome.
    globals.css
    (portfolio)/           # route group: todas las páginas públicas del sitio
      layout.tsx             # <Navbar/>{children} — chrome compartido por este grupo
      page.tsx                # home: <Hero/> <Main/> (Skills + Projects, secciones inline)
      ui/                      # componentes exclusivos de la home (colocados junto a su página)
        Hero.tsx Main.tsx Skills.tsx Projects.tsx FilterNav.tsx Carousels.tsx Mouse.tsx
      contact/
        page.tsx                # ruta /contact: <Feedback/> <InfoContact/>
        ui/
          Feedback.tsx InfoContact.tsx
  components/
    navbar/
      Navbar.tsx             # compartido entre rutas → vive en global, no en ui/ de una página
    page-transition/
      PageTransition.tsx     # wrapper "use client" (framer-motion): fade/slide de entrada por página
    ui/                     # primitivas estilo shadcn (button, carousel, carousel-autoplay)
  data/                   # contenido estático tipado (projects, skills, iconsCarousel, inspirations) — icon/image son rutas string a /public
  lib/
    utils.ts              # cn() (clsx + tailwind-merge)
```

**Criterio de colocación de componentes** (tomado de `ecommerce-nextcart`):
un componente usado por una sola ruta vive en la carpeta `ui/` junto al
`page.tsx`/`layout.tsx` de esa ruta (ej. `(portfolio)/contact/ui/`); un
componente compartido por más de una ruta va en `src/components/` (hoy
`Navbar` y `PageTransition`, usados por más de un `page.tsx`/`layout.tsx`).
No existe un barrel global — cada archivo se importa directo desde donde
se usa, igual que ya se hace con `@/data/*` y `@/components/ui/*`.

**Transición entre páginas**: cada `page.tsx` del grupo `(portfolio)`
envuelve su contenido en `<PageTransition>` (`src/components/page-transition/PageTransition.tsx`,
fade + slide-up con `framer-motion`) para que el cambio de ruta (ej.
home → `/contact`) no se sienta como un corte brusco. Al ser rutas
distintas bajo el mismo layout, Next desmonta/monta el `page.tsx`
entrante, así que la animación de entrada se dispara sola en cada
navegación sin necesitar `AnimatePresence`.

**Imágenes**: van en `public/` (icons/, photos/) y se referencian por ruta
string (`/icons/java.svg`), no por import TS. Se eligió así para alinear
con el patrón que usa el usuario en otros proyectos Next actuales (curso
de Fernando Herrera, `ecommerce-nextcart`). Si en el futuro se necesita
el tamaño automático de `next/image` (sin pasar `width`/`height`), esa es
la única razón real para volver a imports TS — hoy todos los usos ya
pasan dimensiones explícitas.

**Layout raíz vs layout del grupo**: el layout raíz (`src/app/layout.tsx`)
es intencionalmente mínimo (sin `Navbar`, sin ningún chrome). El `Navbar`
vive en `(portfolio)/layout.tsx` porque hoy todas las páginas del sitio
pertenecen a ese único grupo. Si en el futuro aparece una sección con
chrome distinto (ej. un área admin sin navbar, como `auth/` en
`ecommerce-nextcart`), el patrón a seguir es agregar OTRO route group con
su propio layout, no meter lógica condicional en el `Navbar` ni en el
layout raíz.

**Navbar y rutas sin Hero**: `Navbar` (`src/components/navbar/Navbar.tsx`)
nace transparente y se vuelve sólido/`fixed` al pasar la sección
`#skills` — pero eso depende de que exista `document.getElementById("skills")`,
que solo existe en la home. Por eso el componente usa `usePathname()`:
fuera de `/` arranca sólido/fijo desde el inicio (no hay Hero que
proteger ni `#skills` que esperar).

## Convenciones

- **Commits**: `tipo(alcance): descripción corta`, en minúsculas (ej.
  `feat(contact): info component`, `fix(navbar): ...`, `chore(...): ...`).
  Ver detalle y reglas de ramas en la skill `.claude/skills/git-flow/SKILL.md`.
- **Componentes**: un archivo por componente, colocado junto a la ruta
  que lo usa (ver criterio arriba); export nombrado (no default, salvo
  `page.tsx`/`layout.tsx` que Next exige default), estilos con Tailwind
  inline (sin CSS modules).
- **Datos**: contenido textual/listas viven en `src/data/*.ts`, tipados,
  no hardcodeados dentro de los componentes.
- **Imports**: alias `@/*` para cruzar a `components/`, `data/` o `lib/`;
  rutas relativas dentro de un mismo `ui/` o hacia `./ui/*` desde su
  `page.tsx`/`layout.tsx`.

## Pendientes conocidos (no tocar sin pedirlo explícitamente)

- `/projects` **no existe como ruta** (se quitó el stub que solo decía
  "Projects Page", no tenía contenido real). Proyectos sigue siendo una
  sección inline de la home (`(portfolio)/ui/Projects.tsx`, ancla
  `#projects`). Si en el futuro escala a su propia página, seguir el
  mismo patrón que `contact/` (carpeta de ruta + `ui/` local).
- `FilterNav.tsx` (filtro "Todo / Desarrollo Web / Desarrollo Móvil") no
  filtra nada todavía — los links son `href="#"`.
- Los links de ancla del `Navbar` (Inicio/Capacidades/Proyectos) usan
  `href="/#home"`, `/#skills-exp"`, `/#projects"` (con `/` explícito, no
  solo `#ancla`) para que funcionen también navegando desde `/contact`:
  un `href="#ancla"` sin la ruta se resuelve contra la página actual, así
  que desde `/contact` se quedaba "pegado" ahí en vez de ir a la home.
  `// Contacto` ya no es ancla, navega a `/contact` como ruta real.

## Historial de reestructuración

2026-08-14 (`chore/project-structure`), tres pasadas sobre la misma rama:
- **Fase 1**: se corrigió la inversión page.tsx/layout.tsx (el contenido
  de la home vivía en el layout raíz), se eliminó la carpeta
  `tech-client/` (poco descriptiva; sus archivos se reubicaron junto a
  quienes los consumen), y se completó el barrel `components/index.ts`
  (luego eliminado en la fase 3 al dejar de hacer falta).
- **Fase 2** (comparando con `ecommerce-nextcart`): el `Navbar` se movió
  al layout raíz (antes vivía dentro de `Header.tsx`, que se eliminó);
  `src/app/assets/` se migró completo a `public/` (imports TS tipados →
  rutas string). Se limpió una duplicación en `Feedback.tsx` que releía
  `svgs.xxx` en vez de usar el `.image` que ya traía `inspirations`. Se
  corrigió además un bug propio de esta fase: al mover `.bg-hero` a la
  sección del Hero (`w-[95%] mx-auto`), el fondo dejó de cubrir todo el
  ancho — se separó en sección full-bleed + wrapper interno al 95%.
- **Fase 3**: se creó el route group `(portfolio)` con su propio
  `layout.tsx` (Navbar) y `page.tsx` (home); el layout raíz volvió a
  quedar mínimo. Contacto pasó de sección ancla (`#contact` en la home) a
  página propia (`/contact`, con su Navbar sólido desde el inicio vía
  `usePathname`). Todos los componentes de `src/app/components/` se
  colocaron junto a su ruta (`(portfolio)/ui/`, `(portfolio)/contact/ui/`)
  y `Navbar` se movió al `src/components/` global por ser el único
  compartido entre rutas. Se quitó el stub sin terminar `/projects`.
