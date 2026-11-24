# Spec Delta

## ADDED Requirements

### Requirement: Imagen propia en la ficha

La ficha de proyecto SHALL aceptar una imagen propia declarada en el frontmatter, con su texto alternativo. Si existe, SHALL mostrarla en el marco de la placa, con el número y el estado visibles; si no, SHALL conservar la placa generativa.

#### Scenario: Proyecto con imagen

- **WHEN** un proyecto declara imagen en su frontmatter
- **THEN** su ficha muestra la imagen con el número y el estado
- **AND** el texto alternativo describe el arte, no repite el título sin más

#### Scenario: Proyecto sin imagen

- **WHEN** un proyecto no declara imagen
- **THEN** su ficha usa la placa generativa
- **AND** conserva la misma composición, el mismo número y el mismo estado
