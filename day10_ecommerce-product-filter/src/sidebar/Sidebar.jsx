import React from 'react'
import { CgShoppingCart } from 'react-icons/cg'
import ColorComponents from './components/ColorsComponent'
import PriceComponents from './components/PriceComponent'
import CategoryComponent from './components/CategoryComponent'


const Sidebar = ({handleChange}) => {
    return (
        <section className='flex-1 flex z-30 flex-col items-start pl-14'>
            <div>
                <h1 className='text-xl fontmedium mt-10 mb-16'>🛒</h1>
            </div>

            <CategoryComponent handleChange={handleChange} />
            <PriceComponents handleChange={handleChange}/>
            <ColorComponents handleChange={handleChange}/>
        </section>
    )
}

export default Sidebar