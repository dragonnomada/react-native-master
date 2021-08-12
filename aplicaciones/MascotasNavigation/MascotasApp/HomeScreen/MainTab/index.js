import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import MascotasListDrawer from "./MascotasListDrawer";
import ProfileDrawer from "./ProfileDrawer";
    
const Drawer = createDrawerNavigator();

export default function MainTab ({ navigation }) {
    
    return (
        <Drawer.Navigator>
            <Drawer.Screen 
                name="MascotasList"
                component={MascotasListDrawer}
                options={{
                    title: "Mascotas"
                }}
            />
            <Drawer.Screen 
                name="Profile"
                component={ProfileDrawer}
                options={{
                    title: "Perfil del Usuario"
                }}
            />
        </Drawer.Navigator>
    );
};