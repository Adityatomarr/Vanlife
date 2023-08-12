import {React,useState,useEffect} from "react";
import {useParams,Outlet,Link,NavLink, useLoaderData,} from "react-router-dom";
import "./hostVanDetailsLayout.css"
import { getHostVans } from "../api";

export function loader({params}){
    return getHostVans(params.id);
}
 
export default function HostVansDetailsLayout(){
    const van = useLoaderData();
    // const params = useParams()

    // useEffect(()=>{
    //     fetch(`/api/host/vans/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setVan(data.vans[0]))
    // },[params.id])

    const activeStyle={
        color:"black",
        textDecoration: "underline"
    }
    return(
        <div className="host-van-details-layout">
            <Link to='..' relative="path" className="backToHostVans">&larr;<span>Back to all Vans</span></Link>
            <div className="host-van-details-layout-container">
                <div className="host-van-details-layout-details">
                    <div className="host-van-details-layout-details-header">
                        <img src={van.imageUrl}/>
                        <div className="host-van-details-text">
                            <div className="host-van-details_type">{van.type} </div>
                            <h1>{van.name}</h1>
                            <p className="host-van-details-price"><span>${van.price}</span>/day</p>
                        </div>
                    </div>
                    <div className="host-van-details-layout-details-body">
                        <nav> 
                            <NavLink style={({isActive})=> isActive ? activeStyle: null } to='.' end>Details</NavLink>
                            <NavLink style={({isActive})=> isActive ? activeStyle: null } to='pricing'>Pricing</NavLink> 
                            <NavLink style={({isActive})=> isActive ? activeStyle: null } to='photos'>Photos</NavLink>
                        </nav>
                        <Outlet context={{van}}/>
                    </div>

                </div>
            </div>

        </div>
    )
}