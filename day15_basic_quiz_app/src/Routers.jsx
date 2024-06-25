

import QuizPage from './pages/QuizPage';
import { QuizData, Categories } from './data/CategoryData';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import "./App.css"
import HomePage from './components/HomePage';

import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

//     axios.get("https://644982a3e7eb3378ca4ba471.mockapi.io/questions")

function App() {

  const [categorySelect, setCategorySelect] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [filteredItems, setFilteredItems] = useState();

  useEffect(() => {
    if (categorySelect !== "") {
      const filteredData = QuizData.filter(data => data.category === categorySelect);
      setFilteredItems(filteredData);
    } else {
      setFilteredItems(QuizData);
    }
  }, [categorySelect]);

  return (
    <div className='container mx-auto bg-hero-background bg-no-repeat w-full bg-cover h-screen '>
      <BrowserRouter>
        <Header />
        <div className="justify-center items-center flex backdropBlur ">
          <Routes>
            <Route path='/' element={<Outlet />} >
              <Route path='/' element={<HomePage Categories={Categories} setCategorySelect={setCategorySelect} categorySelect={categorySelect} />} />
              <Route path='/quiz' element={<QuizPage filteredItems={filteredItems} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} />} />
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
