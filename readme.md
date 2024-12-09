# Calculadora de Conformidad Real Decreto 1367/2007

## Descripción Técnica

Esta aplicación web implementa una algoritmo para evaluar la conformidad acústica según el Real Decreto 1367/2007. Permite realizar cálculos tanto para escenarios exteriores como interiores, considerando diversos factores acústicos. 

## Características Principales

- **Escenarios Duales**: Soporta cálculos para entornos exteriores e interiores.
- **Componentes Acústicas**: Determina y calcula componentes frecuenciales, impulsivas y tonales.
- **Ajuste Dinámico**: Adapta los límites según el tipo de medida (puntual o de período de referencia).
- **Interfaz Responsiva**: Diseño adaptable a diferentes dispositivos.

## Notas Técnicas

- La aplicación asume una componente tonal fija de 6 dB para escenarios interiores, ya que esta herramienta está diseñada para evaluar la conformidad de los escenarios de este proyecto (PIA).
- El cálculo del nivel corregido final incluye un redondeo al entero más cercano.
- La conformidad se determina comparando el nivel corregido con el límite ajustado según el tipo de medida.
- El usuario ha de introducir el valor límite de ruido acorde con el Real Decreto 1367/2007, según el tipo de recinto en el que se encuentra y la procedencia de la fuente.
- Se utilizará la Tabla A1 del anexo 3 de la normativa aplicable a nuevas infraestructuras viarias, ferroviarias y aeroportuarias.
- Se utilizará la Tabla B2 del anexo 3 de la normativa para valores límite de ruido transmitido a locales colindantes por actividades.

## Funciones Clave

### `Cambio de escenario`
Alterna dinámicamente entre los formularios de entrada para escenarios exteriores e interiores.

### `Cálculo de la componente frecuencial`
Determina la penalización por componente frecuencial basada en la diferencia entre niveles corregidos en ponderaciones A y C.

### `Cálculo de la componente impulsiva`
Calcula la penalización por componente impulsiva comparando el nivel impulsivo con el nivel de inmisión sonora.

### `Cálculo principal`
Función principal que:
1. Recopila datos de entrada.
2. Calcula niveles corregidos y componentes acústicas.
3. Determina la conformidad con los límites establecidos.
4. Muestra resultados detallados.

### `Cálculo del nivel corregido`
Aplica la corrección logarítmica para el nivel de ruido de fondo.

## Aspectos Técnicos Relevantes

- **Truncamiento Preciso**: Utiliza `Math.trunc()` para el redondeo del nivel corregido final.
- **Limitación de Penalizaciones**: Implementa un límite máximo de 9 dB para la suma de componentes frecuenciales, tonales e impulsivas.
- **Manejo de Errores**: Verifica la validez de los datos de entrada antes de los cálculos.
- **Interfaz Modal**: Emplea un modal para mostrar el resultado final de conformidad.

## Consideraciones de Diseño

- **Separación de Responsabilidades**: HTML para estructura, CSS para estilos, y JavaScript para lógica.
- **Accesibilidad**: Etiquetas semánticas y controles de formulario.
- **Flexibilidad**: Diseño adaptable con media queries para dispositivos móviles.

## Posibles Mejoras Futuras

- Implementación de persistencia de datos (localStorage o backend).
- Adición de gráficos para visualización de resultados.
- Expansión para incluir más escenarios o normativas acústicas.


