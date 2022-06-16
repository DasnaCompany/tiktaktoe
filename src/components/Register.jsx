import { FormControl, Typography, Stack, Button } from "@mui/material";
import { FormBox, FormInput } from "./styledComponents";

const Register = () => {
  return (
    <Stack spacing={6}>
      <Typography variant="h2" fontFamily={"Lobster"} color={"#ffffff"}>
        Register
      </Typography>
      <FormBox
        width={{ xs: "100vw", sm: "80vw", md: 350 }}
        component={"form"}
        noValidate
        autocomplete={"off"}
      >
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Username
          </Typography>
          <FormInput disableUnderline color={"secondary"} />
        </FormControl>
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Email
          </Typography>
          <FormInput disableUnderline color={"secondary"} />
        </FormControl>
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Email confirmation
          </Typography>
          <FormInput disableUnderline color={"secondary"} />
        </FormControl>
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Password
          </Typography>
          <FormInput disableUnderline />
        </FormControl>
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Password confirmation
          </Typography>
          <FormInput disableUnderline />
        </FormControl>
        <Button
          sx={{
            mt: "1rem",
            fontFamily: "Lobster",
            fontSize: "1.5rem",
            textTransform: "none",
          }}
          color="secondary"
          variant={"contained"}
        >
          Register
        </Button>
      </FormBox>
    </Stack>
  );
};

export default Register;
