import { createAsyncThunk } from '@reduxjs/toolkit';

import { IDescriptionTypes } from "../components";

export const fetchApiData = createAsyncThunk(
    'apiData/fetchApiData',
    async ( buttonName: string, { rejectWithValue }) => {
        try {
            const response = await fetch("https://65de35f3dccfcd562f5691bb.mockapi.io/api/v1/meals");
            const data: IDescriptionTypes[] = await response.json();
            return data.filter((item) => item.category === buttonName);
        } catch (error) {
            let errorMessage = "An unknown error occurred";
            if (error instanceof Error) {
                errorMessage = error.message;
            }
            return rejectWithValue(errorMessage);
        }
    }
);
