import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import { motion } from "motion/react"

const Header = ({ isDarkMode }) => {
  const headerRef = useRef(null);

  useEffect(() => {
    const adjustHeaderHeight = () => {
      if (headerRef.current) {
        const navbarHeight = 80;
        const windowHeight = window.innerHeight;
        const contentHeight = headerRef.current.scrollHeight;
        
        if (contentHeight + navbarHeight < windowHeight) {
          headerRef.current.style.minHeight = `${windowHeight - navbarHeight}px`;
        } else {
          headerRef.current.style.minHeight = 'auto';
        }
      }
    };

    adjustHeaderHeight();
    window.addEventListener('resize', adjustHeaderHeight);
    return () => window.removeEventListener('resize', adjustHeaderHeight);
  }, []);

  return (
    <div ref={headerRef} className='w-11/12 max-w-6xl text-center mx-auto flex flex-col items-center justify-center gap-8 pt-28 pb-16 relative'>
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className='flex flex-col md:flex-row items-center justify-between w-full gap-12'>
        {/* Left side - Description */}
        <div className='flex-1 text-left space-y-8'>
          <motion.h3 
            initial={{y: -20, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.5, delay: 0.2}}
            className='flex items-end gap-2 text-2xl md:text-3xl font-Ovo text-gray-700 dark:text-white/90'
          >
            <span className="relative">
              Hi! I'm Ashish Chaurasiya
              <motion.div
                className="absolute -right-8 -top-2"
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
              >
                <Image 
                  src={assets.hand_icon} 
                  alt='' 
                  className='w-8'
                  style={{ color: 'transparent' }}
                />
              </motion.div>
            </span>
          </motion.h3>

          <motion.h1 
            initial={{y: -30, opacity: 0}}
            whileInView={{y: 0, opacity: 1}}
            transition={{duration: 0.6, delay: 0.3}}
            className='text-4xl sm:text-6xl lg:text-[72px] font-Ovo leading-tight'
          >
            <span className="bg-gradient-to-r from-purple-600 via-blue-500 to-purple-600 dark:from-purple-400 dark:via-blue-300 dark:to-purple-400 bg-clip-text text-transparent bg-300% animate-gradient">
              Game & Backend Developer
            </span>
            <br />
            <span className="text-gray-800 dark:text-white">Based in India.</span>
          </motion.h1>

          <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.4}}
            className='text-lg text-gray-600 dark:text-gray-300 max-w-2xl font-Ovo leading-relaxed'
          >
            I am a Game & Backend Developer From Uttar Pradesh, India doing Multiple Things Like Game Development, 
            Backend Development, and also Open Source Contributor.
          </motion.p>

          <div className='flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-6 pt-4'>
            <motion.a 
              initial={{y: 30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.5}}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className='group w-full sm:w-auto px-8 py-3.5 border border-white rounded-full bg-black text-white flex items-center justify-center gap-2 dark:bg-transparent hover:bg-gray-800 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden'
            >
              <span className="relative z-10 font-medium">Contact Me</span>
              <motion.div
                className="relative z-10"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Image 
                  src={assets.right_arrow_white} 
                  alt='' 
                  className='w-4'
                  style={{ color: 'transparent' }}
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.a>

            <motion.a 
              initial={{y: 30, opacity: 0}}
              whileInView={{y: 0, opacity: 1}}
              transition={{duration: 0.5, delay: 0.6}}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/sample-resume.pdf" download 
              className='group w-full sm:w-auto px-8 py-3.5 border rounded-full border-gray-500 flex items-center justify-center gap-2 bg-white dark:bg-transparent dark:border-white/50 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden'
            >
              <span className="relative z-10 font-medium">My Resume</span>
              <motion.div
                className="relative z-10"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <svg 
                  className="w-4 h-4 text-gray-700 dark:text-white" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" 
                  />
                </svg>
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 transition-opacity duration-300" />
            </motion.a>
          </div>
        </div>

        {/* Right side - Profile Picture */}
        <motion.div
          initial={{scale: 0}}
          whileInView={{scale: 1}}
          transition={{duration: 0.8, type: 'spring', stiffness: 100}}
          className="relative flex-shrink-0"
        >
          {/* Animated Gradient Rings */}
          <motion.div
            className="absolute -inset-4"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-40 blur-md" />
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-40 blur-md" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 opacity-40 blur-md" />
            </div>
          </motion.div>

          {/* Counter Rotating Gradient Ring */}
          <motion.div
            className="absolute -inset-6"
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-blue-500/30 blur-lg" />
              <div className="absolute inset-3 rounded-full bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-lg" />
            </div>
          </motion.div>

          {/* Floating Particles */}
          <motion.div
            className="absolute -inset-8"
            animate={{
              rotate: [360, 0],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full relative">
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-black dark:bg-white rounded-full"
                  style={{
                    top: `${(Math.sin(i * Math.PI / 8) * 50 + 50).toFixed(2)}%`,
                    left: `${(Math.cos(i * Math.PI / 8) * 50 + 50).toFixed(2)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.2, 0.6, 0.2],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Glowing Dots */}
          <motion.div
            className="absolute -inset-10"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <div className="w-full h-full relative">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-black dark:bg-white rounded-full"
                  style={{
                    top: `${(Math.sin(i * Math.PI / 12) * 55 + 50).toFixed(2)}%`,
                    left: `${(Math.cos(i * Math.PI / 12) * 55 + 50).toFixed(2)}%`,
                  }}
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.1, 0.3, 0.1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.1,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Profile Image Container */}
          <div className="relative z-20">
            <div className="relative">
              <motion.div
                className="absolute -inset-1 rounded-full bg-gradient-to-r from-purple-500/40 via-pink-500/40 to-blue-500/40"
                animate={{
                  scale: [1, 1.02, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <Image 
                src={assets.profile_img} 
                alt='' 
                className='rounded-full w-48 md:w-56 lg:w-64 relative z-10 shadow-2xl hover:shadow-purple-500/20 transition-shadow duration-300'
                style={{ color: 'transparent' }}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Social Media Icons - Centered on Page */}
      <motion.div
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.7}}
        className='flex items-center justify-center gap-6 -mt-8'
      >
        {[
          { 
            href: "https://github.com/DrDead0", 
            icon: "github",
            color: "hover:text-[#333] dark:hover:text-white"
          },
          { 
            href: "https://www.linkedin.com/in/ashish-gamedev/", 
            icon: "linkedin",
            color: "hover:text-[#0077B5] dark:hover:text-[#0077B5]"
          },
          { 
            href: "https://www.instagram.com/a.shiss.h", 
            icon: "instagram",
            color: "hover:text-[#E4405F] dark:hover:text-[#E4405F]"
          },
          { 
            href: "https://x.com/I_Am_Mr_Ashu", 
            icon: "twitter",
            color: "hover:text-[#1DA1F2] dark:hover:text-[#1DA1F2]"
          }
        ].map((social) => (
          <motion.a
            key={social.icon}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className='group relative'
            whileHover={{ scale: 1.1, y: -2 }}
            transition={{ duration: 0.2 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-opacity duration-300" />
              <svg 
                className={`w-8 h-8 text-gray-600 dark:text-gray-300 ${social.color} transition-colors duration-300`} 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                {social.icon === "github" && (
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                )}
                {social.icon === "linkedin" && (
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                )}
                {social.icon === "instagram" && (
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                )}
                {social.icon === "twitter" && (
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                )}
              </svg>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </div>
  )
}

export default Header;
