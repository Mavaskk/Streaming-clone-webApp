import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, } from 'react-router-dom'




function PlayMovieBtn(props) {

    // const playMovie = () => (

    // )


    return (
    
    <Link className="cta-btn-card p-2 mt-2 mb-1" to={`movie/streaming/${props.movieId}`}>
            <FontAwesomeIcon icon={faPlay} />
            Play


    </Link>
    
    
    )
}


export default PlayMovieBtn;