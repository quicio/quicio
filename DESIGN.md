---
name: Quicio
description: Estudio independiente. Una cámara clara donde el software, las publicaciones, la investigación, el arte y la música se examinan a la luz del papel.
colors:
  paper: "#F0EDE5"
  paper-raised: "#F7F3EA"
  paper-deep: "#E6E0D3"
  ink: "#242321"
  ink-soft: "#3D3A35"
  ink-muted: "#5F5B53"
  stone: "#77746D"
  ochre: "#B77A35"
  ochre-deep: "#84521F"
  ochre-soft: "#D8B07A"
  green: "#78816D"
  dark: "#171817"
  dark-raised: "#1F211F"
  dark-ink: "#F0EDE5"
  dark-muted: "#B9B3A7"
  dark-faint: "#8D897F"
typography:
  display:
    fontFamily: "Roman Serif, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "clamp(3.4rem, 8vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.018em"
  wordmark:
    fontFamily: "Roman Serif, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "13.1cqw dentro de la lámina del hero"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.032em"
  body:
    fontFamily: "Archivo Variable, Archivo, system-ui, sans-serif"
    fontSize: "clamp(1rem, 0.97rem + 0.16vw, 1.1rem)"
    fontWeight: 400
    lineHeight: 1.68
    letterSpacing: "-0.006em"
  label:
    fontFamily: "JetBrains Mono Variable, JetBrains Mono, monospace"
    fontSize: "clamp(0.7rem, 0.68rem + 0.08vw, 0.78rem)"
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: "0.16em"
rounded:
  none: "0px"
spacing:
  "3xs": "0.25rem"
  "2xs": "0.5rem"
  xs: "0.75rem"
  sm: "1rem"
  md: "1.5rem"
  lg: "2.25rem"
  xl: "3.5rem"
  "2xl": "5rem"
  "3xl": "7.5rem"
  "4xl": "10rem"
components:
  site-header:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    padding: "0 0"
    rounded: "{rounded.none}"
  nav-link:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "0.35rem 0"
    rounded: "{rounded.none}"
  project-entry:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "0"
    rounded: "{rounded.none}"
  plate:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.dark-ink}"
    rounded: "{rounded.none}"
  footer:
    backgroundColor: "{colors.dark}"
    textColor: "{colors.dark-ink}"
    padding: "5rem 0 1.5rem"
    rounded: "{rounded.none}"
---

# Design System: Quicio

## Overview

**North Star: «La cámara clara».**

KNDL se construyó como una cámara de niebla: fondo nocturno, señales que se condensan, una interfaz que se retira. Quicio necesitaba lo contrario sin traicionar esa sensibilidad: un espacio diurno, de papel y luz, donde las ideas se examinan en lugar de aparecer entre sombras. La referencia no es una agencia ni una startup: es un archivo editorial de un estudio independiente.

La identidad se organiza alrededor de la palabra **quicio**: la hoja de una puerta y, sobre todo, el punto donde esa hoja empieza a girar. De ahí salen el eje vertical, los arcos de giro, la numeración, las coordenadas y la idea de que un proyecto no es un producto: es una práctica que encuentra un lugar.

**Rasgos clave**

- Marfil cálido como campo; carbón como tinta; ocre como única señal de pivote.
- Serif editorial para la voz; sans de grotesca contemporánea para leer; mono para medir.
- Líneas capilares, numeración, etiquetas mono, placas generativas y espacio negativo.
- Composición asimétrica: el texto y la imagen no se reparten en tarjetas equivalentes.
- Sin radios, sin sombras difusas, sin glassmorphism, sin degradados tecnológicos.

## Logo

El logotipo es tipográfico: **Quicio** en Roman Serif, con tracking negativo y una altura de línea que lo vuelve casi una inscripción. Se acompaña del **isotipo de eje y arcos**: una línea vertical con dos arcos que se abren hacia abajo desde un punto alto del eje. No lleva pivote ni punto ocre; el ocre queda para el divisor y las señales de la interfaz.

