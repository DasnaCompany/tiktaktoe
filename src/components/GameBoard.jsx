// ** Material UI Imports
import { Stack } from "@mui/material";

// ** User Components
import BoardPanel from "./BoardPanel";

/**
 * Tic Tac Toe Game Board
 * @example
 * <GameBoard board={board} player={"X"} opponent={"O"} handlePlayerTurn={handlePlayerTurn} />
 * @param {object} props - React Properties
 * @param {Array} props.board - 3x3 array for the tic tac toe board
 * @param {string} props.player - the player of the game
 * @param {string} props.opponent - the player's opponent
 * @param {function} props.handlePlayerTurn - function to handle player's turn
 * @return {ReactElement}
 */
const GameBoard = ({ board, handlePlayerTurn, player, opponent }) => {
  // ** JSX render for game board
  return (
    <Stack direction={"column"} spacing={2}>
      {board.map((row, rowIndex) => (
        <Stack key={rowIndex} direction={"row"} spacing={2}>
          {row.map((panel, panelIndex) => (
            <BoardPanel
              key={`${rowIndex}-${panelIndex}`}
              symbol={panel}
              player={player}
              opponent={opponent}
              onClick={() => handlePlayerTurn(panel, rowIndex, panelIndex)}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
};

export default GameBoard;
