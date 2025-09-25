const API_KEY = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMWNkNmFlNmVmMzYxYTJkM2ZmMmM2ZDY5MzBlNDJhMCIsIm5iZiI6MTc1NzUyMDc5Ni4xNiwic3ViIjoiNjhjMWEzOWM5OGMxN2VhODZkMDZhZTI3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.u1K8SRHVSAMNhKXr9BNAg1SBswZ2cNkZ8IQ8tjTLOgE";

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
        const searchCount = arrayResult.length;        
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
        return  returnList
    }
    return returnList
    
    
    
    


    

// poster api info https://developer.themoviedb.org/docs/image-basics

}