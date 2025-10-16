import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { findById, getMovieCredits } from '../services/api.js';
import PlayMovieBtn from './PlayMovieBtn.jsx';
import "../css/MoviePage.css"
import TrailerBtn from './TrailerBtn.jsx';



function MoviePage() {


    const [movie,setMovie] = useState("")
    const [crewList,setCrewList] = useState("")
    const [cast,setCast] = useState("")
    const [director,setDirector] = useState("")

    const {id} = useParams() // recupero id per fare chiamata api per i dati


    const getData = async() => {
        const movieData = await findById(id)
        const creditsData = await getMovieCredits(id)
        setCast(creditsData[0])
        setCrewList(creditsData[1])
        setMovie(movieData)
        

        
    }

    useEffect(() => {
        getData()
        
        
    },[])

    useEffect(() => {        
                console.log(movie);

        for (let i = 0; i < crewList.length; i++) {
            if (crewList[i].job === "Director") {
                setDirector(crewList[i])
                
            }
        }        
    },[crewList])
    

    const truncateDate = ((str) => {
            return new String(str).substring(0,4) //converto in stringa per fare substring
    })

    return (
        <section>
            <img className='movie-page-img mt-5 ' src={`https://image.tmdb.org/t/p/w500${movie.backdropPath}`} alt={`${movie.title} background`} />
            <div className='movie-container position-absolute d-flex flex-column flex-md-row align-items-center '>
                <div>
                    <img className='movie-cover ms-5 me-5' src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={`${movie.title} cover`} />
                </div>
                <div className='info-container flex-column  d-flex align-items-center align-items-md-start '>
                    <p className='text-color h2-font-size'>{truncateDate(movie.releaseDate)}</p>
                    <h1 className='title-h1 text-color'>{movie.title}</h1>
                    <p className='text-color montserrat-regular h2-font-size'>By {director.name}</p>
                    <p className='text-color w-75 overview-text'>{movie.overview}</p>     
                    <div className='d-flex flex-row'>
                        <PlayMovieBtn movieId = {movie.id}/> 
                        <TrailerBtn id = {movie.id}/>            
                        <button >s</button>               
                    </div>
            
                </div>


            </div>
            <p></p>
        </section>

        )
        
    
    
}


export default MoviePage