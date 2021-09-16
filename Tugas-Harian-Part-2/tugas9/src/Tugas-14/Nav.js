import React from "react";
import {Link} from "react-router-dom"
import "./assets/Nav.css"
const Nav =()=>{
    return(
        <div className="Navbar">
            <Link id="link" to="/Tugas-9">Tugas-9</Link>
            <Link id="link" to="/Tugas-10">Tugas-10</Link>
            <Link id="link" to="/Tugas-11">Tugas-11</Link>
            <Link id="link" to="/Tugas-12">Tugas-12</Link>
            <Link id="link" to="/Tugas-13">Tugas-13</Link>
            <Link id="link" to="/Tugas-14">Tugas-14</Link>
        </div>
    )
}

export default Nav;