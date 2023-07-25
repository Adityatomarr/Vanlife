import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPricing(){
    const pricingStyle={
        fontSize:"2rem"
    }
    const {van} = useOutletContext()
    return(
        <h1 style={pricingStyle}>${van.price}<span>/day</span></h1>
    )
}