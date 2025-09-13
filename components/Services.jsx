import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion, AnimatePresence } from "motion/react"

const Services = ({isDarkMode}) => {
  const [selectedService, setSelectedService] = useState(null);

  const openModal = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  return (
    <motion.div 
    initial={{ opacity: 0 }} 
    whileInView={{ opacity: 1 }} 
    transition={{ duration: 1 }}
    id="services" className='w-full px-[12%] py-10 scroll-mt-20'>

       <motion.h4 
       initial={{ y: -20, opacity: 0 }} 
       whileInView={{ y: 0, opacity: 1 }} 
       transition={{ delay: 0.3, duration: 0.5 }}
       className='text-center mb-2 text-lg font-Ovo'>
       What I offer</motion.h4>

      <motion.h2 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
      My Services</motion.h2>

      <motion.p 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        I am a Full Stack Developer from Bhopal, India with experience 
        in Frontend Development, Backend Systems, and Modern Web Technologies with Open Source contributions.</motion.p>

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className='grid grid-cols-auto gap-6 my-10'>
            {serviceData.map((service, index)=>(
                <motion.div 
                whileHover={{scale: 1.05}}
                key={index}
                className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white astro-hover-card'>
                    <Image src={service.icon} alt='' className='w-10'/>
                    <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{service.title}</h3>
                    <p className='text-sm text-gray-600 leading-5 dark:text-white/80 line-clamp-3'>
                        {service.description}
                    </p>
                    <button 
                      onClick={() => openModal(service)}
                      className='flex items-center gap-2 text-sm mt-5 text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 astro-hover-link'>
                        Read more <Image alt='' src={assets.right_arrow} className='w-4'/>
                    </button>
                </motion.div>
            ))}
        </motion.div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4'
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className='bg-lightHover dark:bg-darkHover rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-200 dark:border-white/10'
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className='flex items-center justify-between p-6 border-b border-gray-200 dark:border-white/10'>
                  <div className='flex items-center gap-4'>
                    <Image src={selectedService.icon} alt='' className='w-12 h-12'/>
                    <h2 className='text-2xl font-bold text-gray-800 dark:text-white'>{selectedService.title}</h2>
                  </div>
                  <button
                    onClick={closeModal}
                    className='text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300'
                  >
                    <svg className='w-4 h-4' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                    </svg>
                  </button>
                </div>

                {/* Modal Content */}
                <div className='p-6'>
                  <div className='mb-6'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-3'>Service Overview</h3>
                    <p className='text-gray-700 dark:text-gray-200 leading-relaxed'>
                      {selectedService.detailedDescription}
                    </p>
                  </div>

                  <div className='mb-6'>
                    <h3 className='text-lg font-semibold text-gray-800 dark:text-white mb-3'>Technologies & Skills</h3>
                    <div className='flex flex-wrap gap-2'>
                      {selectedService.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className='px-3 py-1 rounded-full text-sm font-semibold border bg-blue-100/80 text-blue-800 border-blue-200 dark:bg-blue-500/15 dark:text-blue-200 dark:border-blue-500/30 shadow-sm'
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className='flex gap-4 pt-4 justify-end'>
                    <button
                      onClick={closeModal}
                      className='px-4 py-2 text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 border border-gray-200 dark:border-white/10 rounded-lg transition-colors duration-300 font-medium'
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

    </motion.div>
  )
}

export default Services