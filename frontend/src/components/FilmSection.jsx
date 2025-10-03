import { useEffect, useState } from "react"
import {getMoviesInTheatres} from "../services/api.js"
import CardFilmSlider from "./CardFilmSlider"
import "../css/MovieCardComp.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';







function FilmSection(props) {

    const [filmList,setFilmList] = useState([])

    useEffect(() => {
        getMoviesInTheatres().then(list => setFilmList(list.reverse()))
    },[])

    



    return(
        <section className="container-fluid mt-5">
           <h2 className="section-h2">In Theatres</h2> 
            <Swiper
                spaceBetween={10}
                slidesPerView={2}
                navigation={true} modules={[Navigation]}
                className="mySwiper mt-2"
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
                        spaceBetween: 10,
                    },
                    }}
                >
    
                {filmList.map(obj => 
                <SwiperSlide >
                    <CardFilmSlider releaseDate={obj.releaseDate} title={obj.title} backdropPath ={obj.backdropPath} posterPath ={obj.posterPath} voteAverage = {obj.voteAverage} key={obj.id} />
                </SwiperSlide>
                
                )}            
        </Swiper>
        </section>
        

    )
    
}


export default FilmSection