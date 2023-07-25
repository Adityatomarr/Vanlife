import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos(){
    const imageStyle={
        width:"20%"
    }
    const {van} = useOutletContext()
    return(
        <img style={imageStyle} src={van.imageUrl} alt="" />
    )
}