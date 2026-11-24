# Spec Delta

## MODIFIED Requirements

### Requirement: Hero con lámina celeste

La portada SHALL componer el hero con capas separadas: sol, luna, nebulosa, órbita SVG, glyph SVG, divisor SVG y marcas de esquina SVG. El wordmark «Quicio» SHALL quedar al frente, centrado, y el descriptor «Estudio independiente» SHALL escribirse en mayúsculas con JetBrains Mono.

#### Scenario: Hero de escritorio

- **WHEN** el visitante abre la portada en escritorio
- **THEN** ve el sol, la luna y la nebulosa como capas centradas, el wordmark «Quicio» al frente y el descriptor mono debajo
- **AND** el glyph y el divisor SVG se alinean con el texto sin invadir la luna

#### Scenario: Hero móvil

- **WHEN** la portada se abre a 390 px
- **THEN** la escena se recorta de forma centrada, el wordmark conserva su lectura y el descriptor sigue visible
- **AND** la frase y el pie de disciplinas no se solapan con la luna

#### Scenario: Capas limpias

- **WHEN** se inspeccionan las capas del hero
- **THEN** el sol, la luna y la nebulosa no arrastran rectángulos de papel, fragmentos de órbita ni líneas del divisor
- **AND** el glyph, el divisor y las esquinas son SVG independientes

### Requirement: Sin placa SVG en la portada

La portada SHALL dejar de usar la placa celeste generada en SVG. El fondo del hero SHALL componerse con las capas provistas y SVG de órbita, glyph, divisor y esquinas. Las placas generativas se conservan para las fichas de proyectos y experimentos.

#### Scenario: Revisión del hero

- **WHEN** se inspecciona el hero renderizado
- **THEN** el fondo combina sol, luna, nebulosa y órbita
- **AND** no hay una placa generada del sistema de proyectos superpuesta
