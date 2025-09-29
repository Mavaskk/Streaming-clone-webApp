import { useState } from "react";
import "../css/SearchBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'






function SearchMovieInput(props) {



    const [inputValue, setInputValue] = useState ("")

    const checkInputValidation = (e) => {
        e.preventDefault()
        // if (inputValue.trim() === "") {
        //     setInputValue("");
        // }
        // else{
        //     props.callApi(inputValue);
        //     setInputValue("");
        // }

    }

    return (
        <form className="mt-4"  onSubmit={(e) => e.preventDefault()} action="submit">
            <div className="input-wrapper">
                <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
                <input
                autoFocus
                type="text"
                placeholder="Search a movie"
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value),props.callApi(inputValue)}}
                ></input>                
            </div>

            {/* <button onClick={checkInputValidation}>Search</button> */}
        </form>
    )
    
}


export default SearchMovieInput;