import { assets } from '@/assets/asset'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiPhonePlusFill } from "react-icons/pi";
import { Calendar } from './ui/calendar';
import { motion } from 'framer-motion';

const ScheduleCall = () => {

    const [date, setDate] = useState(new Date())

  return (
      <>
          <div className='bg-gray-100 pt-20 pb-30 px-10'>
              <div className='flex flex-wrap w-full items-center justify-center space-x-20 space-y-20'>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className='mx-auto'>
                      <h1 className='text-gray-900 font-semibold text-4xl'>Seamlessly Book Expert Migration <br /> Consultations</h1>
                      <p className='text-gray-500 my-5 font-semibold'>
                          Say Goodbye! to migration guesswork – get <br className='hidden md:inline'/> expert guidance and seamless financial <br className='hidden md:inline'/>solutions.
                      </p>
                      <Link
                        className='bg-blue-600 text-white font-bold px-5 py-2 rounded-md'
                      >
                            Schedule a call
                      </Link>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className='relative'>
                  <img
                        src={assets.groupcall} alt="" className='w-80 md:w-100' />
                  <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2 }}
                        className='flex items-center space-x-4 absolute top-0 -right-12 lg:-right-8 bg-gray-50 p-2 rounded-md'>
                        <PiPhonePlusFill className='w-10 h-10 text-blue-600 bg-gray-200 rounded-full p-2' />
                        <img src={assets.makeacall} alt="" className='w-20' />
                  </motion.div>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        className="rounded-md bg-white drop-shadow-2xl top-53 -left-5 absolute md:top-54 md:-left-40"
                    />
                </motion.div>    
            </div>
          </div> 
    </>
  )
}

export default ScheduleCall;