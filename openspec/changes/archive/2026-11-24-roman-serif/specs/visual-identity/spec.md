# Spec Delta

## REMOVED Requirements

### Requirement: Serif display con licencia verificable

**Reason**: El estudio indicó Roman Serif como la serif correcta; la condición de licencia de Fraunces ya no describe la decisión.

**Migration**: Se reemplaza por el requisito «Serif display institucional», que documenta la procedencia de Roman Serif y la necesidad de conservar el permiso de uso.

## ADDED Requirements

### Requirement: Serif display institucional

La identidad SHALL usar **Roman Serif** (m klein fonteria, 2004) para el wordmark y los titulares. La fuente SHALL servirse desde el propio sitio. El repositorio SHALL documentar su titular, la ausencia de un texto de licencia web en el archivo y la necesidad de confirmar el permiso de uso antes de redistribuirla.

#### Scenario: Wordmark y titulares

- **WHEN** se renderiza el wordmark o un titular
- **THEN** usan Roman Serif en peso regular
- **AND** la fuente se sirve desde `src/assets/fonts/`, no desde Google Fonts

#### Scenario: Procedencia documentada

- **WHEN** se revisa la licencia de la fuente
- **THEN** `public/fonts/LICENSE-romanserif.txt` declara el titular y la condición pendiente
- **AND** `DESIGN.md` registra la decisión y el riesgo

#### Scenario: Cursiva

- **WHEN** se compone la frase italic del hero o una cita
- **THEN** se usa Roman Serif Oblique
- **AND** no se simula la cursiva con transformaciones
