---
name: epn-modal-styles
description: Aplica mejoras visuales a los estilos de modales y textos de las pantallas informativas de la EPN usando una paleta de colores definida, sin modificar componentes, contenido ni lógica.
---

# SKILL: Estilos visuales para las pantallas informativas de la EPN

## 1. Objetivo

Mejorar la apariencia visual de las pantallas informativas relacionadas con la Escuela Politécnica Nacional (EPN), aplicando estilos modernos, profesionales, consistentes y accesibles.

La modificación debe centrarse exclusivamente en los estilos de los modales y los textos existentes, utilizando la paleta de colores proporcionada.

El resultado debe transmitir una identidad institucional, académica, limpia y profesional, con una jerarquía visual clara y una buena experiencia de usuario.

## 2. Archivos permitidos

Únicamente está permitido modificar los siguientes archivos:

- `about.tsx`
- `acerca-de-este.tsx`
- `axerca-de-EPN.tsx`

### Restricciones obligatorias

1. No modificar ningún archivo fuera de la lista autorizada.
2. No crear archivos nuevos.
3. No modificar, eliminar, reemplazar ni reorganizar componentes existentes.
4. No modificar el contenido textual de ningún elemento.
5. No corregir ortografía, cambiar títulos, reformular párrafos ni modificar etiquetas.
6. No alterar funciones, eventos, estados, propiedades, hooks, rutas, imports funcionales ni lógica de negocio.
7. No modificar la estructura JSX ni la jerarquía de los elementos.
8. No agregar dependencias, bibliotecas o paquetes.
9. No cambiar el comportamiento, la apertura, el cierre ni las interacciones de los modales.
10. No modificar configuraciones globales, hojas de estilo compartidas ni componentes reutilizables externos.

**La única modificación autorizada es la relacionada con los estilos visuales de los modales y de los textos existentes en los tres archivos indicados.**

Si una mejora requiere modificar un componente, su estructura, su lógica o un archivo no autorizado, no la implementes.

## 3. Paleta de colores institucional

Utiliza exclusivamente los siguientes colores de la paleta proporcionada para las nuevas decisiones cromáticas. Puedes combinar los tonos según su función visual.

### PRIMARY — Azul principal

- `#80B5D3`: fondos suaves y superficies secundarias.
- `#3C8DBC`: acentos, enlaces, elementos destacados y detalles visuales.
- `#357CA5`: títulos, énfasis y elementos de mayor contraste.

### INFO — Celeste informativo

- `#5AD6F4`: acentos claros.
- `#00C0EF`: detalles informativos.
- `#00A7D0`: énfasis informativo.

### SUCCESS — Verde

- `#5AC594`: fondos suaves de apoyo.
- `#00A65A`: énfasis y detalles positivos.
- `#008D4C`: texto o elementos que requieran mayor contraste.

### WARNING — Amarillo y naranja

- `#F7BF65`: fondos cálidos suaves.
- `#F39C12`: acentos de advertencia.
- `#DB8B0B`: detalles de énfasis.

### DANGER — Rojo

- `#E98A7E`: fondos suaves.
- `#F56954`: acentos.
- `#D33724`: énfasis y detalles destacados.

### GRAY — Grises neutros

- `#E2E4E9`: fondos secundarios.
- `#D2D6DE`: bordes y separadores.
- `#B5BBC8`: detalles neutros.

### NAVY — Azul oscuro

- `#5A6E82`: elementos secundarios.
- `#001F3F`: títulos, fondos oscuros y texto de alto contraste.
- `#001A35`: superficies oscuras y acentos profundos.

### TEAL — Turquesa

- `#7EDEDE`: fondos suaves.
- `#39CCCC`: acentos.
- `#30BBBB`: detalles destacados.

### PURPLE — Morado

- `#9895C6`: fondos suaves.
- `#605CA8`: acentos.
- `#555299`: énfasis visual.

### ORANGE — Naranja

- `#FFB06B`: fondos suaves.
- `#FF851B`: acentos.
- `#FF7701`: detalles destacados.

### MAROON — Granate

- `#E66B98`: fondos suaves.
- `#D81B60`: acentos y elementos destacados.
- `#CA195A`: énfasis visual.

### BLACK — Negro y gris oscuro

- `#656565`: texto secundario.
- `#111111`: texto principal sobre fondos claros.
- `#000000`: elementos que requieran negro puro.

## 4. Criterios de diseño para la EPN

El diseño debe mantener una apariencia académica e institucional.

Prioriza:

- Una combinación equilibrada de azul, azul oscuro, blanco o superficies claras.
- El azul `#3C8DBC` como color principal de acento.
- El azul oscuro `#001F3F` para títulos y elementos que requieran mayor jerarquía.
- El color `#111111` para el texto principal sobre fondos claros.
- Los grises para separar visualmente secciones sin sobrecargar la interfaz.
- Los colores adicionales para destacar información cuando exista una razón visual justificada.

No es necesario utilizar todos los colores. Selecciona los que mejor se adapten al contexto de cada pantalla y conserva una identidad cromática consistente entre los tres archivos.

Evita combinaciones excesivamente saturadas, fondos con demasiados colores, degradados innecesarios, sombras exageradas y decoraciones que resten formalidad.

## 5. Estilos permitidos para los modales

Puedes ajustar únicamente las propiedades visuales de los modales existentes, siempre que puedan modificarse sin alterar su estructura o comportamiento.

Entre las propiedades permitidas se encuentran:

