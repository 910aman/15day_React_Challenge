
import Carousel_01 from './components/Carousel_01/Carousel.jsx'
import Carousel_02 from './components/Carousel_02/Carousel.jsx'
import HomePage from './components/HomePage.jsx'
import Navbar from './components/Navbar.jsx'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'



function App() {

  return (
    <div className='container mx-auto font-myFonts'>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/first-carousel' element={<Carousel_01 />} />
            <Route path='/second-carousel' element={<Carousel_02 />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
