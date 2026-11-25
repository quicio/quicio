# visual-identity Specification

## Purpose

Define la identidad visual de Quicio como un sistema reutilizable de color, tipografía, marca, recursos gráficos y movimiento, capaz de albergar proyectos con personalidades distintas sin imponerles una identidad única.

## Requirements

### Requirement: Paleta institucional

El sistema SHALL exponer como tokens los colores marfil `#F0EDE5`, carbón `#242321`, gris piedra `#77746D`, ocre `#B77A35`, superficie oscura `#171817` y verde mineral `#78816D`. El marfil SHALL ser el fondo predominante; el ocre SHALL usarse como señal puntual, no como color de grandes superficies.

#### Scenario: Contraste de texto

- **WHEN** se compone texto pequeño sobre marfil o sobre superficie oscura
- **THEN** el color elegido alcanza contraste AA
- **AND** el gris piedra se reserva para metadatos grandes o elementos no esenciales

### Requirement: Sistema tipográfico

El sistema SHALL definir tres roles tipográficos: una serif editorial para titulares y firma, una sans contemporánea para lectura e interfaz y una monoespaciada para metadatos, índices, estados y numeración. Las fuentes SHALL servirse desde el propio sitio, sin depender de Google Fonts en tiempo de ejecución.

#### Scenario: Titular y metadatos

- **WHEN** se compone un título de sección con su índice
- **THEN** el título usa la serif y el índice usa la monoespaciada
- **AND** la sans se usa para el cuerpo de lectura y los controles

### Requirement: Logotipo e isotipo

La identidad SHALL incluir un logotipo tipográfico «Quicio», un descriptor «Estudio independiente» y un isotipo abstracto de eje y arcos. El isotipo SHALL funcionar a tamaño de favicon y en fondos claros y oscuros.

#### Scenario: Firma horizontal

- **WHEN** se usa la firma en la cabecera o en un documento
- **THEN** el isotipo, el wordmark y el descriptor se alinean en una lockup horizontal reproducible

#### Scenario: Favicon

- **WHEN** el sitio se carga en una pestaña del navegador
- **THEN** el favicon muestra el isotipo legible a 16 px y 32 px

### Requirement: Placas gráficas

El sistema SHALL incluir placas SVG generativas para representar proyectos y experimentos sin depender de fotografía de stock. Cuando una ficha aporte una imagen propia verificable, SHALL usar esa imagen y la placa SHALL quedar como respaldo. Las imágenes SHALL proceder del archivo del estudio, con su origen documentado; no se admite fotografía de stock.

#### Scenario: Placa de proyecto

- **WHEN** una ficha de proyecto necesita una imagen
- **THEN** se renderiza una placa SVG con una variante declarada en el contenido
- **AND** la placa conserva su legibilidad en fondo claro y oscuro

#### Scenario: Imagen propia

- **WHEN** la ficha declara una imagen propia
- **THEN** se muestra la imagen en el marco de la placa, con el número y el estado
- **AND** la placa generativa no se dibuja

#### Scenario: Procedencia del arte

- **WHEN** se revisa el arte de una ficha
- **THEN** su origen está documentado en el repositorio
- **AND** no es una imagen de stock

### Requirement: Movimiento discreto

El sitio SHALL limitar el movimiento a transiciones de enlace, revelados suaves y una animación orbital lenta. Toda animación SHALL desactivarse o reducirse con `prefers-reduced-motion: reduce`.

#### Scenario: Preferencia de movimiento reducido

- **WHEN** el sistema operativo declara movimiento reducido
- **THEN** no hay animaciones orbitales, desplazamientos ni revelados
- **AND** todo el contenido sigue visible y navegable

### Requirement: Descriptor en monoespaciada

El descriptor institucional «Estudio independiente» SHALL componerse en JetBrains Mono, en mayúsculas y con tracking amplio, tanto en la cabecera como en el hero.

#### Scenario: Descriptor del hero

- **WHEN** se lee el descriptor debajo del wordmark
- **THEN** está en JetBrains Mono, mayúsculas y tracking amplio
- **AND** no usa la serif del wordmark

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
