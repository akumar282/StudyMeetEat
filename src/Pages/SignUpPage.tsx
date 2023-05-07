import React from "react";
import "./CSS/SignUpPage.css";
import { TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { Button, IconButton, InputAdornment } from "@mui/material";
import MFAPopup from "./MFAPopup";
import { createUser } from "../backend/mutations/userMutations";
import { newUserSignUp } from "../backend/auth";
import { v4 as uuidv4 } from "uuid";

export default function SignUpPage() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [isAuthOpen, setAuthOpen] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  function OpenAuth() {
    setAuthOpen(true);
  }
  const uuidGen = uuidv4();
  async function sendToDatabase(props: {
    firstName: any;
    lastName: any;
    email: any;
    username: any;
    password: any;
    confirmPassword?: string;
    uuid: string;
  }) {
    // redundatant code. should be fixed to finalload.input = props
    props.uuid = uuidGen;
    localStorage.setItem("uuid", props.uuid);
    localStorage.setItem("username", props.username);
    localStorage.setItem("email", props.email);
    const defaultPic = [
      "defaultimg1.JPG",
      "defaultimg2.JPG",
      "defaultimg3.JPG",
      "defaultimg4.JPG",
    ];
    await newUserSignUp(props.email, props.password, props.email, props.uuid);
    await createUser({
      input: {
        id: props.uuid,
        cognito_id: props.uuid,
        username: props.username,
        email: props.email,
        first_name: props.firstName,
        last_name: props.lastName,
        image_key: defaultPic[Math.floor(Math.random() * 4)],
        attending_meets: [],
        created_meets: [],
        major: [],
      },
    });
  }

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors: Record<string, string> = {};
      if (!values.firstName) {
        errors.firstName = "Required";
      } else if (values.firstName.length < 3) {
        errors.firstName = "Must be 3 characters or more";
      }
      if (!values.lastName) {
        errors.lastName = "Required";
      } else if (values.lastName.length < 3) {
        errors.lastName = "Must be 3 characters or more";
      }
      if (!values.username) {
        errors.username = "Required";
      } else if (values.username.length < 3) {
        errors.username = "Must be 3 characters or more";
      }
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 7) {
        errors.password = "Must be 7 characters or more";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "Required";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Passwords must match";
      }
      return errors;
    },
    onSubmit: (values) => {
      sendToDatabase(values);
    },
  });
  return (
    <main className="SignUpContainer">
      <MFAPopup trigger={isAuthOpen} setTrigger={setAuthOpen} />
      <div className="SignUpForm">
        <div className="SUTitle">
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "2.5rem",
            }}
          >
            Sign Up
          </Typography>
        </div>
        <div className="SUForm">
          <div className="SUNames">
            <div className="FieldName">
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                First Name
              </Typography>
              <TextField
                id="firstName"
                name="firstName"
                variant="outlined"
                fullWidth
                value={formik.values.firstName}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstName && Boolean(formik.errors.firstName)
                }
                helperText={
                  (formik.touched.firstName && formik.errors.firstName) || " "
                }
              />
            </div>
            <div className="FieldName">
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Last Name
              </Typography>
              <TextField
                id="lastName"
                name="lastName"
                variant="outlined"
                fullWidth
                value={formik.values.lastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastName && Boolean(formik.errors.lastName)
                }
                helperText={
                  (formik.touched.lastName && formik.errors.lastName) || " "
                }
              />
            </div>
          </div>
          <div className="SUNames">
            <div className="FieldName">
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Username
              </Typography>
              <TextField
                id="username"
                name="username"
                variant="outlined"
                fullWidth
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={
                  (formik.touched.username && formik.errors.username) || " "
                }
              />
            </div>
            <div className="FieldName">
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Email
              </Typography>
              <TextField
                id="email"
                name="email"
                variant="outlined"
                fullWidth
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={
                  (formik.touched.email && formik.errors.email) || " "
                }
              />
            </div>
          </div>
          <div className="SUNames">
            <div className="FieldName">
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Password
              </Typography>

              <TextField
                id="password"
                name="password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={
                  (formik.touched.password && formik.errors.password) || " "
                }
              />
            </div>
            <div className="FieldName">
              <Typography
                sx={{
                  color: "#FFFFFF",
                  fontWeight: "bold",
                  fontSize: "1.5rem",
                }}
              >
                Confirm Password
              </Typography>
              <TextField
                id="confirmPassword"
                name="confirmPassword"
                variant="outlined"
                type={showConfirmPassword ? "text" : "password"}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.confirmPassword &&
                  Boolean(formik.errors.confirmPassword)
                }
                helperText={
                  (formik.touched.confirmPassword &&
                    formik.errors.confirmPassword) ||
                  " "
                }
              />
            </div>
          </div>
        </div>
        <div className="SUSignUp">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#bf9b30",
              width: "90%",
              color: "#FFFFFF",
              fontSize: "1rem",
              height: "3rem",
              "&:hover": {
                backgroundColor: "#cea835",
              },
            }}
            onClick={() => formik.handleSubmit()}
          >
            Sign Up
          </Button>
        </div>
        <div className="SULogin">
          <Typography
            sx={{
              color: "#FFFFFF",
              fontWeight: "bold",
              fontSize: "1.5rem",
            }}
          >
            Already have an account?
          </Typography>
          <Button
            component={Link}
            to="/login"
            variant="contained"
            sx={{
              backgroundColor: "#bf9b30",
              width: "90%",
              color: "#FFFFFF",
              fontSize: "1rem",
              height: "3rem",
              "&:hover": {
                backgroundColor: "#cea835",
              },
            }}
          >
            Login
          </Button>
        </div>
      </div>
    </main>
  );
}