- **Lockup horizontal:** isotipo + wordmark + filete + descriptor «Estudio independiente» en mono.
- **Lockup apilado:** isotipo, wordmark y descriptor en columna. Se usa en el footer.
- **Isotipo:** relación 2:3 (100×150). Funciona a 16/32 px como favicon y como marca de agua de placas.
- **Versión negativa:** `currentColor` sobre `--dark`; el trazo pasa a `--dark-ink`.

El isotipo no representa circuitos, chips, cerebros ni engranajes. Es un eje, un umbral y un movimiento.

## Color

La paleta se lee como papel, tinta y una señal.

| Token            | Valor     | Uso                                       |
| ---------------- | --------- | ----------------------------------------- |
| `--paper`        | `#F0EDE5` | Fondo predominante                        |
| `--paper-raised` | `#F7F3EA` | Superficies elevadas excepcionales        |
| `--paper-deep`   | `#E6E0D3` | Líneas, campos, contraste suave           |
| `--ink`          | `#242321` | Texto principal y líneas                  |
| `--ink-soft`     | `#3D3A35` | Texto secundario                          |
| `--ink-muted`    | `#5F5B53` | Metadatos y texto auxiliar (AA)           |
| `--stone`        | `#77746D` | Gris de referencia; no para texto pequeño |
| `--ochre`        | `#B77A35` | Señal, pivote, acentos                    |
| `--ochre-deep`   | `#84521F` | Enlaces y texto ocre accesible            |
| `--ochre-soft`   | `#D8B07A` | Ocre sobre superficie oscura              |
| `--green`        | `#78816D` | Acento mineral secundario                 |
| `--dark`         | `#171817` | Placas, bandas y footer                   |
| `--dark-ink`     | `#F0EDE5` | Texto sobre oscuro                        |
| `--dark-muted`   | `#B9B3A7` | Texto secundario sobre oscuro             |

**Reglas**

1. El marfil es el campo. Las superficies oscuras son placas y bandas, no un tema alternativo.
2. El ocre no llena botones ni bloques grandes: señala el pivote, el índice activo o una palabra.
3. El gris piedra queda para metadatos grandes, reglas y elementos decorativos. Para texto pequeño se usa `--ink-muted`.
4. No se usan gradientes como decoración de fondo. Los únicos degradados son materia de las placas (sol, luna, sombra).

## Tipografía

| Rol                | Familia                     | Uso                                      | Pesos         |
| ------------------ | --------------------------- | ---------------------------------------- | ------------- |
| Display y firma    | **Roman Serif**             | Titulares, wordmark, citas, descriptores | 400 + oblique |
| Lectura e interfaz | **Archivo Variable**        | Cuerpo, navegación, controles, párrafos  | 100–900       |
| Metadatos          | **JetBrains Mono Variable** | Índices, estados, coordenadas, etiquetas | 100–800       |

**Por qué estas familias**

Se evaluaron Geliant, Imperator, Fraunces y Roman Serif. **Geliant** es una demo de uso personal e **Imperator** no declara una licencia de uso web; se descartaron. **Roman Serif** (m klein fonteria, 2004) es la fuente indicada por el estudio y la que sostiene el wordmark de la referencia; el archivo no incluye un texto de licencia web, así que su procedencia queda documentada en `public/fonts/` y debe confirmarse antes de redistribuirla. **Archivo** aporta una grotesca editorial para lectura e interfaz. JetBrains Mono sostiene la capa de medición y estados.

**Escala**

```
--text-xs:    clamp(0.70rem, 0.68rem + 0.08vw, 0.78rem)
--text-sm:    clamp(0.80rem, 0.78rem + 0.10vw, 0.88rem)
--text-base:  clamp(1.00rem, 0.97rem + 0.16vw, 1.10rem)
--text-md:    clamp(1.12rem, 1.06rem + 0.28vw, 1.30rem)
--text-lg:    clamp(1.45rem, 1.32rem + 0.65vw, 1.95rem)
--text-xl:    clamp(1.95rem, 1.55rem + 1.80vw, 3.20rem)
--display-sm: clamp(2.50rem, 1.90rem + 3.10vw, 4.40rem)
--display:    clamp(3.50rem, 2.10rem + 6.40vw, 8.00rem)
--display-xl: clamp(4.40rem, 1.80rem + 11.2vw, 13.0rem)
```

