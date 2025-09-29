import {Link} from "react-router-dom"
import "../css/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



function NavBar() {

    return (
        <nav >
            <div className="d-flex flex-row left-container" >
                <Link className="nav-link"  to="/">Logo</Link>
                <Link className="nav-link"  to="/">New and Popular</Link>
                <Link className="nav-link" to="/favorites">Favorites</Link>
            </div>    
            <div className="d-flex flex-row right-container">
                <Link className="nav-link" to="/search"><FontAwesomeIcon className="nav-link search-icon" icon={faMagnifyingGlass} /></Link>
                <Link className="nav-link" to="/pfp">Pfp</Link>                
            </div>

        </nav>
    )
}

export default NavBar