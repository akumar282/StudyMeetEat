import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/OverviewPage.css";
import { Button, Chip, IconButton, Typography } from "@mui/material";
import { updateMeet } from "../backend/mutations/postMutations";
import { updateUser } from "../backend/mutations/userMutations";
const TestData = {
  title: "Test Meeting",
  description:
    "Dn%VHZx#r8BXq3 &%34ZJ$Bm6QY4ZQPEewsG$ayZm 3+hpsZ2@!+dhd=burCq&KZw8GYnQs jS3cE6&yj&$u@4uyHZ2EaMz8hV9eD5d",
  start_time: "2021-10-10T10:10:00",
  end_time: "2021-10-10T10:50:00",
  location: "22222 123st sw Bellevue, WA 98004",
  classes: ["CSS350", "CSS360"],
  attendants: ["Test Attendee", "Test Attendee2", "Test Attendee3"],
  creator: "Test Creator",
};

export default function MeetingOverviewPage() {

  async function updateAttendees(props: any) {
    const result = await updateMeet({
      input: {
        id: props.meetid,
        attendants: [localStorage.getItem("uuid")!]
      }
    })
    const result2 = await updateUser({
      input: {
        id: localStorage.getItem("uuid")!,
        attending_meets: [props.meetid]
      }
    })
  }
  return (
    <main className="OverviewPage">
      <div className="OverviewContainer">
        <div className="OverviewTop">
          <div className="OverviewImageHolder">
            <img className="DiscoverImages" src="BookIcon.png" />
          </div>
          <div className="OverviewInfo">
            <div className="OverviewTitle">
              <Typography sx={{ fontSize: "calc(20px + 1vw)", fontWeight: "bold"}}>{TestData.title}</Typography>
            </div>
            <div className="OverviewDescription">
              <Typography
                sx = {{fontSize: "calc(8px + .5vw)"}}
                marginLeft={"2rem"}
                marginRight={"2rem"}
              >
                {TestData.description}
              </Typography>
            </div>
            <div className="OverviewClass">
              {TestData.classes.map((item) => (
                <Chip
                  sx={{
                    backgroundColor: "#F5F5F5",
                  }}
                  label={item}
                />
              ))}
            </div>
            <div className="OverviewTime">
              <Typography variant="body1">
                {TestData.start_time} - {TestData.end_time}
              </Typography>
            </div>
            <div className="OverviewButtons">
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#bf9b30",
                  width: "80%",
                  color: "#FFFFFF",
                  "&:hover": {
                    backgroundColor: "#cea835",
                  },
                }}
              >
                Join Meeting
              </Button>
            </div>
          </div>
        </div>
        <div className="OverviewBottom">
            
        </div>
      </div>
    </main>
  );
}
