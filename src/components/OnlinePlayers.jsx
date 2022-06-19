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

// ** Online Players Component
const OnlinePlayers = () => {
  const query = new Parse.Query("User");
  query.equalTo("online", true);
  const { results } = useParseQuery(query);
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
              results.map((row, index) => (
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
                    <FormButton variant="contained" color="secondary">
                      Invite
                    </FormButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <></>
            )}
          </TableBody>
        </HistoryTable>
      </TableContainer>
    </Stack>
  );
};

export default OnlinePlayers;
