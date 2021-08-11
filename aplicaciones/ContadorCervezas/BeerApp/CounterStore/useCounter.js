import { useReducer } from "react";
import { decrement, increment, reset } from "./actions";

import { CounterDefaultState } from "./defaultState";
import { counterReducer } from "./reducer";

export default function useCounter() {
    const [counterState, counterDispatch] = useReducer(counterReducer, CounterDefaultState);

    return {
        value: counterState.counter,
        increment() {
            counterDispatch(increment());
        },
        reset() {
            counterDispatch(reset());
        },
        decrement() {
            counterDispatch(decrement());
        },
    };
}