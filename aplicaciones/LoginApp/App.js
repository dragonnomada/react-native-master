import React, { useState } from "react";
import { View } from "react-native";
import { Button, Text } from "react-native-elements";

import Login from "./Login";

// Existen 3 tipos de propiedades

// La primera son propiedades de texto (string)
// Ejemplo: <Foo text="Hola mundo" />

// La segunda son propiedades con valor personalizado (any)
// Ejemplo: <Bar count={10} /> (Number: 10)
// Ejemplo: <Zip onClick={() => {...}} /> (Function: () => {...})

// La tercera son propiedades con valor booleano activo (true)
// Ejemplo: <Zoo isVisible /> [isVisible={true}]
// Ejemplo: <Par disabled /> [disabled={true}]

// Cuándo inyectamos valores personalizados es común inyectar objetos
// Ejemplo: <Foo style={ { fontSize: 10, color: "red" } } (Object: { fontSize: 10, color: "red" })

// Los estados son variables especiales que se mantienen fijas a lo largo de la vida
// de un componente. Sirven para poder cambiar los valores del componente
// de una forma determinística, es decir, de una forma controlada.
// Cada estado se compone de una pareja `valor-ajustador`
// Donde el `valor` es lo retenido en el estado
// Y el ajustador es una función que nos permite cambiar el valor del estado
// Y volver a pintar el componente avisando que ya tiene un valor ajustado
// es decir, que el componente cambió su estado.

// El hook `useState(defaultValue)` nos permitirá crear estados
// dentro de nuestro componente.
// import React, { useState } from "react";
// const [value, setValue] = useState(defaultValue);

// Podemos construir un texto a partir de la inyección de variables
// sobre la cadena de texto usando las comillas especiales (comillas invertidas)
// La sintaxis es `Texto ... ${<expresión>} ... ${<expresión>} ...`
// Ejemplo: `Correo: (${email})`
// Ejemplo: `1 + 1 = ${1 + 1}`
// Ejemplo: `Nombre: ${persona.nombre} Edad: ${persona.edad}`
// Ejemplo: `Hola ${username}, bienvenido`

// Los textos con formato pueden ser inyectos en las propiedades
// como valores personalizados.
// Ejemplo: <Title text={`Bienvenido ${name}`}

// Un `Hook` es una función especial que nos permite
// definir operaciones lógicas basadas en otros hooks.
// Esto significa que un hook opera bajo otros hooks.

// En su diseño principal el Hook tiene la reponsabilidad
// de abstraer una lógica compleja y reducirla al programador
// que consuma dicho hook.

// Generalmente vamos a abstraer lógica de negocio, lógica de usuario
// y demás lógicas que no interactúen de forma forma directa con
// las interfaces, sino más bien de forma pasiva/indirecta.

// Ejemplo, si pensamos en un componente que requiere mostra la hora
// actual del usuario, entonces podemos crear un hook
// que nos devuelva dicha hora, luego en cualquier componente
// sin importar como mostremos la hora, el hook podría ser enganchado
// Es decir,
// 
// function useClock() {
//   return new Date();
// }
// 
// function Foo() {
//   const clock = useClock();
// 
//   return <Text>{clock}</Text>
// }
// 
// function Bar() {
//   const clock = useClock();
// 
//   return <Title>{clock}</Title>
// }

// Generalmente los hooks abstraen interfaces complejas
// de programación para exponerlas de forma sencilla

function useCounter() {
  const [count, setCount] = useState(0);

  return {
    count,
    increment() {
      setCount(count + 1);
    },
    decrement() {
      setCount(count - 1);
    }
  }
}

function Counter() {
  const { count, increment, decrement } = useCounter();

  return (
    <View style={{ padding: 16 }}>
      <Text>Contador: {count}</Text>
      <Button title="Incrementar" onPress={() => increment()} />
      <Button title="Decrementar" onPress={() => decrement()} />
    </View>
  )
}

export default function App() {
  

  return (
    <View>
      <Counter />
      <Login />
    </View>
  )
}