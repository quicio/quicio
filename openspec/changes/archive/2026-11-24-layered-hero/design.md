# Design

## Contexto

La composición completa era limpia, pero los assets separados originales traían parches rectangulares y fragmentos (divisor, órbita, luna) que se veían al moverlos. Con los nuevos sol, luna y nebulosa limpios y los SVG del glyph/divisor/órbita/esquinas, la escena se puede construir por capas sin artefactos.

## Decisiones

- **Sol, luna y nebulosa** se usan como imágenes optimizadas por Astro; la nebulosa se recorta a su alpha y se enmascara con un degradado radial para integrar los bordes.
- **Órbita** es un SVG de 760×760 escalado al 56% del escenario.
- **Glyph y divisor** son SVG independientes dentro del lockup, para controlar el aire con el wordmark y el descriptor.
- **Marcas de esquina** son SVG repetidos, no parte del raster.
- El escenario usa `object-fit: cover` con un artefacto de 1536×1024 centrado.
- El velo de papel inferior se mantiene para la frase y el pie.

## Riesgos

- Las capas se recortan en móvil; el encuadre se prueba en 390, 768, 1440 y 1920 px.
- La nebulosa puede dominar si sube de opacidad; se limita a 0.76 y se enmascara.
- La luna debe quedar debajo del divisor; se ajusta con `bottom` negativo y se verifica el gap.

## Alternativas descartadas

- **Composición completa raster:** era limpia pero impedía controlar el glyph/divisor y el encuadre.
- **Assets separados originales:** contenían rectángulos opacos y fragmentos.
- **Animar las capas:** queda para una etapa posterior; primero se valida la composición estática.
