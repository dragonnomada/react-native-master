import { FRUTAS_INVENTORY_ACTION_TYPES } from "./actions";

export function frutasInventoryReducer(state, action) {

    if (action.type === FRUTAS_INVENTORY_ACTION_TYPES.IN) {
        const { fruta, quantity } = action.data;

        // La fruta ya existe
        if (state.frutasNames.some(name => name === fruta)) {
            return {
                ...state,
                frutas: state.frutas.map(frutaInfo => {
                    if (frutaInfo.name === fruta) {
                        frutaInfo.quantity += quantity;
                    }
                    return frutaInfo;
                }),
                message: `Se actualizó la cantidad de la fruta ${fruta}`,
                error: false
            };
        }

        return {
            ...state,
            frutasNames: [...state.frutasNames, fruta],
            frutas: [...state.frutas, { fruta, quantity }],
            message: `Se agregó la fruta ${fruta}`,
            error: false
        }
    }

    if (action.type === FRUTAS_INVENTORY_ACTION_TYPES.OUT) {
        const { fruta, quantity } = action.data;

        // La fruta ya existe
        if (state.frutasNames.some(name => name === fruta)) {
            let success = true;
            const newFrutas = state.frutas.map(frutaInfo => {
                if (frutaInfo.name === fruta) {
                    if (frutaInfo.quantity - quantity >= 0) {
                        frutaInfo.quantity -= quantity;
                    } else {
                        success = false;
                    }
                }
                return frutaInfo;
            });

            if (!success) {
                return {
                    ...state,
                    message: `No se puede sacar esa cantidad de la fruta ${fruta}`,
                    error: true
                }
            }

            return {
                ...state,
                frutas: newFrutas,
                message: `Se actualizó la cantidad de ${fruta}`,
                error: false
            };
        }

        return state;
    }

    return state;

}