import React from "react";
import "./vancard.css"
import { Link, useSearchParams } from "react-router-dom";

export default function VanCard(props){
    console.log(props.filter)
    
    return(
        <div className="van-card" >
            <Link to={props.id} state={{search: `?${props.search}` ,type: props.typeFilter}}>
                <img src={props.image} className="van-card_img"></img>
                
                <h2 className="van-card_details"><span>{props.name}</span> ${props.price}</h2>
                <p className="van-card_duration">/day</p>
                <div className={`van-card_type ${props.type}`}>{props.type}</div>
            </Link>
            
        

        </div>
    )
}
