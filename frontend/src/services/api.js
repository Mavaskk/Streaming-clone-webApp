const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWNkNmFlNmVmMzYxYTJkM2ZmMmM2ZDY5MzBlNDJhMCIsIm5iZiI6MTc1NzUyMDc5Ni4xNiwic3ViIjoiNjhjMWEzOWM5OGMxN2VhODZkMDZhZTI3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.u1K8SRHVSAMNhKXr9BNAg1SBswZ2cNkZ8IQ8tjTLOgE";

function syncObj (arrayResult,returnList,searchCount) {
    for (let i = 0; i < searchCount; i++) {
            const movie = {};  
            movie.id = arrayResult[i].id   
            movie.adult = arrayResult[i].adult
            movie.title = arrayResult[i].title
            movie.voteAverage = arrayResult[i].vote_average
            movie.releaseDate = arrayResult[i].release_date
            movie.posterPath = arrayResult[i].poster_path
            movie.backdropPath = arrayResult[i].backdrop_path
            movie.popularity = arrayResult[i].popularity

            
            returnList.push(movie)            
        }
        
    return returnList
}

export async function findById(id) {

    const movie = {}; 

    const url = `https://api.themoviedb.org/3/movie/${id}}`
;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
    };

    const apiResponse = await fetch(url, options)
    const apiData = await apiResponse.json()
    .catch(err => console.error(err));    
    movie.title = apiData.title
    movie.adult = apiData.adult
    movie.backdropPath = apiData.backdrop_path
    movie.posterPath = apiData.poster_path
    movie.releaseDate = apiData.release_date
    movie.voteAverage = apiData.vote_average
    movie.overview = apiData.overview
    movie.id = apiData.id
    
    return movie

}


export async function getReccomendedMovies(movieId) {
    console.log(movieId);
    

    const returnList = []; 

    const url = `https://api.themoviedb.org/3/movie/${movieId}/recommendations`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
    };

    let arrayResult = null    
    const apiResponse = await fetch(url, options)
    const apiData = await apiResponse.json()
    .catch(err => console.error(err));    
    
    
    arrayResult = apiData.results
    if (arrayResult) {
        return syncObj(arrayResult,returnList,arrayResult.length)
        }

    
}

export async function getMovieCredits(movieId) {
        const castList = [];
        const crewList = [];
        const url = `https://api.themoviedb.org/3/movie/${movieId}/credits`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`
        }
        };
        const apiResponse = await fetch(url, options)
        const apiData = await apiResponse.json()
        .catch(err => console.error(err));  
        const cast = apiData.cast
        const crew = apiData.crew
        for (let i = 0; i < 8; i++) {
            const castMember = {
                character: cast[i].character,
                id: cast[i].id,
                knownForDepartment: cast[i].known_for_department,
                name: cast[i].name,
                profilPath: cast[i].profile_path
            }
            castList.push(castMember)            
        }
        for (let i = 0; i < 5; i++) {
            const crewMember = {
                id: crew[i].id,
                job: crew[i].job,
                name: crew[i].name,
                profilPath: crew[i].profile_path
            }
            crewList.push(crewMember)            
        }
        return [castList,crewList]
          



    
}

export async function getMoviesInTheatres() {
    const returnList = []; 

    const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
    };

    let arrayResult = null    
    const apiResponse = await fetch(url, options)
    const apiData = await apiResponse.json()
    .catch(err => console.error(err));    
    
    
    arrayResult = apiData.results
    if (arrayResult) {
        return syncObj(arrayResult,returnList,arrayResult.length)
        }

}

export async function getMovieTrailerOnYt(id) {
    const returnList = []; 

    const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
    };

    let arrayResult = null    
    const apiResponse = await fetch(url, options)
    const apiData = await apiResponse.json()
    .catch(err => console.error(err));    
    
    arrayResult = apiData.results
    if (arrayResult) {
            for (let i = 0; i < arrayResult.length; i++) {
            const movie = {};  
            movie.key = arrayResult[i].key   
            movie.site = arrayResult[i].site
            movie.type = arrayResult[i].type
            movie.name = arrayResult[i].name
            movie.size = arrayResult[i].size
            if (movie.type === "Trailer") {//when the loop find the trailer it breaks, i just need one
                return movie.key
         
            }
        }
        
    return returnList
        }

}






export async function searchMovieTMDB (query){

    const returnList = []; 

    const url = `https://api.themoviedb.org/3/search/movie?query=${query}`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
    };

    let arrayResult = null    
    const apiResponse = await fetch(url, options)
    const apiData = await apiResponse.json()
    .catch(err => console.error(err));    
    arrayResult = apiData.results
    if (arrayResult) {
        return syncObj(arrayResult,returnList,arrayResult.length)
        }
}    
    
    
export async function trandingMovieTMDB (){

    const returnList = []; 

    const url = `https://api.themoviedb.org/3/trending/movie/week?language=en-US`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
    };

    let arrayResult = null    
    const apiResponse = await fetch(url, options)
    const apiData = await apiResponse.json()
    .catch(err => console.error(err));    
    
    arrayResult = apiData.results
    if (arrayResult) {
        return syncObj(arrayResult,returnList,arrayResult.length)
        }
}

