import React, { useState } from "react";

import { View, Text, Button, NativeModules, TextInput } from "react-native";

const { CalendarModule } = NativeModules;

// DEBUG: adb -d logcat -s CalendarModule:V

export default function App() {
  const [mensaje, setMensaje] = useState("");
  const [resultado, setResultado] = useState("");

  return (
    <View>
      <Button
        title="Crear Evento"
        onPress={() => {
          CalendarModule.createCalendarEvent("Mojo", Math.random().toString(32).slice(2));
        }}
      />
      <View>
        <Text>Resultado: {resultado}</Text>
      </View>
      <TextInput
        value={mensaje}
        onChangeText={setMensaje}
      />
      <Button 
        title="Invertir"
        onPress={() => {
          CalendarModule.saludarAlReves(mensaje, resultado => {
            setResultado(resultado)
          })
        }}
      />
    </View>
  );
}