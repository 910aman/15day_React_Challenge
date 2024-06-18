import React, { useEffect, useState } from 'react'

const Timer = ({progressLoad,duration}) => {

    const [minutes,] = useState(0);
    const [seconds, setSeconds] = useState(60);
    
    var timer;
    useEffect(() => {
        timer = setInterval(() => {
            setSeconds(prev => prev - 1);
        }, 1000);
        return () => clearInterval(timer)
    }, [seconds])

    return (
        <div>
            <h1 className="text-3xl font-medium" style={{width: `${progressLoad}%`, color: `${progressLoad < 35 ? "lightgreen" : progressLoad < 70 ? "orange" : "red"}`}}>{minutes < 10 ? "0" + minutes : minutes}:{duration < 10 ? "0" + duration : duration}</h1>
        </div>
    )
}

export default Timer