import React from "react";
import { Link } from "react-router-dom";
import './navbar.css'

function Navbar() {
    console.log();

    return (
        <section className="section-navbar">
            <div className="above-nav">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <a href="">SHOP NOW</a>
            </div>
            <div className="container">
                <div className="navbar-brand">
                    <Link to="/"><a>.</a></Link>
                  
                </div>
                <div>
                    <nav class="navbar">
                        <ul>
                            <li class="nav-item">
                                <Link to="/"><i class="fa-regular fa-heart"></i></Link>
                                
                            </li>
                            <li class="nav-item">
                               <Link to="/"> <i class="fa-solid fa-cart-shopping"></i></Link> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )

}

export default Navbar