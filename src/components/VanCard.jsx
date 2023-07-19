import React from "react";
import "./vancard.css"

export default function VanCard(props){
    
    return(
        <div className="van-card" key={props.id}>
            <img src={props.image} className="van-card_img"></img>
            
            <h2 className="van-card_details"><span>{props.name}</span> {props.price}</h2>
            <p>/day</p>
            <div className="van-card_type">{props.type}</div>
            
        

        </div>
    )
}
