import {React,useState, useEffect} from "react";
import { Link } from "react-router-dom";
import "./hostvans.css"

export default function HostVans(){
    const [vans, setVans] = useState([])

    useEffect(() =>{
        fetch("/api/host/vans")
            .then(res => res.json())
            .then(data => setVans(data.vans))
    },[])

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