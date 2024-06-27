import React, { useEffect } from 'react'
import { Link, } from 'react-router-dom'
import ReacttoPdf from './pdf-convert/React-to-pdf';
import { PDFDownloadLink } from '@react-pdf/renderer';


const ResultComponent = ({ filteredItems, result, handleTryAgain, resultName, setResultName, handleSave, score, showScore, highScore, category }) => {

  return (
    <>
      <section className='h-fit text-center max-w-3xl px-2 w-full shadow-3xl cursor-pointer py-3 text-blue-700 flex gap-16 '>
        <div className='flex flex-col gap-5 items-center '>
          <h3 className='font-bold text-2xl'>
            Result
          </h3>
          <p className='font-bold text-lg'>
            Total Questions: <span className='text-xl italic'>{filteredItems.length}</span>
          </p>
          <p className='font-bold text-lg'>
            Total Score: <span className='text-xl italic'>{result.score}</span>
          </p>
          <p className='font-bold text-lg'>
            Correct Answers: <span className='text-xl italic'>{result.correctAnswer}</span>
          </p>
          <p className='font-bold text-lg'>
            Wrong Answers: <span className='text-xl italic'>{result.incorrectAnswers}</span>
          </p>
          {!showScore == false &&
            <>
              <Link to={"/"} className='px-4 py-2 rounded-md text-white bg-gradient-to-tl from-blue-800 via-50% to-slate-400 hover:border-2 border-blue-800 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-bold text-xl ' onClick={handleTryAgain}>Try again</Link>
              <PDFDownloadLink document={<ReacttoPdf category={category} score={score} result={result} items={filteredItems} />} fileName='QuizApp'>
                <button type='submit'
                  className="block w-fit rounded-md border-0 py-3 px-4 bg-gray-500 text-gray-100 text-lg font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-200 sm:leading-6">
                  Download
                </button>
              </PDFDownloadLink>
            </>
          }
        </div>
        {!showScore ? <div>
          <h3 className='text-xl font-semibold mb-2'>Enter your name below <br /> to save your score</h3>
          <div>
            <input type='text' placeholder='Enter your Name' className='w-60 px-4 py-2 rounded-l-lg' value={resultName} onChange={(e) => setResultName(e.target.value)} />
            <button className='px-4 py-2.5 rounded-r-lg text-white bg-black' onClick={handleSave}>Submit</button>
          </div>
        </div> :
          <div>
            <table table className="table-auto rwd-table">
              <tr className=''>
                <th className=''>Ranking</th>
                <th className=''>Name</th>
                <th className='px-2'>Results</th>
              </tr>
              {highScore.map((score, i) => (
                <tr key={i}>
                  <td className=''>{i + 1}</td>
                  <td className=''>{score.name}</td>
                  <td className='!flex items-center justify-center'>
                    <h4 className='font-medium text-lg'>{score.score}</h4>
                    <h2 className='font-medium text-base'>/{(filteredItems.length) * 5}</h2>
                  </td>
                </tr>
              ))}
            </table>
          </div>}
      </section >
    </>
  )
}

export default ResultComponent