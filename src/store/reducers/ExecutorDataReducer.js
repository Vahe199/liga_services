import {createSlice} from "@reduxjs/toolkit";
import {getExecutorPageData} from "../actions/ExecutorDataActions";

const initialState = {
    executor: {},
    load: false,
    error: '',
    message: ""
}


const executorDataSlice = createSlice({
    name: "executor",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getExecutorPageData.pending]: (state) => {
            state.load = true
        },
        [getExecutorPageData.fulfilled]: (state, action) => {
            state.load = false
            state.executor = action.payload.data
            state.error = false
            state.message = ''
        },
        [getExecutorPageData.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.executor = {}
            state.message = action.payload
        },

    }
})

export default executorDataSlice.reducer
