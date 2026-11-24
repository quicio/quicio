# Proposal

## Why

El estudio confirmó que la serif correcta para el wordmark y los titulares es **Roman Serif** (m klein fonteria, 2004), no Fraunces. La especificación anterior quedó atada a Fraunces y a una condición de licencia que ya no describe la decisión del proyecto.

## What Changes

- Sustituir Fraunces por Roman Serif (regular + oblique) en el sistema display.
- Mantener Archivo para lectura e interfaz y JetBrains Mono para metadatos.
- Documentar la procedencia y la licencia pendiente de Roman Serif.
- Actualizar la imagen social, el sistema y la documentación tipográfica.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `visual-identity`: cambia la serif display y la condición de licencia documentada.

## Impact

- `src/assets/fonts/RomanSerif.ttf`, `RomanSerif-Oblique.ttf`, `src/styles/fonts.css`, `src/styles/tokens.css`, `src/styles/base.css`.
- `scripts/og.html`, `public/og.png`, `DESIGN.md`, `README.md`, `openspec/config.yaml`.
- Sin dependencias de runtime nuevas.
