import { getMovieTrailerOnYt } from "../services/api"
import { useEffect,useState  } from "react"
import { useParams } from "react-router-dom"
import "../css/TrailerBtn.css"

function TrailerBtn(props) {

    const {id} = useParams()

    const [key,setKey] = useState("")

    const getData =  async () => {
        
        setKey(await getMovieTrailerOnYt(id)) 
        
        

    }


    useEffect(() => {
        getData()

    },[])


    return(
        <button className="trailer-btn p-2 mt-2 mb-1"
        onClick={() => window.open(`https://youtube.com/embed/${key}`, "_blank") }>
            Trailer            
        </button>

    )
    
}


export default TrailerBtn