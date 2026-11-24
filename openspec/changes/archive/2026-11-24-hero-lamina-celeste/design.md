# Design

## Context

Ver `proposal.md — Why`. El hero actual mezcla dos sistemas de coordenadas: `.hero__art` se dimensiona con `150vh` y el lockup con `vw`, de modo que cualquier cambio de alto desalinea sol, luna y wordmark. La referencia aprobada mide 1536×1024 y sirve como patrón: todas las proporciones de este documento se expresan sobre esa lámina.

Restricciones vigentes: CSS propio sin framework, funcionamiento sin JavaScript, tokens en `src/styles/tokens.css`, Roman Serif como display y `npm run verify` antes de publicar.

## Goals / Non-Goals

**Goals:**

- Reproducir la composición de la referencia a 1536×1024 y conservar sus proporciones en 1920, 1440 y 1024.
- Recomponer el hero por debajo de 700 px sin scroll horizontal ni solapamientos.
- Resolver atmósfera, sol, luna y nebulosa con CSS sobre los assets existentes.
- Hacer que la portada se lea como lámina: cabecera superpuesta, sin barra.

**Non-Goals:**

- Cambiar Roman Serif, el contenido, las rutas o el resto de páginas.
- Añadir dependencias, fotografía nueva o animaciones nuevas.
- Replicar el relieve/letterpress del mockup.

## Decisions

### 1. Una lámina con proporción fija

La escena y el texto se envuelven en un contenedor único con `aspect-ratio: 3 / 2` y ancho `min(100%, 150svh)`, centrado. Cada pieza se posiciona en porcentaje de esa lámina y la tipografía usa `cqw` con `container-type: inline-size`.

- **Por qué:** es la única forma de que sol, órbita y wordmark conserven su relación al cambiar el viewport.
- **Alternativa descartada:** seguir calculando el arte con `vh`. Mantiene el desalineado actual.
- **Alternativa descartada:** fijar píxeles en un solo breakpoint. Rompe en 1024 y 1920.

Objetivos sobre la lámina de 1536×1024:

| Pieza | Posición / tamaño |
|---|---|
| Glyph | 130×175 px, centrado, desde el 5 % del alto |
| Órbita | 722 px de diámetro, centro al 49,5 % / 47 % |
| Sol | 227 px, borde izquierdo al 30,3 %, alto al 25,9 % |
| Wordmark | 505 px de ancho, línea base al 44 % |
| Descriptor | 555 px de ancho, 13 px, tracking ≈1,3 em |
| Divisor | 280 px, punto de 9 px |
| Luna | 58 % del ancho, borde superior al 57 % |
| Frase | 34 px, línea base al 85 % |
| Disciplinas | 13 px, línea base al 93,5 % |
| Cruces | 40 px, margen 3,7 % |

### 2. Orden de capas explícito

`grano → órbita → halo del sol → sol → nebulosa → wordmark/descriptor/divisor → luna → frase → disciplinas`.

- La luna tapa el arco inferior de la órbita.
- El sol queda detrás de la Q y no compite con el texto.
- La nebulosa queda detrás del texto, siempre tenue.

### 3. Atmósfera con CSS, sin assets nuevos

- **Sol:** `mix-blend-mode: multiply`, desaturación ligera, máscara radial con el borde inferior más difuso y un halo cálido en pseudo-elemento.
- **Luna:** `grayscale(1) contrast(...) brightness(...)` con tinte sepia mínimo y máscara que la funde en papel hacia el 90 % de su alto.
- **Nebulosa:** opacidad ≈0.3, máscara elíptica, desplazada a la derecha y fuera del wordmark.
- **Grano:** capa del hero con turbulencia más fibrosa que el ruido global; el grano del resto del sitio no se toca en esta slice.

Alternativa descartada: editar las PNG en un editor. Añade binarios y pierde el ajuste fino por breakpoint.

### 4. Sin velo: la luna se funde

Se elimina `.hero__veil`. La máscara de la luna termina antes de la frase y el pie se apoya en papel limpio.

- **Por qué:** el velo actual lava la luna y crea un degradado visible sobre la imagen; la referencia consigue el mismo contraste con la propia transición de la luna.
- **Riesgo controlado:** se verifica contraste AA de la frase y del pie con captura y cálculo.

### 5. Cabecera de portada superpuesta y no sticky

`Base` recibe `overlayHeader`; la portada lo activa y `SiteHeader` añade una clase de variante: `position: absolute`, sin fondo ni línea, sobre la lámina. El resto de páginas conserva el header sticky con fondo sólido.

- **Por qué:** reproduce la portada sin JavaScript y sin que el texto de las secciones pase bajo una barra transparente.
- **Alternativa descartada:** header sticky transparente con script que lo solidifica. Rompe la regla de mejora progresiva y añade estado.
- **Consecuencia aceptada:** en la portada la navegación se va con la lámina; sigue accesible al inicio y en el footer.

### 6. Responsive por recomposición

- 1024–1920: lámina 3:2, escala con `cqw`.
- 700–1023: misma lámina, cabecera en una fila, glyph y órbita al 85 %.
- <700: lámina vertical; glyph corto, wordmark ≈80vw, tracking del descriptor reducido a ≈0,5 em, órbita ≈95vw, luna más ancha y alta, disciplinas en dos líneas y coordenadas ocultas (ya están en el footer).

### 7. Tokens y documentación

Los valores nuevos de la lámina (proporciones, grano, máscaras) viven como variables locales del hero; solo sube a `tokens.css` lo que sea reutilizable (por ejemplo, el grano). `DESIGN.md` registra la composición y la excepción de la cabecera de portada.

## Risks / Trade-offs

- **Contraste de la frase sobre la luna** → la máscara de la luna termina antes del texto; se comprueba AA con captura y muestreo de color.
- **Desbordamiento del descriptor con tracking amplio** → anchura máxima y `text-wrap: nowrap` controlado por breakpoint; en móvil baja a ≈0,5 em.
- **Peso de las imágenes** → se mantienen los anchos actuales, se revisa el tamaño generado y se baja calidad si el LCP se resiente.
- **Cabecera no sticky en portada** → pérdida de navegación persistente en la home; se acepta a cambio de la lámina y el footer conserva los destinos.
- **Grano fuerte sobre texto** → el grano va por encima del arte pero por debajo del texto, con opacidad moderada; se revisa a 360 px.
- **Regresión en otras páginas** → el cambio de cabecera se limita con una prop y una clase; `npm run verify` y captura de una página interior.

## Migration Plan

1. Tokens y grano.
2. Estructura y estilos del hero.
3. Variante de cabecera y `Base`.
4. Responsive y contraste.
5. `DESIGN.md`, capturas y `npm run verify`.

Rollback: el cambio queda aislado en la portada y en una prop de `Base`; revertir el commit restaura el hero y la cabecera anteriores sin tocar contenido.

## Open Questions

Ninguna que afecte a specs, enfoque o tareas.
