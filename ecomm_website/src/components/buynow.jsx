import React from "react";
import './buynow.css' 

function Buynow({}){
    return(
        <>        
        <section className="buynow-section">
        <div className="grid-two--cols">
            <div className="content">
                <h4>Categories</h4>
                <h1>Enhance Your Music Experience</h1>
                <button>Buy Now</button>
            </div>
            <div className="jbl_image">
                <img src="./src/images/jbl_speakers.png" alt="jbl_speakers"/>
            </div>
        </div>
    </section>
    <section className="logo-section">
        <div className="grid-three--cols">
            <div className="icons"><i class="fa-regular fa-truck"></i></div>
            <div className="icons"><i class="fa-regular fa-headphones"></i></div>
            <div className="icons"><i class="fa-sharp fa-regular fa-shield-check"></i></div>
        </div>
    </section>
    </>
    )
}

export default Buynow