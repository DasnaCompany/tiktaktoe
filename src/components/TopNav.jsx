// ** React Imports
import { useState } from "react";

// Material UI imports
import { AppBar, Toolbar, Typography, Box, Drawer } from "@mui/material";
import { Menu } from "@mui/icons-material";

//Styled Components
import { UnStyledLink } from "./styledComponents";

// ** User Components
import SideBar from "./SideBar";
const TopNav = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <AppBar sx={{ bgcolor: "#330033" }}>
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
          <Menu
            color="inherit"
            fontSize="large"
            onClick={() => setSideBar(true)}
          />
        </Box>

        <Typography variant="h5" fontFamily={"Lobster"} color={"#ffffff"}>
          <UnStyledLink to={"/"}>Tic-Tac-Toe</UnStyledLink>
        </Typography>
        <Typography
          variant="h6"
          color={"#ffffff"}
          display={{ md: "block", xs: "none" }}
        >
          <UnStyledLink to={"/online"}>Online</UnStyledLink>
        </Typography>
        <Typography
          variant="h6"
          color={"#ffffff"}
          display={{ md: "block", xs: "none" }}
        >
          <UnStyledLink to={"/history"}>History</UnStyledLink>
        </Typography>
        <Typography
          variant="h5"
          color={"#ffffff"}
          position={"fixed"}
          right={"1rem"}
          fontFamily={"Lobster"}
        >
          <UnStyledLink to={"/login"}>Login</UnStyledLink>
        </Typography>
        <Drawer bgcolor={"#330033"} anchor="left" open={sideBar}>
          <SideBar setSideBar={setSideBar} />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
};

export default TopNav;
