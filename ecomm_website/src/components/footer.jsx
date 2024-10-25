import React from "react";
import './footer.css'

function Footer({ }) {
    return (
                <footer>
                    <div class="footer-container">
                        <div class="footer-section">
                            <h3>Exclusive</h3>
                            <p>Subscribe</p>
                            <p>Get 10% off your first order</p>
                            <form action="#" class="subscribe-form">
                                <input type="email" placeholder="Enter your email" />
                                <button type="submit">➤</button>
                            </form>
                        </div>

                        <div class="footer-section">
                            <h3>Support</h3>
                            <p>CSI, Ghaziabad</p>
                            <p>exclusive@gmail.com</p>
                            <p>9430450071</p>
                        </div>

                        <div class="footer-section">
                            <h3>Account</h3>
                            <ul>
                                <li><a href="#">My Account</a></li>
                                <li><a href="#">Login / Register</a></li>
                                <li><a href="#">Cart</a></li>
                                <li><a href="#">Wishlist</a></li>
                                <li><a href="#">Shop</a></li>
                            </ul>
                        </div>

                        <div class="footer-section">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Terms Of Use</a></li>
                                <li><a href="#">FAQ</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>

                        <div class="footer-section">
                            <h3>Download App</h3>
                            <p>Save $3 with App New User Only</p>
                            <div class="app-links">
                                <img src="./src/images/googleplay.png" alt="Google Play" />
                                <img src="./src/images/appstore.png" alt="App Store" />
                            </div>
                            <div class="social-links">
                                <a href="#"><i class="fab fa-facebook-f"></i></a>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                                <a href="#"><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        </div>
                    <div class="footer-bottom">
                        <p>&copy; Copyright Rimel 2022. All rights reserved</p>
                    </div>
                </footer>
    )
}

export default Footer