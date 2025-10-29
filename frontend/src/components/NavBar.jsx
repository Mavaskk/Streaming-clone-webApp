import {Link} from "react-router-dom"
import "../css/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from "../App"
import { useContext } from "react"


function NavBar() {

    const {isAuthenticated,setIsAuthenticated} = useContext(AuthContext)

    return (
        <nav >
            <div className="d-flex flex-row left-container" >
                <Link className="nav-link"  to="/">Logo</Link>
                {isAuthenticated && <>
                    <Link className="nav-link"  to="/">New and Popular</Link>
                    <Link className="nav-link" to="/favorites">WatchList</Link>                
                </>}

            </div>    
            <div className="d-flex flex-row right-container">
                {isAuthenticated && <>
                    <Link className="nav-link" to="/search"><FontAwesomeIcon className="nav-link search-icon" icon={faMagnifyingGlass} /></Link>
                    <Link className="nav-link" to="/pfp">Pfp</Link>                            
                </>}
    
            </div>

        </nav>
    )
}

export default NavBar