import {React,useState,useEffect} from "react";
import {useParams,Outlet,Link} from "react-router-dom";
 
export default function HostVansDetailsLayout(){
    const [van,setVan] = useState([])
    const params = useParams()

    useEffect(()=>{
        fetch(`/api/host/vans/${params.id}`)
            .then(res => res.json())
            .then(data => setVan(data.vans[0]))
    },[params.id])
    console.log(van)
    return(
        <div className="host-van-details-layout">
            <Link to='/host/vans' className="backToHostVans"><span>← </span>Back to all Vans</Link>
            <div className="host-van-details-layout-container">
                <div className="host-van-details-layout-details">
                    <div className="host-van-details-layout-details-header">
                        <img src={van.imageUrl}/>
                        <div className="host-van-details-text">
                            <div className="host-van-details_type">{van.type} </div>
                            <h1>{van.name}</h1>
                            <p className="host-van-details-price"><span>${van.price}</span>/day</p>
                        </div>
                    </div>
                    <nav> 
                        <Link to={`/host/vans/${van.id}`}>Details</Link>
                        <Link to={`/host/vans/${van.id}/pricing`}>Pricing</Link>
                        <Link to={`/host/vans/${van.id}/photos`}>Photos</Link>
                    </nav>
                    <Outlet/>

                </div>
            </div>

        </div>
    )
}