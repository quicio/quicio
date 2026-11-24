# experiments Specification

## Purpose

Documenta prototipos, investigaciones y procesos que todavía no son proyectos estables, con su estado real y su relación con el ecosistema.

## Requirements

### Requirement: Registro de experimentos

Cada experimento SHALL existir como Markdown con título, índice, año, tipo, estado, resumen, placa y, cuando corresponda, un proyecto relacionado. Los experimentos SHALL mostrarse en `/experimentos/` ordenados editorialmente.

#### Scenario: Índice de experimentos

- **WHEN** el visitante abre `/experimentos/`
- **THEN** ve una lista editorial con número, título, tipo, estado y resumen
- **AND** puede abrir cada experimento en su página propia

#### Scenario: Experimento sin proyecto relacionado

- **WHEN** un experimento no pertenece a un proyecto
- **THEN** la ficha lo presenta como investigación autónoma
- **AND** no se fuerza una relación inexistente

### Requirement: Página de experimento

Cada experimento SHALL tener una página con el cuerpo Markdown, metadatos, placa y un enlace de retorno al índice.

#### Scenario: Lectura de un experimento

- **WHEN** el visitante abre un experimento
- **THEN** lee el cuerpo completo y ve su estado, año y tipo
- **AND** puede volver al índice o al proyecto relacionado

### Requirement: Estados de experimento

Los estados SHALL ser explícitos: «En curso», «Prototipo», «En pausa», «Cerrado» o «Derivado». No se SHALL presentar un experimento como producto terminado.

#### Scenario: Experimento en pausa

- **WHEN** un experimento está en pausa
- **THEN** la etiqueta lo declara y el texto explica qué quedó abierto
- **AND** no se sugieren resultados que no existen
