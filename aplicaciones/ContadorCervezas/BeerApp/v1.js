import React, { useState } from "react";

import { Pressable, Text, View } from "react-native";

export default function BeerApp() {
    const [counter, setCounter] = useState(0);

    const decrement = () => setCounter(counter >= 1 ? counter - 1 : 0);
    const reset = () => setCounter(0);
    const increment = () => setCounter(counter + 1);

    return (
        <View>
            <View>
                <Text>Beer App</Text>
            </View>
            <View style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                <Text style={{ borderBottomWidth: 1, paddingHorizontal: 48, paddingVertical: 6 }}>x {counter}</Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <Pressable onPress={decrement}>
                        <View style={{ padding: 6 }}>
                            <Text style={{
                                borderWidth: 1,
                                fontSize: 24,
                                paddingHorizontal: 6
                            }}>-</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={reset}>
                        <View style={{ padding: 6 }}>
                            <Text style={{
                                borderWidth: 1,
                                fontSize: 24,
                                paddingHorizontal: 6
                            }}>*</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={increment}>
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
        </View>
    );
};