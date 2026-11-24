# Proposal

## Why

El brief pide un espacio para experimentos, prototipos e ideas en desarrollo, y un archivo que preserve el historial del estudio. Sin estas dos superficies, el sitio solo mostraría proyectos terminados y perdería la dimensión de proceso que define a Quicio.

## What Changes

- Crear una colección Markdown de experimentos con tipo, estado, año, resumen, proyecto relacionado y placa.
- Crear `/experimentos/` y páginas de detalle generadas.
- Crear una colección Markdown de archivo con año, tipo, estado, resumen y cuerpo.
- Crear `/archivo/` y páginas de detalle generadas.
- Conservar el sitio anterior de la organización como artefacto estático de archivo.
- Añadir previews de experimentos y archivo a la portada.

## Capabilities

### New Capabilities

- `experiments`: registro de prototipos, investigaciones y procesos en curso, con estados y páginas propias.
- `archive`: registro histórico verificable, con estados, cuerpo editorial y preservación de artefactos anteriores.

### Modified Capabilities

Ninguna.

## Impact

- Nuevas colecciones en `src/content/experimentos` y `src/content/archivo`.
- Nuevas rutas dinámicas y componentes de fila.
- Copia estática del sitio anterior en `public/archivo/sitio-2026/original/`.
- El Archivo queda preparado para incorporar el relato histórico cuando el fundador lo entregue; no se inventan hitos.
