import React from "react";

import { SafeAreaView, ScrollView, Text, View } from "react-native";
import useFrutasInventory from "./FrutasInventoryStore/useFrutasInventory";

import FrutasList from "./FrutasList";

export default function FrutasInventory() {
    const frutasInventory = useFrutasInventory();

    // frutasInventory.income("manzana", 10);
    // frutasInventory.outcome("manzana", 10);

    return (
        <View>
            <View>
                <Text>Inventario de Frutas</Text>
            </View>
            {/* <Text>{JSON.stringify(frutasInventory)}</Text> */}
            {/* <SafeAreaView>
                <ScrollView horizontal>
                    <FrutasList />
                </ScrollView>
            </SafeAreaView> */}
        </View>
    );
};