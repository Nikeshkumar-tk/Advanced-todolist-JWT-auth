import { createSlice } from '@reduxjs/toolkit'
import {getMyTodos} from './services/todoServices'

const initialState = {
    todos:[],
    count:0,
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{

        setTodos:(state, action) => {
            state.todos = action.payload
        },
        deleteTodo:(state, action) => {
            state.todos = state.todos.filter((todo) => todo._id != action.id)
        }
    }
})
export const { setTodos } = todoSlice.actions

export default todoSlice.reducer