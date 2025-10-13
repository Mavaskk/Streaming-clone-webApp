import { useParams } from "react-router-dom";


function MovieStreamingPage () {
    const {id} = useParams()

    console.log(id);
    
    return (
        <>
            <div>
                <iframe  src={`https://vixsrc.to/movie/${id}`} allowFullScreen ></iframe>        

            </div>

        </>


    )
}



export default MovieStreamingPage;