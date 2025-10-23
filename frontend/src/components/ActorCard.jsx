import { useState, useEffect } from "react"
import "../css/ActorCard.css"


function ActorCard(props) {

    const posterPath = props.profilPath !== null
     ? `https://image.tmdb.org/t/p/w400/${props.profilPath}`
     : "../assets/actor-placehoder.jpg"


    

    return (
        <div className="col-6 col-md-4 col-lg-3  mt-3 col-xl-2 col-xxl-2 mb-2 mb-xl-4">
            <li className="card-container">
                <img  className="w-100 " src={posterPath} alt="" />
                <div className="mt-4 ms-3">
                    <h4 className="font-base">{props.name}</h4>
                    <p className="font-base">Character: {props.character}</p>                    
                </div>



            </li>
        </div>


    )
    
}

export default ActorCard