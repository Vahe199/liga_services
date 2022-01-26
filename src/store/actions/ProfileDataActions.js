import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../api/api";

export const getProfilePageData = createAsyncThunk(
    'profile/getProfilePageData',
    async (_,thunkAPI) => {
        debugger
        try {
            const response = await instance.get("v1/user/show-profile-page")
            return response.data
        } catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
            // return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)

export const choosesAvatarData = createAsyncThunk(
    'profile/choosesAvatar',
    async (data,thunkAPI) => {
        debugger
        try {
            const response = await instance.post("v1/user/update-avatar",data)
            debugger
            return response.data
        } catch (e) {
            console.log(e.response, 'avatar error')
            debugger
            return thunkAPI.rejectWithValue('Что то пошло не так')
            // return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)

export const getProfileLogo = createAsyncThunk(
    'profile/getProfileLogo',
    async (_,thunkAPI) => {
        try {
            const response = await instance.get("v1/user/show-profile-page")
            return response.data
        } catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
            // return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)

export const updateSocLink = createAsyncThunk(
    'profile/updateSocLink',
    async (data,thunkAPI) => {
        debugger
        try {
            const response = await instance.post("v1/user/update-soclink", data)
            return response.data
        } catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
            // return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)

export const updateNotifications = createAsyncThunk(
    'profile/updateNotifications',
    async (data,thunkAPI) => {
        debugger
        try {
            const response = await instance.post("v1/user/update-notification", data)
            return response.data
        } catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
            // return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)
