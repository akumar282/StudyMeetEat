import { Typography, Button, IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import InboxIcon from "@mui/icons-material/Inbox";
import "./NavBar.css";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  function Logout() {
    localStorage.clear();
    navigate("/");
    window.location.reload();
  }

  

  // const [imageSrc, setImageSrc] = useState("");
  // fetch image and comments
  // useEffect(() => {
  //   const fetchImage = async () => {
  //     const src = await getImage(localStorage.getItem("profileImage")!);
  //     setImageSrc(src);
  //   };

  //   fetchImage();

  // }, []);

  return (
    <nav className="nav">
      <div className="divNav">
        <h1 className="SiteTitle" onClick={() => navigate("/home")}>
          {" "}
          DubMeets{" "}
        </h1>
        <div className="SearchBar">
          <ul>
            {/* <img src={LogoImg} width={130} height={50} alt="passedImg"/>
                <CustomLink to= "/game"> Game </CustomLink>*/}

            <CustomLink className="navElement" to="/home">
              {" "}
              <HomeIcon fontSize="large" /> Home{" "}
            </CustomLink>
            <CustomLink className="navElement" to="/discover">
              {" "}
              <SearchIcon fontSize="large" /> Discover{" "}
            </CustomLink>
            <CustomLink className="navElement" to="/create-project">
              {" "}
              <AddIcon sx={{ fontSize: 40 }} /> Create{" "}
            </CustomLink>
            <IconButton
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                padding: "0.5rem 1rem",
                mt: "1rem",
                gap: 0,
                fontWeight: "bold",
                fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
                color: "black",
                fontSize: "1.2rem",
                borderRadius: "0",
                "&:hover": {
                  color: "#715899",
                },
              }}
              disableRipple
              onClick={() => Logout()}
            >
              {" "}
              <ExitToAppIcon fontSize="large" /> Logout
            </IconButton>
          </ul>
          {/* <div className="ProfilePicture">
              <img src={imageSrc} alt="profile"  />
          </div> */}
        </div>
      </div>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
