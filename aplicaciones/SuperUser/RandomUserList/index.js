import React, { useEffect, useState } from "react";
import { Button, FlatList, Image, SafeAreaView, Text, View } from "react-native";

function useRandomUserList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    return {
        users,
        error,
        loading,
        async getUsers() {
            setError("");
            setLoading(true);

            const response = await fetch("https://randomuser.me/api?results=100&nat=us,gb");

            // setError("Falló la obtención de usuarios");
            // return;

            if (!response.ok) {
                // TODO: Notificar que el servidor falló
                const error = await response.text();
                setError(`${error} (${response.status} / ${response.statusText})`);
                setLoading(false);
                return;
            }

            const data = await response.json();

            setUsers(data.results);
            setLoading(false);
        }
    };
}

export default function RandomUserList() {
    const { users, error, loading, getUsers } = useRandomUserList();

    useEffect(() => {
        getUsers();
    }, []);

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
            {
                error ? (
                    <View style={{ backgroundColor: "crimson", padding: 12, elevation: 5 }}>
                        <Text style={{ color: "white" }}>{error}</Text>
                    </View>
                ) : null
            }
            <SafeAreaView>
                <FlatList
                    data={users}
                    refreshing={loading}
                    onRefresh={() => {
                        getUsers();
                    }}
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