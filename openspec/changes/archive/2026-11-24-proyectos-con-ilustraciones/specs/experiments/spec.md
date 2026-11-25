# Spec Delta

## ADDED Requirements

### Requirement: Imagen propia del experimento

El experimento SHALL aceptar una imagen propia declarada en el frontmatter, con su texto alternativo. Si existe, SHALL usarse en la fila del índice y en la cabecera de su página; si no, SHALL conservarse la placa generativa.

#### Scenario: Experimento con imagen

- **WHEN** un experimento declara imagen
- **THEN** la fila del índice y la página del experimento muestran la misma imagen
- **AND** el número y el estado siguen visibles

#### Scenario: Experimento sin imagen

- **WHEN** un experimento no declara imagen
- **THEN** se usa la placa generativa en el índice y en la página
- **AND** la composición no cambia
