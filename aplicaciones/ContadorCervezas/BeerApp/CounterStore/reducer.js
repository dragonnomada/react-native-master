// LA FUNCIÓN DE REDUCCIÓN QUE INDICA CÓMO SE TRANSFORMA UN ESTADO DADA UNA ACCIÓN DESPACHADA
// state - { counter: number }

import { COUNTER_ACTION_TYPES } from "./actions";

// action - { type: string, payload: any }
export function counterReducer(state, action) {
    // ACCIÓN: TIPO DECREMENT
    if (action.type === COUNTER_ACTION_TYPES.DECREMENT) {
        if (state.counter <= 0) {
            return {
                counter: 0
            };
        }

        return {
            counter: state.counter - 1
        };
    }

    // ACCIÓN: TIPO RESET
    if (action.type === COUNTER_ACTION_TYPES.RESET) {
        return {
            counter: 0
        };
    }

    // ACCIÓN: TIPO INCREMENT
    if (action.type === COUNTER_ACTION_TYPES.INCREMENT) {
        return {
            counter: state.counter + 1
        };
    }
    
    // ACCIÓN: OTRO TIPO
    return state;
}