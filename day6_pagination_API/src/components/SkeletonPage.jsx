import React from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonPage = () => {
    return (
        <SkeletonTheme baseColor="#202020" highlightColor="#444" >
            <div className='flex w-60 ' >
                <div className='w-full py-2'>
                    <div className='justify-center h-32 flex flex-col w-full'>
                    <Skeleton  height={120} />
                    </div>
                    <p className='flex flex-col justify-center mt-2'> <Skeleton count={2}/></p>

                </div>
            </div>
        </SkeletonTheme>

    )
}

export default SkeletonPage