import { useEffect, useState } from "react";
import quizQuestions, { Question } from "../../quizQuestions";

const StartGame = () => {
  // state
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const [questionIndex, setQuestionIndex] = useState<number>(0)
  const [answers, setAnswers] = useState<string[][] | []>([]);
  //const [loading, setLoading] = useState<boolean>(true);
  // const [countdown, setCountdown] = useState<number>(3);

  // constants
  const currentQuestion: Question | undefined = quizQuestions.question?.[questionIndex];
  const numberOfCategories: number | undefined = currentQuestion?.category?.length;
  const randomIndex: number = numberOfCategories ? Math.floor(Math.random() * numberOfCategories) : 0;
  const randomCategoryName: string | undefined = currentQuestion?.category?.[randomIndex]?.name;
  const questionText:string | undefined = currentQuestion?.category?.[randomIndex]?.question;

  // variables
  
  // Functions
    function handleClickAnswer(selectedAnswer: string): void {
    const correctAnswer = answers.find((answer) => answer[1] === 'correctAnswer');
    if (correctAnswer && correctAnswer[0] === selectedAnswer) {
      console.log('Correct Answer!');
      setQuestionNumber(questionNumber => questionNumber + 1);
      setQuestionIndex(questionIndex => questionIndex+1);
    
    } else {
      console.log('Wrong Answer!');
      
    }
  }
  
  // effects
  useEffect(()=>{
    setAnswers(currentQuestion.category[randomIndex].answer.map(answer => [answer[0], answer[1]]) || []);

    // once the user reached this page, i want to have a loading screen to countdown from 3 before showing the question
    // i need to have a loading screen component to be displayed
    // i need a loading screen state set to be true, and then after 3s it is set to false
    // for the rendering, i will render the loading screen if the state is true, and the question if the state is false
  },[currentQuestion, randomIndex])




  return (
    <div className="flex flex-col items-center justify-center">
      <div className="fixed top-0 z-10 border-2 border-black m-2 w-[80%] h-[750px] max-w-[800px] bg-pink rounded-2xl shadow-2xl p-4 flex flex-col items-center">
        <h2 className="text-xl font-bold mb-2 mt">Question Number {questionNumber}</h2>
        <h2 className="text-lg mb-4">Category: {randomCategoryName}</h2>
          <div className="flex flex-col items-center justify-center border-2 border-black w-[80%] h-[50%] p-2 bg-gradient-to-b from-red-500 to-white rounded-lg shadow-md">
            <h2>Question: </h2>
            <p className="text-center">{questionText}</p>
          </div>

        
          <div className="flex flex-wrap justify-center md:flex-row sm:flex-col">
            {answers.map((option, index) => (
              <button
                onClick={() => handleClickAnswer(option[0])}
                key={index}
                className={`
                  border-2 border-gray-400 p-3 m-2 rounded-xl
                  bg-white text-gray-800 font-semibold shadow-sm
                  hover:bg-gray-200
                  transition-colors duration-200
                  w-full sm:w-auto md:w-auto
                  sm:text-center
                  `}
              >
                {option[0]}
              </button>
            ))}
          </div>
        
      </div>
    </div>
  );
};

export default StartGame;