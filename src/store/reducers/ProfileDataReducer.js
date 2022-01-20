import {createSlice} from "@reduxjs/toolkit"
import {getProfilePageData} from "../actions/ProfileDataActions";

const initialState = {
    status: 'executor',
    profile: {},
    load: false,
    error: '',
    message: "",
    success:false

}


const profileDataSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        resetProfile: () => initialState,
    },
    extraReducers: {
        [getProfilePageData.pending]: (state) => {
            state.load = true
        },
        [getProfilePageData.fulfilled]: (state, action) => {
            state.load = false
            state.profile = action.payload
            state.error = false
            state.success = true
        },
        [getProfilePageData.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.profile = {}
            state.message = action.payload
        },
    }

})

export const {resetProfile} = profileDataSlice.actions
export default profileDataSlice.reducer
