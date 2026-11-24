# Spec Delta

## ADDED Requirements

### Requirement: Serif display con licencia verificable

La identidad SHALL usar una serif display con licencia verificable para el wordmark y los titulares. La implementación SHALL usar Fraunces (SIL OFL) con los ejes `SOFT` y `WONK` para conservar el gesto expresivo del wordmark de referencia.

#### Scenario: Wordmark y titulares

- **WHEN** se renderiza el wordmark o un titular
- **THEN** usan Fraunces con `opsz` alto y `WONK` activo
- **AND** la fuente se sirve desde el propio sitio, no desde Google Fonts

#### Scenario: Fuente sin licencia

- **WHEN** se evalúa una fuente de demostración o sin licencia web declarada
- **THEN** no se incorpora al build ni se publica
- **AND** la decisión se documenta en `DESIGN.md`

### Requirement: Descriptor en monoespaciada

El descriptor institucional «Estudio independiente» SHALL componerse en JetBrains Mono, en mayúsculas y con tracking amplio, tanto en la cabecera como en el hero.

#### Scenario: Descriptor del hero

- **WHEN** se lee el descriptor debajo del wordmark
- **THEN** está en JetBrains Mono, mayúsculas y tracking amplio
- **AND** no usa la serif del wordmark
