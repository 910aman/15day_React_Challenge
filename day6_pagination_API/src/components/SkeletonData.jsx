import React from 'react'
import SkeletonPage from './SkeletonPage'

const SkeletonData = () => {
    return (
        <div className=' gap-4 justify-center grid grid-cols-5'>
            <SkeletonPage />
            <SkeletonPage />
            <SkeletonPage />
            <SkeletonPage />
            <SkeletonPage />
            <SkeletonPage />
            <SkeletonPage />
            <SkeletonPage />
            <SkeletonPage />
            <SkeletonPage />
        </div>
    )
}

export default SkeletonData