import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export default function Navbar(){
    return(
        <nav>
            <Link className= "nav-logo" to= "/">#VANLIFE</Link>
            <div className='nav-links'> 
                <Link to= '/about'>About</Link>
                <Link to= '/vans'>Vans</Link>
            </div>
    </nav>
    )
} 