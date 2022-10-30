import { configureStore } from "@reduxjs/toolkit";
import { todoReducer } from "../slice/todoslice";

const rootReducer = {
  todoReducer,
};

export const store = configureStore({
  reducer: rootReducer,
});
