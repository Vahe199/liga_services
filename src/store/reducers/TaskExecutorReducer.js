import {createSlice} from "@reduxjs/toolkit"
import {clickOnTask, getAllTasks} from "../actions/TaskExecutorActions";

const taskExecutorSlice = createSlice({
    name: "taskExecutor",
    initialState: {
        error: false,
        load: false,
        loadBtn: false,
        successWork: false,
        message: '',
        tasks: []
    },
    reducers: {
        resetPartReducer: (state) => {
            state.successWork = false
            state.error = false
            state.message = ''
        },
    },
    extraReducers: {
        [getAllTasks.pending]: (state) => {
            state.load = true
        },
        [getAllTasks.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.successWork = true
            state.tasks = action.payload.Tasks
        },
        [getAllTasks.rejected]: (state, action) => {
            state.load = false
            state.error = true
        },
        //click on Tasks
        [clickOnTask.pending]: (state) => {
            state.loadBtn = true
        },
        [clickOnTask.fulfilled]: (state, action) => {
            state.loadBtn = false
            state.error = false
            state.successWork = true
            state.message = 'Вы выбрали данную работу'
        },
        [clickOnTask.rejected]: (state, action) => {
            state.loadBtn = false
            state.error = true
            state.message = 'Что то пошло не так'
        },
    }


})

export const {resetPartReducer} = taskExecutorSlice.actions

export default taskExecutorSlice.reducer