Los metadatos funcionales no bajan de 11 px. Las etiquetas decorativas que son puramente numéricas pueden ser más pequeñas, pero el texto que se lee o se toca mantiene el piso de legibilidad.

## Retícula y espacio

- Contenedor: `min(1480px, 100%)`; gutter `clamp(1.25rem, 4.2vw, 4.5rem)`.
- Retícula base de 12 columnas para la portada y las fichas; el rail de proyectos usa 13.5rem + 1fr.
- Escala de espacio de 4 px: 0.25, 0.5, 0.75, 1, 1.5, 2.25, 3.5, 5, 7.5 y 10rem.
- Secciones: `padding-block` de 3.5 a 7.5rem; la portada respira con `100svh`.
- Todos los bordes son de 1 px; no hay radios ni sombras de tarjeta.
- La asimetría es deliberada: 7/5, 1.1/0.9, 0.3/1. No se simetriza sin una razón.

## Componentes

### Hero de portada

La portada compone la escena celeste como **una lámina única de proporción 3:2**, centrada en el viewport y dimensionada con `min(100%, 150svh − cabecera)`. Todo el hero —arte y texto— vive dentro de esa lámina como contenedor de consulta; las piezas se posicionan en porcentaje de la lámina y la tipografía escala en `cqw`. Así el conjunto conserva su proporción al cambiar el viewport, cosa que no ocurría cuando el arte dependía de `vh` y el texto de `vw`.

El orden de capas, de fondo a frente, es: grano → órbita → sol → nebulosa → wordmark, descriptor y divisor → luna → frase → disciplinas. La luna tapa el arco inferior de la órbita; el sol queda detrás de la Q; la nebulosa nunca toca el wordmark.

- Sol ocre: el PNG ya trae el borde limpio, así que no lleva máscara; se multiplica sobre el papel, se desatura y conserva su borde nítido. No lleva aro ni halo duro.
- Luna: se oscurece y se funde en papel con una capa de papel recortada por la silueta del propio PNG, no con un velo a sangre. El arco de la órbita queda oculto porque la luna mantiene su opacidad.
- Nebulosa: mancha tenue, desplazada a la derecha, con desenfoque y opacidad baja.
- Grano: turbulencia propia del hero, más fibrosa que el ruido global, por encima del arte y por debajo del texto.
- Wordmark «Quicio» en Roman Serif, centrado, con la Q emergiendo del sol.
- Descriptor «ESTUDIO INDEPENDIENTE» en JetBrains Mono, peso 600, mayúsculas y tracking ≈0,65 em; más compacto que el wordmark.
- Glyph de eje y arcos en SVG (100×150), trazo fino, separado del wordmark; símbolo definitivo, 15 % mayor que en la primera lámina.
- Divisor SVG de 280 px con punto ocre de 9 px.
- Frase italic al pie, sobre papel limpio: «Un espacio para investigar, crear y publicar.»
- Bloque inferior en flujo: frase, disciplinas y coordenadas comparten columna, de modo que el pie nunca se solapa con la frase aunque las disciplinas rompan a dos líneas. En láminas de menos de 700 px de alto el pie se compacta a una línea y las coordenadas se ocultan.
- Fila de disciplinas centrada, con separadores de barra; coordenadas en una línea discreta debajo. En móvil y en láminas de menos de 700 px de alto las coordenadas se ocultan del hero y permanecen en el footer.
- Marcas de esquina SVG dentro de la lámina, no rasterizadas.

Objetivos de la lámina a 1536×1024: órbita 722 px, sol ≈230 px de disco visible, wordmark ≈505 px, descriptor ≈320 px, divisor 280 px, luna ≈930 px de ancho visible y glyph ≈139 px de ancho.

### Cabecera

Barra sticky de papel sólido, línea inferior capilar. Isotipo + wordmark + descriptor; navegación mono con índices; contacto entre corchetes. En móvil se reemplaza por un `<details>` nativo («Índice») que no necesita JavaScript.

