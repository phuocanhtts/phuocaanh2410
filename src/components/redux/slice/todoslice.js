import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todo",

  initialState: {
    data: {
      todoList: [],
      isOpenModal: false,
      modalContent: "",
    },
  },

  reducers: {
    addForm: (state, action) => {
      state.data.todoList = [...state.data.todoList, action.payload];
    },

    removeForm: (state, action) => {
      console.log("state.remove", state.data.todoList);
      const newList = state.data.todoList.filter(
        (item) => item.id !== action.payload
      );
      state.data.todoList = newList;
    },
    showModal: (state, action) => {
      console.log("state", state);
      console.log("action", action.payload);
      const item = state.data.todoList.find(
        (item) => item.id === action.payload
      );

      state.data.isOpenModal = true;
      state.data.modalContent = item.detailTask;
    },

    closeModal: (state, action) => {
      state.data.isOpenModal = false;
      state.data.modalContent = "";
    },
  },
});

export const { addForm, removeForm, showModal, closeModal } = todoSlice.actions;

export const todoReducer = todoSlice.reducer;
