import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../api/api";

export const getProfilePageData = createAsyncThunk(
    'profile/getProfilePageData',
    async (thunkAPI) => {
        debugger
        try {
            const response = await instance.get(`v1/user/show-profile-page`)
            return response.data
        } catch (e) {
            console.log(e, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)