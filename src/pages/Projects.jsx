import React, { useEffect, useState } from 'react'
import Title from '../components/Title'
import { assets, projectsData } from '../assets/assets'
import { motion } from "framer-motion";

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cardsToShow, setCardsToShow] = useState(1)

  const totalCards = projectsData.length

  // Detect screen size to set how many cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setCardsToShow(3)
      } else if (window.innerWidth >= 768) {
        setCardsToShow(2)
      } else {
        setCardsToShow(1)
      }
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = totalCards - cardsToShow

  const nextProject = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + cardsToShow))
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - cardsToShow))
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      id='Projects' className='min-h-screen w-full flex flex-col items-center pt-20 md:pt-45 lg:pt-45 xl:pt-50 2xl:pt-30 gap-6 px-6 md:px-20 lg:px-32'>

      <Title
        heading='Projects'
        highlight='Completed'
        paragraph='Crafting Spaces, Building Legacies—Explore Our Portfolio'
      />

      {/* Navigation Buttons */}
      <div className='flex gap-2 w-full justify-end pr-4 pt-5'>
        <button
          onClick={prevProject}
          className='p-3 md:p-3.5 bg-gray-200 rounded-sm'
          aria-label='Previous Project'
        >
          <img src={assets.left_arrow} alt='Previous' />
        </button>
        <button
          onClick={nextProject}
          className='p-3 md:p-3.5 bg-gray-200 rounded-sm'
          aria-label='Next Project'
        >
          <img src={assets.right_arrow} alt='Next' />
        </button>
      </div>

      {/* Slider */}
      <div className='w-full overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{
            width: `${(100 / cardsToShow) * totalCards}%`,
            transform: `translateX(-${(100 / totalCards) * currentIndex}%)`,
          }}
        >
          {projectsData.map((project, index) => (
            <div
              key={index}
              className='flex-shrink-0 px-4'
              style={{
                width: `${100 / totalCards}%`,
              }}
            >
              <div className='relative w-full'>
                <img
                  className='w-full h-auto mb-14 rounded-lg shadow'
                  src={project.image}
                  alt={project.title}
                />
                <div className='absolute right-0 left-0 bottom-5 flex justify-center'>
                  <div className='bg-white inline-block w-70 px-6 py-3 shadow-md'>
                    <h2 className='text-xl font-semibold text-gray-800'>
                      {project.title}
                    </h2>
                    <p className='text-gray-500 text-sm'>
                      {project.price} <span className='px-1'>|</span> {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default Projects
