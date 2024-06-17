

import QuizPage from './pages/QuizPage';
import { quizData } from './data/QuizData';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import QuizMainPage from './components/HomePage';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import axios from 'axios';

function App() {

  // const [callQuizData, setCallQuizData] = useState([])
  // const getQuestion = () => {
  //   try{
  //     axios.get("https://644982a3e7eb3378ca4ba471.mockapi.io/questions")
  //     .then((response) => setCallQuizData(response.data))
  //     .catch((err) => setCallQuizData(err));
  //   } catch(err) {
  //     console.log("Solve this error ",err);
  //   }
  // }

  // useEffect(() => {
  //   getQuestion();
  // }, [])

  const [userName, setUserName] = useState("");
  const [questions, setQuestions] = useState()
  const [score, setScore] = useState(0)

  const fetchQuestion = async (category = "", difficulty = "") => {
    const { response } = await axios.get(`https://opentdb.com/api.php?amount=10${
        category && `&category=${category}`
      }${difficulty && `&difficulty=${difficulty}`}&type=multiple`)

    console.log(response);
  }



  return (
    <div className='container mx-auto bg-hero-background bg-no-repeat w-full bg-cover  h-screen '>
      <BrowserRouter>
        <Header />
        <div className="justify-center h-full backdrop-blur-sm items-center flex ">
          <Routes>
            <Route path='/' element={<Outlet />} >
              <Route path='/' element={<QuizMainPage quizData={quizData} userName={userName} setUserName={setUserName} fetchQuestion={fetchQuestion} />} />
              <Route path='/quiz' element={<QuizPage quizData={quizData} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>

    </div>
  );
}

export default App;
