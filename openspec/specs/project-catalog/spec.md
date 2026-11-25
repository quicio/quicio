# project-catalog Specification

## Purpose

Presenta los proyectos activos de Quicio como un catálogo editorial mantenible, con contexto, estado y enlaces a la superficie propia de cada proyecto.

## Requirements

### Requirement: Colección de proyectos en Markdown

Cada proyecto SHALL existir como un archivo Markdown con frontmatter tipado. El frontmatter SHALL incluir nombre, descriptor, resumen, disciplinas, estado, grupo, orden, relación con Quicio y al menos un enlace de destino o una declaración explícita de que no tiene superficie pública.

#### Scenario: Proyecto válido

- **WHEN** se agrega un archivo válido a la colección
- **THEN** aparece en `/proyectos/` en el grupo y orden declarados
- **AND** su ficha muestra nombre, descriptor, resumen, disciplinas y estado

#### Scenario: Proyecto sin enlace

- **WHEN** un proyecto no tiene página ni repositorio público
- **THEN** la ficha lo declara como «Sin superficie pública» o «En taller»
- **AND** no se inventa una URL de destino

### Requirement: Agrupación editorial

El índice SHALL agrupar los proyectos por familias de práctica y SHALL mostrar el recuento de cada grupo. Los proyectos destacados SHALL recibir una ficha ampliada; el resto SHALL mostrarse en un registro compacto.

#### Scenario: Índice con grupos

- **WHEN** el visitante abre `/proyectos/`
- **THEN** ve un rail de grupos con recuentos y enlaces a las secciones
- **AND** cada grupo tiene un encabezado y una regla editorial

#### Scenario: Proyecto destacado

- **WHEN** un proyecto está marcado como destacado
- **THEN** su ficha ocupa una composición mayor, con placa y texto editorial
- **AND** el resto de los proyectos no compite visualmente con ella

### Requirement: Enlace a la superficie propia

Cada ficha SHALL enlazar a la página o repositorio del proyecto cuando exista. Quicio no SHALL duplicar la documentación, el producto ni la navegación interna del proyecto.

#### Scenario: Abrir proyecto

- **WHEN** el visitante activa «Abrir proyecto» o «Ver repositorio»
- **THEN** sale de Quicio hacia la superficie real del proyecto
- **AND** el enlace declara si abre un sitio o un repositorio

### Requirement: Estado y relación con Quicio

Cada ficha SHALL declarar el estado del proyecto y una frase que explique su relación con Quicio. El estado SHALL ser verificable y no SHALL implicar financiación, clientes o métricas no demostradas.

#### Scenario: Estado honesto

- **WHEN** un proyecto está en prototipo, pausa o desarrollo
- **THEN** la ficha lo dice con una etiqueta monoespaciada
- **AND** no se presenta como lanzamiento comercial

### Requirement: Responsive del catálogo

El índice SHALL conservar la jerarquía y la legibilidad en móvil, sin scroll horizontal ni fichas truncadas.

#### Scenario: Catálogo en móvil

- **WHEN** `/proyectos/` se abre a 390 px
- **THEN** el rail se convierte en un índice compacto y las fichas se apilan
- **AND** los enlaces externos siguen siendo accesibles

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
