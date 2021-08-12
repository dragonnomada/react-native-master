import React, { useEffect, useState } from "react";

import { Button, FlatList, SafeAreaView, Text, TextInput, View } from "react-native";

import { useAsyncStorage } from "@react-native-async-storage/async-storage";

export default function FrutasStorageApp() {
    const frutasStorage = useAsyncStorage("@frutas/v1.0.0");

    // frutasStorage.getItem() -> Promise<value>
    // frutasStorage.setItem(value) -> Promise
    // frutasStorage.removeItem() -> Promise

    const [frutas, setFrutas] = useState([]);
    const [loading, setLoading] = useState(false);

    const [name, setName] = useState("");

    useEffect(() => {
        frutasStorage.getItem().then(value => {
            // value - string (JSON stringify [{ name }, ...])
            if (value) {
                const frutas = JSON.parse(value);
                setFrutas(frutas);
            }
        })
    }, []);

    return (
        <View style={{
            flex: 1,
            overflow: "hidden"
        }}>
            <View style={{
                padding: 24,
                backgroundColor: "cornflowerblue",
                elevation: 5
            }}>
                <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Almacén de Frutas</Text>
            </View>
            <SafeAreaView style={{
                flex: 1,
                flexGrow: 1,
                borderBottomWidth: 1
            }}>
                <FlatList
                    data={frutas}
                    refreshing={loading}
                    keyExtractor={fruta => fruta.name.toLowerCase().replace(/[^a-z0-9]/g, "")}
                    renderItem={({ item: fruta }) => (
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: 12,
                            borderBottomWidth: 1,
                            borderBottomColor: "gainsboro"
                        }}>
                            <View style={{
                                flexGrow: 1,
                                paddingHorizontal: 6
                            }}>
                                <Text>{fruta.name}</Text>
                            </View>
                            <View>
                                <Button color="red" title="Eliminar" onPress={() => {
                                    const newFrutas = frutas.filter(_fruta => _fruta.name !== fruta.name);
                                    const value = JSON.stringify(newFrutas);
                                    setLoading(true);
                                    frutasStorage.setItem(value).then(() => {
                                        setFrutas(newFrutas);
                                        setLoading(false);
                                    });
                                }} />
                            </View>
                        </View>
                    )}
                />
            </SafeAreaView>
            <View style={{
                padding: 48
            }}>
                <View style={{ paddingVertical: 24 }}>
                    <Text>Nombre de la fruta</Text>
                    <TextInput
                        style={{
                            borderBottomColor: "cornflowerblue",
                            borderBottomWidth: 1
                        }}
                        placeholder="Escribe el nombre de la fruta"
                        value={name}
                        onChangeText={setName}
                    />
                </View>
                <View>
                    <Button title="Agregar Fruta" onPress={() => {
                        if (name) {
                            const getId = name => name.toLowerCase().replace(/[^a-z0-9]/g, "")

                            if (frutas.some(fruta => getId(fruta.name) === getId(name))) {
                                alert("La fruta ya existe");
                                return;
                            }

                            const newFrutas = [...frutas, { name }];
                            const value = JSON.stringify(newFrutas);
                            setLoading(true);
                            frutasStorage.setItem(value).then(() => {
                                setFrutas(newFrutas);
                                setLoading(false);
                            });
                        }
                    }} />
                </View>
            </View>
        </View>
    );
};