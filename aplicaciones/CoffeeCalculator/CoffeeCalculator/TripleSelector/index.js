import React from "react";
import { View, Text } from "react-native";

import OptionIcon from "./OptionIcon";

export default function TripleSelector() {
    return (
        <View
            style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "white",
                borderBottomWidth: 1,
                borderBottomColor: "gainsboro"
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