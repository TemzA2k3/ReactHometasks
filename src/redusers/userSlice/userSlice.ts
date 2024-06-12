import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserState } from "./userSliceTypes";


const initialState: IUserState = {
    user: null,
    error: null,
    isLogged: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action: PayloadAction<{ email: string; uid: string }>) {
            state.user = { email: action.payload.email, uid: action.payload.uid };
            state.error = null;
            state.isLogged = true
        },
        clearUser(state) {
            state.user = null;
             state.isLogged = false
        },
        setError(state, action: PayloadAction<string>) {
            state.error = action.payload;
        },
        clearError(state) {
            state.error = null;
        },
    },
});

export const { setUser, clearUser, setError, clearError } = userSlice.actions;
export default userSlice.reducer;
