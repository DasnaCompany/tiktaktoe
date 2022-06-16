import {
  Box,
  FormControl,
  Input,
  Typography,
  Stack,
  Button,
} from "@mui/material";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Stack spacing={6}>
      <Typography variant="h2" fontFamily={"Lobster"} color={"#ffffff"}>
        Login
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: { xs: "100vw", sm: "80vw", md: 350 },
          padding: "2rem",
          background: "rgba(255, 255, 255, 0.07)",
          borderRadius: "16px",
          boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
          backdropFilter: "blur(5.8px)",
          gap: "1rem",
        }}
        component={"form"}
        noValidate
        autocomplete={"off"}
      >
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Username or Email
          </Typography>
          <Input
            id="username"
            disableUnderline
            color={"secondary"}
            sx={{
              height: "3rem",
              borderRadius: 3,
              bgcolor: "#ffffff",
            }}
          />
        </FormControl>
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Password
          </Typography>
          <Input
            disableUnderline
            sx={{
              height: "3rem",
              borderRadius: 3,
              bgcolor: "#ffffff",
            }}
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
          <Button
            sx={{
              fontFamily: "Lobster",
              fontSize: "1.5rem",
              textTransform: "none",
            }}
            color="secondary"
            variant={"contained"}
          >
            Login
          </Button>

          <Button
            sx={{
              fontFamily: "Lobster",
              fontSize: "1.5rem",
              textTransform: "none",
            }}
            color="secondary"
            variant={"outlined"}
          >
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/register"
            >
              Register
            </Link>
          </Button>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Login;
