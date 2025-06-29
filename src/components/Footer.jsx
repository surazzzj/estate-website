import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <div className='bg-[#111827] text-gray-400 text-lg flex flex-col gap-4 py-8 px-4 md:py-8'>
            <div className='flex flex-col md:flex-row justify-between items-start gap-7 md:items-center w-full mb-2 px-2 md:px-45'>
                <div className='flex flex-col justify-start items-start md:p-10 gap-4 md:w-2/5'>
                    <img className='h-9 md:h-12' src={assets.logo_dark} alt="" />
                    <p className='text-[15px] md:text-md'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.</p>
                </div>

                <div className='flex flex-col gap-1.5 md:gap-0'>
                    <h2 className='text-white font-medium md:font-semibold text-lg md:text-xl mb-4'>Company</h2>
                    <a href="#Header" className='hover:text-white text-[15px]'>Home</a>
                    <a href="#About" className='hover:text-white text-[15px]'>About us</a>
                    <a href="#Contact" className='hover:text-white text-[15px]'>Contact us</a>
                    <a href="#Header" className='hover:text-white text-[15px]'>Privacy policy</a>
                </div>

                <div className='flex flex-col gap-2 mb-4'>
                    <h2 className='text-white font-medium md:font-semibold text-lg md:text-xl mb-4'>Subscribe to our newsletter</h2>
                    <p className='text-[15px] md:text-md'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <div className='flex gap-4'>
                        <input className='bg-gray-800 text-gray-300 w-full px-4 rounded-md py-2 text-[15px] md:text-md' placeholder='Enter your email' type="text" />
                        <button className='px-4 text-[15px] py-1 md:px-6 md:py-2 bg-blue-500 text-white rounded-md'>Subscribe</button>
                    </div>
                </div>

            </div>
            <div className='w-full md:w-5/6 h-[1px] bg-gray-600 text-center mx-auto'></div>
            <p className='text-gray-500 text-center text-sm md:text-lg'>Copyright 2024 © GreatStack. All Right Reserved.</p>
        </div>
    )
}

export default Footer