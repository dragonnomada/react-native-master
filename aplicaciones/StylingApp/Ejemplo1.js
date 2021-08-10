import React, { useEffect, useState } from "react";
import { View, Text, TextInput } from "react-native";

// import Slider from ""

// Existen 2 tipos de componentes

// 1. Componente Unitario (Pizas Unitarias / Controles)
// Ejemplo:
// <Button text="Pulsame" />
// <Text>Hola</Text>
// <Image source={{ uri: "...", width: ... }}>
// <Avatar />
// <Profile />
// <AudioPlayer />
// <VideoPlayer />
// <Login />

// 2. Componente en Capas (Layout / Jerarquía Visual) 
// Ejemplo:
// <View>...</View>
// <Stack mode="horizontal/vertical">...</Stack>
// <Table>...</Table>
// <List>...</List>
// <StatusBar>...</StatusBar>
// <LoginContext>...</LoginContext>

function Clock() {
  return (
    <Text 
      style={{
        backgroundColor: "hsl(60, 100%, 50%)",
        color: "white",
        fontSize: 48,
        textAlign: "center",
        fontFamily: "verdana"
      }}
    >
      15:32:28
    </Text>
  )
}

function Box({ width }) {
  return (
    <View style={{
      position: "absolute",
      width: width === undefined ? "100%" : width, // Switch condicional (result = <cond> ? <expr true> : <expr false>)
      height: "100%",
      backgroundColor: "red"
    }}>
      {/* ... */}
    </View>
  )
}

export default function App() {
  const [width, setWith] = useState(0);

  useEffect(() => {
    if (width >= 300) {
      return;
    }

    const id = setTimeout(() => {
      setWith(width + 1);
    }, 0);

    return () => {
      clearTimeout(id);
    }
  }, [width]);

  return (
    <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
      <Box width={width} />
      <TextInput
        keyboardType="number-pad"
        placeholder="Hola"
        value={`${width}`}
        onChangeText={text => {
          setWith(Number(text))
        }}
      />
    </View>
  );
}