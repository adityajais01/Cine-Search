import { useEffect, useState } from "react";
import Cards from "./Cards";

const Cardgrid = ({searchTrigger}) => {
    const [movies, setmovies] = useState([])

    useEffect(()=>{
      if(!searchTrigger) return;

      fetch(`https://www.omdbapi.com/?s=${searchTrigger}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`)
      .then((response)=>response.json())
      .then((data)=>{
        if (data.Search){
          setmovies(data.Search)
        }
      })
    },[searchTrigger])
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-15 ">
      {movies.map(function(elem) {
        
        return (
          <Cards 
            key={elem.imdbID} 
            title={elem.Title} 
            year={elem.Year} 
            poster={elem.Poster} 
            id={elem.imdbID}
          />
        );
      })}
    </div>
  )
}

export default Cardgrid
