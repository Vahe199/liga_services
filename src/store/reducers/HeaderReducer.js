import {createSlice} from "@reduxjs/toolkit";
import {updateSocLink} from "../actions/ProfileDataActions";
import {getHeaderData, getRayonData, getRegionData} from "../actions/HeaderActions";

const initialState = {
    load: false,
    error: '',
    message: "",
    header: {},
    successWork: false,
    regions:[],
    rayons:[]
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
        [getRegionData.fulfilled]: (state, action) => {
            state.regions = action.payload.message
        },
        [getRayonData.fulfilled]: (state, action) => {
         state.rayons = action.payload.message
        },
    }

})


export default headerSlice.reducer
