import React from "react";
import "./styles.css";

function AlbumSection(){
    return(
        <>
            <div class="content-section container">
                <h2 class="section-header"> Music</h2>
                <div class="shop-items">
                    <div class="shop-item">
                        <span class="shop-item-title">Album 1</span>
                        <img class="shop-item-image album1" src="Images/thunfer.jpg"/>
                        <div class="shop-item-details">
                            <span class="shop-item-price">$10.99</span>
                            <button class="btn btn-primary shop-item-button">Add to Cart</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Album 2</span>
                        <img class="shop-item-image" src="Images/whatever.jpg"/>
                        <div class="shop-item-details">
                            <span class="shop-item-price">$11.99</span>
                            <button class="btn btn-primary shop-item-button">Add to Cart</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Album 3</span>
                        <img class="shop-item-image" src="Images/believer.jpg"/>
                        <div class="shop-item-details">
                            <span class="shop-item-price">$12.99</span>
                            <button class="btn btn-primary shop-item-button">Add to Cart</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Album 4</span>
                        <img class="shop-item-image" src="Images/warriors.jpg"/>
                        <div class="shop-item-details">
                            <span class="shop-item-price">$14.99</span>
                            <button class="btn btn-primary shop-item-button">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        
        
        </>
    )
}

export default AlbumSection;