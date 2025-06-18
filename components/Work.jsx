import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Work = ({isDarkMode}) => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? workData : workData.slice(0, 4);  return (
    <div id="work" className="w-full px-4 sm:px-6 lg:px-8 py-12 relative overflow-hidden">      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-20 -left-20 w-48 h-48 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 60, 0],
            y: [0, -20, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 -right-20 w-48 h-48 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -60, 0],
            y: [0, 20, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div><div className="w-full max-w-7xl mx-auto">        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h4
            className="text-lg sm:text-xl font-Ovo text-purple-600 dark:text-purple-400 mb-3 font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            My Portfolio
          </motion.h4>
          
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-Ovo font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient drop-shadow-sm">
              My Latest Work
            </span>
          </motion.h2>
          
          <motion.div
            className="w-20 sm:w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-6 shadow-lg shadow-purple-500/25"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 96, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl sm:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Welcome to my <span className="text-purple-600 dark:text-purple-400 font-bold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Backend, Game and Development Projects</span> Portfolio! 
            <br className="hidden sm:block" />
            Explore a collection of my projects showcasing my skills in <span className="text-blue-600 dark:text-blue-400 font-semibold">Backend Development</span>, <span className="text-pink-600 dark:text-pink-400 font-semibold">Game Development</span>, and <span className="text-purple-600 dark:text-purple-400 font-semibold">innovative solutions</span>.
          </motion.p>
        </motion.div>        {/* Projects Grid */}
        <motion.div
          key={showAll ? 'all' : 'limited'} // Force re-render when showAll changes
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16"
        >
          {displayedProjects.map((project, index) => (
            <motion.div
              key={`${project.title}-${index}`} // Unique key for each project
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.8 },
                visible: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{ 
                y: -12, 
                scale: 1.03,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative cursor-pointer"
              onClick={() => window.open(project.link, '_blank')}
            >
              {/* Enhanced Card Background with Glassmorphism */}
              <div className="relative aspect-[4/5] bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 hover:border-purple-400/50 dark:hover:border-purple-400/40 transition-all duration-700 overflow-hidden shadow-xl shadow-gray-200/20 dark:shadow-black/20 hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-500/5">
                  {/* Enhanced Floating Elements */}
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                <motion.div
                  className="absolute -bottom-4 -left-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400/15 to-purple-400/15 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
                
                {/* Project Image */}
                <div className="relative w-full h-3/5 overflow-hidden rounded-t-2xl">
                  <Image 
                    src={project.bgImage} 
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                    className="object-cover object-center transform group-hover:scale-115 transition-transform duration-700 ease-out"
                    quality={100}
                    priority={index < 4}
                    loading={index < 4 ? "eager" : "lazy"}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent group-hover:from-black/50 transition-colors duration-500" />
                  
                  {/* Enhanced Project Category Badge */}
                  <motion.div 
                    className="absolute top-3 sm:top-4 left-3 sm:left-4 px-3 py-1.5 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-full border border-white/40 dark:border-gray-700/40 shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">
                      Project
                    </span>
                  </motion.div>
                  
                  {/* Overlay gradient for better text readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Enhanced Project Info Panel */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-t border-white/30 dark:border-gray-700/30 p-4 sm:p-5 flex flex-col justify-between">
                  <div className="flex-1">
                    <motion.h3
                      className="font-bold text-gray-800 dark:text-white text-sm sm:text-base mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-400 line-clamp-2 leading-tight"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 line-clamp-3 leading-relaxed"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.05 }}
                      viewport={{ once: true }}
                    >
                      {project.description}
                    </motion.p>
                  </div>
                  
                  {/* Enhanced Launch Button */}
                  <div className="flex justify-end mt-3">
                    <motion.div
                      className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-500/30 to-blue-500/30 hover:from-purple-500/50 hover:to-blue-500/50 rounded-full border border-purple-300/40 dark:border-purple-400/30 flex items-center justify-center shadow-lg group-hover:shadow-purple-500/30 transition-all duration-400"
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image 
                        src={assets.send_icon} 
                        alt="launch project" 
                        className="w-3 h-3 sm:w-4 sm:h-4 filter brightness-110 group-hover:brightness-125 transition-all duration-300"
                      />
                    </motion.div>
                  </div>
                </div>

                {/* Enhanced Hover Effects */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* Enhanced Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '200%' }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>        {/* Enhanced Show More/Less Button */}
        {workData.length > 4 && (
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.button 
              onClick={() => setShowAll(!showAll)}
              className="group relative px-8 sm:px-12 py-3 sm:py-4 bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-2 border-purple-200/50 dark:border-purple-700/50 hover:border-purple-400/70 dark:hover:border-purple-400/60 rounded-2xl text-gray-700 dark:text-white transition-all duration-600 overflow-hidden shadow-xl shadow-purple-500/10 hover:shadow-2xl hover:shadow-purple-500/20"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Enhanced Button Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-600" />
              
              {/* Button Content */}
              <div className="relative flex items-center gap-3 sm:gap-4 font-Ovo font-semibold text-sm sm:text-base">
                <span className="group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-400 tracking-wide">
                  {showAll ? 'Show Less' : 'Show More'}
                </span>
                <motion.div
                  className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 bg-gradient-to-br from-purple-500/20 to-blue-500/20 group-hover:from-purple-500/40 group-hover:to-blue-500/40 rounded-full transition-all duration-400"
                  whileHover={{ x: 4, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image 
                    src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} 
                    alt="arrow" 
                    className="w-3 h-3 sm:w-4 sm:h-4 group-hover:brightness-125 transition-all duration-400"
                  />
                </motion.div>
              </div>
              
              {/* Enhanced Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 1.2, ease: 'easeInOut' }}
              />
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  )
}

export default Work
