import React from "react";
import "./styles.css";

function CartSection(){
    return(
        <>
            <div class="container content-section">
                <h2 class="section-header">Cart</h2>
                    <div class="cart-row">
                        <span class="cart-item cart-header cart-column"> Item </span>
                        <span class="cart-item cart-header cart-column">Price </span>
                        <span class="cart-item cart-header cart-column">Quantity </span>
                    </div>
                    <div class='cart-items'>
                        <div class="cart-row">
                            <div clss="cart-item cart-column">
                                <img class="cart-item-image" src="Images/tshirt.jpg" width="100" height="100"/>
                                <span class="cart-item-title"> Tshirt </span>
                            </div>
                            <span class="cart-price cart-column"> $10.99</span>
                            <div class="cart-Quantity cart-column">
                                <input class="cart-quantity-input" type="number" value="1"/>
                                <button type="button" class="btn btn-danger"> Remove</button>
                            </div>
                        </div>
                        
                        
                        <div class="cart-row">
                            <div clss="cart-item cart-column">
                                <img class="cart-item-image" src="Images/warriors.jpg" width="100" height="100"/>
                                <span class="cart-item-title"> Warriors </span>
                            </div>
                            <span class="cart-price cart-column"> $14.99</span>
                            <div class="cart-Quantity cart-column">
                                <input class="cart-quantity-input" type="number" value="1"/>
                                <button type="button" class="btn btn-danger"> Remove</button>
                            </div>
                         </div>
                    </div>

                    <div class="cart-total">
                        <strong class="cart-total-title"> Total</strong>
                        <span class="cart-total-price"> $25.98</span>
                    </div>

                    <button class="btn btn-primary btn-purchase" type="button"> Purchase </button>
                </div>
        </>
    )
}

export default CartSection;