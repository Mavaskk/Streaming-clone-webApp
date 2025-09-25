import SearchMovieInput from "../components/SearchMovieInput";
import { useState ,useEffect} from "react";
import {searchMovieTMDB} from "../services/api.js"
import MovieCard from "../components/MovieCard.jsx";

function  Home() {

    const [searchMovieList, setSearchMovieList] = useState([])


    useEffect(() => {
        console.log(searchMovieList);
        
    },[searchMovieList])

    const searchMovie = async (movieName) => {
          setSearchMovieList(await searchMovieTMDB(movieName))  
    }

    return (
        <div>
            <SearchMovieInput callApi = {searchMovie}/>

            <ul>
                {searchMovieList.map((obj) => {
                    <MovieCard movie={obj} id={obj.id}/>
                })}
            </ul>

            

        </div>
    )
    
}


export default Home;