import React from "react";
import { View, Text } from "react-native";

function OptionIcon({ selected, size }) {
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

export default function TripleSelector() {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white"
            }}
        >
            <View
                style={{
                    paddingHorizontal: 12
                }}
            >
                <Text>Size</Text>
            </View>
            <View
                style={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "blue"
                }}
            >
                <OptionIcon size={1} />
                <OptionIcon size={2} selected />
                <OptionIcon size={3} />
            </View>
        </View>
    );
}