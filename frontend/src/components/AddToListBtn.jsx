import { getMovieTrailerOnYt } from "../services/api"
import { useContext, useEffect,useState  } from "react"
import { useParams } from "react-router-dom"
import "../css/TrailerBtn.css"
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { insertPrivate } from "../services/AuthContext.js"
import { deletePrivate } from "../services/AuthContext.js"
import {watchListContext} from "../App"



function AddToListBtn(props) {

    const {watchList,setWatchList} = useContext(watchListContext);
    const [watchListStatus,setWatchListStatus] = useState("");




    
    const [movie,setMovie] = useState({})


    useEffect(() => {
        setMovie({   title: props.title,
            releaseDate: props.releaseDate,
            posterPath: props.posterPath,
            voteAverage: props.voteAverage,
            id: props.id,
            guid: props.guid})

    },[props.id, props.title, props.releaseDate, props.posterPath, props.voteAverage, props.guid])

    const removeFromList = ( async () => {
        
        setWatchList(prev => prev.filter(obj => obj.id !== movie.id)) // crea nuovo array con tutti gli oggetti tranne movie.id
        setWatchListStatus(null)
        const deleteMovie = await deletePrivate(movie)
        console.log(deleteMovie);
        
        
    })



    const checkMovieIsInList = () => {
        watchList.forEach(film => {
            
            if (film.id === movie.id) {
                
                setWatchListStatus(film.id)
            }
           
        });
        
         
    }
    useEffect(() => {
        checkMovieIsInList()
        
        
        
    },[movie])




    const sendData = (async () => {

        movie.nodeType = "watchListTest"
        
        setWatchList(prevList => [...prevList,movie])

        const request = await insertPrivate(movie)
        if (request.payload.status === "success") {
            setWatchListStatus(movie.id)

        }
    })

    return (
        <>
            
         {watchListStatus === movie.id ? (<button onClick={() => removeFromList()} className="add-to-list-btn p-2 ps-3 pe-3 mt-2 mb-1"><FontAwesomeIcon icon={faCheck} /></button>) :
          (<button  onClick = {() => sendData()} className="add-to-list-btn p-2 ps-3 pe-3 mt-2 mb-1"><FontAwesomeIcon icon={faPlus} /></button>)
          }
        </>

    )  


    
}



export default AddToListBtn;