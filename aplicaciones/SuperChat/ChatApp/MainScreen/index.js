import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useNavigation } from "@react-navigation/native";

import { FlatList, Image, Pressable, Text, View } from "react-native";

import { openConversation } from "../ChatStore/ChatSlice";

export default function MainScreen() {
    const navigation = useNavigation();

    const conversations = useSelector(state => state.chat.conversations);
    const currentConversation = useSelector(state => state.chat.currentConversation);
    const message = useSelector(state => state.chat.message);
    const currentConversationMessages = useSelector(state => state.chat.currentConversationMessages);
    const error = useSelector(state => state.chat.error);
    const working = useSelector(state => state.chat.working);
    const dispatch = useDispatch();

    useEffect(() => {
        if (currentConversation) {
            navigation.push("Conversation", {
                conversation: currentConversation
            });
        }
    }, [currentConversation]);

    useEffect(() => {
        const notSendedMessages = currentConversationMessages.filter(message => message.status === "sending");

        Promise.resolve().then(async () => {
            for (message of notSendedMessages) {
                // TODO: Async Storage: Comprobar que el mensaje no esté registrado para ser enviado
                // TODO: Async Storage: Agregar el mensaje no eviado para que se envie cuándo sea necesario
            }
        });
    }, [currentConversationMessages]);

    useEffect(() => {
        const id = setInterval(async () => {
            // TODO: Si no hay internet continua (ignora el envío)
            // TODO: Async Storage: Recupere los mensaje no enviados (el siguente en la fila / siguiente N)
            // TODO: Enviar al API cada mensaje no enviado y si se pudo enviar actualizar el estado del mensaje
            // y lo borra del Async Storage, sino lo mantiene en el Async Storage pero al final
        }, 10000);

        return () => {
            clearInterval(id);
        }
    }, []);

    return (
        <View>
            <Text>Conversaciones (Todos)</Text>
            <Text style={{ color: error ? "red" : "lime" }}>{ working ? "* " : "" }{message}</Text>
            <FlatList
                data={conversations}
                keyExtractor={conversation => conversation.id}
                renderItem={({ item: conversation }) => (
                    <Pressable onPress={() => {
                        dispatch(openConversation({ conversationId: conversation.id }));
                    }}>
                        <View style={{
                            borderBottomWidth: 1
                        }}>
                            <Image
                                source={{
                                    uri: conversation.picture,
                                    width: 40,
                                    height: 40
                                }}
                            />
                            <View>
                                <Text>From: {conversation.from}</Text>
                                <Text>To: {conversation.to}</Text>
                            </View>
                            <View>
                                <Text>{conversation.self ? "<" : ">"} {conversation.lastMessage}</Text>
                                <Text>{conversation.at}</Text>
                            </View>
                        </View>
                    </Pressable>
                )}
            />
        </View>
    );
};