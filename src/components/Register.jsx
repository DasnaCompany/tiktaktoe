// ** React Imports
import { useState } from "react";

// Parse import
import Parse from "parse";

// ** Material UI Imports
import { FormControl, Typography, Stack } from "@mui/material";

// ** Styled Components
import { FormBox, FormInput, FormButton } from "./styledComponents";

// ** Register Page Component
const Register = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userEmailConfirm, setUserEmailConfirm] = useState("");
  const [userPassWord, setUserPassWord] = useState("");
  const [userPassWordConfirm, setUserPassWordConfirm] = useState("");

  const doUserSignUp = async function () {
    // Note that these values come from state variables that we've declared before
    const usernameValue = userName;
    const passwordValue = userPassWord;
    const emailValue = userEmail;
    // Since the signUp method returns a Promise, we need to call it using await
    // Note that now you are setting the user email value as well
    return await Parse.User.signUp(usernameValue, passwordValue, {
      email: emailValue,
    })
      .then(async (createdUser) => {
        // Parse.User.signUp returns the already created ParseUser object if successful
        alert(
          "Success!",
          `User ${createdUser.get(
            "username"
          )} was successfully created! Verify your email to login`
        );
        // Since email verification is now required, make sure to log out
        // the new user, so any Session created is cleared and the user can
        // safely log in again after verifying
        await Parse.User.logOut();
        // Go back to the login page
        return true;
      })
      .catch((error) => {
        // signUp can fail if any parameter is blank or failed an uniqueness check on the server
        alert("Error!", error.message);
        return false;
      });
  };

  return (
    <Stack spacing={6}>
      <Typography variant="h2" fontFamily={"Lobster"} color={"#ffffff"}>
        Register
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
            color={"secondary"}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Email
          </Typography>
          <FormInput
            disableUnderline
            color={"secondary"}
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </FormControl>
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Email confirmation
          </Typography>
          <FormInput
            disableUnderline
            color={"secondary"}
            value={userEmailConfirm}
            onChange={(e) => setUserEmailConfirm(e.target.value)}
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
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Password confirmation
          </Typography>
          <FormInput
            disableUnderline
            type="password"
            value={userPassWordConfirm}
            onChange={(e) => setUserPassWordConfirm(e.target.value)}
          />
        </FormControl>
        <FormButton
          color="secondary"
          variant={"contained"}
          onClick={() => doUserSignUp()}
        >
          Register
        </FormButton>
      </FormBox>
    </Stack>
  );
};

export default Register;
