import React, { useState } from 'react'

import Banner from '../assets/banner.svg'
import { useNavigate } from 'react-router-dom';

const HomePage = ({ Categories, userName, setUserName, categorySelect, setCategorySelect,fetchQuestion }) => {

    // const difficultyCategory = [{ name: "Easy", value: "easy" },{ name: "Medium", value: "medium" },{ name: "Hard", value: "hard" }];
    // const [difficulty, setDifficulty] = useState("");
    const [category, setCategory] = useState([]);
    const [error, setError] = useState(false)
    // const { question, correct_answer, incorrect_answers, category, type } = QuizData[currentQuestion];
    const [filteredItems, setFilteredItems] = useState([]);
    const navigate = useNavigate();


    const handleCategoryData = (e) => {
        e.preventDefault();
        setCategorySelect(e.target.value);
        let tempData = Categories.filter((item) => item.category === categorySelect);
        setFilteredItems(tempData);
    }
    console.log("Temp data", filteredItems);


    const handleSubmit = () => {
        if (!userName || !categorySelect) {
            setError(true)
            return;
        }
        else {
            setError(false);
            navigate("/quiz", { state: { tempData: tempData }})
            console.log("Data",tempData);
        }
    }

    return (
        <div className='w-full flex h-fit py-10'>
            <div className="w-[50%] flex flex-col justify-start  backdrop-blur-sm">
                <p className='text-center font-semibold text-stone-900 text-3xl'>Quiz Settings</p>
                <div className='pt-10 flex flex-col gap-4 items-center '>
                    <input
                        type="text"
                        name="userName"
                        id="userName"
                        className="block w-[500px] rounded-md border-0 py-3 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                        placeholder="Enter your Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    />

                    <select
                        type="text"
                        name="category"
                        id="category"
                        className="block w-[500px] rounded-md border-0 py-4 pl-7  text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                        placeholder="Select Category"
                        value={categorySelect}
                        onChange={() => handleCategoryData()}
                    // onChange={(e) => setCategorySelect(e.target.value)}
                    >
                        {Categories.map((data, index) => (
                            <option key={index} value={data.category} >
                                {data.category}
                            </option>
                        ))}
                    </select>

                    {/* <select
                        type="text"
                        name="userName"
                        id="userName"
                        className="block w-[500px] rounded-md border-0 py-4 pl-7 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600  sm:leading-6"
                        placeholder="Select Difficulty"
                        value={difficulty}
                        onChange={(e) => setDifficulty(e.target.value)}
                    >
                        {difficultyCategory.map((difficult, index) => (
                            <option key={index} value={difficult.value}>
                                {difficult.name}
                            </option>
                        ))}
                    </select> */}
                    <button onClick={() => handleSubmit()}
                        type='submit'
                        className="block w-[500px] rounded-md border-0 py-3 pl-7 bg-gray-500 text-gray-100 text-xl  font-semibold ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:leading-6">
                        Start Quiz
                    </button>
                </div>
            </div>
            <div>
                <img src={Banner} alt="Banner Image" />
            </div>
        </div>
    )
}

export default HomePage