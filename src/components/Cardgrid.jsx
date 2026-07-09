import { useEffect, useState } from "react";
import Cards from "./Cards";

const Cardgrid = ({ searchTrigger }) => {
  const [movies, setmovies] = useState([]);

  useEffect(() => {
    if (!searchTrigger) return;

    // checking if search data is present in local strorage

    const cachedData = localStorage.getItem(`cache_${searchTrigger.toLowerCase()}`)

    if(cachedData){
      setTimeout(()=>{
        setmovies(JSON.parse(cachedData));
      },0)
      return;
    }

    // solving race condition
    const controller = new AbortController();
    

    fetch(
      `https://www.omdbapi.com/?s=${searchTrigger}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`,
      { signal: controller.signal } 
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setmovies(data.Search);
          localStorage.setItem(`cache_${searchTrigger.toLowerCase()}`, JSON.stringify(data.Search));
        }
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
        }
      });
  }, [searchTrigger]);
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-15 ">
      {movies.map(function (elem) {
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
  );
};

export default Cardgrid;
