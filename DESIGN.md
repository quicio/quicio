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
    fontFamily: "Instrument Serif, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "clamp(3.4rem, 8vw, 7rem)"
    fontWeight: 400
    lineHeight: 0.8
    letterSpacing: "-0.018em"
  wordmark:
    fontFamily: "Instrument Serif, Iowan Old Style, Palatino, Georgia, serif"
    fontSize: "clamp(4.4rem, 1.8rem + 11.2vw, 13rem)"
    fontWeight: 400
    lineHeight: 0.76
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

El logotipo es tipográfico: **Quicio** en Instrument Serif, con tracking negativo y una altura de línea que lo vuelve casi una inscripción. Se acompaña de un **isotipo de eje y arcos**: una línea vertical, dos arcos que se abren desde un punto de pivote y un punto ocre en el centro.

- **Lockup horizontal:** isotipo + wordmark + filete + descriptor «Estudio independiente» en mono.
- **Lockup apilado:** isotipo, wordmark y descriptor en columna. Se usa en el footer.
- **Isotipo:** funciona a 16/32 px como favicon y como marca de agua de placas.
- **Versión negativa:** `currentColor` sobre `--dark`; el pivote pasa a `--ochre-soft`.

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

| Rol                | Familia                     | Uso                                      | Pesos           |
| ------------------ | --------------------------- | ---------------------------------------- | --------------- |
| Display y firma    | **Instrument Serif**        | Titulares, wordmark, citas, descriptores | 400, 400 italic |
| Lectura e interfaz | **Archivo Variable**        | Cuerpo, navegación, controles, párrafos  | 100–900         |
| Metadatos          | **JetBrains Mono Variable** | Índices, estados, coordenadas, etiquetas | 100–800         |

**Por qué estas familias**

Se evaluaron Fraunces, Instrument Serif, Inter y JetBrains Mono. Instrument Serif conserva el contraste alto y la calidez del wordmark de referencia, pero tiene una sola weight y obliga a componer con escala, no con negritas. Archivo aporta una grotesca editorial con más carácter que Inter y mejor lectura en cuerpos pequeños; reemplaza a Inter en la implementación final. JetBrains Mono sostiene la capa de medición y estados.

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

### Cabecera

Barra sticky de papel sólido, línea inferior capilar. Isotipo + wordmark + descriptor; navegación mono con índices; contacto entre corchetes. En móvil se reemplaza por un `<details>` nativo («Índice») que no necesita JavaScript.

### Footer

Superficie oscura. Wordmark apilado, frase, nota del estudio, columnas de secciones/ecosistema/contacto/sistema, y una línea final con copyright, coordenadas, colofón y «Volver arriba».

### Encabezado de sección

Etiqueta mono numerada, titular serif y nota breve. En la portada convive con enlaces de sección; en las páginas interiores se usa como cabecera de grupo.

### Ficha de proyecto

Placa generativa + número, estado, título, descriptor, resumen, relación con Quicio, disciplinas y enlaces. Las fichas destacadas muestran el cuerpo Markdown; las compactas se reducen a una fila editorial. No hay tarjetas idénticas ni botones primarios.

### Filas de experimento y archivo

Filas de registro, no tarjetas. Número, placa, título, resumen, tipo, estado y año. En móvil se ocultan placas y resúmenes secundarios para conservar la lectura.

### Placas

Seis familias: `semina` (semilla/raíz), `rizoma` (red), `intersticio` (apertura), `orbit`, `wave`, `grid`, `branch`, `network`, `aperture`. Se generan con semilla en build y comparten fondo `--dark`, líneas marfil y un acento ocre. La portada usa una placa celeste propia (luna, sol, órbita).

### Enlaces

`.link-arrow` en mono con flecha `↗` o `↓`, subrayado ausente y desplazamiento de 0.18rem en hover. Los enlaces de texto usan subrayado de 1 px con `text-underline-offset: 0.22em`.

## Movimiento

- Entrada de la portada: `rise` de 640 ms, opacidad y 1.2rem de desplazamiento, escalonada.
- Órbita de la placa celeste: 90 s lineales, un punto ocre sobre el círculo.
- Hover: 280 ms, `cubic-bezier(0.22, 1, 0.36, 1)`.
- `prefers-reduced-motion: reduce`: se eliminan animaciones y transiciones; la página queda completa y navegable.
- No hay parallax, scroll-jacking, glitch ni animaciones decorativas fuera de la placa.

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
- **Instrument Serif y Archivo.** Se evaluaron alternativas; Instrument Serif sostiene el wordmark de referencia y Archivo aporta una lectura editorial más específica que Inter. La decisión está registrada en la sección de tipografía.

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

- 2026-11-24: sistema inicial. Instrument Serif + Archivo + JetBrains Mono; paleta de papel y ocre; placas generativas; shell editorial; sitio Astro desplegable.
