import React from "react";
import { useOutletContext } from "react-router-dom";
import "./hostVanDetails.css"



export default function HostVanDetails(){
    const {van}= useOutletContext();
    return (
        <div className="host-van-info">
            <h2>Name: <span>{van.name}</span></h2>
            <h2>Category: <span>{van.type}</span></h2>
            <h2>Description: <span>{van.description}</span></h2>
            <h2>Visibility: <span>Public</span></h2>

        </div>
        
    )
}