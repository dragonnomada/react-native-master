export const FRUTAS_INVENTORY_ACTION_TYPES = {
    IN: "FRUTAS_INVENTORY_ACTION_IN",
    OUT: "FRUTAS_INVENTORY_ACTION_OUT",
};

export function income(fruta, quantity) {
    return {
        type: FRUTAS_INVENTORY_ACTION_TYPES.IN,
        data: {
            fruta,
            quantity
        }
    };
}

export function outcome(fruta, quantity) {
    return {
        type: FRUTAS_INVENTORY_ACTION_TYPES.OUT,
        data: {
            fruta,
            quantity
        }
    }
}