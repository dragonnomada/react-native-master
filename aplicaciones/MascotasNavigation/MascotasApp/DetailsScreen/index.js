import React from "react";
import { Button, Image, Text, View } from "react-native";

export default function DetailsScreen({ navigation, route }) {
    const { mascotaInfo } = route.params;

    return (
        <View style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 24
        }}>
            <View style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingBottom: 24
            }}>
                <Image
                    style={{
                        borderRadius: 100
                    }}
                    source={{
                        uri: mascotaInfo.picture,
                        width: 200,
                        height: 200
                    }}
                />
            </View>
            <View style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                paddingHorizontal: 48
            }}>
                <Text>{mascotaInfo.name}</Text>
                <View style={{
                    padding: 12
                }}>
                    <Text style={{
                        fontSize: 36,
                        color: "cornflowerblue"
                    }}>$ {(mascotaInfo.price || 0).toFixed(2)}</Text>
                </View>
                <Text>{mascotaInfo.description.replace(/\s+/g, " ")}</Text>
            </View>
            <View style={{ width: "100%", padding: 48 }}>
                <Button style={{ width: "100%" }} title="Comprar" onPress={() => {
                    navigation.pop();
                }} />
            </View>
        </View>
    );
}