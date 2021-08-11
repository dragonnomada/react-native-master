import React, { useReducer, useState } from "react";

import { Pressable, Text, View } from "react-native";

// ESTADO POR DEFECTO PARA EL CONTADOR
const CounterDefaultState = {
    counter: 0
};

// LA FUNCIÓN DE REDUCCIÓN QUE INDICA CÓMO SE TRANSFORMA UN ESTADO DADA UNA ACCIÓN DESPACHADA
// state - { counter: number }
// action - { type: string, payload: any }
function counterReducer(state, action) {
    // ACCIÓN: TIPO DECREMENT
    if (action.type === "DECREMENT") {
        if (state.counter <= 0) {
            return {
                counter: 0
            };
        }

        return {
            counter: state.counter - 1
        };
    }
    // ACCIÓN: TIPO RESET
    if (action.type === "RESET") {
        return {
            counter: 0
        };
    }
    // ACCIÓN: TIPO INCREMENT
    if (action.type === "INCREMENT") {
        return {
            counter: state.counter + 1
        };
    }
    // ACCIÓN: OTRO TIPO
    return state;
}

export default function BeerApp() {
    // [ESTADO DEL CONTADOR | DESPACHADOR DE ACCIONES DEL CONTADOR]
    const [counterState, counterDispatch] = useReducer(counterReducer, CounterDefaultState);
    // useReducer(<reductor>, <estado inicial>) -> [<estado>, <despachador de acciones>]

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
                <Text
                    style={{
                        borderBottomWidth: 1,
                        paddingHorizontal: 48,
                        paddingVertical: 6
                    }}
                >
                    x {counterState.counter}
                </Text>
                <View
                    style={{
                        display: "flex",
                        flexDirection: "row"
                    }}
                >
                    <Pressable onPress={() => {
                        // DESPACHA LA ACCIÓN { type, ... }
                        counterDispatch({
                            type: "DECREMENT"
                        });
                    }}>
                        <View style={{ padding: 6 }}>
                            <Text style={{
                                borderWidth: 1,
                                fontSize: 24,
                                paddingHorizontal: 6
                            }}>-</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => {
                        // DESPACHA LA ACCIÓN { type, ... }
                        counterDispatch({
                            type: "RESET"
                        });
                    }}>
                        <View style={{ padding: 6 }}>
                            <Text style={{
                                borderWidth: 1,
                                fontSize: 24,
                                paddingHorizontal: 6
                            }}>*</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={() => {
                        // DESPACHA LA ACCIÓN { type, ... }
                        counterDispatch({
                            type: "INCREMENT"
                        });
                    }}>
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