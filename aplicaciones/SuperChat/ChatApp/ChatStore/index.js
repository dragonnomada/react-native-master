import { configureStore } from "@reduxjs/toolkit";
import ChatSlice from "./ChatSlice";

export default configureStore({
    reducer: {
        chat: ChatSlice
    }
}); 