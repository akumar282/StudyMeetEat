import React from "react";
import "./CSS/DiscoverPage.css";
import Navbar from "./components/NavBar";
import { Chip } from "@mui/material";

export default function DiscoverPage() {
    return (
        <main className="DiscoverContainer">
            <Navbar />
            <div className="Discover">
                <div className="DPDisplay">
                    <img className="DiscoverImage" src = "study.jpg"/>
                    <h className="DiscoverTitle">Study</h>
                    <p className="DiscoverDesc">Study with other students</p>
                    <p className= "DiscoverTime"> Time:</p>
                    <p className = "DiscoverDate"> Date: </p>
                    <p className = "DiscoverLocation"> Location: </p>
                    <Chip sx={{
                        position: "absolute",
                        top: "10%",
                        right: "3%",
                        background: "#fcf94875",
                    }}
                        label="class" />
                </div>
            </div>
        </main>
    );
}