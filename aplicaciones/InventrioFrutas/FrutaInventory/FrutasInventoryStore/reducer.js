import { isFrtuasInventoryIncomeAction, isFrtuasInventoryOutcomeAction } from "./actions";

export function frutasInventoryReducer(state, action) {

    if (isFrtuasInventoryIncomeAction(action)) {
        return reduceFrutasInventoryIncome(state, action);
    }

    if (isFrtuasInventoryOutcomeAction(action)) {
        return reduceFrutasInventoryOutcome(state, action);
    }

    return {
        ...state,
        message: `La acción no pudo ser validada ${JSON.stringify(action)}`,
        error: true
    };

}

function reduceFrutasInventoryIncome(state, action) {
    const { fruta, quantity } = action.data;

    // La fruta ya existe
    if (state.frutasNames.some(name => name === fruta)) {
        const newFrutas = state.frutas.map(frutaInfo => {
            if (frutaInfo.name === fruta) {
                frutaInfo.quantity += quantity;
            }
            return frutaInfo;
        });

        return {
            ...state,
            total: newFrutas.reduce((total, fruta) => total + fruta.quantity, 0),
            frutas: newFrutas,
            message: `Se actualizó la cantidad de la fruta ${fruta}`,
            error: false
        };
    }

    return {
        ...state,
        total: state.total + quantity,
        frutasNames: [...state.frutasNames, fruta],
        frutas: [...state.frutas, { fruta, quantity }],
        message: `Se agregó la fruta ${fruta}`,
        error: false
    }
}

function reduceFrutasInventoryOutcome(state, action) {
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
            total: newFrutas.reduce((total, fruta) => total + fruta.quantity, 0),
            frutas: newFrutas,
            message: `Se actualizó la cantidad de ${fruta}`,
            error: false
        };
    }

    return state;
}
