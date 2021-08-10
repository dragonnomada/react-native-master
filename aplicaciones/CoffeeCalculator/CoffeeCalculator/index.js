import React from "react";
import { View } from "react-native";
import Banner from "./Banner";

import Header from "./Header";

export default function CoffeeCalculator() {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "red"
            }}
        >
            <Header />
            <Banner />
        </View>
    );
}