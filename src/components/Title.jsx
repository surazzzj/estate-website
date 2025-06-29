import React from 'react'

const Title = ({ heading, highlight, paragraph }) => {
    return (
        <div className='flex flex-col items-center gap-4'>
            <h2 className='text-2xl md:text-4xl lg:text-5xl font-semibold mx-auto'>{heading}<span className='font-light underline underline-offset-4 decoration-1 ml-2'>{highlight}</span></h2>
            <p className='text-gray-600 text-md md:text-lg w-80 text-center'>{paragraph}</p>
        </div>
    )
}

export default Title