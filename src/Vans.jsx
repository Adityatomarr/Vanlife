import React from "react";
import VanCard from "./components/VanCard";
import {useSearchParams, useLoaderData } from "react-router-dom";
import "./vans.css"
import { getVans } from "./api";

export function loader(){
    return getVans()
}
export default function Vans(){
    
    const vans= useLoaderData()
    const [searchParams, setSearchParams]= useSearchParams()
    const typeFilter = searchParams.get("type")

    const displayedVans = typeFilter
    ? vans.filter(van => van.type===typeFilter  )
    : vans

    const vansArray= displayedVans.map((van)=> {
        return(<VanCard id={van.id} 
            key={van.id}
            name={van.name} 
            price={van.price} 
            description={van.description} 
            image={van.imageUrl}
            type={van.type}
            search= {searchParams.toString()} 
            typeFilter= {typeFilter}/> )})
   
    return (
        <div className="vans_container">
            <h1>Explore our van options</h1>
            <div className="van-list-filter-buttons">
                <button className= {`van-type-filter simple ${typeFilter==="simple" ? "selected": ""} `} onClick={()=> setSearchParams({type: "simple"})}>Simple</button>
                <button className= {`van-type-filter rugged ${typeFilter==="rugged" ? "selected": ""} `} onClick={()=> setSearchParams({type: 'rugged'})}>Rugged</button>
                <button className= {`van-type-filter luxury ${typeFilter==="luxury" ? "selected": ""} `} onClick={()=> setSearchParams({type: "luxury"})}>Luxury</button>
                {typeFilter && <button className= "van-type-clear-filter" onClick={()=> setSearchParams({})}>Clear filters</button>}
            </div>
            
            <div className="vans_list">
                {vansArray}
            </div>
            
            
        </div>
    )
}