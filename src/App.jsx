import { useState } from "react"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import { Routes, Route } from "react-router-dom"
import MovieDetail from "./pages/MovieDetail";




const defaultKeywords = ["Batman", "Spiderman", "Iron man", "Interstellar", "Naruto", "Inception", "John Wick", "Avatar"];
const getRandomKeyword = () => {
  const randomIndex = Math.floor(Math.random() * defaultKeywords.length);
  return defaultKeywords[randomIndex];
};


const App = () => {
  const [query, setquery] = useState("")

  const [searchTrigger, setSearchTrigger] = useState(getRandomKeyword)
  
  return (
    
    <div className="p-8 bg-zinc-950 min-h-screen">
      <Navbar query={query} setquery={setquery} setSearchTrigger={setSearchTrigger} getRandomKeyword={getRandomKeyword}/>
      
      <Routes>
        <Route path="/" element={<Home searchTrigger={searchTrigger}/>} />
        <Route path="/movie/:id" element={<MovieDetail/>}/>
      </Routes>
      
    </div>
  )
}

export default App
