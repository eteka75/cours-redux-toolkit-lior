// ReduxToto

import { configureStore, createSlice } from "@reduxjs/toolkit";

// TodoSlice
const todoSlice = createSlice({
    name: "todo",
    initialState: [
        { id: 1, text: "Faire les courses", done: false },
        { id: 2, text: "Ménage !", done: true },
        { id: 3, text: "Laver les assiètes !", done: false },
      ],
      reducers:{
        addTask:(state, action)=>{
            // {type: "ADD_TASK", payload: "aller faire les courses"}
            // {type: "todo/addTask", payload: "aller faire les courses"}
            const newTask={
                id:  Date.now(),
                text: action.payload,
                done: false
            }
            state.push(newTask);
        },
        toggleTask:(state, action)=>{
            // {type: "TOGGLE_TASK", payload: 10 }
            // {type: "toto/toggleTask", payload: 10 }
            const Task= state.find(t => t.id === action.payload);
            Task.done = !Task.done;
        },
        deleteTask:(state, action)=>{
            // {type: "DELETE_TASK", payload:10}
            return state.filter((t) => t.id !== action.payload);
            
        },
        updateTask:(state, action)=>{
            const Task= state.find(t => t.id === action.payload);
            Task.text = action.payload;
        }
      }
});

// actions
export const {addTask, toggleTask, deleteTask, updateTask } = todoSlice.actions;

// Creation du store
export const store = configureStore({
    reducer: {
        todos : todoSlice.reducer
    }
})

export const createToggle = (id) => {
    return {
        type: "todo/toggleTask",
        payload: id
    }
}