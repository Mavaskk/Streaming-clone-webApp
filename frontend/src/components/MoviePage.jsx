import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { findById, getMovieCredits } from '../services/api.js';
import PlayMovieBtn from './PlayMovieBtn.jsx';
import "../css/MoviePage.css"
import { getReccomendedMovies } from '../services/api.js';
import MovieList from './movieList.jsx';
import TrailerBtn from './TrailerBtn.jsx';
import AddToListBtn from './AddToListBtn.jsx';
import TabComponent from './TabComponent.jsx';
import ActorCard from './ActorCard.jsx';



function MoviePage() {


    const [movie,setMovie] = useState("")
    const [crewList,setCrewList] = useState("")
    const [cast,setCast] = useState("")
    const [director,setDirector] = useState("")
    const [idContaierRender,setIdContaierRender] = useState("reccomendations") // lo setto al tab di default

    const {id} = useParams() // recupero id per fare chiamata api per i dati

    useEffect(() => {
        getData()
        
        
    },[])

    useEffect(() => {        

        for (let i = 0; i < crewList.length; i++) {
            if (crewList[i].job === "Director") {
                setDirector(crewList[i])
                
            }
            console.log("diret non trovato");
            console.log(crewList);
            
            
            
        }        
    },[crewList])

    const returnTab = ((tabId) => {
        setIdContaierRender(tabId)
        
        
    } )


    const getData = async() => {
        const movieData = await findById(id)
        const creditsData = await getMovieCredits(id)
        setCast(creditsData[0])
        setCrewList(creditsData[1])
        setMovie(movieData)
        
    }


    

    const truncateDate = ((str) => {
            return new String(str).substring(0,4) //converto in stringa per fare substring
    })

    return (
        <section className='w-100'>
            <img className='movie-page-img mt-5 ' src={`https://image.tmdb.org/t/p/w500${movie.backdropPath}`} alt={`${movie.title} background`} />
            <div className='mt-3 gap-3 container-fluid' >
                <TabComponent returnTab={returnTab} arrayTabs= {[{label : "Reccomendations",id : "reccomendations"},{label : "Details", id : "details"}]}/>
                {(idContaierRender == "reccomendations" && movie !== "") && //two conditions rendering 
                    <MovieList fetchMovieBase={getReccomendedMovies} movieId={movie.id}/>                    
                }
                {(idContaierRender == "details" && movie !== "") && 
                    <ul className='row p-0 ms-2 me-2'>
                        {cast.map((obj) => (
                            <ActorCard key={obj.id} character={obj.character} name={obj.name} profilPath={obj.profilPath}/>
                            
                        ))}
                    </ul>

                }
  
            </div>              
            <div className='w-100 movie-container position-absolute  '>
                <div className=' d-flex flex-column flex-md-row align-items-center '>
                    <div>
                        <img className='movie-cover ms-5 me-5' src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`} alt={`${movie.title} cover`} />
                    </div>
                    <div className='info-container flex-column  d-flex align-items-center align-items-md-start '>
                        <p className='text-color h2-font-size'>{truncateDate(movie.releaseDate)}</p>
                        <h1 className='title-h1 text-color'>{movie.title}</h1>
                        <p className='text-color montserrat-regular h2-font-size'>By {director.name}</p>
                        <p className='text-color w-75 overview-text d-none d-md-inline'>{movie.overview}</p>     
                        <div className='d-flex flex-row gap-3'>
                            <PlayMovieBtn movieId = {movie.id} /> 
                            <TrailerBtn id = {movie.id}/>            
                            <AddToListBtn/>              
                        </div>
                    
                    </div>                    

                </div>
          
            </div>

        </section>

        )
        
    
    
}


export default MoviePage