import React from "react";
import { Text, View } from "react-native";

export default function EventTitle() {
    return (
        <View style={{ paddingBottom: 10 }}>
            <Text style={{ fontSize: 10, color: "cornflowerblue" }}>Selected</Text>
            <Text style={{ fontWeight: "bold" }}>People like me</Text>
            <Text style={{ fontSize: 8, color: "#777777" }}>Someone who wants me to be a mediocre</Text>
        </View>
    )
}