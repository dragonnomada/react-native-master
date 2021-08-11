import React, { useState } from "react";

import { SafeAreaView, ScrollView, Text, View } from "react-native";
import BeerCounter from "./Beer";

export default function BeerApp() {
    const [totalCorona, setTotalCorona] = useState(0);
    const [totalVictoria, setTotalVictoria] = useState(0);
    const [totalHeineken, setTotalHeineken] = useState(0);
    const [totalTecate, setTotalTecate] = useState(0);

    return (
        <View>
            <View>
                <Text>Beer App</Text>
            </View>
            <SafeAreaView>
                <ScrollView horizontal>
                    <View style={{ display: "flex", flexDirection: "row" }}>
                        <BeerCounter 
                            picture="https://www.marialabonita.com/wp-content/uploads/2019/08/cerveza-corona-355ml.jpg" 
                            onQuantityChange={quantity => setTotalCorona(quantity * 17)}
                        />
                        <BeerCounter 
                            picture="https://mundogourmet.com.mx/tienda/wp-content/uploads/2020/09/descarga-9.jpg" 
                            onQuantityChange={quantity => setTotalVictoria(quantity * 18)}
                        />
                        <BeerCounter 
                            picture="https://cdn.shopify.com/s/files/1/0454/8984/8477/products/Cerveza-Heineken_900x.png?v=1615605295" 
                            onQuantityChange={quantity => setTotalHeineken(quantity * 22)}
                        />
                        <BeerCounter 
                            picture="https://i1.wp.com/mrvolk.com.mx/wp-content/uploads/2020/12/3865.png?fit=1779%2C1125&ssl=1" 
                            onQuantityChange={quantity => setTotalTecate(quantity * 15)}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>
            <View>
                <Text>Total: ${totalCorona + totalVictoria + totalHeineken + totalTecate}</Text>
            </View>
        </View>
    );
};