import {createSlice} from "@reduxjs/toolkit"
import {Login} from "../actions/AuthActions";
import {updateNotifications} from "../actions/ProfileDataActions";
import {getCompletedTasks, getNotAppliedTasks} from "../actions/TaskActions";

const taskSlice = createSlice({
    name: "task",
    initialState: {
        error: false,
        load: false,
        completedTasks: [],
        notAppliedTasks: []
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
        },
        [getCompletedTasks.rejected]: (state, action) => {
            state.load = false
            state.error = true
        },
        [getNotAppliedTasks.pending]: (state) => {
            state.load = true
        },
        [getNotAppliedTasks.fulfilled]: (state, action) => {
            state.load = false
            state.error = false
            state.notAppliedTasks = action.payload
        },
        [getNotAppliedTasks.rejected]: (state, action) => {
            state.load = false
            state.error = true
        },
    }

})


export default taskSlice.reducer
