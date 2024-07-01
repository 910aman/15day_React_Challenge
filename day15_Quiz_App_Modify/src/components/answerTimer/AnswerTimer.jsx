import React, { useEffect, useRef, useState } from 'react'

const AnswerTimer = ({ onTimeUp }) => {

    const duration = 0;
    const [counter, setCounter] = useState(59);
    
    const intervalRef = useRef();
    const [minutes,] = useState(0);


    useEffect(() => {
        var timer = setTimeout(() => setCounter(counter - 1), 1000);
        return () => clearInterval(timer);
    }, [counter]);

    useEffect(() => {

        if (counter === duration) {
            clearInterval(intervalRef.current);

            setTimeout(() => {
                onTimeUp();
            }, 1000)
        }
    }, [counter])



    return (
        <div className='relative mt-0 ml-0'>
            <p className="text-3xl font-medium bg-gray-50 px-4 py-2 rounded-lg" >Time Left&nbsp;
                <span className='bg-blue-400 px-2 rounded-lg tracking-wider'>{minutes < 10 ? "0" + minutes : minutes}:{counter < 10 ? "0" + counter : counter}</span>
            </p>

        </div>
    )
}

export default AnswerTimer