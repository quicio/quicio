# Proposal

## Why

El hero de la portada ya reúne las capas celestes, pero todavía se lee como un montaje de piezas sueltas: el sol aparece como un disco opaco al lado del wordmark, la luna queda lavada por un velo, la nebulosa compite con el texto y el conjunto cambia de proporción según el alto de la ventana. La referencia aprobada propone una lámina única, centrada y atmosférica, donde cada capa ocupa un lugar medido. Esta slice cierra esa distancia sin cambiar la identidad ni la tipografía.

## What Changes

- La portada SHALL componer el hero como una lámina de proporción fija, con sol, órbita, wordmark, luna, frase y disciplinas en una sola retícula.
- El sol SHALL quedar detrás del wordmark, difuso y con el borde inferior fundido; la luna SHALL ganar presencia y fundirse en papel antes de la frase, sin velo intermedio.
- La nebulosa SHALL reducirse a una mancha tenue fuera del centro del texto; el grano de papel SHALL notarse en toda la lámina.
- El glyph SHALL adelgazarse, la órbita reducirse y el divisor acortarse hasta las proporciones de la referencia.
- El descriptor SHALL ensanchar su tracking hasta funcionar como base del wordmark.
- La fila de disciplinas SHALL centrarse; las coordenadas SHALL pasar a una línea discreta debajo.
- **BREAKING** En la portada, la cabecera SHALL superponerse a la lámina sin fondo sólido y dejar de ser sticky; en el resto de páginas conserva su comportamiento actual.

Fuera de alcance: otras páginas, tipografía del wordmark (se mantiene Roman Serif), nuevas dependencias, nuevas imágenes, animaciones nuevas y el relieve/letterpress del mockup.

## Capabilities

### New Capabilities

Ninguna.

### Modified Capabilities

- `studio-pages`: se reescriben los requisitos del hero y de la legibilidad sobre la imagen para describir la lámina compuesta y la lectura sin velo.
- `site-shell`: la cabecera admite una variante de portada superpuesta y transparente, sin dejar de cumplir el resto del shell.

## Impact

- `src/pages/index.astro`: estructura y estilos del hero.
- `src/layouts/Base.astro` y `src/components/SiteHeader.astro`: variante de cabecera para la portada.
- `src/styles/tokens.css`: tokens de la lámina y del grano, si la composición los necesita.
- `src/styles/base.css`: ajuste del grano si la lámina lo exige.
- `DESIGN.md`: reglas del hero y de la cabecera de portada.
- Sin cambios de contenido, rutas, datos ni dependencias.
