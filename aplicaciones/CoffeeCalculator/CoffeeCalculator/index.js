import React from "react";
import { View } from "react-native";
import Banner from "./Banner";

import Header from "./Header";
import Total from "./Total";
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
            <TripleSelector label="Size" />
            <TripleSelector label="Milk" />
            <TripleSelector label="Sugar" />
            <Total total={20.5} />
        </View>
    );
}