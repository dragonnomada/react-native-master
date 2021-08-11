import React, { useEffect } from "react";

import { Image, Pressable, Text, View } from "react-native";

import useCounter from "./CounterStore/useCounter";

export default function BeerCounter({ picture, onQuantityChange }) {
    const counter = useCounter();

    useEffect(() => {
        if (typeof onQuantityChange === "function") {
            onQuantityChange(counter.value);
        }
    }, [counter.value]);

    return (
        <View style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }}>
            <View>
                <Image
                    source={{
                        uri: picture,
                        width: 60,
                        height: 90
                    }}
                />
            </View>
            <Text
                style={{
                    borderBottomWidth: 1,
                    paddingHorizontal: 48,
                    paddingVertical: 6
                }}
            >
                x {counter.value}
            </Text>
            <View
                style={{
                    display: "flex",
                    flexDirection: "row"
                }}
            >
                <Pressable onPress={() => counter.decrement()}>
                    <View style={{ padding: 6 }}>
                        <Text style={{
                            borderWidth: 1,
                            fontSize: 24,
                            paddingHorizontal: 6
                        }}>-</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => counter.reset()}>
                    <View style={{ padding: 6 }}>
                        <Text style={{
                            borderWidth: 1,
                            fontSize: 24,
                            paddingHorizontal: 6
                        }}>*</Text>
                    </View>
                </Pressable>
                <Pressable onPress={() => counter.increment()}>
                    <View style={{ padding: 6 }}>
                        <Text style={{
                            borderWidth: 1,
                            fontSize: 24,
                            paddingHorizontal: 6
                        }}>+</Text>
                    </View>
                </Pressable>
            </View>
        </View>
    );
}