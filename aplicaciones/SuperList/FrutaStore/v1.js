import React from "react";
import { View, Text, SafeAreaView, FlatList, Image } from "react-native";

function useFrutaStore() {
    // Data: [ Item ] | [ fruta ]
    const frutas = [
        // Item (fruta): { id, nombre, grupo }
        {
            id: "manzana",
            nombre: "Manzana",
            grupoId: "frutas-temporada",
            precio: 10,
            imagen: "https://placekitten.com/100"
        },
        {
            id: "pera",
            nombre: "Pera",
            grupoId: "frutas-temporada",
            precio: 10,
            imagen: "https://placekitten.com/100"
        },
        {
            id: "mango",
            nombre: "Mango",
            grupoId: "frutas-tropicales",
            precio: 10,
            imagen: "https://placekitten.com/100"
        },
        ...[...Array(20)].map((_, index) => ({
            id: `fruta-${index}`,
            nombre: `Fruta ${index + 1}`,
            grupoId: "frutas-tropicales",
            precio: Math.random() * 100 + 5,
            imagen: "https://placekitten.com/100"
        }))
    ];

    return {
        frutas
    };
}

export default function FrutaStore() {
    const { frutas } = useFrutaStore();

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    paddingVertical: 16,
                    paddingHorizontal: 24,
                    backgroundColor: "chartreuse",
                    elevation: 10
                }}
            >
                <Text
                    style={{
                        fontSize: 48,
                        color: "whitesmoke"
                    }}
                >Fruta Store</Text>
            </View>
            <SafeAreaView style={{ flex: 1 }}>
                <FlatList
                    style={{}}
                    data={frutas}
                    renderItem={({ item: fruta }) => (
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                                borderBottomColor: "whitesmoke",
                                borderBottomWidth: 1,
                                paddingHorizontal: 24,
                                paddingVertical: 6,
                            }}>
                            <Image 
                                source={{ uri: fruta.imagen, width: 40, height: 40 }} 
                                style={{
                                    borderRadius: 20
                                }}
                            />
                            <Text style={{ color: "tomato" }}>{fruta.nombre}</Text>
                            <Text style={{ color: "mediumpurple" }}>{`$ ${(fruta.precio || 0).toFixed(2)}`}</Text>
                        </View>
                    )}
                    keyExtractor={fruta => `${fruta.grupoId}-${fruta.id}`}
                />
            </SafeAreaView>
        </View>
    );
}