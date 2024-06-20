import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Skeleton from 'react-loading-skeleton';

const PaginationComponent = ({ fetchData, axiosData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15;
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

            <div className='grid grid-cols-5 gap-5 '>
                {records?.map((item, index) => (
                    <div className='w-full flex flex-col  bg-gray-50 py-2' key={index}>
                        <div className='w-full justify-center flex'>
                            <img src={item.thumbnail} alt="Thumbnail Image" className='w-48 bg-white' />
                        </div>
                        <div class="mt-4 px-4 flex justify-between">
                            <div>
                                <h3 class="text-sm text-gray-700">
                                    <a>
                                        <span aria-hidden="true" class="absolute inset-0"></span>
                                        {item.title.length > 15 ? item.title.substr(0, 22) : item.title}
                                    </a>
                                </h3>
                                <h4 class="mt-1 text-sm text-gray-500">{item.category}</h4>
                            </div>
                            <p class="text-sm font-medium text-gray-900">{item.price}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className='flex flex-row gap-4 justify-center pt-4'>
                <button className={`flex text-xl items-center gap-2  ${prevDisabled ? "opacity-50 cursor-not-allowed" : "text-black font-semibold"}`} onClick={prevPage}>
                    <FaChevronLeft />
                    Prev
                </button>

                {numbers.map((page) => (
                    <button key={page} onClick={() => handlePageChange(page)} className={` px-3 rounded-md 
                    ${currentPage == page ? "relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                            : "relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset bg-white ring-gray-300 hover:bg-gray-200 focus:z-20 focus:outline-offset-0"}`}>
                        {page}
                    </button>
                ))}

                <button className={`flex text-xl items-center gap-2 ${nextDisable ? "opacity-50 cursor-not-allowed" : "text-black font-semibold"}`} onClick={nextPage}>
                    Next
                    <FaChevronRight />
                </button>
            </div>
        </div >
    );
};

export default PaginationComponent;

