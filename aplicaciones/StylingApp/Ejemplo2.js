import React, { useEffect, useState, useRef } from "react";
import { Animated, Easing, View, Text, TextInput } from "react-native";

function Box() {
  // `fadeAnim` es un valor a la referencia de una animación con valor inicial 0
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const widthAnim = useRef(new Animated.Value(0)).current;

  // Cada que cambia fadeAnim
  // useEffect(() => {
  //   // Actualizamos el valor de la animación meditante el tiempo actual (timing)
  //   Animated.timing(fadeAnim, {
  //     toValue: 1, // El valor que deseamos alcanzar
  //     duration: 5000 // La duración en el tiempo
  //   }).start(); // Inicia la animación
  // }, [fadeAnim]);

  useEffect(() => {
    Animated.timing(widthAnim, {
      toValue: 300,
      duration: 10000,
      easing: Easing.inOut(Easing.bounce)
    }).start();
  }, [widthAnim]);

  return (
    <Animated.View style={{
      position: "absolute",
      width: widthAnim,
      height: "100%",
      backgroundColor: "red",
      // opacity: fadeAnim // Usamos el valor de fadeAnim según el tiempo transcurrido
    }}>
      {/* ... */}
    </Animated.View>
  )
}

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
      <Box />
    </View>
  );
}