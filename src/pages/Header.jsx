import React from 'react'
import Navbar from '../components/Navbar'
import { motion } from "framer-motion";

const Header = () => {

    return (
        <div id='Header'
            className='h-screen w-full bg-cover bg-center overflow-hidden'
            style={{ backgroundImage: "url('/header_img.png')" }}
        >
            <Navbar />
            <motion.div
            initial={{ opacity: 0, y:100 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}

            className='flex flex-col items-center justify-center h-full gap-8 text-white text-center'>
                <h2 className='text-4xl md:text-7xl font-medium md:font-semibold mx-auto px-6'>Explore homes that fit your dreams</h2>
                <div className='flex list-none gap-4 md:gap-6'>
                    <li className='px-6 text-sm  md:text-lg md:px-8 py-2 rounded-sm border'>Projects</li>
                    <li className='px-6 md:px-8 text-sm md:text-lg py-2 rounded-sm bg-blue-500 text-white'>Contact Us</li>
                </div>
            </motion.div>
        </div>
    )
}

export default Header
