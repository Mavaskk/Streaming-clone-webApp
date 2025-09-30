import { useState ,useEffect} from "react";
import  "../css/HomePage.css"
import {getMoviesInTheatres,getMovieTrailerOnYt} from "../services/api.js"
import LandingCard from "../components/LandingCard.jsx";


function  Home() {

    const [moviesInTheatres,setMoviesInTheatres] = useState([])
    const [moviesLandingList, setMoviesLandingList] = useState([])

    useEffect (() => { 
        getMoviesInTheatres().then(list => setMoviesInTheatres(list)) //call api to get id
    },[])

    useEffect(() => {
        if (moviesInTheatres.length > 3) {
            const newArray = moviesInTheatres.slice(0,3)
            
            newArray.map((film) => { //take just 3 for the landing
                const movie = {
                    title: film.title,
                    id: film.id,
                    voteAverage: film.voteAverage,
                    releaseDate: film.releaseDate,
                    posterPath: film.posterPath,

                }
                getMovieTrailerOnYt(film.id).then(key => {movie.key = key})
            })   
            setMoviesLandingList(newArray)         
        }
    },[moviesInTheatres]) 
    

    useEffect(() => {
       console.log(moviesLandingList);
    },[moviesLandingList])

    return (
        <div>
            <ul className="container-fluid d-flex mt-5 gap-3 justify-content-center align-items-center ">
                {moviesLandingList.map((movie,index) => (
                    <LandingCard centerClass = {index == 1 ? ("center") : ("")} posterPath={movie.posterPath} videoKey={movie.key} key={movie.id} title={movie.title} voteAverage={movie.voteAverage} releaseDate={movie.releaseDate} />
                ))}

            </ul>


        </div>
    )
    
}


export default Home;