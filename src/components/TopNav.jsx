import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";

const TopNav = () => {
  return (
    <AppBar color="transparent">
      <Toolbar
        sx={{
          justifyContent: "center",
          gap: "1rem",
          color: "white",
        }}
      >
        <Box
          position={"fixed"}
          left={"1rem"}
          display={{ xs: "block", md: "none" }}
        >
          <Menu color="inherit" fontSize="large" />
        </Box>

        <Typography variant="h5" fontFamily={"Lobster"} color={"#ffffff"}>
          Tic-Tac-Toe
        </Typography>
        <Typography
          variant="h6"
          color={"#ffffff"}
          display={{ md: "block", xs: "none" }}
        >
          Online
        </Typography>
        <Typography
          variant="h6"
          color={"#ffffff"}
          display={{ md: "block", xs: "none" }}
        >
          History
        </Typography>
        <Typography
          variant="h5"
          color={"#ffffff"}
          position={"fixed"}
          right={"1rem"}
          fontFamily={"Lobster"}
        >
          Login
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
