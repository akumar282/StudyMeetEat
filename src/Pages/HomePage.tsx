import React from "react";
import Navbar from "./components/NavBar";
import "./CSS/HomePage.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { listMeets } from "../backend/queries/meetQueries";
import { useState, useEffect } from "react";
import { getUserById } from "../backend/queries/userQueries";
import { getMeetById } from "../backend/queries/meetQueries";
import { getImage } from "../backend/storage/s3";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router";

export default function HomePage() {
  const [meetsAll, setMeetsAll] = useState<any[]>([]);
  const [attendingAll, setAttendingAll] = useState<any[]>([]);
  const [state, setState] = useState(true);
  console.log(meetsAll);
  // fetch all projects from backend
  useEffect(() => {
    const fetchMeets = async () => {
      const result = await listMeets({
        filter: {
          creator_id: {
            eq: localStorage.getItem("uuid")!,
          },
        },
      });

      const filteredProjects = result.data.listMeetsModels.items.filter(
        (x) => x._deleted !== true
      );
      setMeetsAll(filteredProjects);
    };

    const usersAttendingMeets = async () => {
      const attendingMeets: any[] = [];
      const result = await getUserById(localStorage.getItem("uuid")!);
      if (result.data.getUsersModel.attending_meets) {
        for (const id of result.data.getUsersModel.attending_meets) {
          const project = await getMeetById(id);
          attendingMeets.push(project.data.getMeetsModel);
        }
      }
      setAttendingAll(attendingMeets);
    };

    fetchMeets();
    usersAttendingMeets();
  }, []);
  console.log(attendingAll);
  function StateButtons() {
    return (
      <div className="StateButtons">
        <button className="StateButton" onClick={()=>setState(true)}>
          Hosting
        </button>
        <button className="StateButton" onClick={()=>setState(false)}>
          Attending
        </button>
      </div>
    );
  }
  return (
    <main className="HomePageContainer">
      <Navbar />
      <div className="HomePageMain">
        <StateButtons />
        <ShowMeetings
          meetsAll={meetsAll}
          attendingAll={attendingAll}
          state={state}
        />
      </div>
    </main>
  );
}

function ShowMeetings(props: any) {
  if (props.state) {
    return (
      <div className="HomePageMain">
        <div className="HPCreate">
          <AddCircleOutlineIcon fontSize="large" className="Creaticon" />{" "}
        </div>
        {props.meetsAll.map((meet) => (
          <MeetCard meet={meet} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="HomePageMain">
        <div className="HPCreate">
          <AddCircleOutlineIcon fontSize="large" className="Creaticon" />{" "}
        </div>
        {props.attendingAll.map((meet) => (
          <MeetCard meet={meet} />
        ))}
      </div>
    );
  }
}
function MeetCard(props: any) {
  const navigate = useNavigate();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
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
    const fetchImage = async () => {
      const src = await getImage(props.meet.image_key);
      setImageSrc(src);
    };

    fetchImage();
  }, [props.meet.image_key]);
  return (
    <div
      className="MeetCard"
      onClick={() =>
        navigate("/discover/" + props.meet.meet_name, { state: props.meet })
      }
    >
      <div className="MCImageContainer">
        <img src={imageSrc!} alt="" className="MCImage" />
      </div>
      <div className="MCInfo">
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#FFFFFF",
          }}
        >
          {props.meet.meet_name}
        </Typography>
        <Typography sx={{ fontSize: ".8rem", color: "#FFFFFF" }}>
          {formatIsoTimestamp(props.meet.start_time)}{" "}
        </Typography>
        <Typography sx={{ fontSize: ".8rem", color: "#FFFFFF" }}>
          {" "}
          {formatIsoTimestamp(props.meet.end_time)}
        </Typography>
      </div>
    </div>
  );
}
