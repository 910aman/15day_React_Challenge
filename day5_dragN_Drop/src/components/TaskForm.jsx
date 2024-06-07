import React, { useState } from 'react'
import Tag from './Tag'

const TaskForm = ({ setCreateTask }) => {
    const [savedData, setSavedData] = useState({
        taskInput: "",
        status: "todo",
        tags: []
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSavedData((prev) => { return { ...prev, [name]: value } })
    }

    const checkTag = (tag) => {
        return savedData.tags.some((item) => item === tag)
    }

    const selectTags = (tag) => {
        if (savedData.tags.some((item) => item === tag)) {
            const filterTags = savedData.tags.filter((item) => item !== tag)
            setSavedData((prev) => {
                return { ...prev, tags: filterTags };
            });
        }
        else {
            setSavedData((prev) => {
                return { ...prev, tags: [...prev.tags, tag] }
            })
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        setCreateTask((prev) => {
            return [...prev, savedData]
        })

        setSavedData({
            taskInput: "",
            status: "todo",
            tags: []
        })
    }

    return (
        <div className="py-10 border-b border-[#d1d0d1]">
            <form onSubmit={handleSubmit} >

                <div className='flex flex-col items-center w-full'>
                    <input className='px-4 py-2 w-[600px] text-lg rounded-md border-[#8581b4] border-2'
                        name='taskInput'
                        type='text'
                        value={savedData.taskInput}
                        onChange={handleChange}
                        placeholder='Enter your task' />
                </div>
                <div className='flex gap-4 justify-center mt-4'>
                    <div className='flex gap-4'>
                        <Tag tagName="HTML" selectTags={selectTags} selected={checkTag("HTML")} />
                        <Tag tagName="CSS" selectTags={selectTags} selected={checkTag("CSS")} />
                        <Tag tagName="Javascript" selectTags={selectTags} selected={checkTag("Javascript")} />
                        <Tag tagName="ReactJS" selectTags={selectTags} selected={checkTag("ReactJS")} />
                    </div>

                    <div>
                        <select name='status'
                            value={savedData.status}
                            onChange={handleChange} className=' py-2 text-lg rounded-md border-[#8581b4] border-2'>
                            <option value="todo">To do</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                    </div>
                    <button type='submit' className='text-lg bg-blue-700 text-[#f0e9e9] border-[#8581b4] border px-4 flex items-center rounded-md'>
                        + Add Task
                    </button>

                </div>
            </form>
        </div>
    )
}

export default TaskForm