import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    todos: [],
    todoLoading: true
}

export const getTodo = createAsyncThunk('todo/get', async (_, thunkAPI)=>{
    try{
        let res = await axios.get('http://localhost:4015/todos');
        return res.data;
    }catch(error){
        console.log(error);
        return thunkAPI.rejectedWithValue(error);
    }
})

const TodoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:'',
    extraReducers:(builder)=>{
        builder
        .addCase(getTodo.pending, (state, action)=>{
            state.todoLoading = true
        })
        .addCase(getTodo.fulfilled, (state, action)=>{
            state.todoLoading = false
            state.todos = action.payload
        })
        .addCase(getTodo.rejected,(state, action)=>{
            state.todoLoading = false
            state.todos = []
        })
    }
})

export default TodoSlice.reducer;