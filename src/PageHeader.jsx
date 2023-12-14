import React from "react";
import "./styles.css";
import Merged from "./Merged";
import { BrowserRouter, Link, NavLink } from "react-router-dom";

function PageHeader(){
    return(
        <>
            <div className="main-header">
                <nav class="nav">
                <ul>
                    <li><Link to="src\Merged.js"> Home </Link></li>
                    <li><a href="store.html"> Store </a> </li>
                    <li><a href="about.html"> About </a> </li>
                </ul>
                </nav>
                <h1 class="band-name"> Imagine Dragons </h1>
                <div class="container"> 
                    <button class="btn btn-header"> Get out latest album </button>
                </div>
                <button class="btn btn-header btn-play"> &#9658 </button>
            </div>
        
     </>
    )
}

export default PageHeader;