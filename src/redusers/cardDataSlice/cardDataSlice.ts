import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
import { cloneDeep } from 'lodash';

import { MealsCountParams } from "../../components";


const initialState: MealsCountParams | {} = {}

const cardDataSlice = createSlice({
    name: "CardData",
    initialState,
    reducers: {
        setBasketData(state, action: PayloadAction<MealsCountParams | {}>){
            console.log(action.payload)
            return { ...state, ...cloneDeep(action.payload) };
        },
        deleteBasketItem(state, action: PayloadAction<string>) {
            const updatedState = cloneDeep(state) as MealsCountParams;
            delete updatedState[action.payload];
            return updatedState;
        },
        clearBasket(state) {
            return initialState;
        }
    }
})


export const { setBasketData, deleteBasketItem, clearBasket } = cardDataSlice.actions
export default cardDataSlice.reducer
