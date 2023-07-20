import {React, useEffect} from "react";
import { useParams } from "react-router-dom";
import "./vandetail.css";

export default function VanDetail(){

    const params = useParams();
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    },[params.id])

    return(
        <h1>This is the van detail page</h1>
    )

}