

const Searchbar = ({query,setquery,setSearchTrigger,getRandomKeyword}) => {

 const handleFormSubmit = (e) => {
  e.preventDefault(); 
  if(query.trim() === ""){
    setSearchTrigger(getRandomKeyword());
  }else{
    setSearchTrigger(query);
  }
};

  
  return (
    <form onSubmit={handleFormSubmit}>
      <input value={query} onChange={(e)=>{
        setquery(e.target.value)
      }} className='border-2 border-cyan-300 rounded-2xl text-gray-300 p-2 
      ' type="text" placeholder='Search...' 
      />
      <button type="submit" className="bg-cyan-400 text-black px-4 py-2 rounded-2xl ml-2 font-bold">Search</button>

    </form>
  )
}

export default Searchbar

