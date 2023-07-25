import React from "react"
import {Outlet, NavLink} from "react-router-dom"
import "./hostLayout.css"

export default function HostLayout(){
    const activeStyle={
        color:"black",
        textDecoration: "underline",
       
    }
    return(
        <>
            <nav className="host-navbar">
                <NavLink style={({isActive})=> isActive? activeStyle: null} end to= "/host">Dashboard</NavLink>
                <NavLink style={({isActive})=> isActive? activeStyle: null} to= "/host/income">Income</NavLink>
                <NavLink style={({isActive})=> isActive? activeStyle: null} to= "/host/vans">Vans</NavLink>
                <NavLink style={({isActive})=> isActive? activeStyle: null} to= "/host/reviews">Reviews</NavLink>
            </nav>
            <Outlet/>
        </>
    ) 
}