import ParticleDesign from './components/Particles_Design.jsx';
import RoutersPage from './routers/RoutersPage.jsx'

function App() {
  return (
    <div className='font-porfolio relative '>
      <RoutersPage />
      <div className='w-full h-screen absolute left-0 top-0 mix-blend-multiply opacity-80 brightness-90'>
        <ParticleDesign />
      </div>
    </div>
  );
}

export default App;
