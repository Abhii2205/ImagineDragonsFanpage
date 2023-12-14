import React from "react";
import "./styles.css";

function MerchSection(){
    return(
        <>
            <div class="content-section container">
                <h2 class="section-header"> Merch</h2>
                <div class="shop-items">
                    <div class="shop-item">
                        <span class="shop-item-title">Tshirt</span>
                        <img class="shop-item-image" src="Images/tshirt.jpg"/>
                        <div class="shop-item-details">
                            <span class="shop-item-price">$10.99</span>
                            <button class="btn btn-primary shop-item-button">Add to Cart</button>
                        </div>
                    </div>
                    <div class="shop-item">
                        <span class="shop-item-title">Mug</span>
                        <img class="shop-item-image" src="Images/mug.jpg"/>
                        <div class="shop-item-details">
                            <span class="shop-item-price">$12.99</span>
                            <button class="btn btn-primary shop-item-button">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </>
    )
}

export default MerchSection;