// Importación: import <parte> from "<ruta al módulo>";

// Librería React - Nos permite usar el JSX y algunos Hooks

import React from "react";

// Librería React Native - Nos da un conjunto de componentes estándare a Android y IOS.

// View - Componente de Vista, agrupa otros componentes (como <div> en HTML).
// Text - Componente de Texto, muestra un texto con posibilidad de estilización (como <span> en HTML).

import { View, Text } from "react-native";

// Importar el componente <Avatar /> exportado en el archivo `Avatar.js`

import Avatar from "./Avatar";

// Importar el componente <Title /> exportado en el archivo `Title.js`

import Title from "./Title";

// Importar el componente <Box>...</Box> exportado en el archivo `Box.js`

import Box from "./Box";

// Definimos nuestro componente. 

// Características de un componente:
// * Un componente es una función que devuelve una vista.
// * Puede recibir propiedades de construcción.
// * Puede usar lógica anclada mediante funciones especiales llamadas `Hooks`.

// Al hacer una función `export default`
// podemos importarla desde otro archivo mediante `import NOMBRE from "./RUTA"`
// Ejemplo, Expo hará `import App from "./App.js"`

export default function App() {
  return (
    <View>
      <Title text="My Super App" color="red" />
      <Box color="hotpink">
        <Title text="My Super App" color="red" />
      </Box>
      <Avatar />
    </View>
  )
}

// Cada archivo JS en un proyecto se conoce cómo un módulo en sí mismo.
// Por lo que cualquier archivo .js puede ser tratado como módulo.
// Esto significa que podemos import o exportar piezas de código dentro de los archivos.
// Si queremos exportar una pieza podemos usar `export <código>`
// Si queremos importar una pieza podemos usar `import { <pieza> } from "<ruta al archivo>"`
// Los módulos generalmente usan una exportanción por defecto para indicar qué es lo que se
// exportará en módulo para lo que fue diseñado. Es decir, si estamos diseñando un componente
// lo más natural será exportar por defecto el componente principal.
// Por ejemplo, `export default function App() { ... }` en el archivo `App.js`
// O por ejemplo, `export default function Avatar() { ... }` en el archivo `Avatar.js`
// Así en React podemos entender cada archivo .js como un componente,
// es decir, la exportación del componente principal.