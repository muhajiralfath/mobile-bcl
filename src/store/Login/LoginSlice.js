import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    email: 0
}

const loginSlice = createSlice({
    name: 'setEmail',
    initialState,
    reducers: {
        setEmail: (state, action) => {
            return state.email = action.payload;
        }
    }
});

export const { setEmail } = loginSlice.actions;
export default loginSlice.reducer;