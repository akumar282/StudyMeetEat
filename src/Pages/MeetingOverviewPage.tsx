import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./CSS/OverviewPage.css";
const TestData = {
    title: "Test Meeting",
    description: "This is a test meeting",
    start_time: "2021-10-10 10:10:00",
    end_time: "2021-10-10 10:50:00",
    location: "22222 123st sw Bellevue, WA 98004",
    classes: ["CSS350", "CSS360"],
    attendants: ["Test Attendee", "Test Attendee2", "Test Attendee3"],
    creator: "Test Creator",
}


export default function MeetingOverviewPage() {
    return (
        <main className="OverviewPage">
            <div className="OverviewPageHeader">
                
            </div>
        </main>
    );
}