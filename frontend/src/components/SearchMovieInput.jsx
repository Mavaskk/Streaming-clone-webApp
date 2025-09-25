import { useState } from "react";



function SearchMovieInput(props) {



    const [inputValue, setInputValue] = useState ("")

    const checkInputValidation = (e) => {
        e.preventDefault()
        if (inputValue.trim() === "") {
            setInputValue("");
        }
        else{
            props.callApi(inputValue);
            setInputValue("");
        }

    }

    return (
        <form action="submit">
            <input
            type="text"
            placeholder="search a movie"
            value={inputValue}
            onChange={(e) => {setInputValue(e.target.value)}}
            ></input>
            <button onClick={checkInputValidation}>Search</button>
        </form>
    )
    
}


export default SearchMovieInput;