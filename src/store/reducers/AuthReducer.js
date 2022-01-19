import {createSlice} from "@reduxjs/toolkit"
import {Login, Logouts, Registration} from "../actions/AuthActions";

const initialState = {
    auth: false,
    authStatus: false,
    status: 'executor',
    user: {},
    load: false,
    error: '',
    message: "",
    loadAuth: false,
    errorAuth: '',
    success:false

}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload
        },
        resetAuth(state) {
            state.success = false
            state.error = false
        }
    },
    extraReducers: {
        [Registration.pending]: (state) => {
            state.loadAuth = true
        },
        [Registration.fulfilled]: (state, action) => {
            state.loadAuth = false
            state.message = action.payload.message
            state.error = false
            state.success = true
        },
        [Registration.rejected]: (state, action) => {
            state.loadAuth = false
            state.error = true
            state.message = action.payload
        },
        [Login.pending]: (state) => {
            state.load = true
        },
        [Login.fulfilled]: (state, action) => {
            state.load = false
            state.user = action.payload.user
            state.error = false
            state.auth = true
            state.success = true
        },
        [Login.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = action.payload
            state.auth = false
        },
        [Logouts.pending]: (state) => {
            state.load = true
        },
        [Logouts.fulfilled]: () => initialState,

        [Logouts.rejected]: (state, action) => {
            state.load = false
            state.error = action.payload
            state.auth = false
        },

    }

})

export const {changeStatus,resetAuth} = authSlice.actions


export default authSlice.reducer
