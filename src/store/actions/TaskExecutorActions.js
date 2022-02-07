import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../api/api";

export const getAllTasks = createAsyncThunk(
    'taskExecutor/getAllTasks',
    async (_, thunkAPI) => {
        try {
            const response = await instance.get("v1/user/show-all-tasks-to-executor")
            return response.data
        } catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)