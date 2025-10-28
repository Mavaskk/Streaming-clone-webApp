import "../css/MovieCardComp.css"
import { useState,useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'



function CardFilmSlider(props) {



       const posterSrc = props.posterPath !== null
        ? `https://image.tmdb.org/t/p/w400/${props.posterPath}`
        : "../assets/movie-placehoder.jpg"; 


    

        const hoverContainer = useRef(null)

        const liRef = useRef(null)
        const imgRef = useRef(null)
        const cardRef = useRef(null)


    return (
            <li ref={liRef} className="li-card-movie  ms-2 ms-lg-3 ms-xl-4 me-2 me-lg-3 me-xl-4 mt-4  "

            
            
                onMouseLeave={() => {
                        gsap.set(imgRef.current,{
                            filter:"brightness(100%)",
                        });
                        gsap.set(cardRef.current,{ //setto direttamente lo stile hover da qua
                            borderColor:"#181A21",
                            borderRadius:"10px",
                            border:"2px solid"
                        });
                }}>
                <div ref={cardRef} className="movie-card position-relative">
                    <img ref={imgRef}  
                        onMouseEnter={() => {
                            gsap.set(imgRef.current,{ //setto direttamente lo stile hover da qua
                                filter:"brightness(20%)",

                            });

                            const width = cardRef.current.getBoundingClientRect().width //ottengo i dati della imgCard e passo al padre
                            const height = cardRef.current.getBoundingClientRect().height
                            const x = cardRef.current.getBoundingClientRect().x
                            const y = cardRef.current.getBoundingClientRect().y
                            props.passHoverState(props.id,width,height,x,y)
                            
                            gsap.set(cardRef.current,{ //setto direttamente lo stile hover da qua
                                borderColor:"white",
                                borderRadius:" 10px 0px 0px 10px",
                                border:"2px solid"

                            });

                        }} 
                    src={posterSrc}  alt={props.title} />

                
                                      
                </div>
                
            </li>        

    )
    
}

export default CardFilmSlider;