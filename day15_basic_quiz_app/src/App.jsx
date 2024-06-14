

import QuizPage from './pages/QuizPage';
import { quizData } from './data/QuizData';
import { useEffect, useState } from 'react';
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

  return (
    <div className="container mx-auto justify-center items-center h-screen flex bg-gradient-to-r from-[#f86ca7] bg-[#a7bdea] ">
      <QuizPage quizData={quizData } />
    </div>
  );
}

export default App;
