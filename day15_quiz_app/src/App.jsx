
import { useEffect, useState } from 'react';
import QuizPage from './pages/QuizPage';
import axios from 'axios';
import { quizData } from './data/QuizData';
function App() {

  const [callQuizData, setCallQuizData] = useState([]);
  const [loadingData, setLoadingData] = useState(false)

  // useEffect(() => {
  //   const getQuiz = async () => {
  //     setLoadingData(true)
  //     axios.get("https://644982a3e7eb3378ca4ba471.mockapi.io/questions")
  //       .then((response) => setCallQuizData(response.data))
  //       .catch((err) => setCallQuizData(err));
      
  //   }
  //   getQuiz()
  // }, [callQuizData])


  return (
    <div className="container mx-auto justify-center items-center h-screen flex bg-gradient-to-r from-[#f86ca7] bg-[#a7bdea] ">
      <QuizPage quizData={quizData} loading={loadingData} />
    </div>
  );
}

export default App;
