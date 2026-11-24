# Spec Delta

## Purpose

Preserva el historial verificable de Quicio: proyectos anteriores, experimentos discontinuados, versiones reemplazadas y artefactos que explican la evolución del estudio.

## ADDED Requirements

### Requirement: Registro de archivo

Cada entrada de archivo SHALL existir como Markdown con título, año, tipo, estado, resumen y cuerpo. El archivo SHALL ordenarse por año descendente y SHALL declarar el motivo del cierre o la transformación.

#### Scenario: Entrada archivada

- **WHEN** el visitante abre `/archivo/`
- **THEN** ve una tabla editorial con año, título, tipo y estado
- **AND** puede abrir la entrada para leer su historia

#### Scenario: Estado del archivo

- **WHEN** una entrada fue reemplazada, discontinuada o derivó en otro proyecto
- **THEN** el estado lo declara con una etiqueta monoespaciada
- **AND** el cuerpo explica qué la reemplazó o qué quedó de ella

### Requirement: Preservación de artefactos

El archivo SHALL poder conservar artefactos estáticos del pasado, como el sitio anterior de la organización, sin romper la navegación ni la seguridad del sitio actual.

#### Scenario: Sitio anterior preservado

- **WHEN** el visitante abre la entrada del sitio de 2026
- **THEN** encuentra un enlace al artefacto original preservado
- **AND** el artefacto se sirve como documento estático aislado del shell actual

### Requirement: Veracidad histórica

El archivo SHALL publicar solo entradas verificables. Cuando el relato histórico no esté disponible, la página SHALL declarar el vacío en lugar de inventar fechas, proyectos o hitos.

#### Scenario: Archivo incompleto

- **WHEN** todavía no se ha incorporado el relato histórico completo
- **THEN** la página indica que el archivo está en preparación
- **AND** solo muestra las entradas que pueden comprobarse
