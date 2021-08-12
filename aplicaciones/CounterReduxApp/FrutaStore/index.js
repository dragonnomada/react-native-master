import { configureStore } from "@reduxjs/toolkit";

import CounterSlice from "./CounterSlice";
import ListSlice from "./ListSlice";

export default configureStore({
    // Stores (Slices)
    reducer: {
        counter: CounterSlice,
        list: ListSlice
    }
});