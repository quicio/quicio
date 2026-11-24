# Proposal

## Why

Quicio necesita una presencia institucional propia, separada de la identidad personal de su fundador y de los sitios de sus proyectos. El sitio anterior de la organización era una página única oscura que ya no representa el nuevo territorio editorial, luminoso y abierto del estudio. La primera slice debe dejar una base desplegable en GitHub Pages con la identidad y el shell del sitio, no una maqueta sin publicación.

## What Changes

- Crear el proyecto Astro estático en `quicio/quicio`, con dominio canónico `quicio.org` y despliegue en GitHub Pages.
- Definir los tokens de identidad: marfil, carbón, gris piedra, ocre, superficie oscura y verde mineral; escala tipográfica; espaciado; retícula; movimiento.
- Construir el logotipo tipográfico, el isotipo de eje y arcos, el favicon y las variantes de firma.
- Construir el shell compartido: cabecera, navegación, footer, skip link, metadatos SEO, 404 y layout responsive.
- Crear un sistema inicial de placas SVG generativas para proyectos y secciones.
- Publicar una portada mínima real con el descriptor, la frase, una introducción y un primer acceso a proyectos.

## Capabilities

### New Capabilities

- `site-shell`: cabecera, navegación, footer, metadatos, 404, comportamiento responsive y funcionamiento sin JavaScript.
- `visual-identity`: tokens de color, tipografía, logotipo, isotipo, placas gráficas y reglas de movimiento.

### Modified Capabilities

Ninguna.

## Impact

- Nuevo proyecto Astro, dependencias de fuentes autoalojadas y workflow de GitHub Pages.
- Nuevos archivos en `src/styles`, `src/components`, `src/layouts`, `src/pages` y `public`.
- Sin backend, CMS ni base de datos.
- El dominio `quicio.org` y el repositorio `quicio/quicio` deben configurarse en GitHub Pages.
