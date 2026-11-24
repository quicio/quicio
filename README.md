# Quicio

**Estudio independiente. Investigar, imaginar, construir.**

Sitio institucional de Quicio: un archivo editorial de proyectos, experimentos, publicaciones e investigaciones. No es una agencia, una startup ni una empresa de servicios. Es el contexto común de proyectos que conservan su propia voz y su propio despliegue.

- Preview: [quicio.github.io/quicio](https://quicio.github.io/quicio/)
- Sitio final: [quicio.org](https://quicio.org) — pendiente de DNS
- Organización: [github.com/quicio](https://github.com/quicio)
- Contacto: [hello@quicio.org](mailto:hello@quicio.org)

## Estado

Primera versión del sitio Astro. Incluye portada, catálogo de proyectos activos, experimentos, archivo, acerca de, contacto, sistema de diseño y 404. El Archivo espera el relato histórico del fundador; hasta entonces solo publica entradas verificables.

## Stack

- **Astro 7** en modo estático.
- **Content collections** con Markdown y esquemas Zod.
- **CSS propio** con tokens; sin framework de UI ni utility-first.
- **Fuentes autoalojadas**: Roman Serif, Archivo y JetBrains Mono.
- **GitHub Pages** con `CNAME` para `quicio.org`.
- **OpenSpec** para el desarrollo guiado por especificaciones.
- **Impeccable** como skill de diseño, crítica y documentación.

## Local

```bash
npm install
npm run dev
```

Abrir `http://localhost:4321`.

Comandos:

```bash
npm run check          # tipos y contenido
npm run build          # build estático en dist/
npm run links          # enlaces internos del build
npm run verify         # check + build + links
npm run format         # Prettier
```

## Estructura

```
src/
  assets/
    fonts/             # woff2 autoalojados
    images/            # capas del hero y lámina para OG
  components/          # shell, marca, placas, filas editoriales
  content/
    proyectos/         # fichas Markdown de proyectos
    experimentos/      # prototipos y procesos
    archivo/           # historial verificable
    paginas/           # inicio, acerca, contacto
  data/
    sitio.ts           # datos institucionales y navegación
  layouts/
    Base.astro
  pages/               # rutas estáticas
  styles/
    fonts.css
    tokens.css
    base.css
public/
  fonts/               # licencias de fuentes
  archivo/             # artefactos históricos
  favicon.svg
  og.png
  CNAME
scripts/
  check-links.mjs
  build-og.sh
  og.html              # fuente de la imagen social
openspec/
  specs/               # capacidades vigentes
  changes/             # cambios en curso y archivo
docs/
  identidad.md         # concepto, voz y relación con proyectos
  contenido.md         # cómo editar el sitio
  backlog-diseno.md    # hallazgos de diseño con evidencia y estado
DESIGN.md              # sistema visual y tokens
PRODUCT.md             # verdad de producto
AGENTS.md              # reglas para agentes
```

## Contenido

Todo el contenido editorial se edita en Markdown. La guía completa está en [`docs/contenido.md`](docs/contenido.md).

- Para agregar un proyecto: `src/content/proyectos/<slug>.md`.
- Para agregar un experimento: `src/content/experimentos/<slug>.md`.
- Para agregar una entrada de archivo: `src/content/archivo/<slug>.md`.
- Para cambiar el correo o las coordenadas: `src/data/sitio.ts`.

Los proyectos no tienen página interna en Quicio: cada ficha enlaza a la página o repositorio del proyecto. Quicio no duplica productos ni documentación.

## Sistema de diseño

La identidad se documenta en [`DESIGN.md`](DESIGN.md) y se puede consultar en `/sistema/`. La idea central es **la cámara clara**: pasar de la cámara de niebla de KNDL a un espacio de papel y luz, sin perder la sensibilidad editorial.

- Marfil `#F0EDE5`, carbón `#242321`, ocre `#B77A35`, verde mineral `#78816D`.
- Roman Serif para la voz; Archivo para leer; JetBrains Mono para medir.
- Placas SVG generativas, sin fotografía de stock.
- Semina y Rizoma conservan sus isotipos, estructuras y personalidades. Quicio solo comparte gramática.

## Despliegue

El workflow `.github/workflows/deploy.yml` construye y publica en GitHub Pages en cada push a `main`.

El repositorio usa por defecto la URL de preview del project page:

```
SITE_URL=https://quicio.github.io
BASE_PATH=/quicio
```

Eso deja el sitio en **https://quicio.github.io/quicio/** con todos los assets, enlaces internos, canonical y sitemap bajo `/quicio/`.

Para publicar en **https://quicio.org**:

1. Configurar los registros DNS de `quicio.org` hacia GitHub Pages.
2. En **Settings → Variables and secrets → Actions**, definir:
   - `SITE_URL=https://quicio.org`
   - `BASE_PATH=/`
3. En **Settings → Pages**, definir el custom domain `quicio.org` y activar HTTPS.
4. Hacer push a `main` o ejecutar el workflow manualmente.

El repositorio incluye `public/CNAME` con `quicio.org` y `public/og.png` con la imagen social.

Requisitos: el repositorio debe ser público o tener Pages habilitado; la fuente de Pages debe ser **GitHub Actions**.

## Verificación

Antes de publicar:

```bash
npm run verify
```

Además se revisa:

- responsive en 360, 390, 768, 1024, 1440 y 1920 px;
- navegación por teclado y sin JavaScript;
- `prefers-reduced-motion`;
- contraste AA;
- enlaces externos vivos;
- capturas de portada, proyectos, experimentos, archivo, acerca y contacto.

La imagen social se regenera desde `scripts/og.html`:

```bash
npm run og
```

Si Chromium no está en una ruta conocida, definí `CHROME=/ruta/a/chrome`.

## OpenSpec

Las especificaciones viven en `openspec/`. Cada slice del sitio se propone, implementa, verifica y archiva como un cambio independiente:

1. `site-foundation`
2. `project-catalog`
3. `lab-and-archive`
4. `studio-pages`
5. `design-finish`

Comandos útiles:

```bash
openspec list
openspec status --change <nombre>
openspec validate <nombre>
openspec archive <nombre>
```

## Créditos

- Tipografías: Roman Serif (m klein fonteria, 2004; licencia de uso web a confirmar), Archivo (SIL OFL) y JetBrains Mono (SIL OFL). Licencias y notas en `public/fonts/`.
- Contenido y proyecto: Quicio.
- El sitio anterior de 2026 se conserva en `/archivo/sitio-2026/original/`.

## Pendientes

- Incorporar el relato histórico de Quicio al Archivo cuando el fundador lo entregue.
- Revisar el estado de los proyectos privados sin superficie pública.
- Evaluar un feed editorial cuando exista una sección de notas.
- Configurar analítica solo si se decide explícitamente; hoy no hay.
