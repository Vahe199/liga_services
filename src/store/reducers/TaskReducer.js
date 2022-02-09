import {createSlice} from "@reduxjs/toolkit"
import {Login} from "../actions/AuthActions";
import {updateNotifications} from "../actions/ProfileDataActions";
import {
    AddNewTask, finishTask,
    getCompletedTasks,
    getInProcessTasks,
    getNotAppliedTasks,
    getRespondedTasks, rejectExecutor, selectExecutor
} from "../actions/TaskActions";
import {getAllTasks} from "../actions/TaskExecutorActions";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        error: false,
        load: false,
        loadBtn: false,
        successWork: false,
        message: '',
        completedTasks: [],
        notAppliedTasks: [],
        respondedTasks: [],
        inProcessTasks: [],
        status: 'notApplied',
    },
    reducers: {
        resetPartReducer: (state) => {
            state.successWork = false
            state.error = false
            state.message = ''
        },
    },
    extraReducers: {
        [getCompletedTasks.pending]: (state) => {
            state.load = true
        },
        [getCompletedTasks.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.completedTasks = action.payload
            state.status = 'completed'
        },
        [getCompletedTasks.rejected]: (state, action) => {
            state.load = false
            state.error = true
        },
        //notApplied
        [getNotAppliedTasks.pending]: (state) => {
            state.load = true
        },
        [getNotAppliedTasks.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.notAppliedTasks = action.payload
            state.status = 'notApplied'
        },
        [getNotAppliedTasks.rejected]: (state, action) => {
            state.load = false
            state.error = true
        },
        //responded tasks
        [getRespondedTasks.pending]: (state) => {
            state.load = true
        },
        [getRespondedTasks.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.respondedTasks = action.payload.message
            state.status = 'applied'
        },
        [getRespondedTasks.rejected]: (state, action) => {
            state.load = false
            state.error = true
        },
        //In process tasks
        [getInProcessTasks.pending]: (state) => {
            state.load = true
        },
        [getInProcessTasks.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.inProcessTasks = action.payload.tasks
            state.status = 'inProcess'
        },
        [getInProcessTasks.rejected]: (state, action) => {
            state.load = false
            state.error = true
        },
        //create task
        [AddNewTask.pending]: (state) => {
            state.loadBtn = true
        },
        [AddNewTask.fulfilled]: (state, action) => {
            state.loadBtn = false
            state.error = false
            state.successWork = true
            state.message = 'Заказ успешно добавлен'
        },
        [AddNewTask.rejected]: (state, action) => {
            state.loadBtn = false
            state.error = true
            state.message = 'Что то пошло не так'
        },
        //select executor
        [selectExecutor.pending]: (state) => {
            state.loadBtn = true
        },
        [selectExecutor.fulfilled]: (state, action) => {
            state.loadBtn = false
            state.error = false
            state.message = 'Исполнитель успешно вибран'
            state.successWork = true
        },
        [selectExecutor.rejected]: (state, action) => {
            state.loadBtn = false
            state.error = true
            state.message = 'Что то пошло не так'
        },
        //finish task
        [finishTask.pending]: (state) => {
            state.loadBtn = true
        },
        [finishTask.fulfilled]: (state, action) => {
            state.loadBtn = false
            state.error = false
            state.message = 'Вы успешно завершили'
            state.successWork = true
        },
        [finishTask.rejected]: (state, action) => {
            state.loadBtn = false
            state.error = true
            state.message = 'Что то пошло не так'
        },
        //reject executor
        [rejectExecutor.pending]: (state) => {
            state.loadBtn = true
        },
        [rejectExecutor.fulfilled]: (state, action) => {
            state.loadBtn = false
            state.error = false
            state.message = 'Вы удалили данного исполнителя'
            state.successWork = true
        },
        [rejectExecutor.rejected]: (state, action) => {
            state.loadBtn = false
            state.error = true
            state.message = 'Что то пошло не так'
        },
    }

})

export const {resetPartReducer} = taskSlice.actions

export default taskSlice.reducer
