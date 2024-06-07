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
            state = cloneDeep(action.payload)
            return state
        }
    }
})


export const { setBasketData } = cardDataSlice.actions
export default cardDataSlice.reducer
