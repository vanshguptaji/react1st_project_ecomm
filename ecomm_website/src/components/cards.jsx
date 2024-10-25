import React from "react";
import './cards.css'

function Cards({ }) {
    return (
        <section className="cards-section">
            <div class="product-card">
                <div class="discount-badge">-35%</div>

                <div class="product-image">
                    <img src="./src/images/gucci_bag.webp" alt="Gucci duffle bag"/>
                        <div class="wishlist-icon">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                </div>

                <div class="add-to-cart">
                    <button><i class="fa-solid fa-cart-shopping"></i>     Add To Cart</button>
                </div>

                <div class="product-info">
                    <h3>Gucci duffle bag</h3>
                    <div class="price">
                        <span class="current-price">$960</span>
                        <span class="original-price">$1160</span>
                    </div>
                </div>
            </div>

        </section>
        )
}

export default Cards