import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { gsap } from "gsap";
import { useEffect, useRef, useState } from 'react';
import PlayMovieBtn from './PlayMovieBtn';
import "../css/FooterCard.css"
import AddToListBtn from './AddToListBtn';



function FooterCard(props) {



    return (
        <div className="btn-container d-flex flex-row justify-content-center gap-2 align-items-center position-absolute "

        ref={props.ref} >
            <PlayMovieBtn movieId={props.id}/>
            <AddToListBtn  id={props.id} guid={props.guid} releaseDate={props.releaseDate} title={props.title} backdropPath ={props.backdropPath} posterPath ={props.posterPath} voteAverage = {props.voteAverage} key={props.id}/>
        </div>
    )
}


export default FooterCard;