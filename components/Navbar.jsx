import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {

    const [isScroll, setIsScroll] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const sideMenuRef = useRef();

    const openMenu = ()=>{
        setIsMenuOpen(true)
        sideMenuRef.current.style.transform = 'translateX(0)'
        document.body.style.overflow = 'hidden'
    }
    
    const closeMenu = ()=>{
        setIsMenuOpen(false)
        sideMenuRef.current.style.transform = 'translateX(100%)'
        document.body.style.overflow = 'auto'
    }

    useEffect(()=>{
        const handleScroll = () => {
            if(window.scrollY > 50){
                setIsScroll(true)
            }else{
                setIsScroll(false)
            }
        }
        
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    },[])

    // Close menu on window resize if open
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768 && isMenuOpen) {
                closeMenu()
            }
        }
        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMenuOpen])

  return (
    <>
    <div className='fixed top-0 right-0 w-full -z-10 translate-y-[-80%] dark:hidden'>
       <Image src={assets.header_bg_color} alt='' className='w-full' />
    </div>

      <nav className={`w-full fixed px-3 xs:px-4 sm:px-5 lg:px-8 xl:px-[8%] py-2.5 sm:py-3 md:py-4 flex items-center justify-between z-50 transition-all duration-300 ${isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:bg-opacity-50 dark:shadow-white/20" : ""}`}>
        <a href="#top" className="flex-shrink-0 transition-transform hover:scale-105">
            <Image 
                src={isDarkMode ? assets.logo_dark : assets.logo} 
                alt='Portfolio Logo' 
                className='w-16 xs:w-20 sm:w-24 md:w-28 cursor-pointer'
                priority
            />
        </a>

        <ul className={`hidden md:flex items-center gap-3 lg:gap-6 xl:gap-8 rounded-full px-4 lg:px-8 xl:px-12 py-2 lg:py-3 transition-all duration-300 ${isScroll ? "" : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"}`}>
            {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((item, index) => (
                <li key={index}>
                    <a 
                        className='font-Ovo text-sm lg:text-base hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 whitespace-nowrap' 
                        href={`#${item.toLowerCase().replace(' ', '')}`}
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>

        <div className='flex items-center gap-2 xs:gap-3 sm:gap-4'>
            <button 
                onClick={()=> setIsDarkMode(prev => !prev)} 
                className="flex-shrink-0 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300"
            >
                <Image 
                    src={isDarkMode ? assets.sun_icon : assets.moon_icon} 
                    alt='Theme Toggle' 
                    className='w-4 xs:w-5 sm:w-6' 
                />
            </button>

            <a 
                href="#contact" 
                className='hidden lg:flex items-center gap-2 sm:gap-3 px-4 sm:px-6 lg:px-8 py-2 sm:py-2.5 border border-gray-500 rounded-full ml-2 sm:ml-4 font-Ovo text-sm sm:text-base dark:border-white/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 hover:scale-105'
            >
                Contact 
                <Image 
                    src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} 
                    alt="Contact Arrow" 
                    className='w-3'
                />
            </a>

            <button 
                className='block md:hidden ml-2 sm:ml-3 flex-shrink-0 p-1.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-300' 
                onClick={openMenu}
                aria-label="Open Menu"
            >
                <Image 
                    src={isDarkMode ? assets.menu_white : assets.menu_black} 
                    alt='Menu' 
                    className='w-4 xs:w-5 sm:w-6' 
                />
            </button>
        </div>

        {/* Mobile menu overlay */}
        <div 
            className={`fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} 
            onClick={closeMenu}
        />

        {/* Mobile menu */}
        <ul 
            ref={sideMenuRef} 
            className='flex md:hidden flex-col gap-6 py-20 px-6 sm:px-8 fixed right-0 top-0 bottom-0 w-[280px] sm:w-[320px] z-50 h-screen bg-rose-50 transition-transform duration-300 ease-in-out transform translate-x-full dark:bg-darkHover dark:text-white shadow-xl'
        >
            <div 
                className='absolute right-6 top-6 p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300' 
                onClick={closeMenu}
            >
                <Image 
                    src={isDarkMode ? assets.close_white : assets.close_black} 
                    alt='Close Menu' 
                    className='w-5 cursor-pointer' 
                />
            </div>

            {['Home', 'About me', 'Services', 'My Work', 'Contact me'].map((item, index) => (
                <li key={index}>
                    <a 
                        className='font-Ovo text-lg hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-300 block py-2' 
                        onClick={closeMenu} 
                        href={`#${item.toLowerCase().replace(' ', '')}`}
                    >
                        {item}
                    </a>
                </li>
            ))}
        </ul>
      </nav>
    </>
  )
}

export default Navbar
