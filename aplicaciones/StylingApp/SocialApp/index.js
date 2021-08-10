import React from "react";
import { View } from "react-native";

import Header from "./Header";
import Reviews from "./Reviews";
import Events from "./Events";
import Toolbar from "./Toolbar";

export default function SocialApp() {
  return (
    <View style={{ flex: 1, backgroundColor: "gainsboro" }}>
      <Header />
      <Reviews />
      <Events />
      <Toolbar />
    </View>
  );
}