import React from "react";
import { View, Text } from "react-native";

export default function CoffeeButton({ disabled }) {
    if (disabled) {
        return (
            <View
                style={{
                    paddingHorizontal: 24,
                    paddingVertical: 64,
                    backgroundColor: "white"
                }}
            >
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                        paddingVertical: 6,
                        borderRadius: 24,
                        backgroundColor: "gray"
                    }}
                >
                    <Text style={{ color: "white" }}>Solicitar Café</Text>
                </View>
            </View>
        );
    }

    return (
        <View
            style={{
                paddingHorizontal: 24,
                paddingVertical: 64,
                backgroundColor: "white"
            }}
        >
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    paddingVertical: 6,
                    borderRadius: 24,
                    backgroundColor: "#B66006"
                }}
            >
                <Text style={{ color: "white" }}>Solicitar Café</Text>
            </View>
        </View>
    );
}