import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";
const instance = axios.create({
    baseURL: 'https://api.nver.am/api/',
    // headers: {
    //     "Content-Type": "application/json",
    //     "Accept":"*/*"
    //     // 'Authorization': `Bearer ${null}`
    // }
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})
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
            const response = await instance.post(`v1/user/register`, data)
            return response
            }
        catch (e) {
            console.log(e,"register err")
        }
        }
)