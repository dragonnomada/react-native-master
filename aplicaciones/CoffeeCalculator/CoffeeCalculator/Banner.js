import React from "react";
import { View, Image } from "react-native";

export default function Banner() {
    return (
        <View style={{
            paddingBottom: 24,
            backgroundColor: "white"
        }}>
            <Image
                source={{
                    uri: "https://images.unsplash.com/photo-1512568400610-62da28bc8a13?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
                    width: 600,
                    height: 200
                }}
            />
        </View>
    );
}