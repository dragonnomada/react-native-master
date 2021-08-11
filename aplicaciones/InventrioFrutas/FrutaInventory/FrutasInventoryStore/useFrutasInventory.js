import { useReducer } from "react";
import { income, outcome } from "./actions";
import { FrutasInventoryDefaultState } from "./defaultState";
import { frutasInventoryReducer } from "./reducer";

export default function useFrutasInventory() {
    const [frutasInventoryState, frutasInventoryDispatch] = useReducer(frutasInventoryReducer, FrutasInventoryDefaultState);

    return {
        ...frutasInventoryState,
        income(fruta, quantity) {
            frutasInventoryDispatch(income(fruta, quantity));
        },
        outcome(fruta, quantity) {
            frutasInventoryDispatch(outcome(fruta, quantity));
        }
    };
}