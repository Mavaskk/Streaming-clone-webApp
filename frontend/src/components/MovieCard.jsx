import "../css/MovieCardComp.css"
import { useState,useRef,useEffect } from "react";
import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from '@fortawesome/free-solid-svg-icons'
import FooterCard from "./FooterCard";


function MovieCard(props) {



	   const posterSrc = props.posterPath !== null
		? `https://image.tmdb.org/t/p/w400/${props.posterPath}`
		: "../assets/movie-placehoder.jpg"; 


	

		const hoverContainer = useRef(null)

		const liRef = useRef(null)
		const imgRef = useRef(null)
		const footerRef = useRef(null)
		const divRef = useRef(null)

		const [hoverCardId,setHoverCardId] = useState("")

		useEffect(() => {
			gsap.set(divRef.current,{
				zIndex : props.zIndex,
			})
				
		},[props.zIndex])


		const truncateVote = ((number) => {
			return new String(number).substring(0,3) //converto in stringa per fare substring
		})

	return (
			<div ref={divRef} className="col-6 col-md-4 col-lg-3  mt-3 col-xl-3  position-relative">
				<li ref={liRef} className="movie-card "
					onMouseLeave={() => {
						setHoverCardId(null)
						gsap.to(hoverContainer.current,{
							opacity:0,
								
						});
						gsap.set(imgRef.current,{
								filter:"brightness(100%)",
								
								
							});
						gsap.set(liRef.current,{
							borderColor:"#181A21",
							borderRadius:"10px",
							border:"2px solid",
							scale:1,
						});
					}}
				>
					<img ref={imgRef} src={posterSrc}  alt={props.title} 
						onMouseEnter={() => {
							gsap.to(hoverContainer.current,{
							opacity:1,
							
							});
							gsap.set(imgRef.current,{
								filter:"brightness(20%)",
							});
							gsap.set(liRef.current,{
								borderColor:"white",
								borderRadius:" 10px 0px 0px 10px",
								border:"2px solid",
								borderBottom:"0px",
								scale:1.1,
							});
							setHoverCardId(props.id)
						}} />
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
						{props.id === hoverCardId && <FooterCard ref={footerRef} movieId={props.id}/>}
				</li>
			</div>



	)
	
}

export default MovieCard;

