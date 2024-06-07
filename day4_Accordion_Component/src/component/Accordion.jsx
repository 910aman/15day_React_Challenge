import './Accordion.css'
import React, { useRef, } from 'react'
import { FaChevronDown } from "react-icons/fa";

const Accordion = (props) => {
    const { handleToggle, activeAcc, faqValue } = props;
    const { header, id, text } = faqValue;
    const contentRef = useRef();
    

    return (

        <div className='border-2 border-[#ddd] rounded-md overflow-hidden mb-20 last:mb-0 my-1'>
           <div className=''>
            <div className={` ${activeAcc === id ? "active bg-[#9a8dee]" : "bg-white"} flex flex-1 justify-between items-center py-2 px-4  cursor-pointer`} onClick={() => handleToggle(id)}>
               
                    <h5>{header}</h5>
                    <FaChevronDown className={` ${activeAcc === id ? "rotate-180 transition-all duration-500" : "rotate-0 transition-all duration-500"}`}  />
                </div>
            </div>
            <div ref={contentRef} className={`px-4 text-xl  ${activeAcc === id ? "show" : ""}`}
                style={activeAcc === id ? { height: contentRef.current.scrollHeight } : { height: "0px" }}>
                <div>
                    <p >
                        {text}
                        
                    </p>
                </div>

            </div>
        </div>
    )
}

export default Accordion