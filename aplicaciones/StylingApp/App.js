import React from "react";
import { View } from "react-native";

import SocialApp from "./SocialApp";
import Header from "./SocialApp/Header";
import Reviews from "./SocialApp/Reviews";
import Events from "./SocialApp/Events";

export default function App() {
  // return (
  //   <View>
  //     <Header />
  //     <Events />
  //     <Reviews />
  //   </View>
  // );

  return <SocialApp />;
}