import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import './HeroPage.css'
import { FaPlay } from 'react-icons/fa'
import portraitHero from '../assets/portraitHero.webp'

const HeroPage = () => {

  return (
    <section className='flex flex-col xl:flex-row h-screen lg:justify-between'>
      <div className='pt-10 lg:pt-32 flex flex-col px-8 pb-10  items-start  text-white select-none'>
        <h4 className='lg:text-4xl sm:text-2xl pt-2 lg:pt-8 flex flex-row sm:font-semibold text-lg font-medium whitespace-nowrap z-50 '>

          Hello!&nbsp;
          <p className="whitespace-nowrap text-gray-100" >
            <Typewriter
              words={['Developers,', 'Friends,', 'Everyone,']}
              loop={Infinity}
              cursor
              cursorStyle=''
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </p>
        </h4>
        <h1 className='lg:text-7xl sm:text-4xl flex flex-row sm:font-bold text-2xl font-semibold  whitespace-nowrap z-50'>

          I am &nbsp;
          <p className="whitespace-nowrap  text-red-500">
            <Typewriter
              words={['Aman Chauhan', 'React Developer']}
              loop={Infinity}
              cursor
              cursorStyle=''
              typeSpeed={150}
              deleteSpeed={100}
              delaySpeed={1000}
            />
          </p>
        </h1>

        <div className="video-play-btn ripple w-14 h-14 lg:w-32 lg:h-32 lg:mt-10  ">
          <a className='borderRadius cursor-pointer'>
            <FaPlay className='flex w-full h-full items-center  justify-center lg:ml-2 ml-1 p-3 lg:p-6 text-red-500' />
          </a>
        </div>
      </div>
      <div className='max-w-80 min-w-[100px]  w-full'>
        <img src={portraitHero} alt="Portrait Hero" />
      </div>
    </section>
  )
}

export default HeroPage