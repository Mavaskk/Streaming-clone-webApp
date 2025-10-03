import "../css/LandingCard.css"
import { gsap } from "gsap";
import { useRef, useLayoutEffect, useEffect, useState } from "react";




function LandingCard(props) {

    const [checkMobile,setCheckMobile] = useState(false)
    const [playVideo,setPlayVideo] = useState(false)
    const cardRef = useRef(null)

    const enterAnimation = () => {        
            gsap.to(cardRef.current, {   
            scale: 1.02,
            y: -10,
            duration: 0.4,
            ease: "power3.out",
            overwrite: "auto" 
            }
        );
    }

    const exitAnimation = () => {
          gsap.to(cardRef.current, {y:0, scale: 1, duration: 0.3, overwrite: "auto" });
    }


    
   

    useEffect(() => { // lo metto in useEffect perchè se lo faccio prima che il componente sia montato no prende window e crasha
        
       const checkResize =  () => {
                if (window.matchMedia( "(hover: none)").matches) { //controllo se hover non è disponibile,quindi su mobile non faccio partire il video
                                setCheckMobile(true)                                                 
                            }
                            else {
                                setCheckMobile(false)
                            }        
            }
        checkResize()   //la chiamo cosi inizalmente controlla lo stato del dispositivo anche se non parte evento
        window.addEventListener("resize",checkResize) //Si attiva ad ogni resize della finestra
        return () => window.removeEventListener("resize",checkResize) //rimuove eventListener per non creare problemi quando il componente viene smontato

    },[])



    return (
        <li ref={cardRef} onMouseEnter={() => checkMobile ? (setPlayVideo(false)) : (setPlayVideo(true),enterAnimation())} onMouseLeave={() => {setPlayVideo(false);exitAnimation()}} className={`landing-movie-card `}>

            <div className="h-100">
                {!playVideo ? (<img className={props.centerClass} src ={`https://image.tmdb.org/t/p/w400/${props.posterPath}`} alt="" />)
                :
                (
                    <iframe  src={`https://youtube.com/embed/${props.videoKey}?autoplay=1&mute=1`} ></iframe>
                )}                
            </div>

            


            
        </li>
    )
    
}

export default LandingCard