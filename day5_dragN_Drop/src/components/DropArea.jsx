import React, { useState } from 'react'

const DropArea = ({ onDrop }) => {
    const [showDrop, setShowDrop] = useState(false)
    return (
        <section
            onDragEnter={() => setShowDrop(true)}
            onDragLeave={() => setShowDrop(false)}
            onDrop={() => {
                onDrop();
                setShowDrop(false);
            }}
            onDragOver={(e) => e.preventDefault()}
            className={showDrop ? 'flex justify-center items-center text-xl  w-full h-[100px] col-auto border border-dashed border-[#dcdcdc] rounded-md p-3 mb-3 transition-transform duration-300 ease-in-out' : "opacity-0 "}>

            DropArea
        </section>
    )
}

export default DropArea