import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {instance} from "../api/api";

// const token = localStorage.getItem('token') ? localStorage.getItem('token') : null;
const setAuthHeader = (token) => {
    instance.defaults.headers.Authorization = `Bearer ${token}`
}
// const instance = axios.create({
//     baseURL: 'https://api.nver.am/api/',
//     headers: {
//         'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json',
//         'Access-Control-Allow-Origin' : '*',
//         'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
//         'Authorization': `Bearer ${token}`
//     }
// })

export const Registration = createAsyncThunk(
    'auth/registration',
    async (data, thunkAPI) => {
        try {
            const response = await instance.post(`v1/user/register`, data)
            return response.data
        } catch (e) {
            console.log(e.response.data.errors[0], 'register error')
            return thunkAPI.rejectWithValue(e.response.data.errors[0])
        }
    }
)

export const Login = createAsyncThunk(
    'auth/login',
    async (data, thunkAPI) => {
        try{
            const response= await instance.post(`v1/user/login`, data)
            localStorage.setItem('token', response?.data?.access_token);
            setAuthHeader(response?.data?.access_token)
            return response.data
        }
        catch (e) {
            console.log(e)
            return thunkAPI.rejectWithValue('неверный адрес электронной почты или пароль')
        }
    }
)

export const Logouts = createAsyncThunk(
    'auth/logout',
    async ( thunkAPI) => {
        try{
            const response= await instance.post("v1/user/logout")
             localStorage.removeItem('token');
            return response.data
        }
        catch (e) {
            console.log(e.message)
            return thunkAPI.rejectWithValue('404 error')
        }
    }
)

