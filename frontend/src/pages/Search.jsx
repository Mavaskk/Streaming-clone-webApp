import SearchMovieInput from "../components/SearchMovieInput";
import { useState ,useEffect} from "react";
import {searchMovieTMDB,trandingMovieTMDB} from "../services/api.js"
import MovieCard from "../components/MovieCard.jsx";
import  "../css/Search.css"
import '@fortawesome/fontawesome-free/css/all.min.css';


function Search() {

    const [searchMovieList, setSearchMovieList] = useState([])
    const [trendingMovieList, setTrendingMovieList] = useState([])
    
    
    useEffect (() => { 
          trandingMovieTMDB().then(list => setTrendingMovieList(list))
    },[])
    
    const searchMovie = async (movieName) => {
              setSearchMovieList(await searchMovieTMDB(movieName))
    }


    return (
         <div className="d-flex justify-content-center flex-column align-items-center">
            <SearchMovieInput callApi = {searchMovie}/>

            
            <ul className="row mt-4 justify-content-center container">
                {searchMovieList.length === 0 && <h2 >Trending this week:</h2>}
                {searchMovieList.length === 0 ? (trendingMovieList.map((obj => ( 
                    <MovieCard releaseDate={obj.releaseDate} title={obj.title} backdropPath ={obj.backdropPath} posterPath ={obj.posterPath} voteAverage = {obj.voteAverage} key={obj.id}/>
                ))))
                : (searchMovieList.map((obj) => (
                    <MovieCard releaseDate={obj.releaseDate} title={obj.title} backdropPath ={obj.backdropPath} posterPath ={obj.posterPath} voteAverage = {obj.voteAverage} key={obj.id}/>
                )))}
            </ul>

        </div>
    )
    
}

export default Search;