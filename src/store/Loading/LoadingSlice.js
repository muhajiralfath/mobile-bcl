import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
};

const loadingSlice = createSlice({
  name: "setIsLoading",
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      return (state.isLoading = action.payload);
    },
  },
});

export const { setIsLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
