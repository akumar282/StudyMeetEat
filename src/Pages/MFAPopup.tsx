import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Auth } from "aws-amplify"
import "./CSS/MFAPopup.css";

export default function MFAPopup(props) {
  const navigate = useNavigate();

  function handleClose() {
    formik.resetForm();
    props.setTrigger(false);
  }
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema: Yup.object({
      code: Yup.string()
        .max(6, "Must be 6 characters or less")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      console.log(values);
      props.setTrigger(false);
      await Auth.confirmSignUp(localStorage.getItem('email')!, values.code)
      navigate("/home");
    },
  });
  return props.trigger ? (
    <Dialog
      open={props.trigger}
      onClose={props.setTrigger}
      fullWidth={true}
      maxWidth="xs"
    >
      <IconButton
        sx={{
          display: "flex",
          justifySelf: "right",
          alignSelf: "right",
          marginLeft: "auto",
          marginRight: "1%",
          marginTop: "1%",
        }}
        onClick={() => handleClose()}
      >
        <HighlightOffIcon fontSize="large" />
      </IconButton>
      <div className="MFAPopup">
        <div className="MFAPopupTitle">
          <Typography sx = {{ 
            fontSize: "2rem",
            fontWeight: "bold",
            textAlign: "center",
          }}>Enter MFA Code</Typography>
        </div>
        <div className="MFAPopupContent">
          <Typography sx = {{ 
            fontSize: "1.2rem",
            textAlign: "center",
            marginBottom: "1rem",
            ml: "1rem",
            mr: "1rem",
          }}>
            Please enter your 6-digit MFA code sent to your email address.
          </Typography>
          <div className = "MFAText"> 
          <TextField
            fullWidth
            id="code"
            name="code"
            label="Code"
            value={formik.values.code}
            onChange={formik.handleChange}
            error={formik.touched.code && Boolean(formik.errors.code)}
            helperText={(formik.touched.code && formik.errors.code) || " "}
          />
          </div>
        </div>
        <div className="MFAPopupButton">
          <Button
            variant="contained"
            color="primary"
            fullWidth
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
            Submit
          </Button>
        </div>
      </div>
    </Dialog>
  ) : (
    <></>
  );
}
