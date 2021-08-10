import React from "react";
import { View, Text } from "react-native";

export default function Total({ total }) {
    return (
        <View 
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 12,
                backgroundColor: "white"
            }}
        >
            <Text style={{ fontSize: 18 }}>Total:</Text>
            <Text style={{ fontSize: 18 }}>{`$ ${(total || 0).toFixed(2)}`}</Text>
        </View>
    );
}