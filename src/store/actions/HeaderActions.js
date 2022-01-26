import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../api/api";

export const getHeaderData = createAsyncThunk(
    'header/getHeaderData',
    async (_,thunkAPI) => {
        try {
            const response = await instance.get("v1/pages/header")
            return response.data
        } catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)
