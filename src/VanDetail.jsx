import {React} from "react";
import { Link, useParams,useLocation,  useLoaderData } from "react-router-dom";
import "./vandetail.css";
import { getVans } from "./api";

export function loader({params}){
    return getVans(params.id)
}

export default function VanDetail(){
    const vanDetail = useLoaderData()
    const params = useParams()
    const location = useLocation()
    const search = location.state?.search || ""
    const vanType = location.state?.type || "all"

    return(
        <div className="van-details">
            <Link to={`..${search}`} relative="path" className="backToVans">&larr;<span>Back to {vanType} Vans</span></Link>
            <div className="van-details-container">
                <img className="van-details_image"src={vanDetail.imageUrl} alt={`${vanDetail.name}-image`} />
                <div className="van-details-details">
                    <h1 className="van-details_name">{vanDetail.name}</h1>
                    <div className="van-details_type">{vanDetail.type}</div>
                    <p className="van-details_price"><span>${vanDetail.price}</span>/day</p>
                    <p className="van-details_description">{vanDetail.description}</p>
                    <button className="van-details_button">Rent this van</button>
                </div>

            </div>
        </div>
    )

}