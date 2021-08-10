import React, { useEffect, useState, useRef } from "react";
import { Animated, Easing, View, Text, TextInput } from "react-native";

// Mockup Component - Componente Falso / Ficticio / Cascarón
function Icon({ size }) {
  return (
    <View style={{ 
      width: size || 18, 
      height: size || 18,
      borderRadius: 15,
      backgroundColor: "#8D5BEF"
    }}></View>
  );
}

// Programador Diseñador
function HeaderApp() {
  return (
    <View style={{
      display: "flex",
      height: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "flex-end",
      backgroundColor: "white",
      padding: 10
    }}>
      <Text style={{ fontWeight: "bold" }}>Pleasure</Text>
      <Icon />
    </View>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
      <HeaderApp />
    </View>
  );
}