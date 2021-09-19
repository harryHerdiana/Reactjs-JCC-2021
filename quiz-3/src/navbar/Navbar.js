import React from "react";
import "../assets/css/style.css"
import { Link } from "react-router-dom"
import logo from "../assets/img/logo.png"


function Navbar(){
    return(
        <nav className="topnav">
            <li>
                <img src={logo} width="250" alt="JCC Logo"></img>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/mobile-list">Mobile App List</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <form>
            <input type="text" />
            <input type="submit" value="Cari" />
        </form>
        </nav>
    //     <div className="topnav">
    //     <a href="">
    //         <img src="../assets/img/logo.png" width="70" />
    //     </a>
    //     <a href="#">Home</a>
    //     <a href="#">Movie List</a>
    //     <a href="#">About</a>
        // <form>
        //     <input type="text" />
        //     <input type="submit" value="Cari" />
        // </form>
    // </div>
    )
}
export default Navbar;