import { useState } from "react";

export default function useLogin() {
    // TODO: La lógica necesaria para un Login
    // Estados, contextos, reductores, ...

    // Crear el estado `email` con su ajustador `setEmail`
    // El ajustador es una función ya predefinida que podemos mandar a llamar
    // pasando como único parámetro el nuevo valor que tendrá
    // la variable/estado `email`.
    // Eso provoca que el componente se repinte y el valor de `email` cambie.
    // Los ajustadores son llamados generalmente en código reactivo
    // por ejemplo, cuándo el usuario pulsa pulsa un botón,
    // cuándo una caja de texto cambia, cuándo el usuario seleciona una opción, etc.
    // Los estados retienen valores (como el `email`) que están interactuándo
    // con el usuario. Esto significa que nuestros componentes
    // pueden retener estados y mientras estos no cambien, la vista seguirá igual,
    // pero si algún estado cambia, el componente se volverá a pintar.
    // Por ejemplo, cuándo el `email` cambia por el usuario
    // mandamos también a visualizarlo como `label` y eso
    // produce que veamos como cambia nuestro estado en función
    // a la interacción del usuario.
    const [email, setEmail] = useState("ejemplo@gmail.com");

    const [password, setPassword] = useState("ejemplo123");

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const [lock, setLock] = useState(false);

    // TODO: Regresa una "interfaz de programación"
    // i.e Regresa los valores y funciones necesarios para interactuar con la lógica interna
    return {
        email,
        password,
        isPasswordVisible,
        lock,
        updateEmail(newEmail) {
            // TODO: Verificar que el newEmail sea válido
            setEmail(newEmail);
        },
        updatePassword(newPassword) {
            // TODO: Validar que el password sea correcto
            setPassword(newPassword);
        },
        togglePasswordVisible() {
            setIsPasswordVisible(!isPasswordVisible);
        },
        signIn() {
            setLock(true);
            // TODO: Inicia sesión
            new Promise(resolve => setTimeout(resolve, 5000)).then(() => {
                setLock(false);
            });
        }
    }
}