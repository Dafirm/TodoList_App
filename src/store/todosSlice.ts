import { createSlice, PayloadAction } from "@reduxjs/toolkit";


import { v4 as uuid } from "uuid";

export interface Todo  {
    id: string;
    message: string;
    completed: boolean
}




const todos = createSlice({
  name: "todos",
  initialState: [] as Todo[] ,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.push({
        id: uuid(),
        message: action.payload,
        completed: false,
      });
    },
    deleteTodo: (state, action: PayloadAction<string>) => {
    return state.filter((todo) => todo.id !== action.payload)
    },



    completedTodo: (state, action) => {
      const completeTodo = state.find(
        (todo) => todo.id === action.payload
      );
      if(completeTodo){
        completeTodo.completed = true
      }

      return state;
    },

    sort: (state) => {
      state.sort((a, b) => a.message.localeCompare(b.message));
    },
  },
});

export const {sort, deleteTodo, addTodo, completedTodo} = todos.actions

export default todos;