import { configureStore } from "@reduxjs/toolkit";
import loadingReducer from "../store/Loading/LoadingSlice";
import debtorReducer from "../store/Debtor/DebtorSlice";
import loginReducer from "../store/Login/LoginSlice";
import billReducer from "../store/Bill/BillSlice";

const store = configureStore({
    reducer: {
        loading: loadingReducer,
        debtor: debtorReducer,
        login: loginReducer,
        bill: billReducer,
    },
});

export default store;
