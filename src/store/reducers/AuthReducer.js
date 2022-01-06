import {createSlice} from "@reduxjs/toolkit"

const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: true,
        status: 'executor',
    },
    reducers: {
        changeStatus: (state, action) => {
            state.status = action.payload
        },
    }
})

export const {changeStatus} = authSlice.actions


export default authSlice.reducer
