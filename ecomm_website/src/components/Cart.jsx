import React from 'react'
import { useState } from 'react'
import './Cart.css'

function Cart({cart, setCart}) {

    return (
        <div class="container">
            <nav class="subnav">
                <a href="/">Home</a> / <span>Cart</span>
            </nav>

            <div class="cart-section">
                <table class="cart-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart?.map((item)=>(
                                // console.log(productname, discount, dprice, price);
                                <tr>
                                <td class="product-details">
                                    <img src="./src/images/gucci_bag.webp" alt="LCD Monitor" />
                                    <span>{item.productname}</span>
                                </td>
                                <td>{item.dprice}</td>
                                <td>
                                    <div class="quantity-buttons">
                                    <input type="number" class="quantity-input" placeholder='1' min="1" max="10" step="1"/>
                                    </div>
                                </td>
                                <td>{item.dprice}</td>
                            </tr>
                            ))}
                    </tbody>
                </table>

                <button class="update-cart">Update Cart</button>

                <div class="cart-summary">
                    <h3>Cart Total</h3>
                    <ul>
                        <li>Subtotal: <span>$1750</span></li>
                        <li>Shipping: <span>Free</span></li>
                        <li>Total: <span>$1750</span></li>
                    </ul>
                    <button class="checkout-btn">Proceed to checkout</button>
                </div>
            </div>
        </div>

    )
}

export default Cart