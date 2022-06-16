// ** Material UI Imports
import { Stack } from "@mui/material";

// ** React Imports
import { useEffect, useState } from "react";

// ** User Components
import BoardPanel from "./BoardPanel";
import { findBestMove, makeRandomMove, checkForWin } from "./gameLogic";

// ** Redux Imports
import { useDispatch, useSelector } from "react-redux";
import { updateTurn, updateWinner } from "../redux/gameReducer";

// ** Game Board Component
const GameBoard = () => {
  // ** redux Dispatch Hook
  const dispatch = useDispatch();

  // ** Game Board List Hook
  const [board, setBoard] = useState([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]);

  // ** Player or CPU Turn Hook
  const turn = useSelector((state) => state.game.turn);

  // ** CPU Move Count Hook
  const [cpuMoves, SetCpuMoves] = useState(0);

  // ** Handle Player's Turn on the Board
  const handlePlayerTurn = (panel, rowIndex, panelIndex) => {
    if (panel === "_" && turn === "Player") {
      // checks if panel is empty and if it's Player's turn
      let temp = board;
      temp[rowIndex][panelIndex] = "Player"; // updates the panel on the board to Player
      setBoard(temp);
      if (checkForWin(temp, { row: rowIndex, col: panelIndex }))
        // checks if players last move resulted in a Win
        dispatch(updateWinner({ winner: "Player" }));
      dispatch(updateTurn({ turn: "CPU" })); // changes the Turn into CPU's Turn
    }
  };

  // ** Handle CPU's Turn on the Board
  const handleCpuTurn = () => {
    if (turn === "CPU") {
      let bestMove;
      if (cpuMoves === 0) {
        bestMove = makeRandomMove(board); // makes a random first move
        SetCpuMoves(cpuMoves + 1);
      } else {
        bestMove = findBestMove(board); // finds the best MiniMaxed move available
        SetCpuMoves(cpuMoves + 1);
      }
      if (bestMove.row !== -1 && bestMove.col !== -1) {
        // checks if the best move is a valid move
        setTimeout(() => {
          let temp = board;
          temp[bestMove.row][bestMove.col] = "CPU"; // updates the panel of the best more to CPU
          setBoard(temp);
          if (checkForWin(temp, bestMove))
            // checks if CPU's last move resulted in a Win
            dispatch(updateWinner({ winner: "CPU" }));
          dispatch(updateTurn({ turn: "Player" }));
        }, 300);
      } else {
        dispatch(updateWinner({ winner: "Draw" })); // updates winner to Draw since there's no moves available
      }
    }
  };
  useEffect(() => {
    handleCpuTurn();
    //eslint-disable-next-line
  }, [turn]);

  // ** JSX render for game board
  return (
    <Stack direction={"column"} spacing={2}>
      {board.map((row, rowIndex) => (
        <Stack key={rowIndex} direction={"row"} spacing={2}>
          {row.map((panel, panelIndex) => (
            <BoardPanel
              key={`${rowIndex}-${panelIndex}`}
              symbol={panel}
              onClick={() => handlePlayerTurn(panel, rowIndex, panelIndex)}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default GameBoard;
