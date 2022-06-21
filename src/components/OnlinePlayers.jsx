// ** React Router Imports
import { useNavigate } from "react-router-dom";

// Material UI Imports
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, Stack } from "@mui/material";

// ** Styled Components
import { FormButton, HistoryTable } from "./styledComponents";

// ** Parse Imports
import Parse from "parse";
import { useParseQuery } from "@parse/react";
import { useEffect } from "react";
import InvitedPopUp from "./InvitePopUp";

// ** Online Players Component
const OnlinePlayers = ({ gameResults, user, setGameId }) => {
  const navigate = useNavigate();
  const userQuery = new Parse.Query("User");
  userQuery.equalTo("online", true);
  const myQuery = new Parse.Query("User");
  myQuery.equalTo("objectId", user);
  const { results } = useParseQuery(userQuery);
  const { results: myResults } = useParseQuery(myQuery);

  const createGame = async (opponentId) => {
    const game = await Parse.Cloud.run("CreateGame", {
      userId: user,
      opponent: opponentId,
    });
    if (game !== -1) {
      setGameId(game);
    } else {
      console.log(game);
    }
  };

  const joinGame = async () => {
    const game = await Parse.Cloud.run("joinGame", {
      gameId: myResults[0].attributes.invite,
      userId: user,
    });
    if (game === myResults[0].attributes.invite) {
      const user = Parse.User.current();
      user.set("invite", "");
      try {
        await user.save();
        setGameId(game);
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    if (
      gameResults &&
      gameResults.length > 0 &&
      gameResults[0].attributes.opponent
    ) {
      navigate("/online/play");
    }
  });
  return (
    <Stack spacing={6}>
      <Typography
        variant="h2"
        fontFamily={"Lobster"}
        color={"#ffffff"}
        mt={"5rem"}
      >
        Online Players
      </Typography>
      {gameResults &&
        gameResults.length > 0 &&
        gameResults[0].attributes.opponent === "" && (
          <Stack
            mt={0}
            direction={"row"}
            spacing={2}
            alignItems="center"
            justifyContent={"center"}
          >
            <Typography variant="h5" color={"#ffffff"}>
              waiting for opponent...
            </Typography>
            <FormButton
              variant="outlined"
              color="secondary"
              onClick={() => window.location.reload()}
            >
              Cancel
            </FormButton>
          </Stack>
        )}
      <TableContainer component={Box}>
        <HistoryTable
          sx={{
            minWidth: { xs: "100vw", sm: "50vw", md: "30vw" },
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ "& > *": { borderColor: "#330033 !important" } }}>
              <TableCell>
                <Typography
                  color={"#ffffff"}
                  variant={"h6"}
                  fontFamily={"Lobster"}
                >
                  Player
                </Typography>
              </TableCell>
              <TableCell align="right">
                <Typography
                  color={"#ffffff"}
                  variant={"h6"}
                  fontFamily={"Lobster"}
                  pr={2}
                >
                  Invite
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results && results.length > 0 ? (
              results.map(
                (row, index) =>
                  row.id !== user && (
                    <TableRow
                      key={index}
                      sx={{
                        "&:last-child td, &:last-child th": { border: 0 },
                        "& > *": { borderColor: "#330033 !important" },
                      }}
                    >
                      <TableCell>
                        <Typography color={"#ffffff"} variant={"h6"}>
                          {row.attributes.username}
                        </Typography>
                      </TableCell>
                      <TableCell align="right">
                        <FormButton
                          onClick={() => createGame(row.id)}
                          variant="contained"
                          color="secondary"
                        >
                          Invite
                        </FormButton>
                      </TableCell>
                    </TableRow>
                  )
              )
            ) : (
              <></>
            )}
          </TableBody>
        </HistoryTable>
      </TableContainer>
      {myResults &&
        myResults.length > 0 &&
        myResults[0].attributes.invite !== "" && (
          <InvitedPopUp joinGame={joinGame} />
        )}
    </Stack>
  );
};

export default OnlinePlayers;
