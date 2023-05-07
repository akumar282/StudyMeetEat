import React from "react";
import Navbar from "./components/NavBar";
import "./CSS/HomePage.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { listMeets } from '../backend/queries/meetQueries'
import { useState, useEffect } from 'react'
import { getUserById } from "../backend/queries/userQueries";
import { getMeetById } from "../backend/queries/meetQueries";

export default function HomePage() {

  const [meetsAll, setMeetsAll] = useState<any[]>([]);
  const [attendingAll, setAttendingAll] = useState<any[]>([]);

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
      const result = await getUserById(localStorage.getItem('uuid')!);
      if (result.data.getUsersModel.saved_posts) {
        for (const id of result.data.getUsersModel.attending_meets) {
          const project = await getMeetById(id);
          attendingMeets.push(project.data.getMeetsModel);
        }
      } else {
        console.log('no saved projects');
      }
      setAttendingAll(attendingMeets);
    };

    fetchMeets();
    usersAttendingMeets();
  }, []);

  return (
    <main className="HomePageContainer">
      <Navbar />
      <div className = "HomePageMain">
        <div className = "HPCreate"> <AddCircleOutlineIcon fontSize="large" className="Creaticon" /> </div>
      </div>
    </main>
  );
}

