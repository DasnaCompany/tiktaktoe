// ** Material UI Imports
import { Stack, Typography } from "@mui/material";

import Parse from "parse";
import { useParseQuery } from "@parse/react";

// ** React Imports
import { useState } from "react";

// ** User Components
import GameBoard from "./GameBoard";
import { FormButton, FormInput } from "./styledComponents";

// ** Offline Play Component
const OnlinePlay = () => {
  const user = JSON.parse(
    localStorage.getItem(
      "Parse/a9z635ij18Ca5sLNL9MAUOviBp0J9awDuSSk7KjC/currentUser"
    )
  ).objectId;
  const [gameId, setGameId] = useState("");
  const query = new Parse.Query("gameSession");
  query.equalTo("objectId", gameId);
  const { results } = useParseQuery(query);
  // results && console.log(results);
  const [create, setCreate] = useState(false);
  const [join, setJoin] = useState(false);

  // ** Game Board List Hook
  const board = [
    ["_", "_", "_"],
    ["_", "_", "_"],
    ["_", "_", "_"],
  ];

  const createGame = async () => {
    const game = await Parse.Cloud.run("CreateGame", { userId: user });
    if (game !== -1) {
      setGameId(game);
      setCreate(true);
    }
  };

  const joinGame = async () => {
    const newId = document.getElementById("game-id").value;
    const game = await Parse.Cloud.run("joinGame", {
      gameId: newId,
      userId: user,
    });
    if (game === newId) {
      setGameId(game);
      setJoin(false);
    }
  };

  // ** Handle Player's Turn on the Board
  const handlePlayerTurn = async (panel, rowIndex, panelIndex) => {
    if (
      panel === "_" &&
      results &&
      results.length > 0 &&
      results[0].attributes.turn === user &&
      results[0].attributes.winner === ""
    ) {
      console.log("ok");
      const res = await Parse.Cloud.run("makeMove", {
        gameId: gameId,
        userId: user,
        move: `gameBoard${rowIndex}${panelIndex}`,
      });
      console.log(res);
    }
  };

  // ** JSX render for game board
  return (
    <Stack my={"5rem"} direction={"column"} spacing={6} alignItems={"center"}>
      <Typography variant="h2" color={"#ffffff"} fontFamily={"Lobster"}>
        Online Play
      </Typography>
      {results && results.length > 0 && results[0].attributes.turn !== "" && (
        <Typography
          variant="h5"
          color={"#ffffff"}
          visibility={
            results && results.length > 0 && results[0].attributes.winner
              ? "hidden"
              : "visible"
          }
        >
          {results && results.length > 0 && results[0].attributes.turn === user
            ? "Your"
            : "Opponent's"}{" "}
          Turn
        </Typography>
      )}
      {!create && !join && gameId === "" && (
        <Stack direction={"row"} spacing={2}>
          <FormButton
            variant="contained"
            color="secondary"
            onClick={() => createGame()}
          >
            Create
          </FormButton>
          <FormButton
            variant="contained"
            color="secondary"
            onClick={() => setJoin(true)}
          >
            Join
          </FormButton>
        </Stack>
      )}
      {create && (
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          display={
            results && results.length > 0 && results[0].attributes.opponent
              ? "none"
              : "flex"
          }
        >
          <Typography variant="h5" color={"#ffffff"}>
            Game ID: {gameId}
          </Typography>
          <FormButton
            variant="outlined"
            color="secondary"
            onClick={() => setCreate(false)}
          >
            Cancel
          </FormButton>
        </Stack>
      )}
      {join && (
        <Stack direction={"row"} spacing={2} alignItems="center">
          <FormInput id={"game-id"} disableUnderline placeholder="Game ID" />
          <FormButton
            variant="contained"
            color="secondary"
            onClick={() => joinGame()}
          >
            Join
          </FormButton>
          <FormButton
            variant="outlined"
            color="secondary"
            onClick={() => setJoin(false)}
          >
            Cancel
          </FormButton>
        </Stack>
      )}
      <GameBoard
        board={
          results && results.length > 0
            ? [
                [
                  results[0].attributes.gameBoard00,
                  results[0].attributes.gameBoard01,
                  results[0].attributes.gameBoard02,
                ],
                [
                  results[0].attributes.gameBoard10,
                  results[0].attributes.gameBoard11,
                  results[0].attributes.gameBoard12,
                ],
                [
                  results[0].attributes.gameBoard20,
                  results[0].attributes.gameBoard21,
                  results[0].attributes.gameBoard22,
                ],
              ]
            : board
        }
        player={results && results.length > 0 && results[0].attributes.createBy}
        opponent={
          results && results.length > 0 && results[0].attributes.opponent
        }
        handlePlayerTurn={handlePlayerTurn}
      />
      <Typography
        variant="h5"
        color={"#ffffff"}
        visibility={
          results && results.length > 0 && results[0].attributes.winner
            ? "visible"
            : "hidden"
        }
      >
        {results && results.length > 0 && results[0].attributes.winner === user
          ? "You Win"
          : results &&
            results.length > 0 &&
            results[0].attributes.winner !== "Draw"
          ? "You Lost"
          : "Draw"}
        !
      </Typography>
    </Stack>
  );
};

export default OnlinePlay;
