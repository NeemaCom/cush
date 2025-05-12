import { assets } from '@/assets/asset';
import React from 'react'
import { FaMailBulk } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const HowItWorks = () => {
  return (
    <>
          <div className='bg-gray-100 pt-30 pb-20 px-10'>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                  <motion.h1 
                  initial={{opacity: 0, y: 20}}
                  whileInView={{opacity: 1, y: 0}}
                  transition={{duration: 0.8}}
                  className='text-center font-semibold text-4xl py-5'>A Smarter Way to Migrate & Manage Finance</motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{duration: 0.8}}
                className='text-center font-semibold'>
                    Step-by-step support to make migration stress-free and financially stable.
                  </motion.p>
                  
                  <div className='flex flex-wrap w-[100%] items-center justify-center gap-10 pt-10 lg:px-20'>
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{duration: 0.8}}
                      className='space-y-8 md:w-1/2'>
                          <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              transition={{duration: 0.8}}
                              className='flex items-center space-x-5'
                            >
                              <FaMailBulk className='text-blue-600 bg-gray-200 rounded-full p-3 w-10 h-10'/>
                                <div>
                                    <h3 className='font-bold text-2xl'>Book a Clarity Session</h3>
                                    <p>Get expert advisory on visas & migration.</p>
                                </div>
                            </motion.div>
                            <hr className='md:w-[80%] w-[100%] border-1 border-gray-400'/>
                            <motion.div
                              initial={{opacity: 0, y: 20}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{duration: 0.8}} 
                              className='flex items-center space-x-5'>
                              <FaMailBulk className='text-blue-600 bg-gray-200 rounded-full p-3 w-10 h-10'/>
                                <div>
                                    <h3 className='font-bold text-2xl'>Book a Clarity Session</h3>
                                    <p>Get expert advisory on visas & migration.</p>
                              </div>
                            </motion.div>
                          <hr className='md:w-[80%] w-[100%] border-1 border-gray-400'/>
                          <motion.div
                              initial={{opacity: 0, y: 20}}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{duration: 0.8}} 
                              className='flex items-center space-x-5'>
                              <FaMailBulk className='text-blue-600 bg-gray-200 rounded-full p-3 w-10 h-10'/>
                                <div>
                                    <h3 className='font-bold text-2xl'>Book a Clarity Session</h3>
                                    <p>Get expert advisory on visas & migration.</p>
                                </div>
                          </motion.div>
                      </motion.div>
            
                        <motion.div
                          initial={{opacity: 0, y: 20}}
                          whileInView={{opacity: 1, y: 0}}
                          transition={{duration: 1.0}}
                        >
                            <img src={assets.howitwork} alt="" className='w-90'/>
                        </motion.div>
                  </div>
                  <motion.div 
                    initial={{opacity: 0, y: 20}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1.1}}
                  className='text-center pt-10'>
                        <Link
                            className='bg-blue-600 text-white font-bold px-5 py-2 rounded-md'
                        >
                            See how it works
                        </Link>
                  </motion.div>
              </motion.div>
        </div>
    </>
  )
};

export default HowItWorks;