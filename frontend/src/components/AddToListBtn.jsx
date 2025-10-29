import { getMovieTrailerOnYt } from "../services/api"
import { useContext, useEffect,useState  } from "react"
import { useParams } from "react-router-dom"
import "../css/TrailerBtn.css"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { insertPrivate } from "../services/AuthContext.js"
import {watchListContext} from "../App"


function AddToListBtn(props) {

    const {watchList,setWatchList} = useContext(watchListContext)

    const [movie,setMovie] = useState({          
            title: props.title,
            releaseDate: props.releaseDate,
            posterPath: props.posterPath,
            voteAverage: props.voteAverage,
            id: props.id,
    })

    const [watchListStatus,setWatchListStatus] = useState(false)

    const sendData = (async () => {

        movie.nodeType = "watchListTest"
        
        setWatchList(prevList => [...prevList,movie])

        const request = await insertPrivate(movie)
        if (request.payload.status === "success") {
            setWatchListStatus(true)
        }

        
        
    })

    return (
        <>
            
         {watchListStatus ? (<button className="add-to-list-btn p-2 ps-3 pe-3 mt-2 mb-1"><FontAwesomeIcon icon={faCheck} /></button>) :
          (<button  onClick = {() => sendData()} className="add-to-list-btn p-2 ps-3 pe-3 mt-2 mb-1"><FontAwesomeIcon icon={faPlus} /></button>)
          }
        </>

    )  


    
}



export default AddToListBtn;