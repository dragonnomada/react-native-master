import React, { useEffect, useState } from "react";
import { View } from "react-native";
import Banner from "./Banner";
import CoffeeButton from "./CoffeeButton";

import Header from "./Header";
import Total from "./Total";
import TripleSelector from "./TripleSelector";

// Total
// Size: 1 (+$10) | 2 (+$15) | 3 (+$20)
// Milk: 1 (+$0) | 2 (+$5) | 3 (+$10)
// Sugar: 1 (+$0) | 2 (+$2) | 3 (+$4)

export default function CoffeeCalculator() {
    const [total, setTotal] = useState(0);

    const [totalSize, setTotalSize] = useState(0);
    const [totalMilk, setTotalMilk] = useState(0);
    const [totalSugar, setTotalSugar] = useState(0);

    const [isSizeValid, setIsSizeValid] = useState(false);
    const [isMilkValid, setIsMilkValid] = useState(false);
    const [isSugarValid, setIsSugarValid] = useState(false);

    useEffect(() => {
        setTotal(totalSize + totalMilk + totalSugar);
    }, [totalSize, totalMilk, totalSugar]);

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
                onSelectOption={option => {
                    if (option === 1) {
                        setIsSizeValid(true);
                        setTotalSize(10);
                    } else if (option === 2) {
                        setIsSizeValid(true);
                        setTotalSize(15);
                    } else if (option === 3) {
                        setIsSizeValid(true);
                        setTotalSize(20);
                    } else {
                        setIsSizeValid(false);
                        setTotalSize(0);
                    }
                }}
            />
            <TripleSelector
                label="Milk"
                onSelectOption={option => {
                    if (option === 1) {
                        setIsMilkValid(true);
                        setTotalMilk(0);
                    } else if (option === 2) {
                        setIsMilkValid(true);
                        setTotalMilk(5);
                    } else if (option === 3) {
                        setIsMilkValid(true);
                        setTotalMilk(10);
                    } else {
                        setIsMilkValid(false);
                        setTotalMilk(0);
                    }
                }}
            />
            <TripleSelector
                label="Sugar"
                onSelectOption={option => {
                    if (option === 1) {
                        setIsSugarValid(true);
                        setTotalSugar(0);
                    } else if (option === 2) {
                        setIsSugarValid(true);
                        setTotalSugar(2);
                    } else if (option === 3) {
                        setIsSugarValid(true);
                        setTotalSugar(4);
                    } else {
                        setIsSugarValid(false);
                        setTotalSugar(0);
                    }
                }}
            />
            <Total total={total} />
            <CoffeeButton disabled={!isSizeValid || !isMilkValid || !isSugarValid} />
        </View>
    );
}