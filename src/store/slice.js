import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "slice",
  initialState: {
    counter1: 1,
    counter2: 1,
  },
  reducers: {
    incrementCounter1(state, value) {
      state.counter1++;
    },
    incrementCounter2(state, value) {
      state.counter2++;
    },
  },
});

const modalSlice2 = createSlice({
  name: "slice2",
  initialState: {
    counter1: 1,
    counter2: 1,
  },
  reducers: {
    incrementCounter1(state, value) {
      state.counter1++;
    },
    incrementCounter2(state, value) {
      state.counter2++;
    },
  },
});

export const { incrementCounter1, incrementCounter2 } =
  modalSlice2.actions;

export default modalSlice2.reducer;
