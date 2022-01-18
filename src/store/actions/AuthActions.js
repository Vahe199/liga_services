import {createAsyncThunk} from "@reduxjs/toolkit";
import {authApi} from "../../api/api";

export const Login = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
        try{
            const response= await authApi.login(data)
            localStorage.setItem('token', response?.data?.access_token);
            debugger
            return response.data
        }
        catch (e) {
            console.log(e)
            debugger
            return thunkAPI.rejectWithValue('404 error')
        }
    }
)

export const Registration = createAsyncThunk(
    'auth/registration',
    async (data, thunkAPI) => {
        debugger
        try{
            const response = await authApi.registration(data)
            return response.data
            }
        catch (e) {
            console.log(e, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
        }
        }
)
