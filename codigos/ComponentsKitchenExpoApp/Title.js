import React from "react";
import { Text } from "react-native";

// Una función `function foo(param1, param2, ...)` recibe los parámetros `param1`, `param2`, `...`
// Los componentes reciben como primer parámetro un objeto de propiedades
// es decir, `function MyComponent(props)`
// El parámetro `props` es un objeto que contiene las propiedades enviadas al usar el componente
// por ejemplo, <MyComponent a="Hola" b={123} />
// entonces, MyComponent recibirá el objeto { a: "Hola", b: 123 } como `props`.
// Por ejemplo,
// function MyComponent(props) {
//     return <Text>{props.a}</Text>;
// }
// Entonce para <MyComponent a="Hola" /> tendríamos una vista equivalente a <Text>Hola</Text>
// y si ponemos <MyComponent a="Mundo" /> tendríamos una vista equivalente a <Text>Mundo</Text>
// Es decir, que las propiedades enviadas en la contrucción del componente
// pueden ser recibidas mediante el primer parámetro de la función (generalmente llamado `props`)

// Ejemplo
// 
// function Foo(props) {
//     return <Text>{props.title}</Text>
// }
// 
// <Foo title="Hola mundo" /> equivalente a <Text>Hola mundo</Text>

// Cómo las propiedades son un objeto con claves, podemos deconstruir dicho objeto directamente sobre la función.
// La deconstrucción de objeto consiste en desarmar el objeto para que cada clave sea una variable.
// Ejemplo, { a: "Hola", b: 123 } -> const { a, b } = { a: "Hola", b: 123 }
// en esta deconstrucción, se crea la variable `const a = obj["a"]` y `const b = obj["b"]`.
// Esto es muy útil para volcar claves y valores de los objetos directamente en variables.
// 
// Por ejemplo, `const { title } = props`.
// Significa: Crea la variable `title` con la clave `title` del objeto `props`.
// Es decir, `const title = props.title` o `const title = props["title"]`.
// 
// Lo más útil es cuándo es cuándo recuperamos varias variables al mismo tiempo.
// const { title, color, border, backgroundColor } = props
// Equivale a:
// const title = props["title"]
// const color = props["color"]
// const border = props["border"]
// const backgroundColor = props["backgroundColor"]
// 
// Finalmente dicha deconstrucción la podemos hacer directamente sobre el componente.
// Ejemplo.
// 
// function MyComponent(props) {
//     console.log(props.title, props.color)
// }
// 
// function MyComponent(props) {
//     const title = props["title"];
//     const color = props["color"];
// 
//     console.log(title, color)
// }
// 
// function MyComponent(props) {
//     const { title, color } = props;
// 
//     console.log(title, color)
// }
// 
// function MyComponent({ title, color }) {
//     console.log(title, color)
// }

// <Title text="Hola mundo" />


/**
 * Componente Title, muestra un texto en formato de título
 * @param {string} text El texto que será mostrado como título 
 * @returns el texto pasado como la propiedad `text` en negritas
 */
export default function Title({ text, color, v2 }) {
    return (
        <Text style={{ fontWeight: "bold", fontSize: 28, color }}>{text}</Text>
    );
}