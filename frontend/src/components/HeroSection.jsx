import { useState ,useEffect,useLayoutEffect, useRef} from "react";
import {getMoviesInTheatres,getMovieTrailerOnYt} from "../services/api.js"
import LandingCard from "../components/LandingCard.jsx";
import { gsap } from "gsap";



function  HeroSection() {

    const [moviesInTheatres,setMoviesInTheatres] = useState([])
    const [moviesLandingList, setMoviesLandingList] = useState([])

    useEffect (() => { 
        getMoviesInTheatres().then(list => setMoviesInTheatres(list)) //call api to get id
    },[])

    useEffect(() => {
        if (moviesInTheatres.length > 3) {
            const newArray = moviesInTheatres.slice(0,3)
            
            Promise.all(newArray.map(async (film) => { //uso promise.All almeno aspetta tutte le promesse dell'array
                const key = await getMovieTrailerOnYt(film.id)
                
                return  {
                    title: film.title,
                    id: film.id,
                    voteAverage: film.voteAverage,
                    releaseDate: film.releaseDate,
                    posterPath: film.posterPath,
                    key: key

                }
            })).then(array => {
                setMoviesLandingList(array)
            }) .catch(err => console.log(err))
                    }
    },[moviesInTheatres]) 

    const cardLandingContainer = useRef(null)

    useLayoutEffect(() => { //come useEffect ma viene eseguito dopo aggiornamento del dom ma prima del render su schermo

        if (moviesLandingList.length >= 3) {
            const cards = gsap.utils.toArray(cardLandingContainer.current.children) //contenitore gsap che evita di fare un for per ogni elemento            
            gsap.from(cards,{
                y:100,
                duration:1,
                stagger:0.1, //effetto a cascata tra più elementi
                autoAlpha:0,
                ease:"power3.out"
                
            })                        
        }
    },[moviesLandingList.length])
    




    return (
        <div>
            <ul ref={cardLandingContainer} className="container-fluid d-flex mt-5 gap-3 justify-content-center  ">
                {moviesLandingList.map((movie,index) => (
                    <LandingCard  centerClass = {index == 1 ? ("center") : ("")} posterPath={movie.posterPath} videoKey={movie.key} key={movie.id} title={movie.title} voteAverage={movie.voteAverage} releaseDate={movie.releaseDate} />
                ))}

            </ul>


        </div>
    )
    
}


export default HeroSection;