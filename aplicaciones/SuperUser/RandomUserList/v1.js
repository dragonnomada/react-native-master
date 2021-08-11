import React, { useState } from "react";
import { Button, FlatList, Image, SafeAreaView, Text, View } from "react-native";

function useRandomUserList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");

    return {
        users,
        error,
        async getUsers() {
            const response = await fetch("https://randomuser.me/api?results=100&nat=us,gb");

            if (!response.ok) {
                // TODO: Notificar que el servidor falló
                const error = await response.text();
                setError(`${error} (${response.status} / ${response.statusText})`);
                return;
            }

            const data = await response.json();

            setUsers(data.results);
        }
    };
}

export default function RandomUserList() {
    const { users, error, getUsers } = useRandomUserList();

    return (
        <View>
            <View style={{ backgroundColor: "cornflowerblue", padding: 12, elevation: 5 }}>
                <Text style={{ color: "white", fontSize: 24 }}>Random User List</Text>
            </View>
            <View>
                <Button title="Obtener usuarios" onPress={() => {
                    getUsers()
                }} />
            </View>
            <View>
                <Text>{error}</Text>
            </View>
            <SafeAreaView>
                <FlatList
                    data={users}
                    renderItem={({ item: user }) => (
                        <View
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                paddingHorizontal: 12,
                                paddingVertical: 6,
                                borderBottomColor: "whitesmoke",
                                borderBottomWidth: 1
                            }}
                        >
                            <Image
                                style={{
                                    borderRadius: 20
                                }}
                                source={{
                                    uri: user.picture.thumbnail,
                                    width: 40,
                                    height: 40
                                }}
                            />
                            <View style={{ flexGrow: 1, paddingHorizontal: 24 }}>
                                <Text>{user.name.first} {user.name.last}</Text>
                                <Text style={{ fontSize: 10, color: "gray" }}>{user.email}</Text>
                            </View>
                            <View style={{ width: 50 }}>
                                <Text>{user.nat}</Text>
                            </View>
                        </View>
                    )}
                    keyExtractor={user => user.login.uuid}
                />
            </SafeAreaView>
        </View>
    );
};