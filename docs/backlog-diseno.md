# Backlog de diseño

Registro vivo de hallazgos visuales, de accesibilidad y de sistema. No es una lista de deseos: cada entrada tiene que poder verificarse con una captura, una medida o un comando.

## Cómo se usa

- Cada entrada lleva un ID `D-###`, prioridad, estado y evidencia.
- Estados: `abierto`, `en curso`, `necesita decisión`, `resuelto`, `descartado`.
- Si el hallazgo exige un cambio de comportamiento, se abre un cambio de OpenSpec y se enlaza en la entrada.
- Las decisiones deliberadas se documentan en `DESIGN.md`; aquí solo queda lo pendiente o lo que necesita revisión.
- No se cierra nada sin evidencia de la comprobación.
- Las capturas viven en `.impeccable/review/` y no se commitean; si una entrada depende de una captura, se describe la reproducción.

## Abiertos

| ID | Prioridad | Área | Hallazgo | Evidencia | Propuesta | Estado |
|---|---|---|---|---|---|---|
| D-001 | Alta | Fichas de proyecto | A 1280 y 1366 px la portada desborda en horizontal 9–26 px por `.project__disciplines` | `scrollWidth` 1306 a 1280 y 1375 a 1366; el span mide 1023→1306 a 1280 | Permitir que la fila de disciplinas encoja o rompa (`min-width: 0`, `flex-wrap`) y comprobar también `/proyectos/` | abierto |
| D-002 | Alta | Tipografía / legal | La licencia de Roman Serif no incluye texto de uso web; falta confirmar derechos de distribución | `public/fonts/LICENSE-romanserif.txt`; nota en `DESIGN.md` | Confirmar con el proveedor; si no hay permiso, planificar sustituta y actualizar tokens | necesita decisión |
| D-003 | Media | Imagen social | `public/og.png` se generó con el hero anterior (`hero-espacio.png`) y no con la lámina actual | `scripts/og.html` línea 204; `og.png` 1200×630 del 24/11 16:47 | Regenerar con la composición actual o con un encuadre social propio | abierto |
| D-004 | Media | Rendimiento | Roman Serif se sirve en TTF (81 kB + 74 kB) sin subset; Archivo y JetBrains ya van en woff2 | `src/assets/fonts/RomanSerif.ttf`, `RomanSerif-Oblique.ttf`; `docs/...` no aplica | Convertir a woff2 y subconjuntar el latino; medir el ahorro antes de publicar | abierto |
| D-005 | Baja | Textura | El grano del hero (`.hero::after`, opacidad 0.46) es más fuerte que el grano global; puede notarse el salto en el pliegue | Comparar `hero-final3-1536.png` con `home-scrolled.png` | Revisar el pliegue a 1024 y 1440; si se nota, igualar o prolongar el grano | abierto |
| D-006 | Baja | Cabecera | En la portada la cabecera es absoluta y se va con la lámina; no hay navegación persistente al hacer scroll | `home-scrolled.png`; `SiteHeader` variante `--overlay` | Evaluar un revelado al subir con mejora progresiva; si se hace, abrir cambio de OpenSpec | necesita decisión |
| D-007 | Baja | Hero / contenido | En láminas de menos de 700 px de alto (p. ej. 1440×600) las coordenadas se ocultan del hero y solo quedan en el footer | `hero-final3-1440x600.png`; regla `max-height: 700px` | Decidir si es suficiente o si conviene una línea discreta en otro lugar | necesita decisión |
| D-008 | Baja | Sistema | `/sistema/` no muestra la lámina del hero; la spec de `design-system` pide los componentes principales | `src/pages/sistema.astro` (solo tokens, logotipo y muestras) | Valorar si el hero entra en la página de sistema o si basta con `DESIGN.md` | necesita decisión |

## Detalle

### D-001 · Desbordamiento a 1280 y 1366

Reproducción: abrir `/` a 1280×720 y comprobar `document.documentElement.scrollWidth` (1306). El elemento que sobresale es `span.project__disciplines` dentro de una ficha destacada; a 1440 y 1024 no ocurre. Afecta al requisito de responsive del `site-shell` y a la sensación de página recortada.

### D-002 · Licencia de Roman Serif

El archivo de licencia declara el titular y advierte que no incluye un texto de uso web. Se puede publicar el sitio, pero redistribuir la fuente sin permiso es un riesgo. No es un arreglo de diseño: es una decisión de negocio con consecuencia tipográfica.

### D-003 · Imagen social

La imagen de Open Graph y Twitter sigue usando el hero anterior. Es lo primero que se ve al compartir el enlace, así que conviene regenerarla cuando la lámina esté cerrada.

### D-009 · Sol de origen

El borde oscuro del PNG se resolvió en el hero con una máscara elíptica. Si el sol se usa en otro sitio sin esa máscara, el borde vuelve. La solución de fondo es un asset limpio; la de corto plazo, replicar la máscara.

## Resueltos en la revisión del hero

| ID | Hallazgo | Resolución |
|---|---|---|
| R-001 | El sol se veía pequeño y con un borde extraño | Disco visible de ~178 a ~230 px y máscara elíptica que elimina el borde del PNG |
| R-002 | «ESTUDIO INDEPENDIENTE» demasiado abierto y fino | Tracking de 1,38 a 0,65 em y peso 600 |
| R-003 | La luna y el glyph se veían pequeños | Ambos +15 % (luna 71,3 cqw; glyph 9,78 cqw) |
| R-004 | Poco aire entre la luna y el wordmark | Luna bajada; separación divider→luna de ~39 px a 1536 |
| R-005 | La frase y las disciplinas se solapaban en ventanas bajas | Bloque inferior en flujo y modo compacto por debajo de 700 px de alto |
| R-006 | Coordenadas con contraste 4,3:1 | `--ink-soft` sin opacidad; pasa AA |
| R-007 | Disciplinas a 9,28 px en 1280×720 | Mínimo de 11 px |
| R-008 | Borde difuminado del sol | Se comprobó que el PNG no trae ese borde: el fundido era la máscara CSS. Retirada; el sol conserva el borde nítido del asset |
| R-009 | El isotipo de cabecera, footer y favicon no coincidía con el glyph definitivo | `Mark`, `Logo`, `favicon.svg` y los PNG de icono usan el símbolo 100×150 sin pivote |

## Descartados

- **Relieve/letterpress del wordmark del mockup.** Es un artefacto de la generación de imagen; en pantalla envejece mal.
- **Perseguir la letra exacta del mockup.** El mockup parece generado y la tipografía puede no existir tal cual. Se fijó el gesto, no la copia.
- **Cambiar Roman Serif.** Decisión del estudio; se mantiene y se ajusta la composición.
- **Cabecera sticky transparente sin JavaScript.** Se aplazó a D-006; la portada usa la variante absoluta.

## Cómo añadir una entrada

1. Asignar el siguiente `D-###`.
2. Escribir el hallazgo en una frase observable, sin adjetivos.
3. Añadir la evidencia: captura, medida, archivo o comando.
4. Proponer una dirección, no una orden.
5. Si toca comportamiento, abrir el cambio de OpenSpec y enlazarlo.
6. Al cerrar, mover la entrada a «Resueltos» con la comprobación hecha.
