import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MapboxPage from './components/MapboxPage';
import EmbeddedMap from './components/EmbeddedMap';
import HomePage from './page/HomePage';
import MarkerGoogleMap from './components/MarkerGoogleMap';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='/staticMap' element={<MapboxPage/>} />
          <Route path='/markerMap' element={<EmbeddedMap/>} />
          <Route path='/googleMarkUp' element={<MarkerGoogleMap/>} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
