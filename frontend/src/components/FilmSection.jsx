import { useEffect, useState, useRef, act } from "react"
import {getMoviesInTheatres} from "../services/api.js"
import CardFilmSlider from "./CardFilmSlider"
import "../css/MovieCardComp.css"
import CloneCardFilmSlider from "./CloneCardFilmSlider.jsx"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { gsap } from "gsap";


// Import Swiper styles
import "../css/CardFilmSlider.css"
import 'swiper/css';
import 'swiper/css/navigation';
import { height, width } from "@fortawesome/free-solid-svg-icons/fa0"







function FilmSection(props) {

    const [saveIdCardToScale,setSaveIdCardToScale] = useState("")
    const sectionRef = useRef(null)


    const [filmList,setFilmList] = useState([])
    const [activateCard,setActivateCard] = useState({})

    // useEffect(() => {
    //     sectionRef.current

    // })
    

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

    useEffect(() => {
        getMoviesInTheatres().then(list => setFilmList(list.reverse()))
        
    },[])

    useEffect(() => {
        //animazione card entrata        
    })

    
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
                                <CardFilmSlider  passHoverState={passHoverState} releaseDate={obj.releaseDate} title={obj.title} backdropPath ={obj.backdropPath} posterPath ={obj.posterPath} voteAverage = {obj.voteAverage} key={obj.id} id={obj.id}/>
                            </div>
                                        {/* <FooterCard  />                     */}

                        </SwiperSlide>
                        
                        )}            
                    </Swiper>  
                        {activateCard !==  null && (filmList.map(obj => 
                            (obj.id === activateCard.id && (<CloneCardFilmSlider activateCard={activateCard} passHoverState={passHoverState} releaseDate={obj.releaseDate} title={obj.title} backdropPath ={obj.backdropPath} posterPath ={obj.posterPath} voteAverage = {obj.voteAverage} key={obj.id} id={obj.id}/>)
                        ))
                        )}                                    

            </section>


    )
    
}


export default FilmSection