En la portada la cabecera usa una **variante superpuesta**: `position: absolute`, sin fondo ni línea inferior, apoyada sobre la lámina. Se desplaza con la portada y deja de ser sticky; el resto de páginas conserva la barra sólida. El bloque central de la lámina reserva la altura de la cabecera para que la nav no tape el glyph.

### Secciones de portada

La portada se compone desde `homeSections` en `inicio.md`: una lista ordenada de seis bloques —manifiesto, proyectos, campo abierto, experimentos, archivo y contacto—. La numeración es posicional; `active: false` oculta una sección y cierra la numeración. El registro que mapea cada `id` a su componente vive en `index.astro`; añadir un tipo nuevo exige un componente, no solo una entrada de contenido.

### Footer

Superficie oscura. Wordmark apilado, frase, nota del estudio, columnas de secciones/ecosistema/contacto/sistema, y una línea final con copyright, coordenadas, colofón y «Volver arriba».

### Encabezado de sección

Etiqueta mono numerada, titular serif y nota breve. En la portada convive con enlaces de sección; en las páginas interiores se usa como cabecera de grupo.

### Ficha de proyecto

Placa generativa + número, estado, título, descriptor, resumen, relación con Quicio, disciplinas y enlaces. Las fichas destacadas muestran el cuerpo Markdown; las compactas se reducen a una fila editorial. No hay tarjetas idénticas ni botones primarios.

### Filas de experimento y archivo

Filas de registro, no tarjetas. Número, placa, título, resumen, tipo, estado y año. En móvil se ocultan placas y resúmenes secundarios para conservar la lectura.

### Placas e imágenes de proyecto

Nueve familias de placa: `semina` (semilla/raíz), `rizoma` (red), `intersticio` (apertura), `orbit`, `wave`, `grid`, `branch`, `network`, `aperture`. Se generan con semilla en build y comparten fondo `--dark`, líneas marfil y un acento ocre. La portada usa una escena por capas, no una placa generada.

Cuando el proyecto o el experimento aporta **arte propio verificable**, la ficha usa esa imagen en el marco de la placa, con el mismo recorte 4/3 (o el que fije el layout), el número y el estado. La placa generativa queda como respaldo para las fichas sin imagen. El arte procede del archivo del estudio —hoy, las ilustraciones de dispositivos de KNDL— y su origen se documenta en `docs/contenido.md`; no se admite fotografía de stock.

### Enlaces

`.link-arrow` en mono con flecha `↗` o `↓`, subrayado ausente y desplazamiento de 0.18rem en hover. Los enlaces de texto usan subrayado de 1 px con `text-underline-offset: 0.22em`.

## Movimiento

- Entrada de la portada: `rise` de 640 ms, opacidad y 1.2rem de desplazamiento, escalonada.
- Hover: 280 ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
- `prefers-reduced-motion: reduce`: se eliminan animaciones y transiciones; la página queda completa y navegable.
- No hay parallax, scroll-jacking, glitch ni animaciones decorativas fuera de la entrada de la portada.

## Relación con los proyectos

Quicio comparte con sus proyectos:

- tipografía auxiliar y criterios de legibilidad;
- paleta secundaria y metadatos;
- retícula, líneas y numeración;
- estados y tono editorial.

Quicio **no** impone:

- isotipo ni logotipo;
- estructura de interfaz;
- modelo de dominio;
- personalidad visual.

Semina es editorial, botánico y orgánico. Rizoma es cartográfico, topológico y ramificado. Intersticio es una publicación con dirección propia. La tabla viva de esta relación está en `/sistema/`.

## Voz

Editorial, directa y reflexiva. Frases cortas. Primera persona del estudio cuando hace falta («Quicio reúne…»), nunca «somos una empresa». Se evita el lenguaje corporativo: soluciones digitales, transformación digital, innovación disruptiva, servicios tecnológicos, productos revolucionarios.

**Usar:** espacio, práctica, investigación, herramienta, publicación, archivo, umbral, eje, proyecto, proceso, obra, derivar, mutar, sostener.

