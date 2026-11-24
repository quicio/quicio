# Spec Delta

## Purpose

Mantiene la identidad de Quicio como un sistema explícito y reutilizable, documentado para que el sitio y los proyectos puedan evolucionar sin perder coherencia.

## ADDED Requirements

### Requirement: Página de sistema

El sitio SHALL ofrecer `/sistema/` con la paleta, la escala tipográfica, el logotipo y sus variantes, la retícula, los componentes principales y las reglas de relación con los proyectos. La página SHALL usar los mismos tokens del sitio.

#### Scenario: Consulta de tokens

- **WHEN** una persona del equipo abre `/sistema/`
- **THEN** encuentra los valores de color y tipografía con sus nombres y usos
- **AND** puede reconocer qué elementos son compartidos y cuáles son propios de cada proyecto

### Requirement: Documentación operativa

El repositorio SHALL incluir `DESIGN.md` con tokens y criterios, y `README.md` con instalación, comandos, estructura, edición de contenido y despliegue. La documentación SHALL distinguir la identidad de Quicio de las identidades de Semina y Rizoma.

#### Scenario: Nueva persona en el proyecto

- **WHEN** alguien clona el repositorio
- **THEN** puede ejecutar el sitio, editar una ficha Markdown y publicar sin leer el código de los componentes
- **AND** entiende dónde viven los tokens, los componentes y el contenido

### Requirement: Identidad compartida, no impuesta

La documentación SHALL declarar que Quicio comparte tipografía auxiliar, paleta secundaria, metadatos, retícula y criterios de composición con sus proyectos, pero no les impone isotipo, estructura de interfaz ni personalidad.

#### Scenario: Proyecto autónomo

- **WHEN** se documenta la relación de Quicio con Semina o Rizoma
- **THEN** se explican los rasgos compartidos y los rasgos propios de cada proyecto
- **AND** no se presenta a los proyectos como secciones de Quicio

### Requirement: Calidad de entrega

El sitio SHALL pasar el build, el chequeo de tipos, el chequeo de enlaces internos y la revisión de accesibilidad básica antes de publicarse. Las animaciones SHALL respetar `prefers-reduced-motion`.

#### Scenario: Verificación previa a publicar

- **WHEN** se ejecuta `npm run verify`
- **THEN** el build termina sin errores, los enlaces internos resuelven y el chequeo de tipos pasa
- **AND** la página funciona con teclado y sin JavaScript
