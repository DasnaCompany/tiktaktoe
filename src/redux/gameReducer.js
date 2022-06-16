import { createSlice } from "@reduxjs/toolkit";

export const GameSlice = createSlice({
  name: "game",
  initialState: {
    winner: "",
    turn: Math.floor(Math.random() * 2) === 0 ? "CPU" : "Player",
  },
  reducers: {
    updateTurn: (state, action) => {
      state.turn = action.payload.turn;
    },
    updateWinner: (state, action) => {
      state.winner = action.payload.winner;
    },
  },
});

export const { updateTurn, updateWinner, updateCpuMoves } = GameSlice.actions;
export default GameSlice.reducer;
