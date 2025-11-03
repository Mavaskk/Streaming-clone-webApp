import  "../css/HomePage.css"
import HeroSection from "../components/HeroSection";
import FilmSection from "../components/FilmSection";
import { useState,useRef, useEffect, useLayoutEffect } from "react";
import { getListPrivate } from "../services/AuthContext.js"
import { watchListContext } from "../App.jsx";
import { useContext } from "react"





function  Home() {

    const {watchList,setWatchList} = useContext(watchListContext)

    const loadWatchLIst =  (async () => {
        const request = await getListPrivate("watchListTest")
        
        request.payload.items.map((obj) =>{
            const movie = {
                title: obj.title,
                id: obj.id,
                nodeType: obj.nodeType,
                posterPath: obj.posterPath,
                guid: obj.guid

            }


            return movie
        })
        
        setWatchList(request.payload.items)
        
                
    })

    useEffect( () => {
        loadWatchLIst()

    },[])

    
   return (
    <main>
        <HeroSection/>
        <FilmSection/>
        <FilmSection/>

    </main>
   )
    
}


export default Home;