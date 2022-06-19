import Parse from "parse";
import { Stack, Typography } from "@mui/material";
import { FormButton } from "./styledComponents";

const InvitedPopUp = ({ joinGame }) => {
  const declineGame = async () => {
    const user = Parse.User.current();
    user.set("invite", "");
    try {
      await user.save();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Stack
      justifyContent={"center"}
      alignItems="center"
      width={{ xs: "99vw", sm: "25rem" }}
      height={"15rem"}
      bgcolor={"#330033"}
      border={"1px solid white"}
      borderRadius={5}
      position={"fixed"}
      zIndex={100}
      top={"5rem"}
      left={{ xs: "0", sm: "5rem" }}
      direction={"column"}
      spacing={5}
    >
      <Typography variant="h6" color={"#ffffff"}>
        You've been invited to join a game
      </Typography>
      <Stack direction={"row"} spacing={3}>
        <FormButton
          onClick={() => joinGame()}
          variant="contained"
          color="secondary"
        >
          Accept
        </FormButton>
        <FormButton
          onClick={() => declineGame()}
          variant="outlined"
          color="secondary"
        >
          Decline
        </FormButton>
      </Stack>
    </Stack>
  );
};

export default InvitedPopUp;
