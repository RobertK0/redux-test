import { configureStore } from "@reduxjs/toolkit";
import { modalSlice } from "./slice";
import modalReducer from "./slice";

const store = configureStore({
  reducer: {
    slice: modalSlice.reducer,
    slice2: modalReducer,
  },
});

export const sliceActions = modalSlice.actions;

export default store;
