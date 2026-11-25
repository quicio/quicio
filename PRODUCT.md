# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro 7 en modo estático, content collections con Markdown, CSS propio sin framework de UI y despliegue en GitHub Pages con dominio `quicio.org`. Decisión confirmada por el usuario: la web se construye con Astro y se publica en GitHub Pages.

## Users

Personas que llegan desde GitHub, desde los sitios de Semina, Rizoma, Intersticio o desde una referencia compartida: lectores, desarrolladores, diseñadores, artistas, investigadores y posibles colaboradores. Llegan para entender qué es Quicio, qué proyectos sostiene y cómo entrar en contacto. El sitio debe orientar en segundos y permitir profundizar sin convertirse en un catálogo comercial.

## Product Purpose

Quicio es un estudio independiente dedicado a la investigación, creación y desarrollo de proyectos interdisciplinarios. La web institucional reúne el relato del estudio, sus proyectos activos, sus experimentos, su archivo y una vía de colaboración. El éxito es que una persona entienda la intención del estudio, reconozca los proyectos como parte de un ecosistema y sepa dónde seguir leyendo o cómo escribir.

## Positioning

Quicio no es una agencia, una startup ni una empresa de servicios tecnológicos. Es un espacio de origen y articulación: un quicio donde las ideas empiezan a girar. Los proyectos conservan personalidad, dominio y despliegue propios; Quicio ofrece una gramática compartida y un contexto, no una identidad idéntica para todos. La diferencia está en la autonomía de los proyectos y en la convivencia de software, publicaciones, investigación, arte, música y experimentación sin subordinarlos a la rentabilidad.

## Operating Context

- El ecosistema vive en la organización de GitHub `quicio` y en sitios propios: `semina.quicio.org`, `rizoma.quicio.org/`, `quicio.github.io/intersticio/`, entre otros.
- Cada proyecto conserva su repositorio y su página; Quicio presenta fichas editoriales y enlaza al proyecto, sin duplicar su producto ni su documentación.
- El contenido institucional se edita en Markdown dentro de `src/content/`; los datos de navegación y SEO viven en `src/data/`.
- El sitio se publica en GitHub Pages con el dominio canónico `quicio.org`.
- El idioma es español. El tono es editorial, directo y reflexivo.
- Existe un relato histórico de Quicio que el fundador aportará para completar el Archivo. Hasta entonces, el Archivo solo publica entradas verificables.

## Capabilities and Constraints

- Inicio, Proyectos, Experimentos, Archivo, Acerca de y Contacto.
- Proyectos: todos los repositorios activos de la organización que tengan una superficie pública o un estado verificable; ficha con nombre, descripción, disciplina, estado, imagen, enlace y relación con Quicio.
- Cada proyecto enlaza a su propia página o repositorio; Quicio no replica páginas de producto.
- Experimentos y Archivo se alimentan de Markdown y conservan estados honestos: en curso, pausado, discontinuado, antecedente.
- Sin CMS, base de datos, login, newsletter, buscador, métricas, formulario con backend, i18n ni funciones de producto SaaS.
- No inventar equipo, clientes, testimonios, métricas, precios ni resultados.
- El sitio debe funcionar sin JavaScript; el JavaScript solo mejora navegación y movimiento.
- El contenido debe poder crecer con nuevos proyectos y colaboradores sin rediseñar el sistema.

## Brand Commitments

- Nombre: **Quicio**.
- Descriptor: **Estudio independiente**.
- Frase principal: **Investigar, imaginar, construir**.
- Principios: independencia creativa, investigación interdisciplinaria, experimentación, cultura abierta, autonomía de los proyectos, colaboración, pensamiento crítico y desarrollo de herramientas y objetos culturales.
- Territorio visual fijado por el brief: estética editorial contemporánea, experimental y cálida; marfil `#F0EDE5` predominante, carbón `#242321`, gris piedra `#77746D`, ocre `#B77A35`, superficie oscura `#171817`, verde mineral `#78816D`.
- Tipografía: serif editorial expresiva para titulares, sans contemporánea para lectura e interfaz, monoespaciada para metadatos.
- La identidad debe ser más luminosa que KNDL, pero conservar su sensibilidad editorial; no debe confundirse con la identidad personal del fundador.
- Evitar lenguaje corporativo: soluciones digitales, transformación digital, innovación disruptiva, servicios tecnológicos, productos revolucionarios.
- No usar circuitos, chips, cerebros artificiales ni ilustraciones tecnológicas genéricas.

## Evidence on Hand

- Repositorios reales y descripciones verificables en `github.com/quicio`.
- Sitios reales: Semina (`semina.quicio.org`), Rizoma (`rizoma.quicio.org/`), Intersticio (`quicio.github.io/intersticio/`), Candil, Cátodo, Espiral, Nacre y Paramétrica en GitHub Pages.
- Sitio anterior de la organización: `quicio/quicio.github.io`, una página única oscura de 2026; se conserva como antecedente en el Archivo.
- Brief de identidad y arquitectura del ecosistema entregado por el fundador.
- Relato histórico de Quicio: prometido por el fundador; no inventar fechas, hitos ni proyectos para llenar el Archivo.
- No hay equipo, clientes, testimonios, fotografías de prensa ni métricas públicas que puedan citarse.

## Product Principles

1. **El contexto antes que el catálogo.** La web explica un espacio de trabajo; no vende una cartera de servicios.
2. **Autonomía de los proyectos.** Cada proyecto tiene su voz y su superficie; Quicio comparte gramática, no personalidad.
3. **Verdad editorial.** Solo se publica lo verificable; los estados y ausencias se nombran.
4. **La tipografía y la composición hacen el trabajo.** La interfaz se retira; no hay decoración sin función.
5. **Cultura abierta y colaboración.** El sitio debe dejar claro cómo entrar, proponer y participar.

## Accessibility & Inclusion

- Objetivo WCAG 2.2 AA: contraste suficiente, foco visible, navegación por teclado, jerarquía semántica y textos alternativos.
- Respeto de `prefers-reduced-motion`; ninguna información depende de una animación o de JavaScript.
- Diseño responsive real en 360, 390, 768, 1024 y 1440 px, sin scroll horizontal.
- Lenguaje claro en español, sin jerga corporativa ni abreviaturas sin explicar.
