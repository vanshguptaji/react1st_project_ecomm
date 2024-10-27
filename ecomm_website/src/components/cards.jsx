import React, { useState } from 'react';
import './cards.css'

function Cards({item, handleClick}) {

    const  {productname , discount, dprice , price}= item;

    return (
        <section className="cards-section">
            <div class="product-card">
                <div class="discount-badge">{discount}</div>

                <div class="product-image">
                    <img src="./src/images/gucci_bag.webp" alt="Gucci duffle bag"/>
                        <div class="wishlist-icon">
                            <i class="fa-regular fa-heart"></i>
                        </div>
                </div>

                <div class="add-to-cart">
                    <button onClick={() => handleClick(item)}><i class="fa-solid fa-cart-shopping"></i>     Add To Cart</button>
                </div>

                <div class="product-info">
                    <h3>{productname}</h3>
                    <div class="price">
                        <span class="current-price">{dprice}</span>
                        <span class="original-price">{price}</span>
                    </div>
                </div>
            </div>

        </section>
        )
}

export default Cards