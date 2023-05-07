import React from "react";
import "./CSS/DiscoverPage.css";
import Navbar from "./components/NavBar";
import { Chip, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { listMeets } from '../backend/queries/meetQueries'
import { useState, useEffect } from 'react'

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


export default function DiscoverPage() {

  const [meetsAll, setMeetsAll] = useState<any[]>([]);

  // fetch all projects from backend
  useEffect(() => {
    const fetchMeets = async () => {
      const result = await listMeets({
        filter: {
          creator_id: {
            ne: localStorage.getItem("uuid")!,
          },
        },
      });

      const filteredProjects = result.data.listMeetsModels.items.filter(
        (x) => x._deleted !== true
      );
      setMeetsAll(filteredProjects);
    };
    fetchMeets();
  }, []);

  const navigate = useNavigate();
  function CreateData(props: any) {
    return (
      <div className="DPDisplay" onClick={() => navigate("/discover/title")}>
        <div className="DiscoverImage">
          <img className="DiscoverImages" src="study.jpg" />
        </div>
        <div className="DiscoverMeeting">
          <div className="DiscoverTitle">
            <Typography
              sx={{
                color: "#000000",
                fontWeight: "bold",
                fontSize: "calc(15px + 1vh);",
              }}
            >
              {TestData.title}
            </Typography>
          </div>
          <div className="DiscoverDescription">
            <Typography
              sx={{
                color: "#000000",
                fontSize: "calc(5px + 1vh);",
              }}
            >
             {TestData.description}
            </Typography>
          </div>
          <div className="DiscoverTags">
            {TestData.classes.map((tag) => (
              <Chip
                sx={{
                  backgroundColor: "#FFFFFF",
                  color: "#000000",
                  fontSize: "calc(3px + 1vh);",
                  margin: "0.2vh",
                }}
                label={tag}
              />
            ))}
          </div>
          <div className="DiscoverTime">
            <Typography
              sx={{
                color: "#000000",
                fontSize: "calc(3px + 1vh);",
              }}
            >
              {TestData.start_time} - {TestData.end_time}
            </Typography>
          </div>
          <div className = "DiscoverButton">
            <Button sx={{
              backgroundColor: "#bf9b30",
              width: "85%",
              height: "3vh",
              fontSize: "1rem",
              color: "#FFFFFF",
              mt: ".5rem",
              "&:hover": {
                backgroundColor: "#cea835",
              },
            }}>
                Join Meeting
            </Button>
            </div>

        </div>
      </div>
    );
  }
  return (
    <main className="DiscoverContainer">
      <Navbar />
      <div className="Discover">
        <CreateData />
        <CreateData />
        <CreateData />
      </div>
    </main>
  );
}
