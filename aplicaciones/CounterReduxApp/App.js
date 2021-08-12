import React from "react";
import { Button, FlatList, Text, View } from "react-native";

import { Provider, useDispatch, useSelector } from "react-redux";

import FrutaStore from "./FrutaStore";
import { decrement, increment } from "./FrutaStore/CounterSlice";
import { add, remove } from "./FrutaStore/ListSlice";

function Home() {
    const counter = useSelector(state => state.counter.value);
    const items = useSelector(state => state.list.items);
    const total = useSelector(state => state.list.total);
    const dispatch = useDispatch();

    return (
        <View>
            <Text>Contador: {counter}</Text>
            <Text>Items: {JSON.stringify(items)}</Text>
            <Text>Total: {total}</Text>
            <Button title="Incrementar" onPress={() => dispatch(increment())} />
            <Button title="Decrementar" onPress={() => dispatch(decrement())} />
            <Button title="Agregar elemento aleatorio" onPress={() => {
                dispatch(add({ id: Math.random().toString(32).slice(2), name: `Hola mundo ${total}` }))
            }} />
            <FlatList 
                data={items}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <View>
                        <Text>{item.name}</Text>
                        <Button title="Eliminar" onPress={() => {
                            dispatch(remove(item))
                        }} />
                    </View>
                )}
            />
        </View>
    )
}

export default function App() {
    return (
        <Provider store={FrutaStore}>
            <Home />
        </Provider>
    );
};