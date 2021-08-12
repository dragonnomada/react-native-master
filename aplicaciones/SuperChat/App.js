import React from "react";
  
import { NavigationContainer } from "@react-navigation/native";

import ChatApp from "./ChatApp";

export default function App () {
  
  return (
    <NavigationContainer>
      <ChatApp />
    </NavigationContainer>
  );
};