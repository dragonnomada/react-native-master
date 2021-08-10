import React from "react";
import { Text, View } from "react-native";

export default function EventBadge() {
    return (
        <View
            style={{
                position: "absolute",
                left: 10,
                bottom: 10,
                borderRadius: 5,
                paddingHorizontal: 10,
                backgroundColor: "#C660A8"
            }}
        >
            <Text style={{ color: "white", fontSize: 10 }}>Oct 01 2021</Text>
        </View>
    );
}