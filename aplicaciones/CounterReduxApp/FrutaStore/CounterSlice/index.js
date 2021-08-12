import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    // Store Name
    name: "counter",
    // initialState
    initialState: {
        value: 0
    },
    // Actions
    reducers: {
        increment(state, action) {
            state.value += 1
        },
        decrement(state, action) {
            state.value -= 1
        },
        reset(state, action) {
            state.value = 0
        }
    }
});

// Exportamos las acciones
export const { increment, decrement, reset } = CounterSlice.actions;

// Exportamos el reductor
export default CounterSlice.reducer;