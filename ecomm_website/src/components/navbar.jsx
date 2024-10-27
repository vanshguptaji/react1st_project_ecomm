import React from "react";
import { NavLink } from "react-router-dom";
import './navbar.css'

function Navbar({setShow}) {
    console.log();

    return (
        <section className="section-navbar">
            <div className="above-nav">
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
                <NavLink to = "/">SHOP NOW</NavLink>
            </div>
            <div className="container">
                <div className="navbar-brand" onClick={()=>setShow(false)}>
                    <NavLink to="/">.</NavLink>
                  
                </div>
                <div>
                    <nav class="navbar">
                        <ul>
                            <li class="nav-item">
                                <NavLink to="/Wishlist"><i class="fa-regular fa-heart"></i></NavLink>
                                
                            </li>
                            <li class="nav-item" onClick={()=>setShow(true)}>
                               <NavLink to="/Addtocart"> <i class="fa-solid fa-cart-shopping"></i></NavLink> 
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </section>
    )

}

export default Navbar