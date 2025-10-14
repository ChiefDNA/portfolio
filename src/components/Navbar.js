import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import useResponsiveChanges from "../hooks/useResponsiveChanges";

export default function Navbar() {
    useResponsiveChanges("Navbar");
    const loc = useLocation();
    return (
        <header id="Navbar" className="navbar">
        <div className="nav-container">
            <div>
                <img alt="" rel="icon" src="/portfolio/chief_dna_labs_1.png" />
                <img alt="" rel="icon" src="/portfolio/chief_dna_labs_2.png" />
            </div>
            {/* <h1 className="nav-logo">Ngabirano Daniel</h1> */}
            <nav>
            <Link className={loc.pathname === "/" ? "active" : ""} to="/">Portfolio</Link>
            <Link className={loc.pathname === "/apps" ? "active" : ""} to="/apps">Apps</Link>
            <a href="/downloads/resume.pdf" target="_blank" rel="noreferrer">Resume</a>
            </nav>
        </div>
        </header>
    );
}
