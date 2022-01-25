import {createSlice} from "@reduxjs/toolkit"
import {getProfilePageData, updateNotifications, updateSocLink} from "../actions/ProfileDataActions";

const initialState = {
    status: 'executor',
    profile: {},
    load: false,
    error: '',
    message: "",
    success: false,
    successWork: false
}


const profileDataSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        resetProfile: () => initialState,
        changeGettingNotifications: (state, action) => {
            state.profile.geting_notification = action.payload
        }
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
        [updateSocLink.pending]: (state) => {
            state.load = true
        },
        [updateSocLink.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.message = action.payload.message
            state.successWork = true
        },
        [updateSocLink.rejected]: (state, action) => {
            state.load = false
            state.error = action.payload.message
            state.message = ''
            state.successWork = false
        },
        [updateNotifications.pending]: (state) => {
            state.load = true
        },
        [updateNotifications.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.message = action.payload.message
            state.successWork = true
        },
        [updateNotifications.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = ''
            state.successWork = false
        },
    }

})

export const {resetProfile, changeGettingNotifications} = profileDataSlice.actions
export default profileDataSlice.reducer
