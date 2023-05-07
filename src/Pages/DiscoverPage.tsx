import React from "react";
import "./CSS/DiscoverPage.css";
import Navbar from "./components/NavBar";
import { Chip } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function DiscoverPage() {
    const navigate = useNavigate();
    function CreateData(props: any) {
        return (
            <div className="DPDisplay" onClick={() => navigate("/discover/title")} >
                <div className="DiscoverImage">
                    <img className="DiscoverImages" src="study.jpg" />
                </div>
                <div className="DiscoverMeeting">
                    <h1 className="DiscoverTitle"> Study Group </h1>
                    <div className="DiscoverDesc"> description </div>
                    <div className="DiscoverLocation">Location: </div>
                    <div className="DiscoverDateTime">
                        <div className="DiscoverDate">Date: </div>
                        <div className="DiscoverTime">Time: </div>
                    </div>

                    <Chip sx={{
                        position: "absolute",
                        top: "4%",
                        right: "1%",
                        background: "#fcf94875",
                    }}
                        label="class" />
                </div>
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
