import {createAsyncThunk} from "@reduxjs/toolkit";
import {instance} from "../api/api";

export const AddNewTask = createAsyncThunk(
    'task/addNewTask',
    async (data, thunkAPI) => {
        debugger
        try{
            const response = await instance.post('v1/user/create-new-task', data)
            return response.data
        }
        catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)

export const getCompletedTasks = createAsyncThunk(
    'task/getCompletedTasks',
    async (_,thunkAPI) => {
        try {
            const response = await instance.get("v1/user/completed-tasks")
            return response.data
        } catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)

export const getNotAppliedTasks = createAsyncThunk(
    'task/getNotAppliedTasks',
    async (_,thunkAPI) => {
        try {
            const response = await instance.get("v1/user/not-applied-task")
            return response.data
        } catch (e) {
            console.log(e.response, 'register error')
            return thunkAPI.rejectWithValue('Что то пошло не так')
        }
    }
)

