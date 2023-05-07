import React from "react";
import "./CSS/LoginPage.css";
import {
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Auth } from "aws-amplify";
import { getCurrentUserAttributes } from '../backend/auth/authentication'
import { getUserById } from '../backend/queries/userQueries'
import * as yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import awsconfig from '../aws-exports'
import { Amplify } from 'aws-amplify'
Amplify.configure(awsconfig)

export default function LoginPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be at least 8 characters";
      } else if (values.password.length > 20) {
        errors.password = "Password must be at most 20 characters";
      }
      return errors;
    },
    onSubmit: async (values) => {
      if (await Auth.signIn(values.email, values.password)) {
        localStorage.setItem('uuid', (await getCurrentUserAttributes()).at(0)!.value)
        localStorage.setItem('email', values.email)
        console.log(localStorage.getItem('uuid'))
        const username = await getUserById(localStorage.getItem('uuid')!)
        localStorage.setItem('username', username.data.getUsersModel.user_name)
        localStorage.setItem('profileImage', username.data.getUsersModel.image_key)
        localStorage.setItem('userVersion', username.data.getUsersModel._version)
        console.log(username)
      } else {
        alert("Incorrect username or password")
      }
      navigate("/home");
    },
  });

  return (
    <main className="LoginContainer">
      <div className="LoginBox">
        <div className="LoginTitle">
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "Bold",
              fontSize: "calc(25px + 3vh);",
            }}
          >
            Login
          </Typography>
        </div>
        <div className="LoginInput">
          <Typography
            variant="h6"
            sx={{ color: "#FFFFFF", fontWeight: "Bold" }}
          >
            Email
          </Typography>

          <TextField
            id="email"
            name="email"
            variant="outlined"
            sx = {{ input: { color: "#FFFFFF"}, "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "#FFFFFF", }}}
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={(formik.touched.email && formik.errors.email) || " "}
          />
          <Typography
            variant="h6"
            sx={{ color: "#FFFFFF", fontWeight: "Bold" }}
          >
            Password
          </Typography>
          <TextField
            id="password"
            name="password"
            variant="outlined"
            type={showPassword ? "text" : "password"}
            fullWidth
            sx = {{ input: { color: "#FFFFFF"}, "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": { borderColor: "#FFFFFF", }}}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff sx = {{ color: "#FFFFFF"}}/> : <Visibility sx = {{ color: "#FFFFFF"}}/>}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={
              (formik.touched.password && formik.errors.password) || " "
            }
          />
        </div>
        <div className="LoginButton">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#bf9b30",
              width: "85%",
              color: "#FFFFFF",
              fontSize: "1rem",
              height: "3rem",
              "&:hover": {
                backgroundColor: "#cea835",
              },
            }}
            onClick={() => formik.handleSubmit()}>
            Login
          </Button>
        </div>
        <div className="LoginFooter">
          <Typography
            variant="h6"
            sx={{ color: "#FFFFFF", fontWeight: "Bold" }}
          >
            Don't have an account?
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/signup"
            sx={{
              backgroundColor: "#bf9b30",
              width: "85%",
              height: "3rem",
              fontSize: "1rem",
              color: "#FFFFFF",
              mt: ".5rem",
              "&:hover": {
                backgroundColor: "#cea835",
              },
            }}
          >
            Sign Up
          </Button>
        </div>
      </div>
    </main>
  );
}
