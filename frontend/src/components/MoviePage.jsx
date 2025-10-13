import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { findById } from '../services/api.js';



function MoviePage() {


    const [movie,setMovie] = useState("")
    const {id} = useParams() // recupero id per fare chiamata api per i dati


    const getData = async() => {
        const data = await findById(id)
        setMovie(data)
        
    }

    useEffect(() => {
        getData()
    },[])
    

    return (
        <>
            <h1>{movie.title}</h1>
        </>

        )
        
    
    
}


export default MoviePage