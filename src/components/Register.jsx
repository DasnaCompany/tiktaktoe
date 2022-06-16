import {
  Box,
  FormControl,
  Input,
  Typography,
  Stack,
  Button,
} from "@mui/material";

const Register = () => {
  return (
    <Stack spacing={6}>
      <Typography variant="h2" fontFamily={"Lobster"} color={"#ffffff"}>
        Register
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
            Username
          </Typography>
          <Input
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
            Email
          </Typography>
          <Input
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
            Email confirmation
          </Typography>
          <Input
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
        <FormControl>
          <Typography variant="h6" fontFamily={"Lobster"} color="#ffffff">
            Password confirmation
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
      </Box>
    </Stack>
  );
};

export default Register;
