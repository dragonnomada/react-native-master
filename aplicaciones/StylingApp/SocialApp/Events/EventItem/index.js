import React from "react";
import { View } from "react-native";

import EventTitle from "./EventTitle";
import EventImage from "./EventImage";

export default function EventItem() {
    return (
      <View style={{ padding: 5 }}>
        <EventTitle />
        <EventImage />
      </View>
    )
  }