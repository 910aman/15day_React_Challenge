import React, { useEffect, useRef, useState } from 'react'

const AnswerTimer = ({ duration,onTimeUp }) => {

    const [counter, setCounter] = useState(0);
    const [progressLoad, setProgressLoad] = useState(0);
    const intervalRef = useRef();
    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setCounter((curr) => curr + 1)
        }, 1000)

        return () => clearInterval(intervalRef.current);

    }, [])

    useEffect(() => {
        setProgressLoad(100 * (counter / duration))

        if (counter === duration) {
            clearInterval(intervalRef.current);

            setTimeout(() => {
                onTimeUp();
            },1000)
        }
    }, [counter])

    return (
        <div className='relative mt-0 ml-0 w-full border border-b-gray-500'>
            <div className='absolute h-0.5 ease-linear duration-[1100ms] w-0 bg-red-500' style={{width: `${progressLoad}%`, backgroundColor: `${progressLoad < 35 ? "lightgreen" : progressLoad < 70 ? "orange" : "red"}`}}>

            </div>
        </div>
    )
}

export default AnswerTimer