# Design

## Contexto

Roman Serif es una serif de alto contraste con regular y oblique, sin ejes variables. El archivo no incluye un texto de licencia web; el estudio la señaló como la fuente correcta. La implementación reemplaza Fraunces sin cambiar la composición del hero.

## Decisiones

- **Roman Serif** para display y wordmark, peso 400; **Roman Serif Oblique** para la frase italic.
- **Archivo Variable** para lectura e interfaz.
- **JetBrains Mono** para descriptor, metadatos y pies.
- Los TTF se sirven autoalojados; no se convierten a WOFF2 para no alterar el archivo original.
- Se elimina `font-variation-settings` y la dependencia de ejes SOFT/WONK.
- La licencia queda documentada en `public/fonts/LICENSE-romanserif.txt` y en `DESIGN.md`.

## Riesgos

- El archivo declara «All rights reserved» sin licencia web. El estudio asume la responsabilidad de confirmar el permiso; el repositorio deja constancia.
- La falta de bold obliga a componer jerarquía con escala y color, no con peso.

## Alternativas descartadas

- **Fraunces:** ya no es la elección del estudio.
- **Geliant e Imperator:** licencias no compatibles con publicación.
- **Simular negrita o cursiva:** distorsiona la fuente y rompe la lectura.
