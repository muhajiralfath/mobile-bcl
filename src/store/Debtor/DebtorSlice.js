import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    debtor: {},
};

const debtorSlice = createSlice({
    name: "debtor",
    initialState,
    reducers: {
        setDataDebtor: (state, action) => {
            state.debtor = { ...action.payload };
        },
        updateDataDebtor: (state, action) => {
            Object.assign(state.debtor, action.payload);
        },
    },
});

export const { debtor } = debtorSlice.actions;
export default debtorSlice.reducer;
