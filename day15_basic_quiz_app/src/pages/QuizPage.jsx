import React, { useEffect, useState } from 'react'
import { resultInitalState } from '../data/CategoryData';
import AnswerTimer from '../components/answerTimer/AnswerTimer';
import QuizComponent from '../components/QuizComponent';

const QuizPage = ({ quizData }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answerIdx, setAnswerIdx] = useState(null);
    const [answer, setAnswer] = useState(false);
    const [result, setResult] = useState(resultInitalState);
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(true);
    const [inputAnswer, setInputAnswer] = useState("");

    const [highScore, setHighScore] = useState([])
    const [showScore, setShowScore] = useState(false)
    const [resultName, setResultName] = useState();

    const { incorrect_answers, category, question, correct_answer, type } = quizData[currentQuestion];
    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correct_answer) {
            setAnswer(true)
        }
        else {
            setAnswer(false)
        }
    }

    console.log(result);

    const onClickNext = (finalAnswer) => {
        setShowAnswerTimer(false)
        setAnswerIdx(null);
        setResult((prev) => finalAnswer ?
            {
                ...prev,
                score: prev.score + 5,
                correct_answer: prev.correct_answer + 1
            } :
            {
                ...prev,
                incorrect_answers: prev.incorrect_answers + 1
            })
        if (currentQuestion !== quizData.length - 1) {
            setCurrentQuestion((prev) => prev + 1);
        }
        else {
            setCurrentQuestion(0);
            setShowResult(true);
        }

        setTimeout(() => {
            setShowAnswerTimer(true)
        });
    }

    const onTryAgain = () => {
        setResult(resultInitalState);
        setShowResult(false);
    };

    const onHandleTimerUp = () => {
        setAnswer(false)
        onClickNext(false)
    }

    const handleInputAns = (e) => {
        // e.preventDefault();
        setInputAnswer(e.target.value)
        if (e.target.value === correct_answer) {
            setAnswer(true)
        }
        else {
            setAnswer(false);
        }

    }

    const handleSave = () => {
        const score = {
            name: resultName,
            score: result.score,
        };

        const newHighScores = [...highScore, score].sort((a, b) => b.score - a.score);
        setHighScore(newHighScores)
        setShowScore(true);
        localStorage.setItem('highScore', JSON.stringify(newHighScores))
    }

    const handleTryAgain = () => {
        setShowScore(false);
        onTryAgain();
        setInputAnswer("")
        setResultName("")

    }

    useEffect(() => {
        setHighScore(JSON.parse(localStorage.getItem("highScore")) || [])
    }, [])


    const getAnswerUI = () => {
        if (type === "FIB") {
            return (
                <input type='text' placeholder='Enter Answer' className='w-60 px-4 py-2 rounded-lg' value={inputAnswer} onChange={handleInputAns} />
            )
        }
        return (
            <ul className='grid grid-cols-2 justify-center gap-x-20 gap-y-3'>
                {incorrect_answers?.map((choice, index) => (
                    <div key={index} onClick={() => onAnswerClick(choice, index)} className={`flex text-2xl whitespace-nowrap px-6 py-5 justify-center rounded-lg ${answerIdx === index ? " bg-gray-700 text-white " : 'bg-gray-100'}`}>
                        {choice}
                    </div>
                ))}
            </ul>
        )
    }

    return (
        <div className=' max-w-3xl px-2 mt-20 w-full shadow-3xl cursor-pointer border-2 bg-gradient-to-r from-[#f86ca7] bg-[#a7bdea] text-blue-700 border-gray-300 flex flex-col gap-5 items-center '>
            {!showResult ? (
                <div className='h-fit px-5 flex flex-col gap-4 py-10'>
                    {showAnswerTimer && (<AnswerTimer duration={10} onTimeUp={onHandleTimerUp} />)}
                    <div className='flex !justify-end w-full'>
                        <span className='text-3xl font-bold text-gray-800'>
                            {currentQuestion + 1}
                        </span>
                        <span className='text-lg font-semibold gap-0.5 flex items-end '>
                            <p>/</p>
                            {quizData?.length}
                        </span>
                    </div>
                    <div className=' flex gap-3 justify-center '>
                        <h2 className='text-3xl font-medium text-blue-700'>{currentQuestion + 1}.</h2>
                        <h2 className='font-medium text-3xl'>{question}</h2>
                    </div>
                    {getAnswerUI()}
                    <div className={`w-full flex justify-end`}>
                        <button onClick={() => onClickNext(answer)}
                            className="flex text-2xl whitespace-nowrap px-6 py-2 justify-center rounded-lg bg-gray-800 text-white disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
                            disabled={answerIdx === null && !inputAnswer}>
                            {currentQuestion === quizData.length - 1 ? "Finish" : "Next"}
                        </button>
                    </div>
                </div>
            ) :
                (
                    <section className='h-fit text-center max-w-3xl px-2 w-full shadow-3xl cursor-pointer py-3 text-blue-700 flex flex-col gap-5 items-center '>
                        <QuizComponent quizData={quizData} result={result} handleTryAgain={handleTryAgain} showScore={showScore} resultName={resultName} setResultName={setResultName} handleSave={handleSave} highScore={highScore} />
                    </section>
                )
            }
        </div >

    )
}
export default QuizPage