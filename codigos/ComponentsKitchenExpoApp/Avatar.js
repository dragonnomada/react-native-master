import React from "react";
import { View, Image } from "react-native";

// Definimos el componente <Avatar />
// que devuelve la imagen de un gato.
export default function Avatar() {
    return (
        <View>
            <Image source={{
                uri: "https://via.placeholder.com/400x600/00FFFF/000000/?text=React%20Native",
                width: 400,
                height: 600
            }} />
        </View>
    )
}