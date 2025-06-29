import React from 'react'
import Title from '../components/Title'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            id='Testimonials' className='w-full flex flex-col items-center pt-20 gap-15 px-10 md:px-20 lg:px-32'>
            <Title
                heading="Customer"
                highlight="Testimonials"
                paragraph="Real Stories from Those Who Found Home with Us"
            />

            <div className='flex justify-center flex-wrap gap-8 ' >
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className='max-w-[360px] px-8 py-10 md:px-10 md:py-12 gap-4 mb-8 border border-gray-200 shadow-md rounded-sm text-center'>
                        <img src={testimonial.image} alt={testimonial.alt} className='h-19 md:h-20 mb-4 mx-auto' />
                        <h1 className='text-xl md:text-2xl'>{testimonial.name}</h1>
                        <p className='text-gray-500 text-sm md:text-md mb-4'>{testimonial.title}</p>
                        <div className='mb-4'>
                            {Array.from({ length: testimonial.rating }, (item, index) => (
                                <img key={index} src={assets.star_icon} alt='Star' className='inline-block' />
                            ))}
                        </div>
                        <p className='text-gray-600 text-md md:text-lg leading-tighter'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </motion.div>
    )
}

export default Testimonials