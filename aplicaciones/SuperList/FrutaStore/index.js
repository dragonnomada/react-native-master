import React, { useState } from "react";
import { View, Text, SafeAreaView, FlatList, Image, SectionList } from "react-native";

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
            grupoId: "frutas-random",
            precio: Math.random() * 100 + 5,
            imagen: "https://placekitten.com/100"
        }))
    ];

    const grupos = [
        {
            id: "frutas-temporada",
            nombre: "Frutas de Temporada",
            color: "purple"
        },
        {
            id: "frutas-tropicales",
            nombre: "Frutas Tropicales",
            color: "yellow"
        },
        {
            id: "frutas-random",
            nombre: "Frutas Generadas",
            color: "red"
        },
    ];

    const secciones = grupos.map(grupo => {
        return {
            id: grupo.id,
            titulo: grupo.nombre,
            color: grupo.color,
            data: frutas.filter(fruta => fruta.grupoId === grupo.id)
        }
    });
    
    // [
    //     {
    //         id: "frutas-temporada",
    //         titulo: "Frutas de Temporada",
    //         color: "purple",
    //         frutas: [
    //             {
    //                 id: "manzana",
    //                 nombre: "Manzana",
    //                 grupoId: "frutas-temporada",
    //                 precio: 10,
    //                 imagen: "https://placekitten.com/100"
    //             },
    //             {
    //                 id: "pera",
    //                 nombre: "Pera",
    //                 grupoId: "frutas-temporada",
    //                 precio: 10,
    //                 imagen: "https://placekitten.com/100"
    //             },
    //             // ...
    //         ]
    //     },
    //     {
    //         id: "frutas-tropicales",
    //         titulo: "Frutas Tropicales",
    //         color: "yellow",
    //         data: [
    //             {
    //                 id: "mango",
    //                 nombre: "Mango",
    //                 grupoId: "frutas-tropicales",
    //                 precio: 10,
    //                 imagen: "https://placekitten.com/100"
    //             },
    //         ]
    //     },
    // ]

    return {
        frutas,
        secciones
    };
}

export default function FrutaStore() {
    const { secciones } = useFrutaStore();

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
                <SectionList
                    sections={secciones}
                    renderSectionHeader={({ section }) => (
                        <View 
                            style={{
                                padding: 12,
                                backgroundColor: section.color
                            }}
                        >
                            <Text style={{ color: "white", fontWeight: "bold" }}>{section.titulo}</Text>
                        </View>
                    )}
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