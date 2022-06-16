import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Menu } from "@mui/icons-material";
import { Link } from "react-router-dom";
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
          <Link style={{ textDecoration: "none", color: "inherit" }} to={"/"}>
            Tic-Tac-Toe
          </Link>
        </Typography>
        <Typography
          variant="h6"
          color={"#ffffff"}
          display={{ md: "block", xs: "none" }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/online"}
          >
            Online
          </Link>
        </Typography>
        <Typography
          variant="h6"
          color={"#ffffff"}
          display={{ md: "block", xs: "none" }}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/history"}
          >
            History
          </Link>
        </Typography>
        <Typography
          variant="h5"
          color={"#ffffff"}
          position={"fixed"}
          right={"1rem"}
          fontFamily={"Lobster"}
        >
          <Link
            style={{ textDecoration: "none", color: "inherit" }}
            to={"/login"}
          >
            Login
          </Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
