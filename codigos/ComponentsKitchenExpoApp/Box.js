import React from "react";
import { View } from "react-native";

// JSX permite estructuar componentes basados en otros componentes al estilo XML o HTML
// es decir, al estilo de etiquetas

// Una función `function Box() { ... }` es equivalente en uso a `<Box></Box>` o `<Box />`

// <Box /> - Es un componente sin hijos (`props.children` es `undefined`)
// <Box>...</Box> - Es un componente con hijos (`props.children` es `...`)

// Podemos con esto controlar los componentes anidados (los hijos) que se envían a un componente
// Es decir, podemos heredar jerarquías visuales.

// A los componentes que soportan `props.children` dentro de su funcionalidad o lógica
// se les conviene llamar `Componentes Layout` (Componentes con Soporte de Capas / Anidables).

// Cuándo queremos inyectar componentes dentro de otro eso se llama anidación.

// Hay dos tipos de anidación de componentes

// La primera se llama directa:
// 
// <Box>
//      <Title>...</Title>
//      <Avatar ... />
// </Box>
// Significa que el componente <Title> y <Avatar> están anidados como `props.children`

// La segunda se llama anidación indirecta o por variable
// 
// const result1 = <Title>...</Title>;
// const result2 = <Avatar ...>;
// 
// <Box>
//      { result1 }
//      { result2 }
// </Box>

// La segunda opción nos permitirá tener código dinámico, por ejemplo
// 
// let result = null;
// 
// if (lista.length === 0) {
//      result = <Text>No hay resultados<Text>
// } else {
//      result = <Text>Se encontraron {lista.length} resultados<Text>
// }
// 
// <Box>
//      { result }
// </Box>

/**
 * Crea una caja visual para bordear elementos
 * @param {*} color - Color del borde 
 * @param {*} children - Componentes anidados
 * @returns Regresa un <View> estilizado
 */
export default function Box({ children, color }) {
    return (
        <View style={{ padding: 20, borderColor: color || "gray", borderWidth: 2 }}>
            { children || null }
        </View>
    )
}