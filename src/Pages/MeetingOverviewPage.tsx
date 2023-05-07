import React, { useEffect, useState, useMemo } from "react";
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";
import "./CSS/OverviewPage.css";
import { Button, Chip, IconButton, Typography } from "@mui/material";
import { updateMeet } from "../backend/mutations/meetMutations";
import { updateUser } from "../backend/mutations/userMutations";
import { getImage } from "../backend/storage/s3";
import { GoogleMap, Marker, MarkerF, useLoadScript } from "@react-google-maps/api";
import { APIKEY } from "../APIKEY"
import { getGeolocation } from "../backend/utils/googleMaps";


export default function MeetingOverviewPage() {
  const location = useLocation();
  const meeting = location.state;
  const [cordsL, setCordsL] = useState( { lat: 47.759444, lng:  -122.191111 });
  console.log(meeting);

  function formatIsoTimestamp(isoTimestamp: string): string {
    const date = new Date(isoTimestamp);
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.toLocaleString("en-US", { day: "numeric" });
    const year = date.toLocaleString("en-US", { year: "numeric" });
    const time = date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
    });
  
    return `${month} ${day}, ${year}, ${time}`;
  }
  useEffect(() => {
    const getCords = async () =>  {
      const cords = await getGeolocation(meeting.location, APIKEY);
      setCordsL(cords!);
    }
    getCords();
  }, [meeting.location]);

  console.log(cordsL);
  console.log(meeting.location);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: APIKEY,
  });
  const [imageSrc, setImageSrc] = useState("");
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
  const center = useMemo(() => ({ lat: 47.759444, lng:  -122.191111 }), []);
  const google = window.google;
  useEffect(() => {
    const fetchImage = async () => {
      const src = await getImage(meeting.image_key);
      setImageSrc(src);
    };

    fetchImage();
  }, []);
  const navigate = useNavigate();


  function Map() {
    if (!isLoaded) return <></>;
    return (
      <GoogleMap
        mapContainerClassName="map-container"
        center={cordsL}
        zoom={17}
      >
        <MarkerF position={cordsL} />
      </GoogleMap>
    );
  }
  return (
    <main className="OverviewPage">
      <div className="OverviewTopBar">
        <Button variant="contained" 
            onClick={() => { navigate(-1); }}
        sx={{
              backgroundColor: "#bf9b30",
              width: "85%",
              color: "#FFFFFF",
              fontSize: "1rem",
              height: "3rem",
              maxWidth: "15rem",
              "&:hover": {
                backgroundColor: "#cea835",
              },
            }}>
          Back
        </Button>
      </div>
      <div className="OverviewContainer">
        <div className="OverviewTop">
          <div className="OverviewImageHolder">
            <img className="DiscoverImages" src= {imageSrc}/>
          </div>
          <div className="OverviewInfo">
            <div className="OverviewTitle">
              <Typography sx={{ fontSize: "calc(20px + 1vw)", fontWeight: "bold"}}>{meeting.meet_name}</Typography>
            </div>
            <div className="OverviewDescription">
              <Typography
                sx = {{fontSize: "calc(8px + .5vw)"}}
                marginLeft={"2rem"}
                marginRight={"2rem"}
              >
                {meeting.description}
              </Typography>
            </div>
            <div className="OverviewClass">
              {meeting.classes.map((item) => (
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
                {formatIsoTimestamp(meeting.start_time)} - {formatIsoTimestamp(meeting.end_time)}
              </Typography>
            </div>
            <div className = "OverviewAttendes">
            <Typography variant="body1">
                Attending: {meeting.attendants.length} 
              </Typography>
            </div>
            <div className = "OverviewAttendes">
            <Typography variant="body1">
                Creator: {meeting.meet_creator} 
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
        <Map />
        </div>
      </div>
    </main>
  );
}
