import {createSlice} from "@reduxjs/toolkit"
import {Login} from "../actions/AuthActions";
import {updateNotifications} from "../actions/ProfileDataActions";
import {
    AddNewTask,
    getCompletedTasks,
    getInProcessTasks,
    getNotAppliedTasks,
    getRespondedTasks
} from "../actions/TaskActions";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        error: false,
        load: false,
        successWork: false,
        message: '',
        completedTasks: [],
        isCompletedTasks: false,
        notAppliedTasks: [],
        isNotAppliedTasks: false,
        respondedTasks: [],
        isRespondedTasks: false,
        inProcessTasks: [],
        isProcessTasks: false,
        status: 'notApplied'
    },
    reducers: {

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
        [AddNewTask.pending]: (state) => {
            state.load = true
        },
        [AddNewTask.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.successWork = true
            state.message = action.payload.message
        },
        [AddNewTask.rejected]: (state, action) => {
            state.load = false
            state.error = true
            state.message = action.payload.message
        },
    }

})


export default taskSlice.reducer
