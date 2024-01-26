import { createSlice } from "@reduxjs/toolkit";

const gameSlice = createSlice({
  name: "game",
  initialState: {
    isActiveGameMode: false,
    errors: 0,
  },
  reducers: {
    setIsActiveGameMode(state) {
      state.isActiveGameMode = !state.isActiveGameMode;
    },
    updateErrors(state) {
      state.errors = state.errors + 1;
    },
    removeErrors(state) {
      state.errors = 0;
    },
  },
});

export const { setIsActiveGameMode, updateErrors, removeErrors } = gameSlice.actions;
export const gameReducer = gameSlice.reducer;
