# Spec Delta

## MODIFIED Requirements

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

## ADDED Requirements

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
