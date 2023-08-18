import {React,useState, useEffect} from "react";
import { Link, useLoaderData } from "react-router-dom";
import "./hostvans.css"
import { getHostVans } from "../api";
import { requireAuth } from "../util";

export async function loader({request}){
    const res = await requireAuth(request)
    if(res){
        return res
    }
    return getHostVans()  
}
export default function HostVans(){
    const vans = useLoaderData()

    // useEffect(() =>{
    //     fetch("/api/host/vans")
    //         .then(res => res.json())
    //         .then(data => setVans(data.vans))
    // },[])

    const vanElement=vans.map(van=> {
        return(
            <div key={van.id} className="host-vans-list-item-container">
                <Link to={van.id} className="host-vans-list-item">
                    <img src={van.imageUrl} className="host-vans-list-item_image"/>
                    <div className="host-vans-list-item_text">
                        <h2>{van.name}</h2>
                        <p>${van.price}/day</p>
                    </div>
                </Link>
            </div>
        )
    })
    return(
        <div className="host-vans">
            <h1>Your listed vans</h1>
            <div className="host-vans-list">
                {vanElement}
            </div>
        </div>
    )
}