import React from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
const HomePage = () => {
    return (
        <div className='main-container homePage container mx-auto'>
            <Link className='Link' to={"/staticMap"} >
                Static Map
            </Link>
            <Link className='Link' to={"/markerMap"}>
                Marker Map
            </Link>
            <Link className='Link' to={"/googleMarkUp"}>
                Google Marker Map
            </Link>

        </div >
    )
}

export default HomePage