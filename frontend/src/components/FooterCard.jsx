import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap";
import { useEffect, useRef, useState } from 'react';
import PlayMovieBtn from './PlayMovieBtn';
import "../css/FooterCard.css"



function FooterCard(props) {


    const [cardHoverStatus,setCardHoverStatus] = useState(false)

    // useEffect(() => {
    //     gsap.set(props.ref.current,{
    //         opacity:0,
    //     })
        
    // },[])      

    // useEffect(() => {
    //     // console.log(props.saveHoverState);
    //     if (props.saveHoverState === true) {
    //         setCardHoverStatus(true)
    //         gsap.to(footerContainer.current,{
    //             opacity:1,
    //             // scale:1.1,

    //         })
    //     }
    //     else {
    //         setCardHoverStatus(false)
    //         gsap.to(footerContainer.current,{
    //         opacity:0,
    //         scale:1

    //         })
    //     }        
        

    // },[props.saveHoverState])
     

    
    
 


    return (
        <div className="btn-container d-flex flex-row justify-content-center gap-2 align-items-center position-absolute "
            onMouseEnter={ () => {
                cardHoverStatus && console.log("entrato")
            }
                
            
            }

            onMouseLeave={ () => {
                cardHoverStatus == null  && console.log("uscito") 
            }
            
            }
        
        ref={props.ref} >
            <button onClick={() => console.log("click")
            } className="cta-btn-card p-2 mt-2 mb-1"><FontAwesomeIcon icon={faPlus} /></button>
            {/* aggiungere condizione che mostra il play solo se film supportato da api */}
            <PlayMovieBtn movieId={props.movieId}/>
        </div>
    )
}


export default FooterCard;