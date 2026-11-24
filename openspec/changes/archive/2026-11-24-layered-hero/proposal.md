# Proposal

## Why

El hero anterior usaba una composición raster completa porque los assets separados incluían parches y fragmentos de otros elementos. El estudio entregó el sol, la luna y la nebulosa limpios, más SVG de glyph, divisor, órbita y marcas de esquina. Ahora la portada puede componerse realmente por capas, con control de alineación y responsive.

## What Changes

- Recomponer el hero con capas: sol, luna, nebulosa, órbita SVG, glyph SVG, divisor SVG y marcas de esquina SVG.
- Alinear el glyph y el divisor con el wordmark/descriptor, separados del fondo.
- Mantener el wordmark centrado y el descriptor en JetBrains Mono mayúsculas.
- Conservar la composición raster solo para la imagen social.
- Documentar el sistema de capas.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `studio-pages`: el hero pasa de una lámina raster a una composición por capas.

## Impact

- `src/pages/index.astro`, `src/assets/images/hero/`, `DESIGN.md`, `README.md`.
- Sin dependencias de runtime nuevas; Astro optimiza las capas raster.
