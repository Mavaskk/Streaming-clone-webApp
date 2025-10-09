import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap";
import { useEffect, useRef, useState } from 'react';



function FooterCard(props) {


    const [cardHoverStatus,setCardHoverStatus] = useState(false)
    const footerContainer = useRef(null)

    useEffect(() => {
        gsap.set(footerContainer.current,{
            opacity:0,
        })
        
    },[])      

    useEffect(() => {
        // console.log(props.saveHoverState);
        if (props.saveHoverState === true) {
            setCardHoverStatus(true)
            gsap.to(footerContainer.current,{
                opacity:1,
                // scale:1.1,

            })
        }
        else {
            setCardHoverStatus(false)
            gsap.to(footerContainer.current,{
            opacity:0,
            scale:1

            })
        }        
        

    },[props.saveHoverState])
     

    
    
 


    return (
        <div  onMouseEnter={ () => {
                cardHoverStatus && console.log("entrato")
            }
                
            
            }

            onMouseLeave={ () => {
                cardHoverStatus == null  && console.log("uscito") 
            }
            
            }
        
        ref={footerContainer} className="btn-container d-flex flex-row justify-content-center gap-2 align-items-center ">
            <button onClick={() => console.log("click")
            } className="cta-btn-card p-2 mt-2 mb-1"><FontAwesomeIcon icon={faPlus} /></button>
            {/* aggiungere condizione che mostra il play solo se film supportato da api */}
            <button className="cta-btn-card mt-2 mb-1"><FontAwesomeIcon icon={faPlay} />Play</button>
        </div>
    )
}


export default FooterCard;