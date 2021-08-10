import React from "react";
import { View, Text } from "react-native";

import Icon from "../components/Icon";

export default function Header() {
    return (
      <View style={{
        display: "flex",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundColor: "white",
        padding: 10,
        elevation: 2,
        shadowOpacity: 0.1
      }}>
        <Text style={{ fontWeight: "bold" }}>Pleasure</Text>
        <Icon />
      </View>
    )
  }