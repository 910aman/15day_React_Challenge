import React, { useState } from 'react'
import { AsyncPaginate } from "react-select-async-paginate";
import { GEO_API_URL, geo_Api_Options } from '../api/ApiCall';

const SearchPage = ({ onSearchChange }) => {

    const [search, setSearch] = useState(null);

    const loadOptions = async(inputValue) => {
        return await fetch(`${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}`, geo_Api_Options)
            .then((response) => response.json())
            .then((response) => {
                return {
                    options: response.data.map((city) => {
                        return {
                            value: `${city.latitude} ${city.longitude}`,
                            label: `${city.name}, ${city.countryCode}`,
                        };
                    }),
                };
            });
    };
    const handleSearch = (searchData) => {
        setSearch(searchData);
        onSearchChange(searchData);
    }


    return (
        <>
            <div className='flex justify-center w-full py-2'>
                <AsyncPaginate placeholder='Search your City!' debounceTimeout={600} value={search} onChange={handleSearch} loadOptions={loadOptions} className="w-1/2 px-5 pt-3 " />
            </div>
        </>
    )
}

export default SearchPage