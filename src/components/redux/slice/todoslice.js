import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
   name:"todo",
    initialState:{
        data:[],
    },
    reducers:{
      
        addForm: (state,action) => {
            state.data =[action.payload,...state.data]
        },
        removeForm: (state,action) => {
            const newList = [...state.data];
            newList.splice(action.payload, 1);
            state.data = newList;
        },
        showForm: (state,action) => {},
    },   
});

export const{getForm,addForm,removeForm,showForm} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
