import { FormControl, Typography, Stack } from "@mui/material";

import {
  FormBox,
  FormInput,
  FormButton,
  UnStyledLink,
} from "./styledComponents";

const Login = () => {
  return (
    <Stack spacing={6}>
      <Typography variant="h2" fontFamily={"Lobster"} color={"#ffffff"}>
        Login
      </Typography>
      <FormBox
        width={{ xs: "100vw", sm: "80vw", md: 350 }}
        component={"form"}
        noValidate
        autocomplete={"off"}
      >
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Username or Email
          </Typography>
          <FormInput disableUnderline />
        </FormControl>
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Password
          </Typography>
          <FormInput disableUnderline />
        </FormControl>
        <Typography
          fontFamily={"Lobster"}
          color={"#ffffff"}
          alignSelf={"flex-start"}
        >
          Forgot Password?
        </Typography>
        <Stack spacing={2}>
          <FormButton color="secondary" variant={"contained"}>
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
