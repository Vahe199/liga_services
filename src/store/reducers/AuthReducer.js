import {createSlice} from "@reduxjs/toolkit"


const authSlice = createSlice({
    name: "auth",
    initialState: {
        auth: false,
        status: '',
    },
    reducers: {
    }
})

export default authSlice.reducer
