import { assets, serviceData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const Services = () => {  return (
    <div id="services" className="w-full px-4 sm:px-6 lg:px-8 py-3 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">        <motion.div
          className="absolute top-10 -left-10 w-24 h-24 bg-gradient-to-r from-blue-400/6 to-purple-400/6 rounded-full blur-xl"animate={{
            x: [0, 60, 0],
            y: [0, -30, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />        <motion.div
          className="absolute top-32 -right-10 w-24 h-24 bg-gradient-to-r from-purple-400/6 to-pink-400/6 rounded-full blur-xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 30, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>      <div className="w-full max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >          <motion.h4
            className="text-lg font-Ovo text-purple-600 dark:text-purple-400 mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            What I Offer
          </motion.h4>          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-Ovo font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-500 to-pink-600 dark:from-blue-400 dark:via-purple-300 dark:to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient">
              My Services
            </span>
          </motion.h2>
            <motion.div            className="w-16 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-3"            initial={{ width: 0 }}
            whileInView={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />
            <motion.p
            className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I am a <span className="text-purple-600 dark:text-purple-400 font-semibold">Game & Backend Developer</span> from 
            Uttar Pradesh, India with expertise in creating immersive gaming experiences, 
            robust backend systems, and contributing to open source projects.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="flex flex-row gap-4 justify-center items-stretch"
        >
          {serviceData.map(({ icon, title, description, link }, index) => (            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="group relative flex-1 min-w-0"
            >
              {/* Card Background with Glassmorphism */}
              <div className="relative h-full p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden">
                
                {/* Hover Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Floating Elements */}                <motion.div
                  className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-purple-400/5 to-blue-400/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon Container */}                  <motion.div
                    className="relative mb-4"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-16 h-16 p-3 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-xl shadow-lg group-hover:shadow-purple-500/25 transition-all duration-300">
                      <Image 
                        src={icon} 
                        alt={title}
                        className="w-full h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                      />
                    </div>                    
                    {/* Glowing Ring */}
                  </motion.div>

                  {/* Content */}
                  <div className="flex-1 space-y-3">
                    <motion.h3
                      className="text-lg font-Ovo font-semibold text-gray-800 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {title}
                    </motion.h3>
                    
                    <motion.p
                      className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {description}
                    </motion.p>
                  </div>

                  {/* Read More Link */}                  <motion.div
                    className="mt-4 pt-3 border-t border-gray-200/20 dark:border-gray-700/20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.a
                      href={link}
                      className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300 group/link"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span>Explore More</span>
                      <motion.div
                        whileHover={{ x: 3 }}
                        transition={{ duration: 0.2 }}
                      >                        <Image 
                          src={assets.right_arrow} 
                          alt="arrow"
                          className="w-4 h-4 group-hover/link:brightness-110 transition-all duration-300"
                        />
                      </motion.div>
                    </motion.a>
                  </motion.div>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 0.8, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Services
