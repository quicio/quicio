# Spec Delta

## MODIFIED Requirements

### Requirement: Cabecera institucional

Todas las páginas SHALL mostrar una cabecera con el logotipo de Quicio, el descriptor «Estudio independiente» y la navegación principal. Por defecto la cabecera SHALL mantener un fondo marfil sólido, una línea inferior capilar y comportamiento sticky, sin blur ni transparencias decorativas. La portada SHALL usar una variante superpuesta: sin fondo, sin línea inferior y desplazándose con la lámina.

#### Scenario: Navegación de escritorio

- **WHEN** la página se renderiza en un viewport de escritorio
- **THEN** la cabecera muestra el logotipo, el descriptor y los enlaces a Proyectos, Experimentos, Archivo, Acerca y Contacto en una sola fila
- **AND** el enlace de la sección activa se distingue visualmente sin depender solo del color

#### Scenario: Navegación móvil sin JavaScript

- **WHEN** la página se renderiza en un viewport móvil y JavaScript está deshabilitado
- **THEN** existe un control nativo de índice que despliega los mismos destinos de navegación
- **AND** todos los enlaces son alcanzables por teclado

#### Scenario: Portada superpuesta

- **WHEN** el visitante abre `/`
- **THEN** la cabecera se apoya sobre la lámina sin fondo sólido ni línea inferior
- **AND** la navegación se desplaza con la portada en lugar de quedar fija
- **AND** ningún texto de la lámina queda oculto bajo la cabecera

#### Scenario: Resto del sitio

- **WHEN** el visitante abre cualquier página distinta de la portada
- **THEN** la cabecera conserva fondo marfil sólido, línea capilar y comportamiento sticky
- **AND** el contenido no se desplaza por debajo de ella
