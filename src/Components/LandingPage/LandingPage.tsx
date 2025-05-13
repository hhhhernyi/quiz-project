import { useState } from "react"
import { Link } from "react-router"

const LandingPage = () => {
    const [musicOn, setMusicOn] = useState<boolean>(true)

    function handleClickMusic(): void {
      setMusicOn(!musicOn)
      console.log(musicOn)
    }
  
    return (
      <div className="flex flex-col items-center">
        <div className="border-2 border-black m-2 w-[90%] max-w-[800px] bg-pink">
          <div className="flex flex-row-reverse m-5">
          <button onClick={handleClickMusic} className="border-black border-2 rounded-2xl p-2 bg-white">Music</button>
        </div>
        <div className="flex items-center justify-center">
          <img src="/Logo.png" className="max-w-[500px]"/>
        </div>
        
        <div className="flex sm:flex-col lg:flex-row justify-center items-center">
          <Link to='/startgame'><button className="border-black border-2 rounded-3xl p-4 bg-white w-[300px] m-3">Start Game</button></Link>
          <Link to="/instructions"><button className="border-black border-2 rounded-3xl p-4 bg-white w-[300px] m-3">Instructions</button></Link>
        </div>
        </div>
        
        
      </div>
    )
}

export default LandingPage