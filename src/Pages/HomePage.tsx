import React from "react";
import Navbar from "./components/NavBar";
import "./CSS/HomePage.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { listMeets } from '../backend/queries/meetQueries'
import { useState, useEffect } from 'react'

export default function HomePage() {

  const [meetsAll, setMeetsAll] = useState<any[]>([]);

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

      const filteredProjects = result.data.listPostsModels.items.filter(
        (x) => x._deleted !== true
      );
      setMeetsAll(filteredProjects);
    };
    fetchMeets();
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

