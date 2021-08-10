import React from "react";
import { Text, View } from "react-native";

export default function Header() {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "white",
                paddingVertical: 4
            }}
        >
            <Text
                style={{
                    fontFamily: "Cochin",
                    fontWeight: "bold",
                    fontSize: 18,
                    paddingHorizontal: 12,
                    color: "#A35220"
                }}
            >
                {"<"}
            </Text>
            <View
                style={{
                    flexGrow: 1, // CRECEMOS ESTA CAJA LO MÁS POSIBLE
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center", // CENTRAMOS EL ELEMENTO TEXTO AL CENTRO
                    // backgroundColor: "blue"
                }}
            >
                <Text
                    style={{
                        fontFamily: "Cochin",
                        fontWeight: "bold",
                        color: "#A35220"
                    }}    
                >
                        Cofee Calculator
                </Text>
            </View>
        </View>
    );
}