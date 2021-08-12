import React, { useEffect } from "react";

import { useRoute } from "@react-navigation/native";

import { Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { loadMessages } from "../ChatStore/ChatSlice";

export default function ConversationScreen() {
    const route = useRoute();

    const message = useSelector(state => state.chat.message);
    const error = useSelector(state => state.chat.error);
    const working = useSelector(state => state.chat.working);
    const currentConversationMessages = useSelector(state => state.chat.currentConversationMessages);
    const dispatch = useDispatch();

    const { conversation } = route.params || {};

    useEffect(() => {
        if (conversation) {
            dispatch(loadMessages({ conversationId: conversation.id }));
        }
    }, [conversation]);

    return (
        <View>
            <Text>Conversación (Una)</Text>
            <Text style={{ color: error ? "red" : "lime" }}>{working ? "* " : ""}{message}</Text>
            <Text>{JSON.stringify(currentConversationMessages)}</Text>
        </View>
    );
};