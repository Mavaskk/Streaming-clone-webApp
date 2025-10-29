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
        
        setWatchList(request.payload.items)
        
                
    })

    useEffect(() => {
        console.log(watchList);
        
    },[watchList])

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