**Evitar:** solución, disruptivo, escalable, sinergia, ecosistema como jerga vacía, cliente, propuesta de valor, roadmap comercial.

## Accesibilidad

- WCAG 2.2 AA en texto y controles; foco visible de 2 px con offset 4 px.
- Skip link, HTML semántico, un solo `h1` por página.
- Navegación móvil con `<details>` nativo; funciona sin JavaScript.
- `prefers-reduced-motion` respetado.
- Placas SVG con `role="img"` y etiqueta; etiquetas numéricas decorativas con `aria-hidden`.
- Responsive verificado en 360, 390, 768, 1024, 1440 y 1920 px sin scroll horizontal.

## Contenido

- `src/content/proyectos/*.md`: fichas de proyectos, con frontmatter y cuerpo editorial.
- `src/content/experimentos/*.md`: prototipos y procesos con página propia.
- `src/content/archivo/*.md`: historial verificable con página propia.
- `src/content/paginas/*.md`: inicio, acerca y contacto.
- `src/data/sitio.ts`: navegación, correo, coordenadas, disciplinas.
- `public/archivo/sitio-2026/original/`: artefacto estático del sitio anterior.

## Excepciones documentadas al detector

El detector de Impeccable señala algunas decisiones que son deliberadas y forman parte del brief:

- **Paleta marfil.** El brief fija `#F0EDE5` como campo predominante. No es un beige por defecto: es el papel de la cámara clara y se contrasta con carbón, ocre y superficies oscuras.
- **Etiquetas numeradas sobre los titulares.** La numeración editorial (`02 / Proyectos`) es un recurso de archivo, no un eyebrow de SaaS. Ordena el recorrido y conecta con los índices de las publicaciones.
- **Placas SVG extensas.** Las escenas de la portada y de los proyectos son diagramas generativos, no ilustraciones de relleno. Se generan con semilla y se documentan; no son capturas de stock.
- **Roman Serif y Archivo.** Geliant e Imperator se descartaron por licencia. Roman Serif es la fuente indicada por el estudio para el wordmark y los titulares; Archivo aporta una lectura editorial específica. La procedencia de Roman Serif está documentada en `public/fonts/`.
- **Fundido de la luna.** La luna no lleva un velo a sangre: el texto se apoya en una capa de papel recortada por la silueta del PNG. Es lo que permite conservar la textura lunar y, a la vez, el contraste AA de la frase y del pie.

## Anti-patrones rechazados

- Hero de startup con eyebrow y CTA de pill.
- Tarjetas SaaS equivalentes, bordes redondeados y sombras.
- Gradientes tecnológicos, glassmorphism, neón.
- Fotografía de stock o ilustraciones genéricas.
- Iconografía de circuitos, chips o cerebros.
- Animaciones que no responden a una acción o a una órbita lenta.
- Métricas, clientes, testimonios o equipo inventados.

## Decisiones abiertas

- El Archivo espera el relato histórico del fundador; hasta entonces solo publica entradas verificables.
- La imagen social se genera con `scripts/og.html`; si cambia la marca, se regenera.
- La página `/sistema/` es un colofón público y no se incluye en el sitemap.

## Changelog

- 2026-11-24: sistema inicial. Roman Serif + Archivo + JetBrains Mono; paleta de papel y ocre; placas generativas; shell editorial; sitio Astro desplegable.
- 2026-11-24: hero celeste recompuesto por capas: sol, luna y nebulosa limpios; órbita, glyph, divisor y marcas de esquina en SVG; Roman Serif en el wordmark.
- 2026-11-24: lámina celeste 3:2 con coordenadas de contenedor; sol detrás del wordmark, luna fundida en papel sin velo, grano propio, pie centrado y cabecera superpuesta solo en la portada.
- 2026-11-24: ajuste de la lámina: sol y luna +15 %, glyph +15 %, descriptor más compacto y en peso 600, y bloque inferior en flujo para evitar solapes en ventanas bajas.
- 2026-11-24: símbolo definitivo (100×150) en hero, cabecera, footer, favicon y página de sistema: eje largo y arcos altos, sin pivote.
