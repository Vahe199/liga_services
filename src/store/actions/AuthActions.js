import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const Login = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
        try{
            const response = await axios.get(`http://127.0.0.1:8000/api/v1/user/login${data}`)
            return response.data
        }
        catch (e) {
            return thunkAPI.rejectWithValue('404 error')
        }
    }
)

export const Registration = createAsyncThunk(
    'auth/registration',
    async (data, thunkAPI) => {
        debugger
        try{
            const response = await axios.post(`https://api.nver.am/api/v1/user/register${data}`)
            return response
        }
        catch (e) {
            console.log(e)
            //return thunkAPI.rejectWithValue('404 error')
        }
    }
)