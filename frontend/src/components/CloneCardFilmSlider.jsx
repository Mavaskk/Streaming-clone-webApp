import "../css/MovieCardComp.css"
import "../css/CardFilmSlider.css"
import { useState,useRef, useEffect, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import FooterCard from "./FooterCard";




function CloneCardFilmSlider(props) {



       const posterSrc = props.posterPath !== null
        ? `https://image.tmdb.org/t/p/w400/${props.posterPath}`
        : "../assets/movie-placehoder.jpg"; 


        const [cardHoverStatus,setCardHoverStatus] = useState(false)

        const hoverContainer = useRef(null)

        const liRef = useRef(null)
        const imgRef = useRef(null)
        const cardRef = useRef(null)
        const navigate = useNavigate()

        useLayoutEffect(() => { //uso layout almeno lo fa prima del render
        
            
            gsap.set(cardRef.current,{
                width: props.activateCard.width + 2,
                height: props.activateCard.height + 2,
                top: -props.activateCard.height , // faccio meno cosi mi parte dall'inzio della card e va sopra
                left: props.activateCard.x - props.activateCard.sectionX - 14,
                zIndex: 2 // per farla comparire sopra a card originale

            })
            setCardHoverStatus(true)
            
        },[props.activateCard])


        const truncateVote = ((number) => {
            return new String(number).substring(0,3) //converto in stringa per fare substring
        })

    return (
            <li ref={liRef} className="li-card-movie position-absolute "
        
                onMouseLeave={() => {
                        gsap.to(liRef.current,{
                            opacity:0,
                        })
                        gsap.set(imgRef.current,{
                            filter:"brightness(100%)",
                        });
                        gsap.set(cardRef.current,{ //setto direttamente lo stile hover da qua
                            borderColor:"#181A21",
                            borderRadius:"10px",
                            border:"2px solid",
                            scale:1,
                            zIndex:0
                        });
                        gsap.to(hoverContainer.current,{
                            opacity:0,
                        });
                        setCardHoverStatus(false)
                        props.returnStatus(null)
                }}>
                <div ref={cardRef} className="movie-card position-relative">
                    <img ref={imgRef}  
                        onClick={() => (navigate(`/movie/${props.id}` ))}

                        onMouseEnter={() => { 
                            gsap.to(liRef.current,{
                                opacity:1,
                            });
                            gsap.set(imgRef.current,{ //setto direttamente lo stile hover da qua
                                filter:"brightness(20%)",

                            });
                            gsap.to(hoverContainer.current,
                                {
                                opacity:1,
                                }
                            )
                            

                            gsap.set(cardRef.current,{ //setto direttamente lo stile hover da qua
                                borderColor:"white",
                                borderRadius:" 10px 0px 0px 10px",
                                border:"2px solid",
                                scale:1.1,
                                zIndex:3,
                            });

                        }} 
                        src={posterSrc}  alt={props.title} />
                        <div ref={hoverContainer}  className="hover-container">
                            <div className="position-absolute bottom-0">
                                <p className="ms-1 title-hover mb-0 ">{props.title}</p>   
                                {props.releaseDate  ? (<button className="btn-releaseDate">{props.releaseDate}</button>)
                                : (<button className="btn-releaseDate">Not found</button>)}                                
                            </div>
                        
                            <div className="review-container position-absolute text-truncate d-flex flex-row  ">
                                <p className="m-0 vote-average text-truncate"> {truncateVote(props.voteAverage)}{} </p>
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            
                             
                        </div>    
                        {cardHoverStatus && <FooterCard movieId={props.id}/>  } 
                                          

                                      
                </div>
                
            </li>        

    )
    
}

export default CloneCardFilmSlider;