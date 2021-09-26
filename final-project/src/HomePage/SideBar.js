import React from "react";
import Typography from "@mui/material/Typography";
import SettingsIcon from "@mui/icons-material/Settings";
import MovieTwoToneIcon from "@mui/icons-material/MovieTwoTone";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-card">
        <h2>Welcome back, {Cookies.get("user")}</h2>
        <hr />
        <br />
        <Link
          style={{
            textDecoration:"none",
            color: "inherit",
            fontStyle: "inherit",
            display: "flex",
            margin: "auto",
            fontWeight: "bold",
          }}
          to="/setting_movie"
        >
          <MovieTwoToneIcon fontSize="small" sx={{ marginRight: "5px" }} />
          Setting Movie
        </Link>
        <br />
        <Link
          style={{
            textDecoration:"none",
            color: "inherit",
            fontStyle: "inherit",
            display: "flex",
            margin: "auto",
            fontWeight: "bold",
          }} to="/setting_games"
        >
          <SportsEsportsTwoToneIcon
            fontSize="small"
            sx={{ marginRight: "5px" }}
          />
          Setting Games
        </Link>
        <br />
        <Link
          style={{
            textDecoration:"none",
            color: "inherit",
            fontStyle: "inherit",
            display: "flex",
            margin: "auto",
            fontWeight: "bold",
          }}
          to="/change_password"
        >
          <SettingsIcon fontSize="small" sx={{ marginRight: "5px" }} />
          Change Password
        </Link>
      </div>
    </div>
  );
};

export default SideBar;
