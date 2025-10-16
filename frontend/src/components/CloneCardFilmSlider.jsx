import "../css/MovieCardComp.css"
import "../css/CardFilmSlider.css"
import { useState,useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import FooterCard from "./FooterCard";




function CloneCardFilmSlider(props) {



       const posterSrc = props.posterPath !== null
        ? `https://image.tmdb.org/t/p/w400/${props.posterPath}`
        : "../assets/movie-placehoder.jpg"; 


    

        const hoverContainer = useRef(null)

        const liRef = useRef(null)
        const imgRef = useRef(null)
        const cardRef = useRef(null)
        const navigate = useNavigate()

        useEffect(() => {
            
            gsap.set(cardRef.current,{
                width: props.activateCard.width + 2,
                height: props.activateCard.height + 2,
                top: props.activateCard.y - props.activateCard.sectionY ,
                left: props.activateCard.x - props.activateCard.sectionX - 14,

            })
            
        },[props.activateCard])


        const truncateVote = ((number) => {
            return new String(number).substring(0,3) //converto in stringa per fare substring
        })

    return (
            <li ref={liRef} className="li-card-movie position-absolute "

            
            
                onMouseLeave={() => {
                        gsap.set(imgRef.current,{
                            filter:"brightness(100%)",
                        });
                        gsap.set(cardRef.current,{ //setto direttamente lo stile hover da qua
                            borderColor:"#181A21",
                            borderRadius:"10px",
                            border:"2px solid"
                        });
                        gsap.to(hoverContainer.current,{
                            opacity:0,
                        });

                }}>
                <div ref={cardRef} className="movie-card position-relative">
                    <img ref={imgRef}  
                        onClick={() => (navigate(`/movie/${props.id}` ))}


                        onMouseEnter={() => {
                        gsap.set(imgRef.current,{ //setto direttamente lo stile hover da qua
                            filter:"brightness(20%)",

                        });
                        

                        gsap.set(cardRef.current,{ //setto direttamente lo stile hover da qua
                            borderColor:"white",
                            borderRadius:" 10px 0px 0px 10px",
                            border:"2px solid"

                        });
                        gsap.to(hoverContainer.current,{
                            opacity:1,
                        });
                        }} 
                        src={posterSrc}  alt={props.title} />

                        <div ref={hoverContainer}  className="hover-container">
                            <div className="position-absolute bottom-0">
                                <p className="ms-1 title-hover mb-0 ">negro</p>   
                                {props.releaseDate  ? (<button className="btn-releaseDate">{props.releaseDate}</button>)
                                : (<button className="btn-releaseDate">Not found</button>)}
                                
                            </div>
                        
                            <div className="review-container position-absolute text-truncate d-flex flex-row  ">
                                <p className="m-0 vote-average text-truncate"> {truncateVote(props.voteAverage)}{} </p>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            
                             
                        </div>     
                        <FooterCard  movieId={props.id}/>                    

                                      
                </div>
                
            </li>        

    )
    
}

export default CloneCardFilmSlider;