import { useEffect, useState, useRef, act } from "react"
import {getMoviesInTheatres} from "../services/api.js"
import CardFilmSlider from "./CardFilmSlider"
import "../css/MovieCardComp.css"
import CloneCardFilmSlider from "./CloneCardFilmSlider.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { gsap } from "gsap";
import { watchListContext } from "../App.jsx";
import { useContext } from "react"


// Import Swiper styles
import "../css/CardFilmSlider.css"
import 'swiper/css';
import 'swiper/css/navigation';







function FilmSection(props) {

    const {watchList,setWatchList} = useContext(watchListContext)

    const [saveIdCardToScale,setSaveIdCardToScale] = useState("")
    const sectionRef = useRef(null)


    const [filmList,setFilmList] = useState([])
    const [activateCard,setActivateCard] = useState({})


    

    const passHoverState = (cardId,cardWidth,cardHeight,cardX,cardY) => {
        const sectionX = sectionRef.current.getBoundingClientRect().x
        const sectionY = sectionRef.current.getBoundingClientRect().y

        setActivateCard({
            id: cardId,
            width: cardWidth,
            height: cardHeight,
            x: cardX,
            y: cardY,
            sectionX:sectionX,
            sectiony:sectionY,
        })     
    }

    const returnStatus  = (status) => {
        setActivateCard(status)
        
    }

    const fetchAndMark = (async () => { // controllo se movie sono in watchlist per assegnare uguid
            const list = await getMoviesInTheatres()
            list.map((movie) => {
                const match = watchList.find(w => w.id === movie.id);
                if (match) {
                    movie.guid = match.guid
                    return movie
                }
                else {
                    return movie
                }
                
                // return match ? { ...movie, guid: match.guid } : movie;
                
            })
            setFilmList(list.reverse())

    })

    useEffect(() => {

        fetchAndMark()

        
    },[watchList])

    useEffect(() => {
        //animazione card entrata        
    })

    // useEffect(() => {
    //     console.log(filmList);
        
    // },[filmList])

    
    const cardContainer = useRef(null)


    return(
            <section ref={sectionRef} className="container-fluid position-relative mb-5">
                <h2 className="section-h2">Film In Theatres</h2> 
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={2}
                        navigation={true} modules={[Navigation]}
                        className="mySwiper mt-2  "
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                            1024: {
                                slidesPerView: 5,
                                spaceBetween: 0,
                            },
                            }}
                        >
            
                        {filmList.map(obj => 
                        <SwiperSlide  >
                            <div ref = {cardContainer}>
                                <CardFilmSlider  passHoverState={passHoverState} guid = {obj.guid} releaseDate={obj.releaseDate} title={obj.title} backdropPath ={obj.backdropPath} posterPath ={obj.posterPath} voteAverage = {obj.voteAverage} key={obj.id} id={obj.id}/>
                            </div>
                                        {/* <FooterCard  />                     */}

                        </SwiperSlide>
                        
                        )}            
                    </Swiper>  
                        {activateCard !==  null && (filmList.map(obj => 
                            (obj.id === activateCard.id && (<CloneCardFilmSlider  activateCard={activateCard} returnStatus={returnStatus} passHoverState={passHoverState} releaseDate={obj.releaseDate} title={obj.title} backdropPath ={obj.backdropPath} posterPath ={obj.posterPath} voteAverage = {obj.voteAverage} key={obj.id} id={obj.id}/>)
                        ))
                        )}                                    

            </section>


    )
    
}


export default FilmSection