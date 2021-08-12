import { useReducer } from "react";
import { frutasInventoryIncomeAction, frutasInventoryOutcomeAction } from "./actions";
import { frutasInventoryDefaultState, frutasInventoryTest1State, frutasInventoryTest2State, frutasInventoryTest3State } from "./defaultState";
import { frutasInventoryReducer } from "./reducer";

export default function useFrutasInventory() {
    const [
        frutasInventoryState,
        frutasInventoryDispatch
    ] = useReducer(
        frutasInventoryReducer,
        frutasInventoryDefaultState
    );

    return {
        ...frutasInventoryState,
        income({ fruta, quantity }) {
            frutasInventoryDispatch(
                frutasInventoryIncomeAction(fruta, quantity)
            );
        },
        outcome({ fruta, quantity }) {
            frutasInventoryDispatch(
                frutasInventoryOutcomeAction(fruta, quantity)
            );
        }
    };
}