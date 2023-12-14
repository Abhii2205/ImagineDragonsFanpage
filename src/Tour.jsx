import React from "react";
import "./styles.css";

function Tour(){
    return(
        <>
            <div className="content-section container">
                <h2 className="section-header"> Tour</h2>
                <div>
                    <div className="tour-row">
                        <strong className="tour-item tour-date">Aug 16</strong>
                        <span className="tour-item tour-city">INFA, Bangalore </span>
                        <button className="btn tour-item tour-btn">Buy Tickets</button>
                    </div>

                    <div className="tour-row">
                        <strong className="tour-item tour-date">Aug 18</strong>
                        <span className="tour-item tour-city">Amazon, Hyderabad</span>
                        <button className="btn tour-item tour-btn">Buy Tickets</button>
                    </div>
                    <div className="tour-row"> 
                        <strong className="tour-item tour-date">Aug 20</strong>
                        <span className="tour-item tour-city">INFA, Redwood CA</span>
                        <button className="btn tour-item tour-btn">Buy Tickets</button>
                    </div>
                </div>



            </div>
        
        
        </>
    )
}

export default Tour;