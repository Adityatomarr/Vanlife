import React from "react";
import './home.css'
import { Link } from "react-router-dom";

export default function Home(){
    return(
        <div className="home_container">
            <div className="home_text">
                <div className="home_heading">You got the travel plans, we got the travel vans.</div>
                <p className="home_para">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
                <Link to= '/vans' className="home_button">Find your van</Link>
            </div>
        </div>
    )
}