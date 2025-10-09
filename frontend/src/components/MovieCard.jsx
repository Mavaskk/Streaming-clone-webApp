import "../css/MovieCardComp.css"
import { useState,useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'


function MovieCard(props) {

       const posterSrc = props.posterPath !== null
        ? `https://image.tmdb.org/t/p/w400/${props.posterPath}`
        : "../assets/movie-placehoder.jpg"; 



        const hoverContainer = useRef(null)


        const truncateVote = ((number) => {
            return new String(number).substring(0,3) //converto in stringa per fare substring
        })

    return (
        <div className="col-6 col-md-4 col-lg-3  mt-3 col-xl-3  position-relative">
            <li className="movie-card " >
                <img  onMouseEnter={() => {gsap.to(hoverContainer.current,{
                    opacity:1,
                    
                });

            }
                } onMouseLeave={() => {gsap.to(hoverContainer.current,{
                    opacity:0,
                    
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
                    
            </li>

   
         </div>

    )
    
}

export default MovieCard;