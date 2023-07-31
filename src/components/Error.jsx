import React from "react";
import { Link } from "react-router-dom";


export default function Error(){
    const errorStyle = {
        textAlign : "center",
        padding : "4rem 4.5rem"
    }
    return(
        <div style={errorStyle}>
            <img width="300px" src="src/assets/images/error.png"></img>
            <h1 >Sorry, the page you were looking for was not found.</h1>
            <h1>Click <Link to="/">here</Link> to navigate to home page.</h1>

        </div>
        
    )
}