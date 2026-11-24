# studio-pages Specification

## Purpose

Explica la identidad, los principios y la forma de colaborar de Quicio, y compone la portada como un archivo editorial del estudio.

## Requirements

### Requirement: Portada editorial

La portada SHALL presentar el nombre, el descriptor, la frase «Investigar, imaginar, construir», una introducción breve, los proyectos destacados, una selección de experimentos y un acceso al archivo. La composición SHALL evitar el hero de startup y la retícula de tarjetas equivalentes.

#### Scenario: Primera pantalla

- **WHEN** el visitante abre `/`
- **THEN** entiende que Quicio es un estudio independiente y ve una vía clara hacia los proyectos
- **AND** la primera pantalla no contiene métricas, clientes ni llamadas comerciales

#### Scenario: Recorrido completo

- **WHEN** el visitante recorre la portada
- **THEN** encuentra proyectos, principio editorial, experimentos, archivo y contacto
- **AND** cada sección enlaza a su página o a la superficie externa correspondiente

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

La portada SHALL usar la lámina celeste transparente provista como fondo del hero, centrada y a sangre. El wordmark «Quicio» SHALL quedar al frente, centrado, y el descriptor «Estudio independiente» SHALL escribirse en mayúsculas con JetBrains Mono.

#### Scenario: Hero de escritorio

- **WHEN** el visitante abre la portada en escritorio
- **THEN** ve la lámina celeste centrada, el wordmark «Quicio» al frente y el descriptor mono debajo
- **AND** la línea y el punto ocre de la lámina separan el lockup de la luna

#### Scenario: Hero móvil

- **WHEN** la portada se abre a 390 px
- **THEN** la lámina se recorta de forma centrada, el wordmark conserva su lectura y el descriptor sigue visible
- **AND** la frase y el pie de disciplinas no se solapan con la luna

### Requirement: Legibilidad sobre la imagen

El hero SHALL aplicar un velo de papel en la base para que la frase italic, las disciplinas y las coordenadas mantengan contraste suficiente sobre la luna.

#### Scenario: Texto sobre la luna

- **WHEN** el texto del pie se superpone a la zona oscura de la luna
- **THEN** el velo de papel aclara el fondo sin ocultar el texto
- **AND** el contraste se mantiene en escritorio y móvil

### Requirement: Sin placa SVG en la portada

La portada SHALL dejar de usar la placa celeste generada en SVG. Las placas generativas se conservan para las fichas de proyectos y experimentos.

#### Scenario: Revisión del hero

- **WHEN** se inspecciona el hero renderizado
- **THEN** la imagen de fondo es la lámina provista
- **AND** no hay una segunda placa SVG superpuesta
