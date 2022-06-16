import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Box, Typography, Stack } from "@mui/material";

function createData(date, opponent, result) {
  return { date, opponent, result };
}

const rows = [
  createData(new Date(), "CPU", "Win"),
  createData(new Date(), "CPU", "Loss"),
  createData(new Date(), "CPU", "Win"),
  createData(new Date(), "CPU", "Draw"),
  createData(new Date(), "CPU", "Win"),
  createData(new Date(), "CPU", "Loss"),
  createData(new Date(), "CPU", "Draw"),
  createData(new Date(), "CPU", "Loss"),
  createData(new Date(), "CPU", "Win"),
  createData(new Date(), "CPU", "Win"),
];

const PlayHistory = () => {
  return (
    <Stack spacing={6}>
      <Typography
        variant="h2"
        fontFamily={"Lobster"}
        color={"#ffffff"}
        mt={"5rem"}
      >
        Match History
      </Typography>
      <TableContainer component={Box}>
        <Table
          sx={{
            paddingBottom: "2rem",
            minWidth: { xs: "100vw", sm: "80vw", md: "60vw" },
            background: "rgba(255, 255, 255, 0.07)",
            borderRadius: "16px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            backdropFilter: "blur(5.8px)",
          }}
          aria-label="simple table"
        >
          <TableHead>
            <TableRow sx={{ "& > *": { borderColor: "#330033" } }}>
              <TableCell>
                <Typography
                  color={"#ffffff"}
                  variant={"h6"}
                  fontFamily={"Lobster"}
                >
                  Date
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  color={"#ffffff"}
                  variant={"h6"}
                  fontFamily={"Lobster"}
                >
                  Opponent
                </Typography>
              </TableCell>
              <TableCell>
                <Typography
                  color={"#ffffff"}
                  variant={"h6"}
                  fontFamily={"Lobster"}
                >
                  Result
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                  "& > *": { borderColor: "#330033" },
                }}
              >
                <TableCell>
                  <Typography color={"#ffffff"} variant={"h6"}>
                    {`${row.date.getFullYear()}/${
                      row.date.getMonth() + 1
                    }/${row.date.getDate()}`}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography color={"#ffffff"} variant={"h6"}>
                    {row.opponent}
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    color={
                      row.result === "Win"
                        ? "#00e600"
                        : row.result === "Loss"
                        ? "#ff0066"
                        : "#ffffff"
                    }
                    variant={"h6"}
                  >
                    {row.result}
                  </Typography>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default PlayHistory;