import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import DiscoverPage from "./Pages/DiscoverPage";
import MeetingOverviewPage from "./Pages/MeetingOverviewPage";
import MFAPopup from "./Pages/MFAPopup";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "./App.css";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreatePage />} />
          <Route path="/discover" element={<DiscoverPage />} />
          <Route path="/discover/*" element={<MeetingOverviewPage />} />
          <Route path="/authcode" element={<MFAPopup />} />
        </Routes>
      </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
