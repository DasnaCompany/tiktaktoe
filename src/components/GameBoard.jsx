import { Stack } from "@mui/material";
import { useEffect, useState } from "react";
import BoardPanel from "./BoardPanel";
import { findBestMove, makeRandomMove, checkForWin } from "./gameLogic";
import { useDispatch, useSelector } from "react-redux";
// import { updateBoard } from "../redux/boardReducer";
import { updateCpuMoves, updateTurn, updateWinner } from "../redux/gameReducer";
const GameBoard = () => {
  const dispatch = useDispatch();
  // const board = useSelector((state) => state.board);
  const [board, setBoard] = useState([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]);
  const turn = useSelector((state) => state.game.turn);
  const cpuMoves = useSelector((state) => state.game.cpuMoves);
  useEffect(() => {
    if (turn === "CPU") {
      let bestMove;
      if (cpuMoves === 0) {
        bestMove = makeRandomMove(board);
        dispatch(updateCpuMoves());
      } else {
        bestMove = findBestMove(board);
        dispatch(updateCpuMoves());
      }
      if (bestMove.row !== -1 && bestMove.col !== -1) {
        setTimeout(() => {
          let temp = board;
          temp[bestMove.row][bestMove.col] = "CPU";
          setBoard(temp);
          if (checkForWin(temp, bestMove))
            dispatch(updateWinner({ winner: "CPU" }));
          dispatch(updateTurn({ turn: "Player" }));
        }, 300);
      } else {
        dispatch(updateWinner({ winner: "Draw" }));
      }
    } //eslint-disable-next-line
  }, [turn]);
  return (
    <Stack direction={"column"} spacing={2}>
      {board.map((row, rowIndex) => (
        <Stack key={rowIndex} direction={"row"} spacing={2}>
          {row.map((panel, panelIndex) => (
            <BoardPanel
              key={`${rowIndex}-${panelIndex}`}
              symbol={panel}
              onClick={() => {
                if (panel === "_" && turn === "Player") {
                  let temp = board;
                  temp[rowIndex][panelIndex] = "Player";
                  setBoard(temp);
                  if (checkForWin(temp, { row: rowIndex, col: panelIndex }))
                    dispatch(updateWinner({ winner: "Player" }));
                  dispatch(updateTurn({ turn: "CPU" }));
                }
              }}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default GameBoard;
