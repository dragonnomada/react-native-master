import { createSlice } from "@reduxjs/toolkit";

export const ListSlice = createSlice({
    // Store Name
    name: "list",
    // Default State
    initialState: {
        items: [],
        total: 0
    },
    // Actions
    reducers: {
        add(state, action) {
            // TODO: Validaciones
            state.items.push(action.payload);
            state.total = state.items.length;
        },
        remove(state, action) {
            state.items = state.items.filter(item => item.id !== action.payload.id);
            state.total = state.items.length;
        }
    }
});

export const { add, remove } = ListSlice.actions;

export default ListSlice.reducer;