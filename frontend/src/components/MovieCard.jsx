import "../css/MovieCardComp.css"
import { useState,useRef } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'


function MovieCard(props) {
       const posterSrc = props.posterPath !== null
        ? `https://image.tmdb.org/t/p/w200/${props.posterPath}`
        : "../assets/movie-placehoder.jpg"; 

        const [hover,setHover] = useState(false)


        const hoverContainer = useRef(null)




    return (
        <div className="col-6 col-md-4 col-lg-3 col-xl-3 mt-4 position-relative">
            <li className="movie-card " >
                <img  onMouseEnter={() => {setHover(true);gsap.to(hoverContainer.current,{
                    opacity:1,
                    
                });

            }
                } onMouseLeave={() => {setHover(false);gsap.to(hoverContainer.current,{
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
                    
                        <div className="review-container position-absolute  d-flex flex-row  ">
                            <p className="m-0 vote-average text-truncate"> {props.voteAverage} </p>
                            <FontAwesomeIcon icon={faStar} />

                        </div>
                    </div>
                    
            </li>

   
         </div>

    )
    
}

export default MovieCard;