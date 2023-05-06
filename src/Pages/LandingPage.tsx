import React from "react";
import "./CSS/LandingPage.css";
import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function LandingPage() {
  

  return (
    <main className="LandingPageContainer">
      <div className="LPHeader">
        <div className="LPHeaderContainer">
          <div className="LPHeaderTDiv">
            <h1 className="LPHeaderTitle">DubMeets</h1>
          </div>
          <div className="LPHeaderButtons">
            <Button
             
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
                ml: "2%",
              }}
            >
              Connect and Learn with DubMeets:
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: "#000000",
                fontSize: "calc(15px + 1.5vh);",
                ml: "2%",
              }}
            >
              Create Study Meetups for Any Subject or Class!
            </Typography>
            <div className="LPBB">
              <Button
                disableRipple
                variant="contained"
                sx={{
                  backgroundColor: "#bf9b30",
                  color: "#FFFFFF",
                  mt: "2%",
                  fontSize: "calc(9px + 1vh);",
                  "&:hover": {
                    backgroundColor: "#cea835",
                  },
                }}
              >
                Get Started
              </Button>
            </div>
          </div>

          <div className="LPBodyImage"></div>
        </div>
      </div>
    </main>
  );
}
