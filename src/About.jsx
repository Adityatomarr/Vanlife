import React from "react";
import "./about.css"
export default function About(){
    return(
        <div className="about_container">
            <div className="about_img"></div>
            <div className="about-text_wrapper">
                <h1 className="about_heading">Don’t squeeze in a sedan when you could relax in a van.</h1>
                <p className="about_text">Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                    (Hitch costs extra 😉). <br/><br/>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
                </p>
                <div className="about_explore">
                    <h2 className="about_explore_heading">Your destination is waiting.<br/>Your van is ready.</h2>
                </div>
                <button className="about_explore_btn">Explore our vans</button>
            </div>
        </div>
    )
}