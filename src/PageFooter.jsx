import React from "react";
import "./styles.css";

function PageFooter(){
    return(
        <>
            <footer class="main-footer">
                <div class="container main-footer-container">
                    <h3 class="band-name smaller"> Imagine Dragons </h3>
                    <ul class="nav footer-nav">
                        <li>
                        <a href="https://www.youtube.com/">
                            <img src="Images/youtube-logo.jpeg" width="70px"/>
                        </a>
                        </li>
                        <li>
                        <a href="https://www.spotify.com/">
                            <img src="src\Images\spotifylogo.jpeg" width="70px"/>
                        </a>
                        </li>
                    </ul>
                </div> 
            </footer>
        
        
        </>
    )
}

export default PageFooter;