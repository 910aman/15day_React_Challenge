import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './ProductsList.css'

const PaginationComponent = ({ fetchData, axiosData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;
    const lastIndex = (currentPage) * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const records = axiosData.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(axiosData.length / itemsPerPage);
    const numbers = [...Array(totalPages + 1).keys()].slice(1)

    const prevDisabled = currentPage === 1;
    const nextDisable = currentPage === totalPages;

    useEffect(() => {
        fetchData();
    }, [currentPage]);



    const prevPage = () => {
        if (currentPage !== firstIndex && firstIndex !== 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div>

            <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-10 h-full max-h-fulloverflow-auto'>
                {records?.map((item, index) => (
                    <div className='w-full flex flex-col  bg-gray-50 pb-3 hover:-rotate-6 hover:scale-105 cursor-pointer select-none' key={index}>
                        <div className='w-full h-52 justify-center flex gallery mt-2'>
                            <img src={item.thumbnail} alt="Thumbnail Image" className='w-full bg-white' />
                        </div>
                        <div class="mt-4 px-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                        {item.title.length > 15 ? item.title.substr(0, 22) : item.title}
                                </h3>
                                <h4 class="mt-1 text-sm text-gray-500">{item.category}</h4>
                            </div>
                            <p class="text-sm font-medium text-gray-900">${item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-wrap gap-4 justify-center pt-10 items-end '>
                <button className={`flex text-xl items-center gap-2 px-3 py-1 rounded-lg w-full sm:w-fit justify-center ${prevDisabled ? "opacity-50 cursor-not-allowed bg-gray-200" : "cursor-pointer text-black bg-white font-semibold"}`} onClick={prevPage}>
                    <FaChevronLeft />
                    Prev
                </button>

                {numbers.map((page) => (
                    <button key={page} onClick={() => handlePageChange(page)} className={` px-3 rounded-md 
                    ${currentPage == page ? "relative z-10 inline-flex items-center bg-indigo-600 px-0 sm:px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                            : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset bg-white ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0"}`}>
                        {page}
                    </button>
                ))}

                <button className={`flex text-xl items-center gap-2 px-3 py-1 rounded-lg w-full sm:w-fit justify-center ${nextDisable ? "opacity-50 cursor-not-allowed bg-gray-200" : "cursor-pointer bg-white text-black font-semibold"}`} onClick={() => nextPage()}>
                    Next
                    <FaChevronRight />
                </button>
            </div>
        </div >
    );
};

export default PaginationComponent;

