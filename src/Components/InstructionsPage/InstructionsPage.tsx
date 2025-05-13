import { Link } from "react-router"; // Correct import for React Router v6+

const InstructionsPage = () => {
  return (
    <div className='flex flex-col items-center'> 
      <div className="fixed top-10 z-10 flex flex-col items-center border-2 border-black-800 m-2 w-[90%] max-w-[800px] bg-pink sm:h-[750px] md:h-[550px] rounded-2xl shadow-2xl"> 
        <div className="flex w-[100%] p-5">
          <button className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 hover:from-purple-500 hover:via-pink-600 hover:to-red-600 text-white font-bold py-2 px-4 rounded-xl shadow-md">
            <Link to='/' className="text-white no-underline">Back to Home</Link>
          </button>
        </div>

        <h2 className='mt-6 text-2xl font-bold p-2'>How to Play Millionaire Quiz Game</h2>
        <div className="p-6 text-left text-gray-700">
          <p className="list-disc pl-5 leading-relaxed">
            • You will be presented with a series of multiple-choice questions.<br/>
            • For each question, select the answer you believe is correct.<br/>
            • Answer correctly to progress to the next question and increase your potential winnings.<br/>
            • Be careful! An incorrect answer will end the game, and you may lose any accumulated winnings.<br/>
            • As you advance through the levels, the questions will become increasingly challenging.<br/>
            • Reach the final question and answer it correctly to become a virtual millionaire!<br/>
          </p>
        </div>
      </div>
    </div>
  )
}

export default InstructionsPage;