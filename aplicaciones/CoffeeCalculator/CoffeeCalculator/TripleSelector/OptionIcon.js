import React from "react";
import { Text, View } from "react-native";

export default function OptionIcon({ selected, size }) {
    return (
        <View style={{
            padding: 6,
            // borderColor: "magenta",
            // borderWidth: 1
        }}>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    backgroundColor: selected ? "#B75F0F" : "white"
                }}
            >
                <Text
                    style={{
                        fontSize: 6 * ((size || 1) + 1),
                        color: selected ? "white" : "darkgray"
                    }}
                >
                    A
                </Text>
            </View>
        </View>
    )
}