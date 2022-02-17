import {createSlice} from "@reduxjs/toolkit"
import {
    AddNewTask, createRating, deleteTask, finishTask,
    getCompletedTasks,
    getInProcessTasks,
    getNotAppliedTasks,
    getRespondedTasks, rejectExecutor, selectExecutor
} from "../actions/TaskActions";
const  initialState = {
    error: false,
    load: false,
    loadBtn: false,
    rejectLoadBtn: false,
    successWork: false,
    message: '',
    completedTasks: [],
    notAppliedTasks: [],
    respondedTasks: [],
    inProcessTasks: [],
    status: 'notApplied',
}
const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        resetPartReducer: (state) => {
            state.successWork = false
            state.error = false
            state.message = ''
        },
        resetTask: () => initialState,
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
            state.respondedTasks = action.payload
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
            state.load = true
        },
        [selectExecutor.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.message = 'Исполнитель успешно вибран'
            state.successWork = true
        },
        [selectExecutor.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = 'Что то пошло не так'
        },
        //reject executor
        [rejectExecutor.pending]: (state) => {
            state.load = true
        },
        [rejectExecutor.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.message = 'Исполнитель успешно удален'
            state.successWork = true
        },
        [rejectExecutor.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = 'Что то пошло не так'
        },
        //finish task
        [finishTask.pending]: (state) => {
            state.load = true
        },
        [finishTask.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.message = 'Вы успешно завершили'
            state.successWork = true
        },
        [finishTask.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = 'Что то пошло не так'
        },
        //delete task
        [deleteTask.pending]: (state) => {
            state.loadBtn = true
        },
        [deleteTask.fulfilled]: (state, action) => {
            state.loadBtn = false
            state.error = false
            state.message = action.payload.message
            state.successWork = true
        },
        [deleteTask.rejected]: (state, action) => {
            state.loadBtn = false
            state.error = true
            state.message = action.payload.message
        },
        //create rating
        [createRating.pending]: (state) => {
            state.load = true
        },
        [createRating.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.message = 'Все прошло успешно'
            state.successWork = true
        },
        [createRating.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = action.payload.message
        },
    }

})

export const {resetPartReducer, resetTask} = taskSlice.actions

export default taskSlice.reducer
