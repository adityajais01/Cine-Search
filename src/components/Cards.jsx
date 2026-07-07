import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    
    <Link to={`/movie/${props.id}`}>
    
      <div className='bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden m-4 w-52 shadow-lg'>
      
      
      <div className='h-72 w-full bg-zinc-800'>
        <img 
          src={props.poster !== "N/A" ? props.poster : "https://placehold.co/400x600/18181b/a1a1aa?text=No+Poster"} 
          alt={props.title} 
          className="w-full h-full object-cover"
        />
      </div>

      
      <div className='p-4'>
        <h3 className="text-white font-bold text-base truncate">
          {props.title}
        </h3>
        <p className="text-zinc-400 text-sm mt-1">
          {props.year}
        </p>
      </div>

    </div>

    </Link>
  )
}

export default Cards;