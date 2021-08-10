import React, { useEffect, useState, useRef } from "react";
import { Animated, Easing, View, Text, TextInput } from "react-native";

// Los Flexbox son cajas flexibles (un diseño flexible)

// Con 4 posibles direcciones en sus elementos contenidos
// row - Se muestran los elementos contenidos en una fila
// column - Se muestran los elementos contenidos en una columna
// row-reverse - Se muestran los elementos contenidos en una fila inversa
// column-reverse - Se muestran los elementos contenidos en una columna inversa

// Podemos justificar los elementos sobre el eje principal
// En dirección row/row-reverse el eje principal es horizontal
// En dirección column/column-reverse el eje principal es vertical
// center - Justifica los elementos al centro (máximo espacio a los lados)
// flex-start - Justifica al inicio (máximo espacio al lado final)
// flex-end - Justifica al final (máxiomo espacio al lado inicial)
// space-between - Justifica los elementos entre ellos 
//  > máximo espacio entre ellos sin espacio lateral
// space-around - Justifica los elementos entre ellos
//  > máximo espacio entre ellos y espacio lateral 50% del espacio entre ellos
// space-evenly - Justifica los elementos entre ellos
//  > máximo espacio entre ellos y el espacio lateral al 100% del espacio entre ellos

// Podemos alinear los elementos sobre el eje secundario o transversal
// En dirección row/row-reverse el eje principal es vertical
// En dirección column/column-reverse el eje principal es horizontal
// center - Se alinean al centro (máximo espacio lateral)
// flex-start - Se alinean al lado inicial (máximo espacio al lado final)
// flex-end - Se alinean al lado final (máximo espacio al lado inicial)
// baseline - Se alinean hacía una línea base calculada
// stretch - Se estiran hacía los lados (mínimo espacio hacia los lados)

// Programador Diseñador
function HeaderApp() {
  return (
    <View style={{
      display: "flex",
      flexDirection: "row",
      height: "50%",
      // Eje principal (row - horizontal / column - vertical)
      justifyContent: "space-evenly",
      // Eje secundario/transversal (row - vertical / column - horizontal) 
      alignItems: "stretch",
      backgroundColor: "skyblue"
    }}>
      <View style={{ display: "flex", height: 100, backgroundColor: "red" }}></View>
      <Text>A</Text>
      <Text style={{ fontSize: 60 }}>B</Text>
      <Text>C</Text>
      <Text style={{ fontSize: 40 }}>D</Text>
    </View>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
      <HeaderApp />
    </View>
  );
}