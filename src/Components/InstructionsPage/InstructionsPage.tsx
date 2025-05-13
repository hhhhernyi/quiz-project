import { Link } from "react-router"

const InstructionsPage = () => {
    return (
      <div className='flex flex-col items-center'>
        <div className="flex flex-col items-center border-2 border-black m-2 w-[90%] max-w-[800px] bg-pink h-[550px]">
          <div className="flex w-[100%] p-5">
            <Link to='/'><button className="border-2 border-black p-2 rounded-xl">Back to Home</button></Link>
          </div>
  
          <h2 className='mt-4 text-xl font-bold'>How to Play Millionaire Quiz Game</h2>
          <div className="p-4 text-left">
            <p className="list-disc pl-5">
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
  
  export default InstructionsPage