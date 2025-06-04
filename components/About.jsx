import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from "motion/react"

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className="min-h-screen w-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-4 relative overflow-hidden">
      {/* Background Effects */}
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
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6"
        >
          <motion.h2
            className="text-2xl md:text-3xl lg:text-4xl font-Ovo font-bold mb-2"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 dark:from-purple-400 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient">
              About Me
            </span>
          </motion.h2>
          
          <motion.div
            className="w-12 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          {/* Left Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-1 flex justify-center"
          >
            <div className="relative">
              {/* Animated background glow */}
              <motion.div
                className="absolute -inset-3 rounded-xl bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20"
                animate={{
                  scale: [1, 1.02, 1],
                  rotate: [0, 2, -2, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-60"
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute -bottom-4 -right-4 w-6 h-6 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
                animate={{
                  y: [0, 15, 0],
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <div className="relative z-10 p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10">
                <Image
                  src={assets.user_image}
                  alt="Ashish Chaurasiya"
                  className="w-64 h-64 object-cover rounded-lg shadow-xl"
                  style={{ color: 'transparent' }}
                />
              </div>
            </div>
          </motion.div>

          {/* Right Column - About Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="space-y-3">
              <motion.h3
                className="text-xl md:text-2xl font-Ovo font-semibold text-gray-800 dark:text-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true }}
              >
                Passionate Developer & Creative Problem Solver
              </motion.h3>
              
              <motion.div
                className="space-y-3 text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <p>
                  I'm a passionate <span className="text-purple-600 dark:text-purple-400 font-semibold">Game & Backend Developer</span> from 
                  Uttar Pradesh, India, with a keen eye for creating immersive digital experiences and robust backend systems.
                </p>
                
                <p>
                  My journey spans across multiple domains - from crafting engaging game mechanics using 
                  <span className="text-blue-600 dark:text-blue-400 font-semibold"> Unity & Unreal Engine</span> to building 
                  scalable backend architectures with <span className="text-green-600 dark:text-green-400 font-semibold">Node.js</span>.
                </p>
                
                <p>
                  As an active <span className="text-orange-600 dark:text-orange-400 font-semibold">Open Source Contributor</span>, 
                  I believe in sharing knowledge and collaborating with the global developer community.
                </p>
              </motion.div>
            </div>

            {/* Quick Stats */}
            <motion.div
              className="grid grid-cols-2 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="text-center p-3 bg-white/5 dark:bg-black/5 rounded-lg border border-white/10 dark:border-white/5">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">8+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center p-3 bg-white/5 dark:bg-black/5 rounded-lg border border-white/10 dark:border-white/5">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">3+</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Info Cards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h3 className="text-xl md:text-2xl font-Ovo font-semibold text-center mb-6 text-gray-800 dark:text-white">
            Professional Overview
          </h3>
          
          <div className="grid md:grid-cols-3 gap-4">
            {infoList.map((info, index) => (
              <motion.div
                key={index}
                className="group relative p-4 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-xl border border-white/20 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -3, scale: 1.01 }}
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 text-center space-y-2">
                  <motion.div
                    className="mx-auto w-12 h-12 p-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg"
                    whileHover={{ scale: 1.05, rotate: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Image
                      src={isDarkMode ? info.iconDark : info.icon}
                      alt={info.title}
                      className="w-full h-full object-contain"
                      style={{ color: 'transparent' }}
                    />
                  </motion.div>
                  
                  <h4 className="text-lg font-Ovo font-semibold text-gray-800 dark:text-white">
                    {info.title}
                  </h4>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed whitespace-pre-line">
                    {info.description}
                  </p>
                  
                  {info.about && (
                    <p className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                      {info.about}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-xl md:text-2xl font-Ovo font-semibold mb-4 text-gray-800 dark:text-white">
            Tools & Technologies
          </h3>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.05,
                },
              },
            }}
          >
            {toolsData.map((tool, index) => (
              <motion.div
                key={index}
                className="group relative p-3 bg-white/10 dark:bg-black/10 backdrop-blur-sm rounded-lg border border-white/20 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300"
                variants={{
                  hidden: { opacity: 0, scale: 0.8, y: 15 },
                  visible: { opacity: 1, scale: 1, y: 0 },
                }}
                whileHover={{ 
                  y: -3, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
              >
                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-blue-500/15 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
                
                <div className="relative z-10">
                  <Image
                    src={tool}
                    alt=""
                    className="w-8 h-8 object-contain transition-transform duration-300 group-hover:scale-110"
                    style={{ color: 'transparent' }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
