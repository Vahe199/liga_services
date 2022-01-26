import {createSlice} from "@reduxjs/toolkit";
import {updateSocLink} from "../actions/ProfileDataActions";
import {getHeaderData} from "../actions/HeaderActions";

const initialState = {
    load: false,
    error: '',
    message: "",
    header: {},
    successWork: false
}


const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {

    },
    extraReducers: {
        [getHeaderData.pending]: (state) => {
            state.load = true
        },
        [getHeaderData.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.header = action.payload
            state.successWork = true
        },
        [getHeaderData.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = action.payload
            state.successWork = false
        },
    }

})


export default headerSlice.reducer
