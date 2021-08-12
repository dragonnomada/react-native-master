import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import MainTab from "./MainTab";
import RegistrarTab from "./RegistrarTab";

const Tabs = createBottomTabNavigator();

export default function HomeScreen({ navigation }) {
    return (
        <Tabs.Navigator>
            <Tabs.Screen 
                name="Main"
                component={MainTab}
                options={{
                    title: "Tienda"
                }}
            />
            <Tabs.Screen
                name="RegistrarMascota"
                component={RegistrarTab}
                options={{
                    title: "Registrar Mascota"
                }}
            />
        </Tabs.Navigator>
    )
}