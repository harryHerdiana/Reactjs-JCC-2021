import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../Assets/image/logoipsum-logo-16.png";
import "../Assets/css/styles.css";
import Typography from "@mui/material/Typography";
import MovieTwoToneIcon from "@mui/icons-material/MovieTwoTone";
import SportsEsportsTwoToneIcon from "@mui/icons-material/SportsEsportsTwoTone";
import LoginTwoToneIcon from "@mui/icons-material/LoginTwoTone";
import AppRegistrationRoundedIcon from "@mui/icons-material/AppRegistrationRounded";
import LogoutIcon from '@mui/icons-material/Logout';
import { UserContext } from "../Context/UserContext";
import Cookies from "js-cookie";
import { useHistory } from "react-router";
import HomeIcon from '@mui/icons-material/Home';
function Header() {
  const { setLoginStatus } = useContext(UserContext)
  let history = useHistory();
  const handleLogout = () => {
    setLoginStatus(false);
    Cookies.remove("user");
    Cookies.remove("email");
    Cookies.remove("token");
    history.push("/");
  };
  return (
    <section className="navbar-container">
      <nav className="topnav">
        {Cookies.get("token")!== undefined && (<div className="nav-item">
          <Link to="" onClick={handleLogout}>
            <LogoutIcon id="navbar-icon" />
            <Typography variant="h6">Logout</Typography>
          </Link>
        </div>)}
        {Cookies.get("token")=== undefined && (<><div className="nav-item">
          <Link to="/register">
            <AppRegistrationRoundedIcon id="navbar-icon" />
            <Typography variant="h6">Register</Typography>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/login">
            <LoginTwoToneIcon id="navbar-icon" />
            <Typography variant="h6">Login</Typography>
          </Link>
        </div></>)}
        <div className="nav-item">
          <Link to="/all_games">
            <SportsEsportsTwoToneIcon id="navbar-icon" />
            <Typography variant="h6">Games</Typography>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/all_movie">
            <MovieTwoToneIcon id="navbar-icon" />
            <Typography variant="h6">Movie</Typography>
          </Link>
        </div>
        <div className="nav-item">
          <Link to="/">
            <HomeIcon id="navbar-icon" />
            <Typography variant="h6">Home</Typography>
          </Link>
        </div>
      </nav>
      <div
        id="Logo-Navbar"
        style={{ margin: "auto", position: "absolute", left: "20px" }}
      >
        <Link to="/">
          <img id="logo" src={logo} width="100" alt="IpsumLogo" />
        </Link>
      </div>
    </section>
  );
}
export default Header;
