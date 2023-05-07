import React from "react";
import "./CSS/DiscoverPage.css";
import Navbar from "./components/NavBar";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DiscoverPage() {
    const navigate = useNavigate();
    function CreateData (props: any) {
        return (
            <div className="DPDisplay" onClick = {() => navigate("/discover/title")} >
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
        )
    }
    return (
        <main className="DiscoverContainer">
            <Navbar />
            <div className="Discover">
                <CreateData />
            </div>
        </main>
    );
}
