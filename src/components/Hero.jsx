import React from "react";
import { Link } from "react-router-dom";
import { FaCheck } from 'react-icons/fa'
import { assets } from "@/assets/asset";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-blue-50 to-blue-300 px-10 mt-5 md:px-20'>
      <div className='flex items-center min-h-screen'>
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className='w-full lg:w-[70%] text-gray-900'>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className='md:text-6xl text-3xl font-semibold  mb-5'>
           Simplify Your <br/> Migration Journey <br /> & Global Payments
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className=' font-bold pb-4 flex items-center gap-x-2'>
           <FaCheck className="border bg-white rounded-full p-1 w-6 h-6"/> Get expert advisory
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className=' font-bold pb-4 flex items-center gap-x-2'>
           <FaCheck className="border bg-white rounded-full p-1 w-6 h-6"/> Manage your finances
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className=' font-bold pb-4 flex items-center gap-x-2'>
           <FaCheck className="border bg-white rounded-full p-1 w-6 h-6"/> Settle into your new country easily
          </motion.p>
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className='mt-5'>
           <div className="relative"> {/* Parent container is relative */}
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative flex items-center md:w-2/3 w-full"> {/* Input container is also relative */}
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="w-full h-10 sm:h-13 border bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 relative px-4 pr-28 rounded-md" // Adjusted right padding
                  placeholder="Email"
                />
                <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
                  <Link
                    to="/signup"
                    className="hover:cursor-pointer text-blue-50 bg-blue-600 flex px-3 py-1 text-sm sm:text-base md:text-md lg:text-lg font-bold"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center py-3 space-x-2">
              <p>Already have an account? </p> 
            <Link
              to="/login"
              className='hover:cursor-pointer text-blue-600 font-bold'>
                Log In now
            </Link>
            </div>
          </motion.ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="hidden lg:inline-block">
         <img src={assets.heroimg} alt="" className="w-110 h-110"/>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
