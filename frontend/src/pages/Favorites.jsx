import { useState ,useEffect, useContext} from "react"; 
import MovieList from "../components/movieList";
import {watchListContext} from "../App"
import { getListPrivate } from "../services/AuthContext.js"
import "../css/MovieCardComp.css"



function Favorites() {

    const {watchList,setWatchList} = useContext(watchListContext)

    const loadData = ( async () => {
        if (!watchList.lenght) {
            const request = await getListPrivate("watchListTest")
            setWatchList(request.payload.items)            
        }


        
    })

    // se lista vuota carico i film direttamente da qua

    useEffect(() => {
        loadData()
        
    },[])
    

    return (
        <div className="container-fluid mt-5  ">
            <h2 className="section-h2 mb-1">Your WatchList</h2>
            <MovieList list={watchList}/>        
        </div>

    )
    
}

export default Favorites;