import React from 'react'
import { assets } from '../assets/assets'
import Title from '../components/Title'
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
    initial={{ opacity: 0, x: 200 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  viewport={{ once: true, amount: 0.4 }} 

      id='About' className='min-h-screen md:h-screen w-full flex flex-col items-center pt-20 gap-3'>

      <Title
        heading="About"
        highlight="Our Brand"
        paragraph="Passionate About Properties, Dedicated to Your Vision"

      />

      <div className='flex flex-col px-10 lg:flex-row gap-4 md:gap-25 mt-10 lg:pr-35'>
        <img className='max-w-lg lg:max-w-xl w-full' src={assets.brand_img} alt="" />
        <div className='flex flex-col gap-12 items-start'>
          <div className='grid grid-cols-2 gap-6 md:gap-12 mt-8'>
            <div className=''>
              <p className='text-4xl md:text-5xl font-regular'>10+</p>
              <p className='text-gray-600'>Years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl md:text-5xl font-regular'>12+</p>
              <p className='text-gray-600'>Projects Completed</p>
            </div>
            <div>
              <p className='text-4xl md:text-5xl font-regular'>20+</p>
              <p className='text-gray-600'>Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl md:text-5xl font-regular'>25+</p>
              <p className='text-gray-600'>Ongoing Projects</p>
            </div>
          </div>
          <p className='max-w-lg text-gray-600'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
          <button className='px-8 md:px-9 py-2 bg-blue-600 text-white text-md md:text-lg rounded-md mx-auto md:mx-0'>Learn more</button>
        </div>
      </div>
    </motion.div>
  )
}

export default About