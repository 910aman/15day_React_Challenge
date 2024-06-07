import React from 'react'
import Tag from './Tag'
import './TaskCard.css'
import deleteIcon from '../assets/delete.png';
const TaskCard = ({ tags, title, handleDelete, index, setActiveCard }) => {

    return (
        <article className='taskCard cursor-grab border border-[#dcdcdc] rounded-md p-3 mb-3' draggable onDragStart={() => setActiveCard(index)} onDragEnd={() => setActiveCard(null)}>
            <p className='text-xl font-bold pb-3 '>
                {title}
            </p>
            <div className='flex justify-between items-center pr-2 font-semibold'>
                <div className=' flex gap-4 '>
                    {tags.map((tag, index) => <Tag key={index} tagName={tag} selected={true} />)}
                </div>
                <div className='w-10 flex  justify-end flex-1'  >
                    <img src={deleteIcon} alt='Delete Icon' className='w-6 opacity-50 transition-transform ease-in-out duration-300 cursor-pointer hover:text-[#9b9595] hover:opacity-80' onClick={() => handleDelete(index)} />
                </div>
            </div>

        </article>
    )
}

export default TaskCard