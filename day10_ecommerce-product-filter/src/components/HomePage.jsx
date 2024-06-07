import React from 'react'
import Products from '../product/Products.jsx'
import Recommended from '../recommended/Recommended.jsx'

const HomePage = ({handleButton,result}) => {
    return (
        <div className=' overflow-y-auto h-[90vh]'>
            <Recommended handleButton={handleButton}/>
            <Products result={result}/>
            {/* <Products />
            <Products />
            <Products /> */}
        </div>
    )
}

export default HomePage