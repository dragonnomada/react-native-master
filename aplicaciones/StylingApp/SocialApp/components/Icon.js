import React from "react";
import { View } from "react-native";

export default function Icon({ size, style }) {
    return (
      <View style={{
        width: size || 18,
        height: size || 18,
        borderRadius: 15,
        backgroundColor: "#8D5BEF",
        ...style
      }}></View>
    );
  }