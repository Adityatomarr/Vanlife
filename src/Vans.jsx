import React from "react";
import VanCard from "./components/VanCard";
import "./vans.css"

export default function Vans(){
    const [vans,setVans] = React.useState([])
    React.useEffect(()=>{
        fetch("/api/vans")
            .then(res =>  res.json())
            .then(data => setVans(data.vans))
    },[])
    const vansArray= vans.map((van)=> {
        return(<VanCard id={van.id} 
            key={van.id}
            name={van.name} 
            price={van.price} 
            description={van.description} 
            image={van.imageUrl}
            type={van.type} /> )})
   
    return (
        <div className="vans_container">
            <h1>Explore our van options</h1>
            <div className="vans_list">
                {vansArray}
            </div>
        </div>
    )
}