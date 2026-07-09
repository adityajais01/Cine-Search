import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = (props) => {
  return (
    
    <div className="flex flex-col md:flex-row justify-between items-center w-full bg-zinc-700/40 backdrop-blur-md px-6 py-5 rounded-2xl border border-zinc-500/70 shadow-xl gap-5 md:gap-2 transition-all duration-300">

      
      <h1 className="text-cyan-300 text-3xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] shrink-0 text-center md:text-left">
        Cine<span className="text-blue-400">Search</span>
      </h1>
      
{/* 2. MENU LINKS: */}
        
      <div className="flex flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 text-zinc-400 font-semibold text-sm md:text-base  order-2 transition-all duration-300">
        <Link to={`/`} className="cursor-pointer hover:text-cyan-300 transition duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap">
          Home
        </Link>
        <Link to={`/about`} className="cursor-pointer hover:text-cyan-300 transition duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap">
          About
        </Link>
        <Link to={`/watchlist`} className="cursor-pointer hover:text-cyan-300 transition duration-300 ease-in-out transform hover:scale-105 whitespace-nowrap">
          Watchlist
        </Link>
      </div>

      
        {/* 3. SEARCHBAR: */}
       
      <div className="w-full max-w-[320px]  md:w-auto order-3 flex justify-center shrink-0">
        <div className="w-full">
          <Searchbar query={props.query} setSearchTrigger={props.setSearchTrigger} getRandomKeyword={props.getRandomKeyword} setquery={props.setquery}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;