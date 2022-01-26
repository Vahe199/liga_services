import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../api/api";

export const getExecutorPageData = createAsyncThunk(
    'executor/getExecutorPageData',
    async (_,thunkAPI) => {
        try {
            const response = await instance.get("v1/user/show-executor-profile")
            return response.data
        } catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)
