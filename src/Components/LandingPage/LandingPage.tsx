import { useState } from "react";
import { Link } from "react-router"; // Correct import

const LandingPage = () => {
  const [musicOn, setMusicOn] = useState<boolean>(true);

  function handleClickMusic(): void {
    setMusicOn(!musicOn);
    console.log(musicOn);
    // In a real application, handle music toggling
  }

  return (
    <div className="flex flex-col items-center">
      <div className="fixed top-0 z-10 border-2 border-black m-2 w-[80%] h-[750px] max-w-[800px] bg-pink rounded-2xl shadow-2xl">
        <div className="flex flex-row-reverse m-5">
        <button
            onClick={handleClickMusic}
            className="bg-gradient-to-br from-gray-300 to-gray-500 hover:from-gray-400 hover:to-gray-600 text-gray-800 font-semibold py-2 px-4 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-75"
          >
            {musicOn ? "Music On" : "Music Off"}
          </button>
        </div>
        <div className="flex items-center justify-center">
          <img src="/Logo.png" className="max-w-[400px]" alt="Quiz Game Logo" />
        </div>

        <div className="flex sm:flex-col lg:flex-row justify-center items-center mt-10">
          <Link to="/startgame" className="m-4">
            <button className="bg-gradient-to-br from-pink-400 to-pink-600 hover:from-pink-500 hover:to-pink-700  text-white font-bold py-4 px-8 rounded-3xl shadow-md cursor-pointer w-[300px] text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Start Game
            </button>
          </Link>
          <Link to="/instructions" className="m-4">
            <button className="bg-gradient-to-br from-rose-400 to-rose-600 hover:from-rose-500 hover:to-rose-700 text-white font-bold py-4 px-8 rounded-3xl shadow-md cursor-pointer w-[300px] text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
              Instructions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;