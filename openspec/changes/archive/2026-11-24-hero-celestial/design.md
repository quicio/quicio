# Design

## Contexto

La lámina provista es un PNG RGBA de 1536 × 1024 con sol, luna, galaxia, arcos, cruces y una marca de eje central. Tiene transparencia real: sobre marfil funciona como una composición de tinta y ocre, no como una fotografía rectangular. El hero debe usarla como fondo centrado, no como una imagen lateral.

## Decisiones

### Composición

- Imagen `object-fit: cover` centrada, a sangre, dentro de un hero de `100svh - header`.
- Lockup absoluto centrado al 29% de la altura: wordmark, descriptor y la línea/punto de la propia lámina.
- Frase italic al pie; disciplinas y coordenadas en una fila inferior con velo de papel.
- En móvil, el lockup baja al 32.5%, el wordmark usa `22vw` y el pie se apila en dos líneas sin separadores.

### Tipografía

- **Fraunces Variable** para display y wordmark, con `opsz 144`, `SOFT 100`, `WONK 1`.
- **Archivo Variable** para lectura e interfaz.
- **JetBrains Mono Variable** para descriptor, metadatos y pies.
- Geliant es una demo de uso personal; Imperator no declara licencia web. Ninguna se publica. Fraunces conserva el contraste y el gesto sin ese riesgo.

### Imagen

- Se copia a `src/assets/images/hero-espacio.png` y se procesa con Astro Assets a WebP en 768, 1200 y 1536 px.
- El original pesa 2.3 MB; la versión de 1536 px queda en ~434 KB y la de 1200 en ~302 KB.
- El velo inferior usa un gradiente de papel para garantizar contraste sobre la luna.

### Riesgos

- El texto puede quedar sobre la luna oscura en viewports altos; el velo lo resuelve.
- La marca de eje de la imagen se acerca al wordmark en móvil; se acepta como unión gráfica, no como error de layout.
- La imagen tiene derechos de uso del estudio; no se sustituye por stock.

## Alternativas descartadas

- **Mantener la placa SVG generada:** no usa el material aportado y aleja la portada de la referencia.
- **Usar Geliant o Imperator:** licencias no compatibles con publicación.
- **Imagen como columna lateral:** contradice la referencia centrada.
- **Texto sobre la imagen sin velo:** falla contraste en la luna.
