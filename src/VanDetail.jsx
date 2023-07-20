import {React,useState, useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import "./vandetail.css";

export default function VanDetail(){
    const [vanDetail,setVanDetail]= useState([])
    const params = useParams();
    useEffect(()=>{
        fetch(`/api/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVanDetail(data.vans))
    },[params.id])

    return(
        <div className="van-details">
            <Link to='/vans' className="backToVans"><span>← </span>Back to all Vans</Link>
            <div className="van-details-container">
                <img className="van-details_image"src={vanDetail.imageUrl} alt={`${vanDetail.name}-image`} />
                <div className="van-details_type">{vanDetail.type}</div>
                <h1 className="van-details_name">{vanDetail.name}</h1>
                <p className="van-details_price"><span>${vanDetail.price}</span>/day</p>
                <p className="van-details_description">{vanDetail.description}</p>
                <button className="van-details_button">Rent this van</button>

            </div>
        </div>
    )

}