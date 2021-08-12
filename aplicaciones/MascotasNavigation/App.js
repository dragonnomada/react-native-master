import "react-native-gesture-handler";

import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import MascotasApp from "./MascotasApp";

export default function App() {
    return (
        <NavigationContainer>
            <MascotasApp />
        </NavigationContainer>
    );
}