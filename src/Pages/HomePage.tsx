import React from "react";
import Navbar from "./components/NavBar";
import "./CSS/HomePage.css";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function HomePage() {
  return (
    <main className="HomePageContainer">
      <Navbar />
      <div className = "HomePageMain">
        <div className = "HPCreate"> <AddCircleOutlineIcon fontSize="large" className="Creaticon" /> </div>
      </div>
    </main>
  );
}

