import { configureStore } from "@reduxjs/toolkit";
import todos from "./todosSlice";



const store = configureStore({
    reducer:{
        todos: todos.reducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type Appstate = ReturnType<typeof store.getState>;
export default store;