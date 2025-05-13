import { useState } from "react"

export default function App() {

  const [musicOn, setMusicOn] = useState<boolean>(true)

  function handleClickMusic() {
    setMusicOn(!musicOn)
    console.log(musicOn)
  }

  return (
    <div className="flex flex-col items-center">
      <div className="border-2 border-black m-2 w-[90%] max-w-[500px] bg-pink">
        <div className="flex flex-row-reverse m-5">
        <button onClick={handleClickMusic} className="border-black border-2 rounded-2xl p-2 bg-white">Music</button>
      </div>
      <div className="flex items-center justify-center">
        <img src="/Logo.png" className="max-w-[500px]"/>
      </div>
      
      <div className="flex sm:flex-col lg:flex-row justify-center items-center">
        <button className="border-black border-2 rounded-3xl p-4 bg-white w-[300px] m-3">Start Game</button>
        <button className="border-black border-2 rounded-3xl p-4 bg-white w-[300px] m-3">Instructions</button>
      </div>
      </div>
      
      
    </div>
  )
}