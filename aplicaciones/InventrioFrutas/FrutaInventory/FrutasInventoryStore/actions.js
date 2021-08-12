export const FRUTAS_INVENTORY_ACTION_TYPES = {
    INCOME: "FRUTAS_INVENTORY_ACTION_INCOME",
    OUTCOME: "FRUTAS_INVENTORY_ACTION_OUTCOME",
};

export function frutasInventoryIncomeAction(fruta, quantity) {
    return {
        type: FRUTAS_INVENTORY_ACTION_TYPES.INCOME,
        data: {
            fruta,
            quantity
        }
    };
}

export function isFrtuasInventoryIncomeAction(action) {
    if (action.type !== FRUTAS_INVENTORY_ACTION_TYPES.INCOME) return false;

    if (!action.data || typeof action.data !== "object") return false;

    if (typeof action.data.fruta !== "string") return false;

    if (isNaN(Number(action.data.quantity)) || Number(action.data.quantity) <= 0) return false;

    return true;
}

export function frutasInventoryOutcomeAction(fruta, quantity) {
    return {
        type: FRUTAS_INVENTORY_ACTION_TYPES.OUTCOME,
        data: {
            fruta,
            quantity
        }
    };
}

export function isFrtuasInventoryOutcomeAction(action) {
    if (action.type !== FRUTAS_INVENTORY_ACTION_TYPES.OUTCOME) return false;

    if (!action.data || typeof action.data !== "object") return false;

    if (typeof action.data.fruta !== "string") return false;

    if (isNaN(Number(action.data.quantity)) || Number(action.data.quantity) <= 0) return false;

    return true;
}