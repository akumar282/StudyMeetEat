import React from "react";
import "./CSS/LandingPage.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const globalAuthState = {
  isAuthenticated: false,
  username: null,
  email: null,
  uuid: null,
  userVersion: null,
  profileImage: null,
}
export default function LandingPage() {
  function setLocalStorage() {
    if (!localStorage.getItem("email")) {
      window.localStorage.setItem("email", globalAuthState.email);
    }
    if (!localStorage.getItem("isAuthenticated")) {
      window.localStorage.setItem("isLoggedin", globalAuthState.isLoggedin);
    }
    if (!localStorage.getItem("uuid")) {
      window.localStorage.setItem("uuid", globalAuthState.uuid);
    }
    if (!localStorage.getItem("username")) {
      window.localStorage.setItem("username", globalAuthState.username);
    }
    if (!localStorage.getItem("userVersion")) {
      window.localStorage.setItem("userVersion", globalAuthState.userVersion);
    }
    if (!localStorage.getItem("profileImage")) {
      window.localStorage.setItem("profileImage", globalAuthState.profileImage);
    }
  }
  setLocalStorage();
  return (
    <main className="LandingPageContainer">
      <div className="LPHeader">
        <div className="LPHeaderContainer">
          <div className="LPHeaderTDiv">
            <img src = "Logo.png" alt="Landing Page" className="LPHImage" />
          </div>
          <div className="LPHeaderButtons">
            <Button
              component={Link}
              to="/signup"
              disableRipple
              sx={{
                color: "#FFFFFF",
                background: "transparent",
                fontSize: "calc(6px + 1vh);",
                "&:hover": {
                  color: "#bbbbbb",
                },
              }}
            >
              Sign Up
            </Button>
            <Button
              component={Link}
              to="/login"
              disableRipple
              sx={{
                color: "#FFFFFF",
                fontSize: "calc(6px + 1vh);",
                "&:hover": {
                  color: "#bbbbbb",
                },
              }}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
      <div className="LPBody">
        <div className="LPBM">
          <div className="LPBodyText">
            <Typography
              variant="h2"
              sx={{
                color: "#000000",
                fontWeight: "bold",
                fontSize: "calc(25px + 3vh);",
              }}
            >
              Connect and Learn with DubMeets:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#000000",
                fontSize: "calc(15px + 1.5vh);",
              }}
            >
              Create Study Meetups for Any Subject or Class!
            </Typography>
            <div className="LPBB">
              <Button
                disableRipple
                component={Link}
                to="/signup"
                variant="contained"
                sx={{
                  backgroundColor: "#bf9b30",
                  color: "#FFFFFF",

                  width: "100%",
                  height: "3rem",
                  fontSize: "1.5vh",
                  "&:hover": {
                    backgroundColor: "#cea835",
                  },
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
          <div className="LPBodyImage">
            <img className="LPBII" src="BookIcon.png" alt="Landing Page" />
          </div>
        </div>
      </div>
      <img className="LPBII2" src="AbhiWave.png" alt="Landing Page" />
      <div className="LPAbout">
        <div className="LPAboutContainer">
          <div className="LPAboutText">
            <Typography
              variant="h2"
              sx={{
                color: "#FFFFFF",
                fontWeight: "bold",
                fontSize: "calc(25px + 3vh);",
                mb: "1rem",
              }}
            >
              About DubMeets:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#FFFFFF",
                fontSize: "calc(15px + 1.5vh);",
              }}
            >
              DubMeets is a platform for students to connect and learn with each
              other. Students can create study meetups for any subject or class
              and join other students' meetups.
            </Typography>
          </div>
        </div>
      </div>
    </main>
  );
}
