import {combineReducers} from "redux";
import loginSlice from "./Login/LoginSlice";

const rootReducer = combineReducers({
    loginSlice
});

export default rootReducer;