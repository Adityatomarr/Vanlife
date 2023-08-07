import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar(){
    const activeStyle={
        color:"black",
        textDecoration: "underline",
        fontWeight :"800"
    }
    return(
        <nav>
            <Link className= "nav-logo" to= "/">#VANLIFE</Link>
            <div className='nav-links'> 
                <NavLink style={({isActive})=> isActive? activeStyle: null} to= '/host'>Host</NavLink>
                <NavLink style={({isActive})=> isActive? activeStyle: null} to= '/about'>About</NavLink>
                <NavLink style={({isActive})=> isActive? activeStyle: null} to= '/vans'>Vans</NavLink>
                <Link to='login'><img src="src/assets/images/avatar-icon.png" height="36rem" /></Link>
            </div>
    </nav>
    )
} 