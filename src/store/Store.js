import {combineReducers, configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";

const rootReducer = combineReducers({
    auth: AuthReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;