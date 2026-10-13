---
name: color
description: Usala siempre que crees o modifiques colores, estilos o pantallas de StickerSmash.
---

# Instrucciones de la Habilidad para React Native

Cuando el usuario invoque esta skill (o se active por contexto), Copilot debe actuar como un Diseñador UI experto en Mobile y React Native, aplicando estrictamente las siguientes reglas:

1. **Primitivas de React Native:** Generar código utilizando componentes estándar de 'react-native' (`View`, `Text`, `TouchableOpacity`, `StyleSheet`) o sintaxis compatible con NativeWind (si el proyecto tiene un `tailwind.config.js`).
2. **Buenas Prácticas Mobile:**
   - Asegurar que los componentes respeten las áreas seguras (`SafeAreaView`).
   - El tamaño de los elementos interactivos (botones/enlaces) debe tener un área táctil mínima de 44x44 dp para accesibilidad.
3. **Aplicación de la Paleta de Colores:**
   - **Estilo Minimalista:** Fondo claro u oscuro plano, textos con alto contraste (WCAG) y usar los colores de la paleta únicamente para acentos sutiles (ej. bordes de inputs, color del botón principal).
   - **Estilo Cyberpunk:** Usar un fondo oscuro profundo (ej. `#0b0c10`), textos llamativos y aplicar los colores de la paleta simulando luces de neón o bordes brillantes intensos.
4. **Formato de Salida:** Entregar el componente funcional completo, exportado por defecto, incluyendo sus estilos limpios y tipados si el proyecto usa TypeScript.

## Reglas Críticas de Inyección de Diseño (Refactorización)

Cuando modifiques archivos `.tsx` existentes:
1. **Aislamiento Lógico:** Queda estrictamente prohibido alterar, eliminar o reescribir hooks (`useState`, `useEffect`, `useMemo`), funciones controladoras (`handler functions`), desestructuraciones de props o tipados de TypeScript.
2. **Modularidad Estilística:** Los nuevos colores y estilos deben inyectarse exclusivamente creando o expandiendo el objeto `StyleSheet.create` al final del archivo, o mediante las props ya existentes `style={...}` en el JSX.
3. **No destructivo:** Si el componente ya cuenta con estilos previos, fusiónalos o reemplázalos estéticamente manteniendo la misma estructura de contenedores.

## Paleta de colores (fondo, texto y contraste)

* **PRIMARY**
  * `#80B5D3`
  * `#3C8DBC`
  * `#357CA5`

* **INFO**
  * `#5AD6F4`
  * `#00C0EF`
  * `#00A7D0`

* **SUCCESS**
  * `#5AC594`
  * `#00A65A`
  * `#008D4C`

* **WARNING**
  * `#F7BF65`
  * `#F39C12`
  * `#DB8B0B`

* **DANGER**
  * `#E98A7E`
  * `#F56954`
  * `#D33724`

* **GRAY**
  * `#E2E4E9`
  * `#D2D6DE`
  * `#B5BBC8`

---

* **NAVY**
  * `#5A6E82`
  * `#001F3F`
  * `#001A35`

* **TEAL**
  * `#7EDEDE`
  * `#39CCCC`
  * `#30BBBB`

* **PURPLE**
  * `#9895C6`
  * `#605CA8`
  * `#555299`

* **ORANGE**
  * `#FFB06B`
  * `#FF851B`
  * `#FF7701`

* **MAROON**
  * `#E66B98`
  * `#D81B60`
  * `#CA195A`

* **BLACK**
  * `#656565`
  * `#111111`
  * `#000000`

## Instrucciones para la creación de estilos

Toma en cuenta toda esta paleta de colores, y úsalos para colocar estilos minimalistas y modernos, modificando los estilos de botones, texto, imagenes, fondo, entre otras componentes. Los principales son:

- Fondo de toda la screen
- Encabezado y barra superior
- Boton primario
- Boton secundario
- (tabs)/_layout.tsx: tabBarActiveTintColor, fondo de la barra inferior.
- Separación de la imagen entre la barra superior e inferior: 2gap.
- Color de icon-button
- Color del borde de circle-button