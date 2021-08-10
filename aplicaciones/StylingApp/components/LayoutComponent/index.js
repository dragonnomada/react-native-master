import React from "react";
import { View, Text } from "react-native";
import LayoutLeftComponent from "./LayoutLeftComponent";

export default function LayoutComponent() {
    return (
        <View>
            <LayoutLeftComponent />
            <LayoutRightComponent />
        </View>
    )
}