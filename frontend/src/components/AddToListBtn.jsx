import { getMovieTrailerOnYt } from "../services/api"
import { useEffect,useState  } from "react"
import { useParams } from "react-router-dom"
import "../css/TrailerBtn.css"

function AddToListBtn() {

    return (

        <button className="add-to-list-btn p-2 ps-3 pe-3 mt-2 mb-1">+</button>        
    )

    
}



export default AddToListBtn;