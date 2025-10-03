import "../css/LandingCard.css"
import { gsap } from "gsap";
import { useRef, useLayoutEffect, useEffect, useState } from "react";




function LandingCard(props) {


    const [playVideo,setPlayVideo] = useState(false)





    return (
        <li onMouseEnter={() => setPlayVideo(true)} onMouseLeave={() => setPlayVideo(false)} className={`landing-movie-card `}>

            {!playVideo ? (<img  className={props.centerClass} src ={`https://image.tmdb.org/t/p/w400/${props.posterPath}`} alt="" />)
            :
            (
                <iframe  src={`https://youtube.com/embed/${props.videoKey}?autoplay=1&mute=1`} ></iframe>
             )}
            


            
        </li>
    )
    
}

export default LandingCard