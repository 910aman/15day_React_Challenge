

import QuizPage from './pages/QuizPage';
import { QuizData, Categories } from './data/CategoryData';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import HomePage from './components/HomePage';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';


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


  const fetchQuestion = async (category, difficulty) => {
    // await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
    await axios.get(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
      .then((res) => setQuestions(res.data.results));

    console.log(questions);
  }


  const [userName, setUserName] = useState("");
  const [questions, setQuestions] = useState([])
  const [categorySelect, setCategorySelect] = useState("");
  const [score,setScore] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(0);

  return (
    <div className='container mx-auto bg-hero-background bg-no-repeat w-full bg-cover  h-screen '>
      <BrowserRouter>
        <Header />
        <div className="justify-center backdrop-blur-sm items-center flex ">
          <Routes>
            <Route path='/' element={<Outlet />} >
              <Route path='/' element={<HomePage  userName={userName} setUserName={setUserName} categorySelect={categorySelect} setCategorySelect={setCategorySelect} fetchQuestion={fetchQuestion} />} />
              <Route path='/quiz' element={<QuizPage  userName={userName} quizData={QuizData} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
