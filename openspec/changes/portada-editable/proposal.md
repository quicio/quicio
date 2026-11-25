# Proposal

## Why

Los textos de las seis secciones de la portada viven dentro de `index.astro`. Cambiar un título, una nota o un enlace obliga a editar HTML, y el orden y la visibilidad de las secciones están fijados en el marcado. Eso contradice la regla del proyecto de mantener el contenido en Markdown y hace que cada ajuste editorial dependa de código.

## What Changes

- La portada SHALL componerse desde una lista ordenada de secciones declarada en `src/content/paginas/inicio.md`.
- Cada sección SHALL declarar su etiqueta, título, nota, texto, enlace y pie cuando corresponda; la numeración (`01`, `02`…) SHALL generarse desde la posición visible.
- La lista SHALL permitir ocultar una sección con `active: false` y reordenarla moviendo su entrada.
- Los seis bloques SHALL pasar a componentes de `src/components/home/`; `index.astro` SHALL quedar como un registro que mapea identificadores a componentes.
- Los datos de proyectos, experimentos y archivo SHALL seguir viniendo de sus colecciones; solo la copia editorial se mueve al frontmatter.
- La página SHALL mantener los identificadores de ancla y `aria-labelledby` generados desde el id de la sección.

Fuera de alcance: los textos del hero, las páginas interiores, un CMS, nuevos tipos de sección y cambios en las fichas de proyecto.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `studio-pages`: la portada se compone desde una lista editable de secciones, con orden, visibilidad y numeración derivados del contenido.

## Impact

- `src/content/paginas/inicio.md`: nueva lista `homeSections` con toda la copia de las seis secciones.
- `src/content.config.ts`: esquema tipado de `homeSections`.
- `src/pages/index.astro`: registro de secciones; deja de contener los textos y el marcado de las seis secciones.
- `src/components/home/*`: seis componentes nuevos.
- `src/styles/base.css`: `.section-note` compartida.
- `docs/contenido.md`: cómo editar, ordenar y ocultar secciones.
- `DESIGN.md`: nota de composición de la portada.
- Sin dependencias nuevas ni cambios de rutas.
