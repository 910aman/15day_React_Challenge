import React from 'react'
import { Link } from 'react-router-dom'

const QuizComponent = ({ quizData, result, handleTryAgain, resultName, setResultName, handleSave, showScore, highScore }) => {
  return (
    <>
      <section className='h-fit text-center max-w-3xl px-2 w-full shadow-3xl cursor-pointer py-3 text-blue-700 flex gap-16 '>
        <div className='flex flex-col gap-5 items-center '>
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
          <Link to={"/quiz"} className='px-4 py-2 text-white bg-gradient-to-tl from-pink-400 to-slate-400 hover:border-2 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold text-xl ' onClick={handleTryAgain}>Try again</Link>
        </div>
        {!showScore ? <div>
          <h3 className='text-xl font-semibold mb-2'>Enter your name below <br /> to save your score</h3>

          <div>
            <input type='text' placeholder='Enter your Name' className='w-60 px-4 py-2 rounded-l-lg' value={resultName} onChange={(e) => setResultName(e.target.value)} />
            <button className='px-4 py-2.5 text-white bg-black' onClick={handleSave}>Submit</button>
          </div>
        </div> :
          <div>
            <table class="table-auto rwd-table">
              <tbody >
                <tr className=''>
                  <th className=''>Ranking</th>
                  <th className=''>Name</th>
                  <th className=''>Results</th>
                </tr>
                {/* </thead> */}
                {highScore.map((score, i) => (
                  <tr>
                    <td className=''>{i + 1}</td>
                    <td className=''>{score.name}</td>
                    <td className=''>{score.score}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>}
      </section >
    </>
  )
}

export default QuizComponent