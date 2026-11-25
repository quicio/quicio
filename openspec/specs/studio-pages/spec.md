# studio-pages Specification

## Purpose

Explica la identidad, los principios y la forma de colaborar de Quicio, y compone la portada como un archivo editorial del estudio.

## Requirements

### Requirement: Portada editorial

La portada SHALL componerse desde una lista ordenada de secciones declarada en el contenido. Por defecto SHALL incluir manifiesto, proyectos, campo abierto, experimentos, archivo y contacto. La copia de cada sección —etiqueta, título, nota, texto, enlaces y pie— SHALL venir del contenido, no del marcado. El orden y la visibilidad SHALL poder cambiarse sin editar componentes. La composición SHALL evitar el hero de startup y la retícula de tarjetas equivalentes.

#### Scenario: Primera pantalla

- **WHEN** el visitante abre `/`
- **THEN** entiende que Quicio es un estudio independiente y ve una vía clara hacia los proyectos
- **AND** la primera pantalla no contiene métricas, clientes ni llamadas comerciales

#### Scenario: Recorrido completo

- **WHEN** el visitante recorre la portada
- **THEN** encuentra proyectos, principio editorial, experimentos, archivo y contacto
- **AND** cada sección enlaza a su página o a la superficie externa correspondiente

#### Scenario: Editar los textos

- **WHEN** se cambia el título, la nota, el texto o el enlace de una sección en `inicio.md`
- **THEN** la portada muestra el texto nuevo sin tocar componentes ni HTML
- **AND** la numeración y el resto de secciones se mantienen

#### Scenario: Reordenar secciones

- **WHEN** se mueve una entrada de la lista `homeSections`
- **THEN** las secciones aparecen en el nuevo orden
- **AND** la numeración visible se recalcula desde `01`

#### Scenario: Ocultar una sección

- **WHEN** una sección declara `active: false`
- **THEN** no se renderiza ni deja hueco
- **AND** las secciones visibles se renumeran sin saltos

### Requirement: Acerca de Quicio

`/acerca/` SHALL explicar qué es Quicio, qué lo motiva, sus principios, su enfoque interdisciplinario y su apertura a colaboraciones. SHALL incluir el sentido del nombre y la autonomía de los proyectos.

#### Scenario: Lectura de principios

- **WHEN** el visitante abre `/acerca/`
- **THEN** encuentra los ocho principios numerados y una explicación del estudio como espacio de origen
- **AND** no encuentra una estructura de equipo, cargos ni una historia de empresa

### Requirement: Contacto y colaboración

`/contacto/` SHALL ofrecer un correo real y una guía breve para proponer colaboraciones o conversaciones. No SHALL incluir un formulario con backend ni prometer tiempos de respuesta no verificados.

#### Scenario: Escribir a Quicio

- **WHEN** el visitante activa el correo
- **THEN** se abre un cliente de correo con el asunto de la categoría elegida
- **AND** la página explica qué información conviene incluir

#### Scenario: Límites claros

- **WHEN** el visitante busca servicios o cotizaciones
- **THEN** la página aclara que Quicio no es una agencia ni una empresa de servicios
- **AND** no inventa una oferta comercial

### Requirement: Publicaciones asociadas

La portada o las páginas de proyectos SHALL nombrar las publicaciones asociadas del ecosistema: Intersticio, Miscellanea y Commentarii, con su relación con Semina y su estado.

#### Scenario: Publicaciones en contexto

- **WHEN** el visitante lee la sección de Semina o la portada
- **THEN** entiende que Intersticio, Miscellanea y Commentarii son publicaciones con identidad propia dentro del ecosistema
- **AND** no se presentan como productos separados de Quicio

### Requirement: Hero con lámina celeste

La portada SHALL componer el hero como una lámina única de proporción fija, centrada, con las capas sol, órbita, nebulosa, wordmark, luna, frase y disciplinas ordenadas de fondo a frente. El sol SHALL quedar detrás del wordmark; la luna SHALL ocupar el tercio inferior y fundirse en papel antes de la frase. El wordmark SHALL quedar al frente y el descriptor SHALL ir en mayúsculas con JetBrains Mono y tracking amplio.

#### Scenario: Hero de escritorio

- **WHEN** el visitante abre la portada en escritorio
- **THEN** ve una sola lámina centrada con el sol detrás del wordmark y la luna en el tercio inferior
- **AND** la nebulosa permanece tenue y fuera del centro del texto
- **AND** el glyph, la órbita y el divisor guardan proporción entre sí y con el wordmark

#### Scenario: Proporción estable

- **WHEN** cambia el alto de la ventana sin cambiar su ancho
- **THEN** sol, órbita, wordmark, luna y frase conservan su posición relativa dentro de la lámina
- **AND** el conjunto no se estira ni se recorta de forma distinta a la referencia

#### Scenario: Hero móvil

- **WHEN** la portada se abre a 390 px
- **THEN** la lámina se recompone en vertical, el wordmark conserva su lectura y el descriptor sigue visible
- **AND** la frase y el pie de disciplinas no se solapan con la luna

#### Scenario: Capas limpias

- **WHEN** se inspeccionan las capas del hero
- **THEN** el sol, la luna y la nebulosa no arrastran rectángulos de papel, fragmentos de órbita ni líneas del divisor
- **AND** el glyph, el divisor y las esquinas son SVG independientes

### Requirement: Legibilidad sobre la imagen

El hero SHALL garantizar el contraste del texto sin interponer un velo sobre la luna: la luna SHALL fundirse en el papel antes de la frase y el pie SHALL apoyarse sobre superficie de papel limpia. El texto del hero SHALL mantener contraste AA en escritorio y móvil.

#### Scenario: Texto sobre la luna

- **WHEN** el texto del pie se superpone a la zona inferior de la luna
- **THEN** la luna ya se ha fundido en papel y el texto conserva contraste AA
- **AND** no aparece un degradado de papel superpuesto que lave la imagen

#### Scenario: Preferencia de movimiento reducido

- **WHEN** el sistema operativo declara movimiento reducido
- **THEN** el hero se muestra completo y estático
- **AND** ningún texto depende de una animación para ser legible

### Requirement: Sin placa SVG en la portada

La portada SHALL dejar de usar la placa celeste generada en SVG. El fondo del hero SHALL componerse con las capas provistas y SVG de órbita, glyph, divisor y esquinas. Las placas generativas se conservan para las fichas de proyectos y experimentos.

#### Scenario: Revisión del hero

- **WHEN** se inspecciona el hero renderizado
- **THEN** el fondo combina sol, luna, nebulosa y órbita
- **AND** no hay una placa generada del sistema de proyectos superpuesta

### Requirement: Pie de lámina

La portada SHALL cerrar la lámina con una fila centrada de disciplinas separadas por barra y una línea discreta de coordenadas debajo. En anchos estrechos, las coordenadas SHALL ocultarse del hero y permanecer accesibles en el footer.

#### Scenario: Pie en escritorio

- **WHEN** el visitante observa la base del hero en escritorio
- **THEN** las disciplinas aparecen centradas y separadas por barra
- **AND** las coordenadas aparecen debajo en cuerpo menor y color atenuado

#### Scenario: Pie en móvil

- **WHEN** la portada se abre a 390 px
- **THEN** las disciplinas se reparten sin desbordar el ancho
- **AND** las coordenadas no se muestran en el hero y siguen presentes en el footer
