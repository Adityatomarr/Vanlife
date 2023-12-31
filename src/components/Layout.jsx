import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './layout.css';

export default function Layout(){
    return(
        <div className="page-layout">     
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>

    )
}