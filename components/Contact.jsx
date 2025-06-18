import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useState } from 'react'
import { motion } from "motion/react"

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult("Sending....");
    const formData = new FormData(event.target);

    // Enter your web3 forms access key below
    formData.append("access_key", "997656e2-4a90-43e4-be9b-27ca7ad17f8b");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setResult("Message sent successfully! 🎉");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      setResult("Network error. Please try again.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(""), 5000);
    }
  };

  return (    <div id='contact' className="w-full px-3 sm:px-4 lg:px-6 py-8 sm:py-12 relative overflow-hidden">      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-10 -left-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-purple-400/15 to-pink-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, -15, 0],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-20 sm:top-32 -right-10 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-blue-400/15 to-cyan-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 15, 0],
            scale: [1.05, 1, 1.05],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div><div className="w-full max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12"
        >
          <motion.h4
            className="text-lg sm:text-xl font-Ovo text-purple-600 dark:text-purple-400 mb-3 font-medium tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Let's Connect
          </motion.h4>
            <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-Ovo font-bold mb-4 sm:mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent bg-300% animate-gradient drop-shadow-sm">
              Get In Touch
            </span>
          </motion.h2>
            <motion.div
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto rounded-full mb-4 sm:mb-6 shadow-lg shadow-purple-500/25"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          />
          
          <motion.p
            className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-xl mx-auto leading-relaxed font-medium px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Have a project in mind or just want to chat? I'd love to hear from you! 
            Drop me a message and let's create something amazing together.
          </motion.p>
        </motion.div>        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative">            {/* Enhanced Form Background */}
            <div className="absolute inset-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 shadow-2xl shadow-purple-500/10" />
              {/* Floating Elements for Form */}
            <motion.div
              className="absolute -top-4 -right-4 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-400/20 to-blue-400/20 rounded-full blur-xl opacity-70"
              animate={{
                y: [0, -10, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl opacity-70"
              animate={{
                y: [0, 10, 0],
                scale: [1.1, 1, 1.1],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            /><form onSubmit={onSubmit} className="relative z-10 p-6 sm:p-8">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
                <motion.div
                  initial={{ x: -30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Your Name
                  </label>
                  <div className="relative group">                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Enter your full name"
                      className="w-full p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 group-hover:border-purple-400/40 text-sm sm:text-base"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ x: 30, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email Address
                  </label>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"                      required
                      placeholder="Enter your email address"
                      className="w-full p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 group-hover:border-purple-400/40 text-sm sm:text-base"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                  </div>
                </motion.div>
              </div>              {/* Message Field */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="space-y-2 mb-6 sm:mb-8"
              >
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Your Message
                </label>
                <div className="relative group">                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Tell me about your project or just say hello!"
                    className="w-full p-3 sm:p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all duration-300 resize-none group-hover:border-purple-400/40 text-sm sm:text-base"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </motion.div>

              {/* Submit Button */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
                viewport={{ once: true }}
                className="flex justify-center"
              >                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group relative px-6 sm:px-10 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold rounded-2xl shadow-xl shadow-purple-500/25 hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-500 overflow-hidden"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Button Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-blue-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Button Content */}
                  <div className="relative z-10 flex items-center gap-3">                    <span className="text-sm sm:text-base">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    {!isSubmitting && (
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Image 
                          src={assets.right_arrow_white || assets.send_icon} 
                          alt="send" 
                          className="w-4 h-4 sm:w-5 sm:h-5 filter brightness-110"
                        />
                      </motion.div>
                    )}
                    {isSubmitting && (
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                      />
                    )}
                  </div>

                  {/* Shine Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -skew-x-12 opacity-0 group-hover:opacity-100"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '200%' }}
                    transition={{ duration: 1.2, ease: 'easeInOut' }}
                  />
                </motion.button>
              </motion.div>

              {/* Result Message */}
              {result && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 text-center"
                >
                  <p className={`text-sm sm:text-base font-medium px-4 py-3 rounded-xl backdrop-blur-sm border ${
                    result.includes('successfully') || result.includes('🎉')
                      ? 'text-green-600 dark:text-green-400 bg-green-50/80 dark:bg-green-900/20 border-green-200/50 dark:border-green-700/50'
                      : result.includes('Sending')
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-900/20 border-blue-200/50 dark:border-blue-700/50'
                      : 'text-red-600 dark:text-red-400 bg-red-50/80 dark:bg-red-900/20 border-red-200/50 dark:border-red-700/50'
                  }`}>
                    {result}
                  </p>
                </motion.div>
              )}
            </form>
          </div>
        </motion.div>        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12"
        >
          {[
            {
              icon: "📧",
              title: "Email",
              content: "shubhi@example.com",
              link: "mailto:shubhi@example.com"
            },
            {
              icon: "📱",
              title: "Social",
              content: "Connect on LinkedIn",
              link: "https://www.linkedin.com/in/shubhi/"
            },
            {
              icon: "🌍",
              title: "Location",
              content: "India",
              link: null
            }
          ].map((item, index) => (            <motion.div
              key={index}
              className="group relative p-4 sm:p-6 bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl rounded-2xl border border-white/30 dark:border-gray-700/30 hover:border-purple-400/50 transition-all duration-500 shadow-xl shadow-gray-200/20 dark:shadow-black/20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 text-center space-y-2 sm:space-y-3">
                <div className="text-2xl sm:text-3xl mb-2 sm:mb-3">{item.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-300"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {item.content}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Contact
