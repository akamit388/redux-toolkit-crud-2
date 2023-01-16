import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
    todos:[],
    todoLoading:true,
    todoDeleteLoading:false,
    todoAddLoading:false,
    todoUpdateLoading:false
}

export const getTodo = createAsyncThunk('todo/get', async (_,thunkAPI)=>{
    try{
        let res = await axios.get('http://localhost:4015/todos');
        return res.data;
    }catch(error){
        console.log(error);
        return thunkAPI.rejectWithValue(error)
    }
})

export const deleteTodo = createAsyncThunk('todo/delete', async (id, thunkAPI)=>{
    try{
        let res = await axios.delete(`http://localhost:4015/todos/${id}`);
        return id;
    }catch(error){
        console.log(error);
        return thunkAPI.rejectWithValue(error);
    }
})

const TodoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(getTodo.pending, (state, action)=>{
            state.todoLoading = true
        })
        .addCase(getTodo.fulfilled, (state, action)=>{
            state.todoLoading = false
            state.todos = action.payload
        })
        .addCase(getTodo.rejected, (state, action)=>{
            state.todoLoading = false
            state.todos = []
        })
        .addCase(deleteTodo.pending, (state, action)=>{
            state.todoDeleteLoading = true
        })
        .addCase(deleteTodo.fulfilled, (state, action)=>{
            state.todoDeleteLoading = false
            state.todos = state.books.filter((book)=>book.id !== action.payload)
        })
        .addCase(deleteTodo.rejected, (state, action)=>{
            state.todoDeleteLoading = false
        })
    }

    
})

export default TodoSlice.reducer