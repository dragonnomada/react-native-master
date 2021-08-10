import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Banner from "./Banner";
import CoffeeButton from "./CoffeeButton";

import useCoffeTotal from "./useCoffeeTotal";

import Header from "./Header";
import Total from "./Total";
import TripleSelector from "./TripleSelector";

export default function CoffeeCalculator() {
    const { 
        total, 
        isValid, 
        updateTotalSize, 
        updateTotalMilk, 
        updateTotalSugar 
    } = useCoffeTotal();

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "red"
            }}
        >
            <Header />
            <Banner />
            <TripleSelector
                label="Size"
                onSelectOption={updateTotalSize}
            />
            <TripleSelector
                label="Milk"
                onSelectOption={updateTotalMilk}
            />
            <TripleSelector
                label="Sugar"
                onSelectOption={updateTotalSugar}
            />
            <Total total={total} />
            <CoffeeButton disabled={!isValid} />
        </View>
    );
}