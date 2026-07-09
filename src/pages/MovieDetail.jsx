import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDetail = () => {
  // 1. URL mein se 'id' ko nikalne ke liye useParams hook liya
  const { id } = useParams(); 
  
  // 2. Movie ka data store karne ke liye state banayi
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // 3. Single movie search ke liye OMDb API mein '?i=' use hota hai
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${import.meta.env.VITE_OMDB_API_KEY}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      });
  }, [id]); 
  if (!movie) {
    return (
      <div className="text-white text-center mt-20 text-xl font-semibold animate-pulse">
        Loading Movie Details...
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-zinc-900 border border-zinc-800 rounded-2xl shadow-2xl text-white">
      
      
      <Link to="/" className="text-cyan-400 hover:text-cyan-300 font-semibold mb-6 inline-block transition duration-200">
        ← Back to Home
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        
        {/* Movie Poster Portion */}
        <div className="w-full md:w-1/3 rounded-xl overflow-hidden shadow-lg border border-zinc-800">
          <img 
            src={movie.Poster !== "N/A" ? movie.Poster : "https://placehold.co/400x600/18181b/a1a1aa?text=No+Poster"} 
            alt={movie.Title} 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Movie Detailed Info Portion */}
        <div className="w-full md:w-2/3 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-cyan-300 drop-shadow">{movie.Title}</h2>
          
          {/* Quick Stats */}
          <div className="flex flex-wrap gap-4 text-zinc-400 text-sm font-medium">
            <span>{movie.Year}</span>
            <span>•</span>
            <span>{movie.Runtime}</span>
            <span>•</span>
            <span className="bg-zinc-800 px-2 py-0.5 rounded text-zinc-300 text-xs">{movie.Rated}</span>
          </div>

          {/* Plot Section */}
          <div className="mt-2">
            <span className="text-zinc-500 block text-xs font-bold uppercase tracking-wider mb-1">Plot</span>
            <p className="text-zinc-300 leading-relaxed text-base">{movie.Plot}</p>
          </div>

          {/* More Metadata Grid */}
          <div className="grid grid-cols-2 gap-6 mt-4 border-t border-zinc-800 pt-4 text-sm">
            <div>
              <span className="text-zinc-500 block text-xs font-bold uppercase tracking-wider mb-0.5">Actors</span>
              <span className="text-zinc-200 font-medium">{movie.Actors}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-xs font-bold uppercase tracking-wider mb-0.5">Director</span>
              <span className="text-zinc-200 font-medium">{movie.Director}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-xs font-bold uppercase tracking-wider mb-0.5">Genre</span>
              <span className="text-zinc-200 font-medium">{movie.Genre}</span>
            </div>
            <div>
              <span className="text-zinc-500 block text-xs font-bold uppercase tracking-wider mb-0.5">IMDb Rating</span>
              <span className="text-cyan-400 font-bold text-base flex items-center gap-1 mt-0.5">⭐ {movie.imdbRating}</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
