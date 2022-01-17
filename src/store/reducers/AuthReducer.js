import {createSlice} from "@reduxjs/toolkit"
import {Login, Registration} from "../actions/AuthActions";

const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: false,
        status: 'executor',
        user:{},
        load:false,
        error:false,
        messages:""
    },
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload
        },
        logIn:() =>{

        }
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
            state.load = true
        },
        [Registration.fulfilled]: (state, action) => {
            state.load = false
            state.messages = action.payload
            state.error = false
        },
        [Registration.rejected]: (state, action) => {
            state.load = false
            state.error = action.payload
        }
    }

})

export const {changeStatus} = authSlice.actions


export default authSlice.reducer
