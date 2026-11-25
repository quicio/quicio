# Spec Delta

## MODIFIED Requirements

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
