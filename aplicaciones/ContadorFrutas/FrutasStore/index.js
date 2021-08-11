import React, { useEffect, useState } from "react";
import { Button, Modal, Pressable, SafeAreaView, SectionList, Text, TextInput, View } from "react-native";

function useFrutasStore() {
    const [secciones, setSecciones] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    return {
        error,
        loading,
        secciones,
        async getSecciones() {
            setError("");
            setLoading(true);

            const response = await fetch("http://192.168.1.82:8080/api/frutas/secciones");

            if (!response.ok) {
                const error = await response.text();
                setError(`${error} (${response.status} / ${response.statusText})`);
                setLoading(false);
                return;
            }

            const secciones = await response.json();

            setSecciones(secciones);
            setLoading(false);
        },
        async agregarFruta({ nombre, precio }) {
            setError("");
            setLoading(true);

            const response = await fetch("http://192.168.1.82:8080/api/frutas/agregar", {
                method: "post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ nombre, precio })
            });

            if (!response.ok) {
                const error = await response.text();
                setError(`${error} (${response.status} / ${response.statusText})`);
                setLoading(false);
                return;
            }

            const { success, error } = await response.json();

            if (!success) {
                setError(error);
            }

            setLoading(false);
        }
    };
}

function useModal() {
    const [isOpen, setIsOpen] = useState(true);

    return {
        isOpen,
        open() {
            setIsOpen(true);
        },
        close() {
            setIsOpen(false);
        }
    }
}

function useAgregarFruta() {
    const [nombre, setNombre] = useState("");
    const [precio, setPrecio] = useState(0);

    return {
        nombre,
        precio,
        isValid: nombre && precio > 0,
        updateNombre(nombre) {
            setNombre(nombre);
        },
        updatePrecio(price) {
            if (isNaN(Number(price))) return;

            setPrecio(Number(price));
        }
    }
}

export default function FrutasStore() {
    const { error, loading, secciones, getSecciones, agregarFruta } = useFrutasStore();

    const { nombre, precio, isValid, updateNombre, updatePrecio } = useAgregarFruta();

    const modal = useModal();

    useEffect(() => {
        getSecciones()
    }, []);

    return (
        <View>
            <Text>Contador de Frutas</Text>
            <Button title="Nueva Fruta" onPress={() => modal.open()} />
            {
                error ? (
                    <Text>Error: {error}</Text>
                ) : null
            }
            <SafeAreaView>
                <SectionList
                    sections={secciones}
                    refreshing={loading}
                    onRefresh={() => getSecciones()}
                    renderSectionHeader={({ section }) => (
                        <View>
                            <Text style={{ color: section.color }}>{section.titulo}</Text>
                        </View>
                    )}
                    renderItem={({ item: fruta }) => (
                        <View>
                            <Text>{fruta.nombre}</Text>
                        </View>
                    )}
                    keyExtractor={fruta => `${fruta.id}-${fruta.gruposId.join("-")}`}
                />
            </SafeAreaView>
            <Modal
                transparent={true}
                visible={modal.isOpen}
            >
                <View style={{
                    flex: 1,
                    position: "absolute",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    left: 0,
                    top: 0,
                }}>
                    <View
                        style={{
                            width: "80%",
                            borderRadius: 8,
                            padding: 24,
                            backgroundColor: "white",
                            zIndex: 10
                        }}
                    >
                        <Text>Agregar Fruta</Text>
                        {
                            error ? (
                                <Text style={{ color: "red" }}>{error}</Text>
                            ) : null
                        }
                        <View style={{ paddingVertical: 12 }}>
                            <Text style={{ fontSize: 10, color: "gray" }}>Nombre de la Fruta</Text>
                            <TextInput
                                style={{
                                    width: "100%",
                                    borderBottomWidth: 1,
                                    borderBottomColor: "mediumpurple"
                                }}
                                value={nombre}
                                placeholder="Escribre el nombre la fruta"
                                onChangeText={updateNombre}
                            />
                        </View>
                        <View style={{
                            paddingTop: 12,
                            paddingBottom: 0,
                            borderBottomWidth: 1,
                            borderBottomColor: "mediumpurple"
                        }}>
                            <Text style={{ fontSize: 10, color: "gray" }}>Precio por Kilo de la Fruta</Text>
                            <View style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ paddingHorizontal: 12, color: "#777777" }}>$</Text>
                                <TextInput
                                    style={{
                                        flexGrow: 1
                                    }}
                                    value={`${precio}`}
                                    placeholder="Escribre el precio la fruta"
                                    keyboardType="number-pad"
                                    onChangeText={updatePrecio}
                                />
                                <Text style={{ paddingHorizontal: 12, color: "#777777" }}>x Kilo</Text>
                            </View>
                        </View>
                        {
                            loading ? (
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        paddingTop: 24
                                    }}
                                >
                                    <View
                                        style={{
                                            backgroundColor: "gray",
                                            paddingHorizontal: 12,
                                            paddingVertical: 6,
                                            borderRadius: 48
                                        }}
                                    >
                                        <Text style={{ color: "white" }}>Agregar</Text>
                                    </View>
                                </View>
                            ) : (
                                <View
                                    style={{
                                        display: "flex",
                                        flexDirection: "row",
                                        justifyContent: "center",
                                        paddingTop: 24
                                    }}
                                >
                                    <Pressable onPress={async () => {
                                        if (isValid) {
                                            await agregarFruta({ nombre, precio });
                                            updateNombre("");
                                            updatePrecio(0);
                                            modal.close();
                                            await getSecciones();
                                            alert("La fruta se ha creado exitósamente");
                                        } else {
                                            alert(`El nombre o precio no son válidos`);
                                        }
                                    }}>
                                        <View
                                            style={{
                                                backgroundColor: "mediumpurple",
                                                paddingHorizontal: 12,
                                                paddingVertical: 6,
                                                borderRadius: 48
                                            }}
                                        >
                                            <Text style={{ color: "white" }}>Agregar</Text>
                                        </View>
                                    </Pressable>
                                </View>
                            )
                        }
                    </View>
                    <View style={{ padding: 24, zIndex: 10 }}>
                        <Pressable onPress={() => modal.close()}>
                            <View
                                style={{
                                    backgroundColor: "crimson",
                                    paddingHorizontal: 12,
                                    paddingVertical: 6,
                                    borderRadius: 48
                                }}
                            >
                                <Text style={{ color: "white" }}>Cancelar</Text>
                            </View>
                        </Pressable>
                    </View>
                    <View
                        style={{
                            flex: 1,
                            display: "flex",
                            flexDirection: "column",
                            width: "100%",
                            height: "100%",
                            position: "absolute",
                            left: 0,
                            top: 0,
                            backgroundColor: "rgba(0, 0, 0, 0.2)"
                        }}
                    />
                </View>
            </Modal>
        </View>
    );
};