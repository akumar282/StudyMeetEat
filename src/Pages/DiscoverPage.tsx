import React from "react";
import "./CSS/DiscoverPage.css";
import Navbar from "./components/NavBar";
import { Chip, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { listMeets } from '../backend/queries/meetQueries'
import { useState, useEffect } from 'react'
import { getImage } from "../backend/storage/s3";

export default function DiscoverPage() {

  const [meetsAll, setMeetsAll] = useState<any[]>([]);
  console.log(meetsAll);
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
    const [imageSrc, setImageSrc] = useState("");
    // fetch image and comments
    useEffect(() => {
      const fetchImage = async () => {
        const src = await getImage(props.Meeting.image_key);
        setImageSrc(src);
      };
  
      fetchImage();
    }, []);
    return (
      <div className="DPDisplay" onClick={() => navigate("/discover/" + props.Meeting.meet_name, {state: props.Meeting})}>
        <div className="DiscoverImage">
          <img className="DiscoverImages" src={imageSrc} alt = "Meeting" />
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
              {props.Meeting.meet_name}
            </Typography>
          </div>
          <div className="DiscoverDescription">
            <Typography
              sx={{
                color: "#000000",
                fontSize: "calc(5px + 1vh);",
              }}
            >
             {props.Meeting.description}
            </Typography>
          </div>
          <div className="DiscoverTags">
            {props.Meeting.classes.map((tag) => (
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
              {props.Meeting.start_time} - {props.Meeting.end_time}
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
        {meetsAll.map((meet) => ( 
          <CreateData Meeting = {meet}/>
        ))}
      </div>
    </main>
  );
}
