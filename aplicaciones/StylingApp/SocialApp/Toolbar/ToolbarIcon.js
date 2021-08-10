import React from "react";
import { Text, View } from "react-native";

import Icon from "../components/Icon";

export default function ToolbarIcon() {
    return (
        <View>
            <Icon size={30} />
            <Text>News</Text>
        </View>
    );
}