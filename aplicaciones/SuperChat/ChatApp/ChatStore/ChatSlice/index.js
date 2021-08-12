import { createSlice } from "@reduxjs/toolkit";

export const ChatSlice = createSlice({
    name: "Chat",
    initialState: {
        working: false,
        error: false,
        message: "Welcome to the Chat",
        currentConversation: null,
        currentConversationMessages: [],
        conversations: [
            {
                id: "conversation-001",
                picture: "https://placekitten.com/400",
                messageId: "message-001",
                from: "+5215512345678",
                to: "+5215511111111",
                lastMessage: "Hola :D",
                at: "2021-08-12T15:00:00.000Z",
                self: false
            },
            {
                id: "conversation-002",
                picture: "https://placekitten.com/401",
                messageId: "message-002",
                from: "+5215512345679",
                to: "+5215511111111",
                lastMessage: "Hey :O",
                at: "2021-08-12T15:01:00.000Z",
                self: false
            },
        ],
        messages: [
            {
                id: "message-001",
                from: {
                    picture: "https://placekitten.com/400",
                    phone: "+5215512345678",
                },
                to: {
                    picture: "https://placekitten.com/500",
                    phone: "+5215511111111",
                },
                self: false,
                content: "Hola :D",
                at: "2021-08-12T15:00:00.000Z",
                status: "recieved" // sending | sended | received | viewed
            },
            {
                id: "message-002",
                from: {
                    picture: "https://placekitten.com/401",
                    phone: "+5215512345679",
                },
                to: {
                    picture: "https://placekitten.com/500",
                    phone: "+5215511111111",
                },
                self: false,
                content: "Hola :O",
                at: "2021-08-12T15:01:00.000Z",
                status: "sending" // sending | sended | received | viewed
            },
        ]
    },
    reducers: {
        openConversation(state, action) {
            state.working = true;

            state.currentConversation = null;

            const { conversationId } = action.payload;

            const conversation = state.conversations.find(conversation => conversation.id === conversationId);

            if (conversation) {
                state.currentConversation = conversation;
                state.message = `Se abrió la conversación ${conversationId}`;
                state.error = false;
            } else {
                state.message = `No existe la conversación ${conversationId}`;
                state.error = true;
            }

            state.working = false;
        },
        loadMessages(state, action) {
            state.working = true;

            const { conversationId } = action.payload;

            const conversation = state.conversations.find(conversation => conversation.id === conversationId);

            if (conversation) {
                state.currentConversation = conversation;
                
                const messages = state.messages.filter(message => {
                    return (
                        message.from.phone === conversation.from ||
                        message.from.phone === conversation.to ||
                        message.to.phone === conversation.from ||
                        message.to.phone === conversation.to
                    );
                });

                state.currentConversationMessages = messages;
                
                state.message = `Se cargaron los mensajes de la conversación ${conversationId}`;
                state.error = false;
            } else {
                state.message = `No existe la conversación ${conversationId}`;
                state.error = true;
            }

            state.working = false;
        }
    }
});

export const { 
    openConversation, 
    loadMessages 
} = ChatSlice.actions;

export default ChatSlice.reducer;