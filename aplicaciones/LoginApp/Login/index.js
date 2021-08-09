import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button, Text } from "react-native-elements";

import Icon from "react-native-vector-icons/FontAwesome";

import useLogin from "./useLogin";

export default function Login() {
    const { 
        lock, 
        email, 
        password, 
        isPasswordVisible, 
        updateEmail, 
        updatePassword, 
        togglePasswordVisible, 
        signIn 
      } = useLogin();

    return (
        <View style={{ padding: 16 }}>
            <Input
                disabled={lock}
                keyboardType="email-address"
                label={`Correo: ${email}`}
                value={email}
                placeholder="Correo"
                leftIcon={{ type: "font-awesome", brand: true, solid: false, name: "envelope" }}
                onChangeText={text => {
                    // Actualizar el valor del estado `[email]` y repinta el componente
                    // Eso implica que el label se vuelve a pintar con el nuevo valor para el componente.
                    updateEmail(text);
                }}
            />
            <Input
                disabled={lock}
                keyboardType={isPasswordVisible ? "visible-password" : "default"}
                label={`Contraseña: ${password}`}
                placeholder="Contraseña"
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={text => {
                    updatePassword(text)
                }}
                rightIcon={
                    <Icon
                        size={20}
                        name={isPasswordVisible ? "eye-slash" : "eye"}
                        onPress={() => togglePasswordVisible()}
                    />
                }
                onI
            />
            <Button
                loading={lock}
                disabled={lock}
                title="Iniciar Sesión"
                icon={<Icon style={{ paddingLeft: 10 }}
                    size={20}
                    name="lock" />}
                iconRight
                onPress={() => {
                    signIn();
                }}
            />
        </View>
    );
}