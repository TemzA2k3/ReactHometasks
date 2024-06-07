import { configureStore } from "@reduxjs/toolkit";
import cardDataSlice from "../redusers/cardDataSlice/cardDataSlice";
import apiDataSlice from "../redusers/apiSlice/apiCallSlice"
import userReducer from "../redusers/userSlice/userSlice"

export const store = configureStore({
    reducer: {
        addDataToBasket: cardDataSlice,
        addApiData: apiDataSlice,
        user: userReducer,
    },
});

export type IRootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
