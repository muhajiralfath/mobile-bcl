import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bills: [],
};

const billSlice = createSlice({
    name: "bills",
    initialState,
    reducers: {
        setBills: (state, action) => {
            state.bills = action.payload;
        },
    },
});

export const { setBills } = billSlice.actions;
export default billSlice.reducer;
