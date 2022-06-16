// ** Material UI Imports
import { Stack, Typography } from "@mui/material";

// ** React Imports
import { useState } from "react";

// ** User Components
import GameBoard from "./GameBoard";
import { checkForWin } from "./gameLogic";

// ** Offline Play Component
const OnlinePlay = () => {
  // ** Game Board List Hook
  const [board, setBoard] = useState([
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ]);

  // ** Player or CPU Turn Hook
  const [turn, setTurn] = useState(
    Math.floor(Math.random() * 2) === 0 ? "Opponent" : "Player"
  );

  // ** Winner Hook
  const [winner, setWinner] = useState("");

  // ** Handle Player's Turn on the Board
  const handlePlayerTurn = (panel, rowIndex, panelIndex) => {
    if (panel === "_" && turn === "Player" && winner === "") {
      // checks if panel is empty and if it's Player's turn
      let temp = board;
      temp[rowIndex][panelIndex] = "Player"; // updates the panel on the board to Player
      setBoard(temp);
      if (checkForWin(temp, { row: rowIndex, col: panelIndex }))
        // checks if players last move resulted in a Win
        setWinner("Player");
      else setTurn("Opponent"); // changes the Turn into CPU's Turn
    }
  };

  // ** JSX render for game board
  return (
    <Stack my={"5rem"} direction={"column"} spacing={6} alignItems={"center"}>
      <Typography variant="h2" color={"#ffffff"} fontFamily={"Lobster"}>
        Online Play
      </Typography>
      <Typography
        variant="h5"
        color={"#ffffff"}
        visibility={winner ? "hidden" : "visible"}
      >
        {turn}'s Turn
      </Typography>
      <GameBoard board={board} handlePlayerTurn={handlePlayerTurn} />
      <Typography
        variant="h5"
        color={"#ffffff"}
        visibility={winner ? "visible" : "hidden"}
      >
        {winner} {winner !== "Draw" && "Wins"}!
      </Typography>
    </Stack>
  );
};

export default OnlinePlay;
