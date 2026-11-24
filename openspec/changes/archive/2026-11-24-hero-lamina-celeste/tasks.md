# Tasks

## 1. Tokens y grano

- [x] 1.1 Definir en `src/pages/index.astro` las variables locales de la lámina (proporción, posiciones, tamaños) y mover a `src/styles/tokens.css` solo lo reutilizable; verificar con `npm run check`. — Verificado: la lámina usa variables locales y `cqw`; `npm run verify` pasa tipos y build.
- [x] 1.2 Añadir la capa de grano del hero en `src/pages/index.astro` con turbulencia propia y opacidad moderada; verificar con captura a 1536×1024 en `.impeccable/review/hero-1536.png` que el grano se ve y no ensucia el wordmark. — Verificado: capa `.hero::after` sobre el arte y bajo el texto; captura `hero-final-1536.png`.

## 2. Lámina y capas

- [x] 2.1 Sustituir `.hero__stage` y `.hero__art` por un contenedor de lámina con `aspect-ratio: 3/2`, `container-type: inline-size` y ancho `min(100%, 150svh)`; verificar en el DOM que arte y lockup comparten el mismo contenedor y que no hay scroll horizontal a 1536. — Verificado: lámina medida 1416×944; `scrollWidth === innerWidth` en 360–1920.
- [x] 2.2 Reposicionar órbita, sol, nebulosa, wordmark, descriptor y divisor en porcentaje de la lámina; verificar con captura a 1536 que el sol queda detrás de la Q, la órbita mide ~722 px y el descriptor mide ~555 px. — Verificado: órbita 666 px y descriptor 508 px sobre una lámina de 1416 (equivalente a 722/555 en 1536); sol detrás de la Q.
- [x] 2.3 Aplicar máscara y `multiply` al sol y reducir la nebulosa; verificar en la captura que el borde del sol se funde y que la nebulosa no toca la «o». — Verificado: sol con máscara elíptica y `multiply`; nebulosa al 24 % y desplazada a la derecha.
- [x] 2.4 Elevar la luna al 57 %, oscurecerla y fundirla en papel antes de la frase; eliminar `.hero__veil`; verificar que el arco de la órbita desaparece tras la luna y que la frase apoya sobre papel. — Verificado: luna al 53,1 % de la lámina (con padding del PNG), +15 % de tamaño; fundido de papel recortado por la silueta; `.hero__veil` eliminado.
- [x] 2.5 Medir contraste de la frase y del pie sobre la captura final; verificar ratio ≥ 4.5:1 en escritorio y móvil. — Verificado: contraste mínimo 5,98:1 en la frase y 6,01:1 en las disciplinas.

## 3. Glyph, divisor y pie

- [x] 3.1 Redibujar el glyph a 130×175 con trazo ≈4 px y ajustar su separación del wordmark; verificar en recorte a 1536. — Verificado: viewBox 130×175, trazo 4,8 y separación de 5,4 cqw.
- [x] 3.2 Acortar el divisor a 280 px con punto de 9 px; verificar en recorte que no invade la luna. — Verificado: viewBox 280×16, punto r=4,5 (9 px) y 24 px de aire antes de la luna.
- [x] 3.3 Centrar la fila de disciplinas y añadir las coordenadas debajo en cuerpo menor; verificar a 1536 y 390 que no hay desbordamiento y que las coordenadas se ocultan en móvil. — Verificado: fila centrada; coordenadas visibles a 1536 y 1440×900, ocultas en móvil y en láminas de menos de 700 px de alto.

## 4. Cabecera de portada

- [x] 4.1 Añadir la prop `overlayHeader` a `src/layouts/Base.astro` y activarla desde `src/pages/index.astro`; verificar con `npm run build` que el resto de páginas no la recibe. — Verificado: clase `site-header--overlay` solo en la portada del build.
- [x] 4.2 Crear la variante superpuesta en `src/components/SiteHeader.astro` (`position: absolute`, sin fondo ni línea) y verificar en captura que no tapa el glyph y que una página interior conserva la barra sólida. — Verificado: capturas `hero-1536` y `proyectos-1440`.
- [x] 4.3 Reservar la altura de la cabecera dentro de la lámina y alinear las cruces superiores; verificar a 1024, 1440 y 1536 que no hay solapamiento entre nav y glyph. — Verificado: hero con `padding-top: var(--header-h)`; glyph desde 127 px con cabecera de 76 px.

## 5. Responsive

- [x] 5.1 Verificar la lámina a 1920, 1440 y 1024 sin scroll horizontal y con proporciones estables; guardar capturas en `.impeccable/review/`. — Verificado: `hero-1920.png`, `hero-1440.png`, `hero-1024.png`; sin desbordamiento.
- [x] 5.2 Recomponer el hero por debajo de 700 px y verificar a 768, 390 y 360 que el descriptor no desborda, la luna no tapa la frase y las disciplinas se reparten en dos líneas. — Verificado: `hero-768.png`, `hero-390.png`, `hero-360.png`; dos líneas sin barras y sin solape frase/pie.
- [x] 5.3 Verificar con `prefers-reduced-motion: reduce` que no hay animaciones y que todo el texto sigue visible. — Verificado: `animationName: none` y `scroll-behavior: auto` con la preferencia activa.

## 6. Documentación e integración

- [x] 6.1 Documentar en `DESIGN.md` la lámina del hero, el grano, el tratamiento de sol y luna y la excepción de cabecera de portada; verificar que los valores coinciden con los tokens aplicados. — Verificado: sección «Hero de portada», «Cabecera», excepción del fundido y changelog.
- [x] 6.2 Ejecutar `npm run verify` y comprobar que tipos, build y enlaces pasan sin errores. — Verificado: `npm run verify` completo, 13 páginas y 14 HTML con enlaces correctos.
- [x] 6.3 Ejecutar la auditoría de impeccable sobre la portada (contraste, foco, reduced motion, responsive) y registrar las excepciones justificadas en `DESIGN.md`. — Verificado: corregido el texto de 9,28 px; quedan 5 avisos de kicker y 1 de paleta marfil, ambos documentados como excepciones editoriales.

## Workflow follow-up

- Revisar las capturas de `.impeccable/review/` antes de archivar.
- Archivar el cambio cuando la revisión esté aprobada.
