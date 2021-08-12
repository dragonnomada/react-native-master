import React from "react";

import { FlatList, Image, Pressable, Text, View } from "react-native";

import useMascotas from "../../MascotasStore/useMascotas";

export default function MascotasListDrawer({ navigation }) {
    const { mascotas } = useMascotas();

    return (
        <View>
            <Text>Main Tab</Text>
            <FlatList
                data={mascotas}
                renderItem={({ item: mascotaInfo }) => (
                    <Pressable onPress={() => {
                        navigation.push("Details", {
                            mascotaInfo
                        });
                    }}>
                        <View style={{
                            display: "flex",
                            flexDirection: "row",
                            paddingHorizontal: 12,
                            paddingVertical: 6,
                            borderBottomWidth: 1
                        }}>
                            <Image
                                source={{
                                    uri: mascotaInfo.picture,
                                    width: 40,
                                    height: 40,
                                }}
                            />
                            <Text>{mascotaInfo.name}</Text>
                            <Text>$ {(mascotaInfo.price || 0).toFixed(2)}</Text>
                        </View>
                    </Pressable>
                )}
                keyExtractor={mascotaInfo => mascotaInfo.id}
            />
        </View>
    );
};