import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Pagination } from 'flowbite-react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const PaginationComponent = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const lastIndex = (currentPage) * itemsPerPage;
    const firstIndex = lastIndex - itemsPerPage;
    const records = data.slice(firstIndex, lastIndex);
    const totalPages = Math.ceil(data.length / itemsPerPage);
    const numbers = [...Array(totalPages + 1).keys()].slice(1)

    const prevDisabled = currentPage === 1;
    const nextDisable = currentPage === totalPages;

    useEffect(() => {
        fetchData();
    }, [currentPage]);

    const fetchData = async () => {
        try {
            const response = await axios.get('https://dummyjson.com/products?limit=100');
            setData(response.data.products);

        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const prevPage = () => {
        if (currentPage !== firstIndex && firstIndex !== 0 ) {
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
        <div className='bg-green-100 py-4 px-2 container mx-auto'>

            <div className='grid grid-cols-4 gap-5 '>
                {records.map((item, index) => (
                    <ul className='w-full flex flex-col ' key={index}>
                        <div className='w-full justify-center flex'>
                            <img src={item.thumbnail} alt="Thumbnail Image" className='w-52 bg-white' />
                        </div>
                        <li key={item.id} className='flex justify-center'>{item.title}</li>

                    </ul>
                ))}
            </div>
            <div className='flex flex-row gap-4 justify-center pt-4'>

                <button className={`flex text-xl items-center gap-2  ${prevDisabled ? "opacity-50 cursor-not-allowed" :"text-black font-semibold"}`} onClick={prevPage}>
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

                <button className={`flex text-xl items-center gap-2 ${nextDisable ? "opacity-50 cursor-not-allowed" :"text-black font-semibold"}`} onClick={nextPage}>
                    Next
                    <FaChevronRight />
                </button>
            </div>
        </div >

    );
};

export default PaginationComponent;

