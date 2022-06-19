// ** React Imports
import { useState } from "react";

// Parse import
import Parse from "parse";

// ** Material UI Imports
import { FormControl, Typography, Stack } from "@mui/material";

// ** Styled Components
import {
  FormBox,
  FormInput,
  FormButton,
  UnStyledLink,
} from "./styledComponents";

// ** Login Page Component
const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPassWord, setUserPassWord] = useState("");

  const doUserLogIn = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = userName;
    const passwordValue = userPassWord;
    return await Parse.User.logIn(usernameValue, passwordValue)
      .then(async (loggedInUser) => {
        // logIn will throw an error if the user is not verified yet,
        // but it's safer to check again after login
        if (loggedInUser.get("emailVerified") === true) {
          alert(
            "Success!",
            `User ${loggedInUser.get("username")} has successfully signed in!`
          );
          // Verify this is in fact the current user
          const currentUser = await Parse.User.currentAsync();
          console.log(loggedInUser === currentUser);
          // Navigation.navigate takes the user to the home screen
          return true;
        } else {
          await Parse.User.logOut();
          return false;
        }
      })
      .catch((error) => {
        // Error can be caused by wrong parameters or lack of Internet connection.
        // A non-verified user will also cause an error
        alert(`Error!, ${error.message}`);
        return false;
      });
  };
  return (
    <Stack spacing={6}>
      <Typography variant="h2" fontFamily={"Lobster"} color={"#ffffff"}>
        Login
      </Typography>
      <FormBox
        minWidth={{ xs: "80vw", sm: 350 }}
        component={"form"}
        noValidate
        autocomplete={"off"}
      >
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Username
          </Typography>
          <FormInput
            disableUnderline
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Password
          </Typography>
          <FormInput
            disableUnderline
            type="password"
            value={userPassWord}
            onChange={(e) => setUserPassWord(e.target.value)}
          />
        </FormControl>
        <Typography
          fontFamily={"Lobster"}
          color={"#ffffff"}
          alignSelf={"flex-start"}
        >
          Forgot Password?
        </Typography>
        <Stack spacing={2}>
          <FormButton
            color="secondary"
            variant={"contained"}
            onClick={() => doUserLogIn()}
          >
            Login
          </FormButton>
          <FormButton color="secondary" variant={"outlined"}>
            <UnStyledLink to="/register">Register</UnStyledLink>
          </FormButton>
        </Stack>
      </FormBox>
    </Stack>
  );
};

export default Login;
