import {createSlice} from "@reduxjs/toolkit"
import {Login, Logouts, Registration} from "../actions/AuthActions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: false,
        authStatus: false,
        status: 'executor',
        user: {},
        load: false,
        error: '',
        message: "",
        loadAuth: false,
        errorAuth: '',

    },
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload
        },
    },
    extraReducers: {
        [Registration.pending]: (state) => {
            state.loadAuth = true
        },
        [Registration.fulfilled]: (state, action) => {
            state.loadAuth = false
            state.message = action.payload
            state.errorAuth = false
        },
        [Registration.rejected]: (state, action) => {
            state.loadAuth = false
            state.errorAuth = action.payload
            state.message = ''
        },
        [Login.pending]: (state) => {
            state.load = true
        },
        [Login.fulfilled]: (state, action) => {
            state.load = false
            state.user = action.payload.user
            state.error = false
            state.auth = true
        },
        [Login.rejected]: (state, action) => {
            state.load = false
            state.error = action.payload
            state.auth = false
        },
        [Logouts.pending]: (state) => {
            state.load = true
        },
        [Logouts.fulfilled]: (state, action) => {
            state.load = false
            state.user ={}
            state.error = false
            state.auth = false
            state.authStatus = false
            state.status = 'executor'
            state.smessage = action.payload
            state.user = {}
        },
        [Logouts.rejected]: (state, action) => {
            state.load = false
            state.error = action.payload
            state.auth = false
        },

    }

})

export const {changeStatus} = authSlice.actions


export default authSlice.reducer
