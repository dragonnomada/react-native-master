import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";

const Stack = createStackNavigator();

export default function MascotasApp() {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    title: "Mascotas App"
                }}
            />
            <Stack.Screen
                name="Details"
                component={DetailsScreen}
                options={{
                    title: "Detalles de la Mascota"
                    // presentation: "transparentModal"
                }}
            />
        </Stack.Navigator>
    );
};