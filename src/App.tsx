import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";
import DiscoverPage from "./Pages/DiscoverPage";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
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
      </Routes>
    </BrowserRouter>
    </LocalizationProvider>
  );
}

export default App;
