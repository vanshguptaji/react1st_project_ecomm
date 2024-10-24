import React from "react";
import './navbar.css'

function Navbar(){
    console.log();

    return(
        <section className="section-navbar">
            <div className="above-nav">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="">SHOP NOW</a>
            </div>
            <div className="container">
            <div className="navbar-brand">
            <a href="index.html">Home</a>
            </div>
            <div>
            <nav class="navbar">
                <ul>
                    <li class="nav-item">
                        <a class="nav-link" href="" target="_blank"><i class="fa-regular fa-heart"></i></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="" target="_blank"><i class="fa-solid fa-cart-shopping"></i></a>
                    </li>
                </ul>
            </nav>
            </div>
            </div>
        </section>
    )
    
}

export default Navbar