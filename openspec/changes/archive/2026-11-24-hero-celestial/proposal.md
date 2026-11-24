# Proposal

## Why

La portada usaba una placa celeste dibujada en SVG y una composición en dos columnas. El estudio aportó una lámina transparente de elementos espaciales y pidió que el hero la use como fondo centrado, con «Quicio» al frente y «Estudio independiente» en mayúsculas y JetBrains Mono. También pidió evaluar dos fuentes serif para el wordmark y la página.

## What Changes

- Sustituir la placa SVG del hero por la lámina celeste transparente provista, centrada y a sangre sobre el marfil.
- Reorganizar el hero como lockup centrado: wordmark, descriptor mono en mayúsculas, línea y punto ocre, frase italic y pie de disciplinas/coordenadas.
- Añadir un velo de papel en la base para garantizar la lectura sobre la luna.
- Evaluar Geliant e Imperator y descartarlas del build por licencia; adoptar Fraunces (SIL OFL) como serif display con ejes SOFT/WONK.
- Mantener Archivo para lectura e interfaz y JetBrains Mono para metadatos.
- Actualizar la imagen social, el sistema de diseño y la documentación tipográfica.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `studio-pages`: el hero de la portada cambia de composición y usa una lámina provista como fondo centrado.
- `visual-identity`: se fija la serif display y se documenta la decisión de licencia tipográfica.

## Impact

- `src/pages/index.astro`, `src/assets/images/hero-espacio.png`, `src/styles/fonts.css`, `src/assets/fonts/`, `public/og.png`.
- `DESIGN.md`, `README.md`, `docs/identidad.md`, `openspec/config.yaml`.
- Sin dependencias de runtime nuevas; la imagen se optimiza con Astro Assets.
