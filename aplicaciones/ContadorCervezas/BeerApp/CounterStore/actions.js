export const COUNTER_ACTION_TYPES = {
    INCREMENT: "COUNTER_INCREMENT",
    DECREMENT: "COUNTER_DECREMENT",
    RESET: "COUNTER_RESET"
};

export function increment() {
    return {
        type: COUNTER_ACTION_TYPES.INCREMENT
    };
}

export function decrement() {
    return {
        type: COUNTER_ACTION_TYPES.DECREMENT
    };
}

export function reset() {
    return {
        type: COUNTER_ACTION_TYPES.RESET
    };
}