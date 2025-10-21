
import { useState ,useEffect} from "react";
import {searchMovieTMDB,trandingMovieTMDB} from "../services/api.js"
import MovieCard from "../components/MovieCard.jsx";
import  "../css/Search.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


function MovieList(props) {


    const [bookList,setBookList] = useState("")

    useEffect(() => {
        getData()
        

        

    },[])


    const getData = ( async() => {
        setBookList(await props.fetchMovieBase(props.movieId)) 


        
    })




    return (

            <div className="container-fluid d-flex justify-content-center align-items-center flex-column ">

                
                <ul className="row mt-4 p-0  ">
                    {bookList !== "" &&   
                        bookList.map((obj,index) => (
                        <MovieCard zIndex={bookList.length-index} releaseDate={obj.releaseDate} title={obj.title} backdropPath ={obj.backdropPath} posterPath ={obj.posterPath} voteAverage = {obj.voteAverage} key={obj.id} id={obj.id}/>
                    )) }




                </ul>

            </div>

    )   
}


export default MovieList