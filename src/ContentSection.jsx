import React from "react";
import "./styles.css";

function ContentSection(){
    return(
        <>
            <div className="content-section container">
                <h2 class="section-header"> Tour</h2>
                <div>
                    <div class="tour-row">
                        <strong class="tour-item tour-date">Aug 16</strong>
                        <span class="tour-item tour-city">INFA, Bangalore </span>
                        <button class="btn tour-item tour-btn">Buy Tickets</button>
                    </div>

                    <div class="tour-row">
                        <strong class="tour-item tour-date">Aug 18</strong>
                        <span class="tour-item tour-city">Amazon, Hyderabad</span>
                        <button class="btn tour-item tour-btn">Buy Tickets</button>
                    </div>
                    <div class="tour-row"> 
                        <strong class="tour-item tour-date">Aug 20</strong>
                        <span class="tour-item tour-city">INFA, Redwood CA</span>
                        <button class="btn tour-item tour-btn">Buy Tickets</button>
                    </div>
                </div>



            </div>
        
        
        </>
    )
}

export default ContentSection;