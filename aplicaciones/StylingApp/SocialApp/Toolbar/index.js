import React from "react";
import { View } from "react-native";

import ToolbarIcon from "./ToolbarIcon";

export default function Toolbar() {
    return (
        <View
            style={{
                position: "absolute",
                display: "flex",
                justifyContent: "space-evenly",
                width: "100%",
                flexDirection: "row",
                bottom: 0,
                backgroundColor: "white",
                padding: 5,
                zIndex: 10
            }}
        >
            <ToolbarIcon />
            <ToolbarIcon />
            <ToolbarIcon />
            <ToolbarIcon />
            <ToolbarIcon />
        </View>
    );
}