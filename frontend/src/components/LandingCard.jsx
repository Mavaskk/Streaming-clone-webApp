import "../css/LandingCard.css"



function LandingCard(props) {



    return (
        <li className={`landing-movie-card `}>
            <img className={props.centerClass} src ={`https://image.tmdb.org/t/p/w200/${props.posterPath}`} alt="" />

        </li>
    )
    
}

export default LandingCard