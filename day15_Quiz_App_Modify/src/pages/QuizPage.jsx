/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { resultInitalState } from '../data/CategoryData';
import AnswerTimer from '../components/answerTimer/AnswerTimer';
import ResultComponent from '../components/ResultComponent';

const QuizPage = ({ currentQuestion, setCurrentQuestion, filteredItems }) => {
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [showResult, setShowResult] = useState(false);
    const [showAnswerTimer, setShowAnswerTimer] = useState(true);
    const [result, setResult] = useState(resultInitalState);
    const [highScore, setHighScore] = useState([]);
    const [showScore, setShowScore] = useState(false);
    const [resultName, setResultName] = useState('');

    const { incorrect_answers, category, question, correct_answer, type } = filteredItems[currentQuestion];

    const onAnswerClick = (ans) => {
        setSelectedAnswers({
            ...selectedAnswers,
            [currentQuestion]: ans
        });
    };

    const onClickNext = () => {
        setShowAnswerTimer(false);

        const finalAnswer = selectedAnswers[currentQuestion] === correct_answer;

        setResult(prevResult => finalAnswer
            ? {
                ...prevResult,
                score: prevResult.score + 5,
                correctAnswer: prevResult.correctAnswer + 1
            }
            : {
                ...prevResult,
                incorrectAnswers: prevResult.incorrectAnswers + 1
            });

        if (currentQuestion !== filteredItems.length - 1) {
            setCurrentQuestion(prev => prev + 1);
        } else {
            setCurrentQuestion(0);
            setShowResult(true);
        }

        setTimeout(() => {
            setShowAnswerTimer(true);
        });
    };

    const onTryAgain = () => {
        setSelectedAnswers({});
        setResult(resultInitalState);
        setShowResult(false);
        // setInputAnswer('');
        setResultName('');
    };

    const onHandleTimerUp = () => {
        setSelectedAnswers({});
        onClickNext();
    };

    const handleInputAns = (e) => {
        // setInputAnswer(e.target.value);
        if (e.target.value === correct_answer) {
            setSelectedAnswers({
                ...selectedAnswers,
                [currentQuestion]: e.target.value
            });
        } else {
            setSelectedAnswers({
                ...selectedAnswers,
                [currentQuestion]: e.target.value
            });
        }
    };

    const score = {
        name: resultName,
        score: result.score,
    };

    const handleSave = () => {
        if (highScore.length >= 3) {
            setHighScore([]);
            setShowScore(false);
            localStorage.setItem('highScore', JSON.stringify([]));
        } else {
            if (!score.name) {
                return;
            } else {
                const newHighScores = [...highScore, score].sort((a, b) => b.score - a.score);
                setHighScore(newHighScores);
                setShowScore(true);
                localStorage.setItem('highScore', JSON.stringify(newHighScores));
            }
        }
    };

    const handleTryAgain = () => {
        setShowScore(false);
        onTryAgain();
        // setSelectedAnswers(localStorage.setItem("userInput",JSON.stringify([])))
    };

    localStorage.setItem("userInput",JSON.stringify(selectedAnswers))
    useEffect(() => {
        setHighScore(JSON.parse(localStorage.getItem("highScore")) || []);
    }, []);

    const getAnswerUI = () => {
        if (type === "FIB") {
            return (
                <input
                    type='text'
                    placeholder='Enter Answer'
                    className='w-60 px-4 py-2 rounded-lg'
                    value={selectedAnswers[currentQuestion] || ''}
                    onChange={handleInputAns}
                />
            );
        }

        console.log("Quiz Data",selectedAnswers);
        return (
            <ul className='grid grid-cols-2 justify-center gap-x-20 gap-y-3'>
                {incorrect_answers?.map((choice, index) => (
                    <div
                        key={index}
                        onClick={() => onAnswerClick(choice)}
                        className={`flex min-w-72 max-w-full cursor-pointer text-2xl whitespace-pre-wrap px-6 py-5 justify-center rounded-lg ${selectedAnswers[currentQuestion] === choice ? " bg-gray-700 text-white " : 'bg-gray-100'}`}>
                        {choice}
                    </div>
                ))}
            </ul>
        );
    };

    return (
        <div className='max-w-3xl rounded-md px-2 py-4 my-20 w-full shadow-3xl border-2 bg-gradient-to-r from-[#ff7bb2] bg-[#5a8cee] text-blue-700 border-gray-300 flex flex-col gap-5 items-center'>
            {!showResult ? (
                <>
                    <span className='flex-1 flex items-center text-xl py-2 text-white'>
                        <div className='!font-bold'>
                            {category}&nbsp;Questions
                        </div>
                    </span>
                    <div className='h-fit px-5 flex flex-col gap-4'>
                        <div className='flex justify-end w-full'>
                            {showAnswerTimer && (<AnswerTimer duration={60} onTimeUp={onHandleTimerUp} />)}

                            <div className='flex flex-1 justify-end flex-row items-center'>
                                <span className='text-3xl font-bold text-gray-800'>
                                    {currentQuestion + 1}
                                </span>
                                <span className='text-2xl font-semibold gap-0.5 flex items-end'>
                                    <p>/</p>
                                    {filteredItems?.length}&nbsp;Ques
                                </span>
                            </div>
                        </div>
                        <div className=' flex gap-3 justify-center'>
                            <h2 className='text-3xl font-medium text-blue-700'>{currentQuestion + 1}.</h2>
                            <h2 className='font-medium text-3xl'>{question}</h2>
                        </div>
                        {getAnswerUI()}
                        <div className={`w-full flex justify-end`}>
                            <button
                                onClick={onClickNext}
                                className="flex text-2xl whitespace-nowrap px-6 py-2 justify-center rounded-lg bg-gray-800 text-white disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed"
                                disabled={!selectedAnswers[currentQuestion]}>
                                {currentQuestion === filteredItems.length - 1 ? "Finish" : "Next"}
                            </button>
                        </div>
                    </div>
                </>
            ) : (
                <section className='h-fit text-center max-w-3xl px-2 w-full shadow-3xl cursor-pointer py-3 text-blue-700 flex flex-col gap-5 items-center'>
                    <ResultComponent
                        category={category}
                        filteredItems={filteredItems}
                        result={result}
                        handleTryAgain={handleTryAgain}
                        showScore={showScore}
                        resultName={resultName}
                        setResultName={setResultName}
                        handleSave={handleSave}
                        score={score}
                        highScore={highScore}
                        selectAnswers={selectedAnswers}
                    />
                </section>
            )}
        </div>
    );
};

export default QuizPage;
