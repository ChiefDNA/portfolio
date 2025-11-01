import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import useResponsiveChanges from "../hooks/useResponsiveChanges";

export default function Navbar() {
    useResponsiveChanges("Navbar");
    return (
        <header id="Navbar" className="navbar">
            <div className="nav-container">
                <div>
                    <img alt="" rel="icon" src="/portfolio/chief_dna_labs_1.png" />
                    <img alt="" rel="icon" src="/portfolio/chief_dna_labs_2.png" />
                </div>
                {/* <h1 className="nav-logo">Ngabirano Daniel</h1> */}
                <nav>
                    <NavLink to="/" end className={({ isActive }) => (isActive ? "active" : "")}>
                        Portfolio
                    </NavLink>
                    <NavLink to="/apps" className={({ isActive }) => (isActive ? "active" : "")}>
                        Apps
                    </NavLink>
                    <a href="/portfolio/downloads/resume.pdf" target="_blank" rel="noreferrer" >
                        Resume
                    </a>
                </nav>
            </div>
        </header>
    );
}
