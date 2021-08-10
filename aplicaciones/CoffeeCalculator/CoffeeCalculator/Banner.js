import React from "react";
import { View, Image } from "react-native";

export default function Banner() {
    return (
        <View>
            <Image
                source={{
                    uri: "https://placekitten.com/600",
                    width: 600,
                    height: 200
                }}
            />
        </View>
    );
}