- Color de fondo.
- Color de texto.
- Bordes y color de bordes.
- Radio de los bordes.
- Sombras.
- Tipografía y peso de fuente.
- Tamaño de texto.
- Altura de línea.
- Espaciado visual, como `padding`, `margin` y `gap`, cuando pueda modificarse sin cambiar la estructura.
- Alineación del texto.
- Ancho y altura visual, si no se altera el comportamiento existente.
- Estilos de títulos, subtítulos y párrafos.
- Estilos de enlaces y elementos textuales interactivos ya existentes.
- Estados visuales de los elementos existentes, siempre que no se modifique su lógica.

### Recomendaciones

1. Utiliza fondos claros para facilitar la lectura del contenido.
2. Emplea títulos en azul oscuro y una jerarquía tipográfica clara.
3. Usa bordes sutiles en gris o azul.
4. Aplica sombras moderadas para distinguir los modales del fondo.
5. Mantén un espaciado uniforme entre el título y el contenido.
6. Evita reducir el espacio de lectura de los párrafos.
7. Conserva la responsividad existente.
8. No agregues nuevos elementos decorativos al JSX.

## 6. Estilos permitidos para los textos

Puedes mejorar la presentación de los textos que ya existen mediante propiedades CSS o mecanismos de estilo que el proyecto ya utilice.

Prioriza los siguientes criterios:

- Títulos: azul oscuro `#001F3F` o azul `#357CA5`.
- Párrafos: negro `#111111` sobre fondos claros.
- Texto secundario: gris oscuro `#656565`.
- Enlaces existentes: azul `#3C8DBC`, conservando sus estados funcionales.
- Subtítulos: una combinación de tamaño, peso y color que facilite la lectura.
- Listas existentes: espaciado y legibilidad, sin cambiar sus elementos.
- Texto destacado existente: acentos de la paleta cuando ayuden a identificar información importante.

Mantén tamaños tipográficos legibles, interlineado cómodo y una jerarquía coherente entre títulos, subtítulos y párrafos.

No cambies el significado ni la distribución semántica del contenido.

## 7. Accesibilidad y contraste

Los colores deben elegirse considerando la legibilidad.

- Comprueba el contraste entre el texto y el fondo.
- Como referencia, procura una relación de contraste WCAG de al menos 4.5:1 para texto normal y 3:1 para texto grande.
- No utilices automáticamente un tono claro como color de texto sobre un fondo blanco.
- Si un color de acento no ofrece contraste suficiente para texto pequeño, utilízalo en bordes, fondos suaves o detalles decorativos.
- No comuniques información únicamente mediante el color.
- Conserva los indicadores de foco y los estados interactivos existentes.
- No elimines estilos que faciliten la navegación mediante teclado.

La pertenencia a la paleta no garantiza por sí sola que una combinación sea accesible. Evalúa el contraste de cada combinación utilizada.

## 8. Procedimiento de trabajo

Antes de modificar cualquier archivo:

1. Inspecciona los tres archivos permitidos.
2. Identifica los modales existentes y los elementos de texto.
3. Determina cómo se aplican actualmente los estilos: clases CSS, estilos en línea, módulos, utilidades u otro mecanismo existente.
4. Identifica los estilos que pueden ajustarse sin modificar componentes ni lógica.
5. Selecciona una combinación cromática consistente con la identidad institucional de la EPN.

Durante la implementación:

1. Modifica exclusivamente propiedades visuales.
2. Reutiliza las clases, los mecanismos de estilos y las convenciones que ya existan.
3. Evita introducir dependencias.
4. No realices refactorizaciones ni limpiezas de código ajenas a la tarea.
5. Mantén intactos todos los textos y componentes.

Después de la implementación:

1. Verifica que únicamente hayan cambiado los tres archivos autorizados.
2. Revisa el diff para detectar cambios accidentales en textos, estructura o lógica.
3. Comprueba que los estilos sean coherentes entre las tres pantallas.
4. Si el proyecto dispone de herramientas de validación, ejecuta las comprobaciones pertinentes sin modificar otros archivos.
5. Si una mejora no puede realizarse respetando las restricciones, déjala sin implementar e informa de la limitación.

## 9. Criterios de aceptación

La tarea se considera completada únicamente si:

- [ ] Solo se modificaron `about.tsx`, `acerca-de-este.tsx` y `axerca-de-EPN.tsx`.
- [ ] Los componentes y la estructura JSX permanecen intactos.
- [ ] Ningún texto fue agregado, eliminado o editado.
- [ ] No se alteró la lógica ni el comportamiento de los modales.
- [ ] Se mejoraron exclusivamente los estilos de los modales y los textos existentes.
- [ ] Se utilizó la paleta proporcionada de manera coherente.
- [ ] Se mantuvieron la legibilidad, el contraste y la responsividad.
- [ ] No se agregaron dependencias ni archivos.
- [ ] El diff final contiene únicamente cambios visuales autorizados.

## 10. Instrucción final para la IA

Analiza el código existente y aplica una mejora visual profesional, sobria y consistente con la identidad académica de la Escuela Politécnica Nacional.

Respeta todas las restricciones de este documento. No modifiques componentes, textos, estructura JSX, lógica funcional ni archivos diferentes de los tres autorizados.

Si no puedes cumplir una mejora sin infringir estas restricciones, no la realices.

Al finalizar, informa brevemente qué estilos cambiaste en cada archivo y confirma qué verificaciones pudiste realizar. No afirmes que las pruebas fueron exitosas si no las ejecutaste.
