import React from "react";

import { Provider } from "react-redux";
import { createStackNavigator } from "@react-navigation/stack";

import ChatStore from "./ChatStore";

import MainScreen from "./MainScreen";
import ConversationScreen from "./ConverstionScreen";

const Stack = createStackNavigator();

export default function ChatApp() {
    return (
        <Provider store={ChatStore}>
            <Stack.Navigator>
                <Stack.Screen
                    name="Main"
                    component={MainScreen}
                />
                <Stack.Screen
                    name="Conversation"
                    component={ConversationScreen}
                />
            </Stack.Navigator>
        </Provider>
    );
};