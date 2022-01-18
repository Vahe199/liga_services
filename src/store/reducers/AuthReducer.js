import {createSlice} from "@reduxjs/toolkit"
import {Login, Registration} from "../actions/AuthActions";

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
        }
    }

})

export const {changeStatus} = authSlice.actions


export default authSlice.reducer
