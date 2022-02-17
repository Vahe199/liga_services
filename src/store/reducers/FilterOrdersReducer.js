import {createSlice} from "@reduxjs/toolkit"
import {getRespondedTasks} from "../actions/TaskActions";
import {getCategories} from "../actions/FilterOrdersActions";


const filterOrdersSlice = createSlice({
    name: "filterOrders",
    initialState: {
        error: false,
        load: false,
        loadBtn: false,
        message: '',
        categories: []
    },
    reducers: {
        resetPartReducer: (state) => {
            state.successWork = false
            state.error = false
            state.message = ''
        },
    },
    extraReducers: {
        [getCategories.pending]: (state) => {
            state.loadBtn = true
        },
        [getCategories.fulfilled]: (state, action) => {
            state.loadBtn = false
            state.error = false
            state.categories = action.payload
        },
        [getCategories.rejected]: (state, action) => {
            state.loadBtn = false
            state.error = true
        },
    }

})

export const {resetPartReducer} = filterOrdersSlice.actions

export default filterOrdersSlice.reducer
