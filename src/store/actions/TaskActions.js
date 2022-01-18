import {createAsyncThunk} from "@reduxjs/toolkit";
import {authApi, instance} from "../../api/api";
import axios from "axios";

export const AddNewTask = createAsyncThunk(
    'task/addNewTask',
    async (data, thunkAPI) => {
        debugger
        try{
            const response = await instance.post('v1/user/create-new-task', data)
            return response.data
        }
        catch (e) {
            console.log(e, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)