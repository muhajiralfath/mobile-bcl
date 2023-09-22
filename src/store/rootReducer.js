import {combineReducers} from "redux";
import loginSlice from "./Login/LoginSlice";
import loadingSlice from "./Loading/LoadingSlice";

const rootReducer = combineReducers({
    loginSlice, loadingSlice
});

export default rootReducer;