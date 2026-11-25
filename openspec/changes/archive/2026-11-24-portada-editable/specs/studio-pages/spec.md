# Spec Delta

## MODIFIED Requirements

### Requirement: Portada editorial

La portada SHALL componerse desde una lista ordenada de secciones declarada en el contenido. Por defecto SHALL incluir manifiesto, proyectos, campo abierto, experimentos, archivo y contacto. La copia de cada sección —etiqueta, título, nota, texto, enlaces y pie— SHALL venir del contenido, no del marcado. El orden y la visibilidad SHALL poder cambiarse sin editar componentes. La composición SHALL evitar el hero de startup y la retícula de tarjetas equivalentes.

#### Scenario: Primera pantalla

- **WHEN** el visitante abre `/`
- **THEN** entiende que Quicio es un estudio independiente y ve una vía clara hacia los proyectos
- **AND** la primera pantalla no contiene métricas, clientes ni llamadas comerciales

#### Scenario: Recorrido completo

- **WHEN** el visitante recorre la portada
- **THEN** encuentra proyectos, principio editorial, experimentos, archivo y contacto
- **AND** cada sección enlaza a su página o a la superficie externa correspondiente

#### Scenario: Editar los textos

- **WHEN** se cambia el título, la nota, el texto o el enlace de una sección en `inicio.md`
- **THEN** la portada muestra el texto nuevo sin tocar componentes ni HTML
- **AND** la numeración y el resto de secciones se mantienen

#### Scenario: Reordenar secciones

- **WHEN** se mueve una entrada de la lista `homeSections`
- **THEN** las secciones aparecen en el nuevo orden
- **AND** la numeración visible se recalcula desde `01`

#### Scenario: Ocultar una sección

- **WHEN** una sección declara `active: false`
- **THEN** no se renderiza ni deja hueco
- **AND** las secciones visibles se renumeran sin saltos
