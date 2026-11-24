# AGENTS.md

Punto de entrada para cualquier agente que trabaje en el sitio de Quicio.

Leer en este orden:

1. `README.md` — estado, stack, estructura y despliegue.
2. `DESIGN.md` — identidad, tokens, componentes y reglas visuales.
3. `docs/contenido.md` — cómo editar proyectos, experimentos, archivo y páginas.
4. `docs/identidad.md` — concepto, voz y relación con los proyectos.
5. `PRODUCT.md` — verdad de producto.
6. La spec de la capacidad en `openspec/specs/` y el cambio activo en `openspec/changes/`.

## Comandos

```bash
npm install
npm run dev
npm run check
npm run build
npm run links
npm run verify
```

## Reglas duras

- **El contenido va en Markdown**, dentro de `src/content/`. No hardcodear fichas de proyectos en componentes.
- **Los tokens viven en `src/styles/tokens.css`**. No introducir colores, tamaños o espaciados sueltos sin justificarlos.
- **No agregar un framework de UI, Tailwind ni utilidades tipo Bootstrap.** El CSS es propio y editorial.
- **No agregar dependencias de runtime sin justificarlo.** Preferir HTML, CSS y SVG; el sitio funciona sin JavaScript.
- **No inventar equipo, clientes, métricas, testimonios, fechas ni hitos.** Si un dato no es verificable, no se publica.
- **No crear páginas internas de detalle para proyectos.** Cada ficha enlaza a la página o repositorio del proyecto.
- **Semina, Rizoma e Intersticio conservan su autonomía.** Quicio no les impone isotipo, interfaz ni personalidad.
- **Evitar lenguaje corporativo** («soluciones digitales», «transformación digital», «innovación disruptiva», «servicios tecnológicos»).
- **Accesibilidad:** un `h1` por página, foco visible, contraste AA, navegación por teclado, `prefers-reduced-motion`.
- **Responsive:** verificar 360, 390, 768, 1024, 1440 y 1920 px sin scroll horizontal.
- **Antes de publicar:** `npm run verify`.
- **Si cambia un token o componente:** actualizar `DESIGN.md`.
- **Si cambia un comportamiento:** actualizar la spec de OpenSpec correspondiente.
- **No reabrir decisiones cerradas** sin un cambio de OpenSpec o una instrucción explícita.

## Flujo de trabajo

- Un cambio de OpenSpec a la vez.
- Cada cambio es un vertical slice desplegable: propuesta → specs → diseño → tareas → implementación → verificación → archivo.
- Las tareas se marcan solo con evidencia de ejecución.
- Las capturas de revisión viven en `.impeccable/review/` y no se commitean.
- Las decisiones visuales se documentan; las excepciones al detector se explican en `DESIGN.md`.

## Fuentes y assets

- Fuentes autoalojadas en `src/assets/fonts/`; las licencias viven en `public/fonts/`.
- Placas SVG generativas en componentes; no usar fotografía de stock.
- La imagen social se genera desde `scripts/og.html`.
- El sitio anterior se conserva como artefacto en `public/archivo/sitio-2026/original/`; no editar su contenido salvo para corregir rutas o metadatos.
