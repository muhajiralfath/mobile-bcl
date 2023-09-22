import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../store/Loading/LoadingSlice";
import debtorReducer from "../store/Debtor/DebtorSlice";
import loginReducer from "../store/Login/LoginSlice";

const store = configureStore({
    reducer: {
        loading: loadingReducer,
        debtor: debtorReducer,
        login: loginReducer,
    },
});

export default store;
