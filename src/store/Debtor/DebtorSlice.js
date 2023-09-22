import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    debtor: {},
    debtorId: "",
    debtorName: "",
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
        setDebtorName: (state, action) => {
            state.debtorName = action.payload;
        },
        setDebtorId: (state, action) => {
            state.debtorId = action.payload;
        },
    },
});

export const { setDataDebtor, setDebtorName, updateDataDebtor, setDebtorId } =
    debtorSlice.actions;
export default debtorSlice.reducer;
