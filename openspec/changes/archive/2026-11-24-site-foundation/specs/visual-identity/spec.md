# Spec Delta

## Purpose

Define la identidad visual de Quicio como un sistema reutilizable de color, tipografía, marca, recursos gráficos y movimiento, capaz de albergar proyectos con personalidades distintas sin imponerles una identidad única.

## ADDED Requirements

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

El sistema SHALL incluir placas SVG generativas para representar proyectos y experimentos sin depender de fotografía de stock. Las placas SHALL compartir retícula, línea capilar y paleta, y SHALL poder variar en semilla y composición.

#### Scenario: Placa de proyecto

- **WHEN** una ficha de proyecto necesita una imagen
- **THEN** se renderiza una placa SVG con una variante declarada en el contenido
- **AND** la placa conserva su legibilidad en fondo claro y oscuro

### Requirement: Movimiento discreto

El sitio SHALL limitar el movimiento a transiciones de enlace, revelados suaves y una animación orbital lenta. Toda animación SHALL desactivarse o reducirse con `prefers-reduced-motion: reduce`.

#### Scenario: Preferencia de movimiento reducido

- **WHEN** el sistema operativo declara movimiento reducido
- **THEN** no hay animaciones orbitales, desplazamientos ni revelados
- **AND** todo el contenido sigue visible y navegable
