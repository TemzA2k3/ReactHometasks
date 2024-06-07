import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IDescriptionTypes, ApiState } from "../../components";
import { fetchApiData } from "../../actions/apiActions";


const initialState: ApiState = {
    data: [],
    loading: false,
    error: null,
};

const apiCallSlice = createSlice({
    name: "apiData",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchApiData.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchApiData.fulfilled, (state, action: PayloadAction<IDescriptionTypes[]>) => {
                state.loading = false;
                state.data = action.payload;
            })
            .addCase(fetchApiData.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export default apiCallSlice.reducer;

