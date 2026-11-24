# Spec Delta

## ADDED Requirements

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
