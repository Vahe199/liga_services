import {combineReducers, configureStore} from "@reduxjs/toolkit";
import AuthReducer from "./reducers/AuthReducer";
import TaskReducer from "./reducers/TaskReducer";
import ProfileDataReducer from "./reducers/ProfileDataReducer";


const rootReducer = combineReducers({
    auth: AuthReducer,
    task: TaskReducer,
    profile: ProfileDataReducer
})
//MIDDLEWARE
const localStorageMiddleware = ({ getState }) => {
    return next => action => {
        const result = next(action);
        localStorage.setItem('applicationState', JSON.stringify(getState()));
        return result;
    };
};

const reHydrateStore = () => {
    if (localStorage.getItem('applicationState') !== null) {
        return JSON.parse(localStorage.getItem('applicationState')); // re-hydrate the store
    }
};
const store = configureStore({
    reducer: rootReducer,
    preloadedState: reHydrateStore(),
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat(localStorageMiddleware),

})

window.store = store;

export default store;
