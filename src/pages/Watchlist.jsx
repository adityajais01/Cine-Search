
import { Link } from 'react-router-dom';

const Watchlist = () => {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 text-center">
      <h1 className="text-4xl font-extrabold text-white mb-4">My Watchlist</h1>
      <p className="text-zinc-400 text-lg mb-8">Your favourite movies will be saved here.</p>
      
      
      <div className="border border-zinc-800 rounded-2xl p-12 bg-zinc-950 max-w-md mx-auto">
        <span className="text-4xl mb-4 block">🎬</span>
        <h3 className="text-xl font-semibold text-zinc-200 mb-2">No watchlist</h3>
        <p className="text-zinc-500 text-sm mb-6">Go To Home page to add your favourite movies in watchlist.</p>
        <Link to="/" className="inline-block bg-cyan-500 hover:bg-cyan-600 text-black font-bold px-6 py-2 rounded-xl transition duration-200 text-sm">
          Browse Movies
        </Link>
      </div>
    </div>
  );
};

export default Watchlist;