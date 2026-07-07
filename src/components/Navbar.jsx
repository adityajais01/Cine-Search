import Searchbar from "./Searchbar";

const Navbar = (props) => {
  
  return (
    <div className="flex justify-between items-center w-full bg-zinc-700/40 backdrop-blur-md px-6 py-4 rounded-2xl border border-zinc-500/70 shadow-xl">

      <h1 className="text-cyan-300 text-3xl font-bold tracking-wider drop-shadow-[0_0_10px_rgba(34,211,238,0.3)] ">
        Cine<span className="text-blue-400">Search</span>
      </h1>
      
        <ul className="list-none gap-8 text-zinc-400 font-semibold hidden md:flex  ">
          <li className="cursor-pointer hover:text-cyan-300 transition duration-300 ease-in-out transform hover:scale-105">
          Home
        </li>
        <li className="cursor-pointer hover:text-cyan-300 transition duration-300 ease-in-out transform hover:scale-105">
          About
        </li>
        <li className="cursor-pointer hover:text-cyan-300 transition duration-300 ease-in-out transform hover:scale-105">
          Genre
        </li>
        </ul>

        <Searchbar query={props.query} setSearchTrigger={props.setSearchTrigger} getRandomKeyword={props.getRandomKeyword}setquery={props.setquery}/>
      
    </div>

);
};

export default Navbar;
