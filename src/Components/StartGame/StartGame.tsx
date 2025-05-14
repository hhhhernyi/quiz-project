import { useState } from "react";
import quizQuestions, { Question } from "../../quizQuestions";

const StartGame = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const currentQuestion: Question | undefined = quizQuestions.question?.[0];
  const numberOfCategories: number | undefined = currentQuestion?.category?.length;
  const randomIndex: number = numberOfCategories ? Math.floor(Math.random() * numberOfCategories) : 0;
  const randomCategoryName: string | undefined = currentQuestion?.category?.[randomIndex]?.name;
  const questionText: string = currentQuestion?.category?.[randomIndex]?.question;
  const answers = currentQuestion?.category?.[randomIndex]?.answer || [];

  function handleClickAnswer(selectedAnswer: string): void {
    const correctAnswer = answers.find((answer) => answer[1] === 'correctAnswer');
    if (correctAnswer && correctAnswer[0] === selectedAnswer) {
      console.log('Correct Answer!');
    } else {
      console.log('Wrong Answer!');
    }
  }

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
              onClick={() => handleClickAnswer(option[0])} // Pass the selected answer text
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