import React from "react"
import { Link, defer, Await, useLoaderData } from "react-router-dom"
import { getHostVans } from "../api"
import { requireAuth } from "../util"
import { BsStarFill } from "react-icons/bs"
import "./dashboard.css"
import HostVans from "./hostVans"

export async function loader({request}){
    const res = await requireAuth(request)
    if(res){
        return res
    }
    return getHostVans()
}
  

export default function Dashboard() {
    // const vans = useLoaderData()

    
    //     const hostVansEls = vans.map((van) => (
    //         <div className="host-vans-list-item" key={van.id}>
    //             <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
    //             <div className="host-van-info">
    //                 <h3>{van.name}</h3>
    //                 <p>${van.price}/day</p>
    //             </div>
    //             <Link to={`vans/${van.id}`}>View</Link>
    //         </div>
    //     ))
    

    return (
        <div >
            <div className="dashboard">
                <section className="host-dashboard-earnings">
                    <div className="info">
                        <h1>Welcome!</h1>
                        <p>Income last <span>30 days</span></p>
                        <h2>$2,260</h2>
                    </div>
                    <Link to="income">Details</Link>
                </section>
                <section className="host-dashboard-reviews">
                    <h2>Review score</h2>
                    <BsStarFill className="star" />
                    <p>
                        <span>5.0</span>/5
                    </p>
                    <Link to="reviews">Details</Link>
                </section>
            </div>
            <section className="host-dashboard-vans">
                
                <HostVans />
                
            </section>
        </div>
    )
}
