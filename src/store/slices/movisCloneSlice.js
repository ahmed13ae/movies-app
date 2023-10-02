import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const moviesCloneSlice = createSlice({
  name: "moviesClone",
  initialState,
  reducers: {
    setMoviesClone: (state, action) => {
      return action.payload;
    },
  },
});

export const { setMoviesClone } = moviesCloneSlice.actions;

export default moviesCloneSlice.reducer;