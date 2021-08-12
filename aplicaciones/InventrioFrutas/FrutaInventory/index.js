import React, { useEffect, useState } from "react";

import { FlatList, Modal, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import useFrutasInventory from "./FrutasInventoryStore/useFrutasInventory";

import FrutasList from "./FrutasList";

export default function FrutasInventory() {
    const frutasInventory = useFrutasInventory();

    // frutasInventory.total;
    // frutasInventory.frutas;
    // frutasInventory.frutasNames;
    // frutasInventory.frutaMaxQuantity;
    // frutasInventory.frutaMinQuantity;
    // frutasInventory.message;
    // frutasInventory.error;
    // --
    // frutasInventory.income("manzana", 10);
    // frutasInventory.outcome("manzana", 10);

    const [frutaInfo, setFrutaInfo] = useState(null);

    return (
        <View>
            <View>
                <Text>Inventario de Frutas</Text>
            </View>
            <View>
                <Text style={{ color: frutasInventory.error ? "deeppink" : "mediumpurple" }}>{frutasInventory.message}</Text>
            </View>
            <View>
                <Text>Total de Frutas: {frutasInventory.total}</Text>
            </View>
            <View>
                <FlatList horizontal
                    data={frutasInventory.frutas}
                    renderItem={({ item: frutaInfo }) => (
                        <View style={{ padding: 12 }}>
                            <View style={styles.frutasItemContainer}>
                                <Text style={styles.frutasItemText}>{frutaInfo.name}</Text>
                                <Text style={styles.frutasItemText}>x {frutaInfo.quantity}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={fruta => fruta.name.toLowerCase().replace(/[^a-z0-9]/g, "")}
                />
            </View>
            <FrutaConfig frutasInventory={frutasInventory} onFrutaConfig={frutaInfo => {
                setFrutaInfo(frutaInfo);
            }} />
            <View style={[styles.stackHorizontal, { paddingHorizontal: 24, paddingVertical: 48 }]}>
                <RoundedButton
                    style={{ flexGrow: 1, justifyContent: "center" }}
                    onPress={() => {
                        if (frutaInfo) {
                            frutasInventory.income(frutaInfo);
                        }
                    }}
                >
                    Ingresar
                </RoundedButton>
                <RoundedButton
                    style={{ flexGrow: 1, justifyContent: "center" }}
                    onPress={() => {
                        if (frutaInfo) {
                            frutasInventory.outcome(frutaInfo);
                        }
                    }}
                >
                    Sacar
                </RoundedButton>
            </View>
        </View>
    );
};

function RoundedButton({ children, style, onPress }) {
    return (
        <View style={[styles.stackHorizontal, style]}>
            <Pressable onPress={onPress}>
                <View style={[styles.button, styles.backgroundPurple]}>
                    <Text style={styles.buttonText}>{children || "RoundedButton"}</Text>
                </View>
            </Pressable>
        </View>
    );
}

function FrutaSelector({ frutaSeleccionada, frutasInventory, onFrutaSelected }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <View style={{ flexGrow: 1 }}>
            <RoundedButton onPress={() => setIsOpen(true)}>Seleccionar Fruta</RoundedButton>
            {
                frutaSeleccionada ? (
                    <View>
                        <Text style={{ color: "mediumpurple" }}>Fruta Seleccionada: {frutaSeleccionada}</Text>
                    </View>
                ) : (
                    <View>
                        <Text style={{ fontStyle: "italic", color: "gray" }}>No hay fruta seleccionada</Text>
                    </View>
                )
            }
            <Modal
                visible={isOpen}
                transparent
            >
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                    <View style={{
                        width: "80%",
                        height: "80%",
                        backgroundColor: "white",
                        borderRadius: 8,
                        padding: 12,
                        zIndex: 10
                    }}>
                        <View style={[styles.stackHorizontal, { justifyContent: "space-between" }]}>
                            <Text>Selecciona una fruta</Text>
                            <Text>x</Text>
                        </View>
                        <FlatList
                            data={frutasInventory.frutas}
                            renderItem={({ item: fruta }) => (
                                <Pressable onPress={() => {
                                    onFrutaSelected(fruta.name);
                                    setIsOpen(false);
                                }}>
                                    <View style={{
                                        paddingHorizontal: 24,
                                        paddingVertical: 12,
                                        borderBottomWidth: 1,
                                        borderBottomColor: "mediumpurple"
                                    }}>
                                        <Text>{fruta.name}</Text>
                                    </View>
                                </Pressable>
                            )}
                            keyExtractor={fruta => fruta.name.toLowerCase().replace(/[^a-z0-9]/g, "")}
                        />
                    </View>
                    <View style={{
                        flex: 1,
                        width: "100%",
                        height: "100%",
                        position: "absolute",
                        left: 0,
                        top: 0,
                        backgroundColor: "#00000033"
                    }} />
                </View>
            </Modal>
        </View>
    );
}

function FrutaQuantity({ quantity, onQuantityChange }) {

    return (
        <View style={{ flexGrow: 1 }}>
            <View>
                <View>
                    <Text>Cantidad de Frutas</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Escribe la cantidad"
                        value={`${quantity || 0}`}
                        onChangeText={text => onQuantityChange(Number(text))}
                        keyboardType="number-pad"
                    />
                </View>
            </View>
        </View>
    );
}

function FrutaConfig({ frutasInventory, onFrutaConfig }) {
    const [fruta, setFruta] = useState(null);
    const [quantity, setQuantity] = useState(null);

    useEffect(() => {
        if (fruta) {
            if (quantity > 0) {
                if (typeof onFrutaConfig === "function") {
                    onFrutaConfig({ fruta, quantity });
                }
            }
        }
    }, [fruta, quantity]);

    return (
        <View style={[styles.stackHorizontal, { paddingHorizontal: 24, paddingVertical: 48 }]}>
            <FrutaSelector
                frutaSeleccionada={fruta}
                frutasInventory={frutasInventory}
                onFrutaSelected={fruta => {
                    setFruta(fruta);
                }}
            />
            <FrutaQuantity quantity={quantity} onQuantityChange={quantity => {
                setQuantity(quantity);
            }} />
        </View>
    );
}

const styles = StyleSheet.create({
    stackHorizontal: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    },
    backgroundPurple: {
        backgroundColor: "mediumpurple"
    },
    button: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: "cornflowerblue",
        borderRadius: 100,
    },
    buttonText: {
        color: "white"
    },
    textInput: {
        borderBottomColor: "mediumpurple",
        borderBottomWidth: 1,
    },
    frutasItemContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 4,
        borderColor: "mediumpurple",
        padding: 6
    },
    frutasItemText: {
        color: "#555555"
    },
});