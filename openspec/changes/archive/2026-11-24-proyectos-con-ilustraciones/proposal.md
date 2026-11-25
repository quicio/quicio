# Proposal

## Why

Las fichas de proyecto usan placas SVG generativas, correctas como sistema pero intercambiables: dos proyectos distintos pueden compartir una geometría parecida. El estudio ya tiene arte propio para varios de estos proyectos en el archivo de KNDL. Adoptarlo da a cada ficha un artefacto reconocible sin inventar imágenes ni recurrir a fotografía de stock.

## What Changes

- La ficha de proyecto y la fila de experimento SHALL aceptar una imagen propia opcional.
- Cuando exista imagen, la ficha SHALL usarla en el mismo marco que la placa, con su número y estado; cuando no, SHALL mantener la placa SVG generativa.
- Se incorporan cinco imágenes de proyecto (Semina, Nacre, Paramétrica, Candil, Espiral) y una de experimento (Umbral Vision), procedentes del archivo del estudio.
- El frontmatter SHALL declarar la imagen y su texto alternativo; el contenido sigue en Markdown.
- La procedencia del arte SHALL quedar documentada y no se admiten imágenes de stock.

Fuera de alcance: los once proyectos sin arte propio, la imagen del archivo, los assets del hero, la imagen social y cualquier imagen generada nueva.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `visual-identity`: la regla de placas gráficas admite una imagen propia verificable y deja la placa generativa como respaldo.
- `project-catalog`: la ficha de proyecto puede llevar imagen propia con número y estado.
- `experiments`: el experimento puede llevar imagen propia en el índice y en su página.

## Impact

- `src/content.config.ts`: campos opcionales `image` e `imageAlt` en proyectos y experimentos.
- `src/components/ProjectEntry.astro` y `src/components/ExperimentRow.astro`: renderizado de la imagen con la placa como respaldo.
- `src/assets/proyectos/` y `src/assets/experimentos/`: seis imágenes nuevas.
- Frontmatter de cinco proyectos y un experimento.
- `DESIGN.md` y `docs/contenido.md`: regla y procedimiento.
- Sin dependencias nuevas, sin cambios de rutas ni de contenido editorial.
