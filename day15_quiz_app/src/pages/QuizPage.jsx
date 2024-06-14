import React, { useState } from 'react'

const QuizPage = ({ quizData, loading }) => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const { question, choices, type, correctAnswer } = quizData[currentQuestion];
    const [answerIdx, setAnswerIdx] = useState(null)
    const [answer, setAnswer] = useState(false)

    const onAnswerClick = (answer, index) => {
        setAnswerIdx(index);
        if (answer === correctAnswer) {
            setAnswer(true)
        }
        else {
            setAnswer(false)
        }
    }

    return (
        <section className='h-96 max-w-3xl w-full shadow-3xl cursor-pointer border-2 text-blue-700 border-gray-300 flex flex-col gap-5 '>
            <div className='flex'>
                <span className='text-3xl font-bold text-gray-800'>
                    {currentQuestion + 1}
                </span>
                <span className='text-lg font-semibold gap-0.5 flex items-end '>
                    <p>/</p>
                    {quizData?.length}
                </span>
            </div>
            <div className=' flex gap-3 '>
                <p className='text-xl font-bold text-blue-700'>{currentQuestion + 1}.</p>
                <h2 className='font-semibold text-xl'>{question}</h2>
            </div>
            <ul className='grid grid-cols-2'>
                {choices?.map((choice, index) => (
                        <div key={index} onClick={() => onAnswerClick(choice, index)} className={answerIdx === index ? "" : null}>
                        {choice}
                    </div>
                ))}
            </ul>
            <div className=' max-w-3xl w-full shadow-3xl cursor-pointer text-white'>

            </div>
        </section>
    )
}
export default QuizPage