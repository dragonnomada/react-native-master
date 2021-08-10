import React from "react";
import { View } from "react-native";
import Banner from "./Banner";

import Header from "./Header";
import TripleSelector from "./TripleSelector";

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
            <TripleSelector />
            <TripleSelector />
            <TripleSelector />
        </View>
    );
}