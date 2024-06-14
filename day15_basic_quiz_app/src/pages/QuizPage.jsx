import React, { useEffect, useState } from 'react'
import { resultInitalState } from '../data/QuizData';
import AnswerTimer from '../components/answerTimer/AnswerTimer';

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

    const { choices, question, correctAnswer, type } = quizData[currentQuestion];
    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
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
                correctAnswers: prev.correctAnswers + 1
            } :
            {
                ...prev,
                wrongAnswers: prev.wrongAnswers + 1
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
        if (e.target.value === correctAnswer) {
            setAnswer(true)
        }
        else {
            setAnswer(false);
        }

    }

    const handleSave = () => {
        const score = {
            name,
            score: result.score,
        };
      

        const newHighScores = [...highScore, score].sort((a, b) => b.score - a.score);
        setHighScore(newHighScores)
        setShowScore(true);
        localStorage.setItem('highScore', JSON.stringify(newHighScores))
    }

    const handleTryAgain = () => {
        setShowScore(false);
        setHighScore([]);
        onTryAgain();
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
                {choices?.map((choice, index) => (
                    <div key={index} onClick={() => onAnswerClick(choice, index)} className={`flex text-2xl whitespace-nowrap px-6 py-5 justify-center rounded-lg ${answerIdx === index ? " bg-gray-700 text-white " : 'bg-gray-100'}`}>
                        {choice}
                    </div>
                ))}
            </ul>
        )
    }

    return (
        <div className=' max-w-3xl px-2 w-full shadow-3xl cursor-pointer border-2 text-blue-700 border-gray-300 flex flex-col gap-5 justify-center '>
            {!showResult ? (

                <div className='h-[400px] flex flex-col gap-4 py-1'>
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
                    <section className='h-[450px] text-center max-w-3xl px-2 w-full shadow-3xl cursor-pointer py-3 text-blue-700 flex flex-col gap-5 items-center '>
                        <h3 className='font-bold text-2xl'>
                            Result
                        </h3>
                        <p className='font-bold text-lg'>
                            Total Questions: <span className='text-xl'>{quizData.length}</span>
                        </p>
                        <p className='font-bold text-lg'>
                            Total Score: <span className='text-xl'>{result.score}</span>
                        </p>
                        <p className='font-bold text-lg'>
                            Correct Answers: <span className='text-xl'>{result.correctAnswers}</span>
                        </p>
                        <p className='font-bold text-lg'>
                            Wrong Answers: <span className='text-xl'>{result.wrongAnswers}</span>
                        </p>
                        <button className='px-4 py-2 text-white bg-gradient-to-tl from-pink-400 to-slate-400 hover:border-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold text-xl ' onClick={onTryAgain}>Try again</button>

                        {!showScore ? <div>
                            <h3 className='text-xl font-semibold mb-2'>Enter your name below <br /> to save your score</h3>

                            <div>
                                <input type='text' placeholder='Enter your Name' className='w-60 px-4 py-2 rounded-l-lg' value={resultName} onChange={(e) => setResultName(e.target.value)} />
                                <button className='px-4 py-2.5 text-white bg-black' onClick={handleSave}>Submit</button>
                            </div>
                        </div> :
                            <div>
                                <table className='flex gap-1 border-2 flex-col'>
                                    <thead className=''>
                                        <th>Ranking</th>
                                        <th>Name</th>
                                        <th>Results</th>
                                    </thead>
                                    <tbody >
                                        {highScore.map((score, i) => (
                                            <tr className='flex gap-4'>
                                                <td>{i + 1}</td>
                                                <td>{resultName}</td>
                                                <td>{score.score}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>}
                    </section>
                )}
        </div>

    )
}
export default QuizPage

