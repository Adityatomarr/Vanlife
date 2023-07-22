import React from "react"
import {Outlet,Link} from "react-router-dom"
import "./hostLayout.css"

export default function HostLayout(){
    return(
        <>
            <nav className="host-navbar">
                <Link to= "/host/">Dashboard</Link>
                <Link to= "/host/income">Income</Link>
                <Link to= "/host/reviews">Reviews</Link>
            </nav>
            <Outlet/>
        </>
    )
}