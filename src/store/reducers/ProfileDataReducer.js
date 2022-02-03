import {createSlice} from "@reduxjs/toolkit"
import {
    choosesAvatarData,
    choosesProfessionData,
    getProfilePageData,
    getЕxecutorProfilePageData,
    updateNotifications,
    updateSocLink
} from "../actions/ProfileDataActions";

const initialState = {
    status: 'executor',
    profile: {},
    user:{},
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
        resetPartReducer: (state) => {
            state.successWork = false
            state.error = false
            state.message = ''
        },
        changeGettingNotifications: (state, action) => {
            state.profile.geting_notification = action.payload
        },
        changeSocLinks: (state, action) => {
            state.profile.fasebook_link = action.payload.fasebook_link
            state.profile.instagram_link = action.payload.instagram_link
        }
    },
    extraReducers: {
        [getProfilePageData.pending]: (state) => {
            state.load = true
        },
        [getProfilePageData.fulfilled]: (state, action) => {
            state.load = false
            state.profile = {}
            state.user = action.payload.user
            state.error = false
            state.success = true
        },
        [getProfilePageData.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.profile = {}
            state.message = action.payload
        },
        [getЕxecutorProfilePageData.pending]: (state) => {
            state.load = true
        },
        [getЕxecutorProfilePageData.fulfilled]: (state, action) => {
            state.load = false
            state.profile = action.payload.data[0]
            state.user = action.payload.data[0].user
            state.error = false
            state.success = true
        },
        [getЕxecutorProfilePageData.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.profile = {}
            state.message = action.payload
        },
        [choosesAvatarData.pending]: (state) => {
            state.load = true
        },
        [choosesAvatarData.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.user.img_path = action.payload.img_name
            state.message = action.payload.message
            state.successWork = true
        },
        [choosesAvatarData.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = action.payload
            state.successWork = false
        },
        [choosesProfessionData.pending]: (state) => {
            state.load = true
        },
        [choosesProfessionData.fulfilled]: (state, action) => {
            state.load = false
            state.profile = action.payload.data[0]
            state.error = false
            state.successWork = true
            state.message = "Профессия и опыт успешно обновлены"
        },
        [choosesProfessionData.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = action.payload
            state.successWork = false
        },
        [updateSocLink.pending]: (state) => {
            state.load = true
        },
        [updateSocLink.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.message = action.payload.facebook.message
            state.user = action.payload.user
            state.successWork = true
        },
        [updateSocLink.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = action.payload.facebook.message
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

export const {resetProfile, changeGettingNotifications, changeSocLinks,resetPartReducer} = profileDataSlice.actions
export default profileDataSlice.reducer
