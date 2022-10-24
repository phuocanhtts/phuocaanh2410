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
        removeForm: (state,action) => {},
        showForm: (state,action) => {},
    },   
});

export const{addForm,removeForm,showForm} = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
