// ** Material UI Imports
import { Stack, Typography } from "@mui/material";

// ** Styled Components
import { CustomClose, UnStyledLink } from "./styledComponents";

/**
 * @desc SideBar Menu React Component
 * @example
 * <SideBar setSideBar={setSideBar} />
 * @param {object} props - React Properties
 * @param {function} props.setSideBar - React Hook sideBar setter function for closing the sidebar
 * @return {ReactElement}
 */
const SideBar = ({ setSideBar }) => {
  // ** Sidebar Menu Component
  return (
    <Stack
      height={"100%"}
      width={{ xs: 250, sm: 300 }}
      bgcolor={"#330033"}
      pt={6}
      pl={3}
      spacing={6}
    >
      <Typography
        onClick={() => setSideBar(false)}
        variant="h4"
        fontFamily={"Lobster"}
        color={"#ffffff"}
      >
        <UnStyledLink to={"/"}>Tic-Tac-Toe</UnStyledLink>
      </Typography>
      <Typography
        onClick={() => setSideBar(false)}
        variant="h5"
        color={"#ffffff"}
      >
        <UnStyledLink to={"/online"}>Online</UnStyledLink>
      </Typography>
      <Typography
        onClick={() => setSideBar(false)}
        variant="h5"
        color={"#ffffff"}
      >
        <UnStyledLink to={"/history"}>History</UnStyledLink>
      </Typography>
      <CustomClose onClick={() => setSideBar(false)} />
    </Stack>
  );
};

export default SideBar;
