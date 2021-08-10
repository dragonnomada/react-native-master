import React from "react";
import { Image, View } from "react-native";

import EventBadge from "./EventBadge";

export default function EventImage() {
    return (
        <View>
            <Image
                style={{ borderRadius: 10 }}
                source={{
                    uri: "https://placekitten.com/600",
                    idth: 250,
                    height: 150
                }}
            />
            <EventBadge />
        </View>
    );
}