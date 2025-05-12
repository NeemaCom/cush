import { assets } from '@/assets/asset'
import React from 'react'
import { Link } from 'react-router-dom'
import  {motion} from 'framer-motion'

const Help = () => {
  return (
      <div className='bg-gray-100'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{duration: 0.8}}
                  className='hidden md:inline'>
                  <img src={assets.help} alt="" />
              </motion.div>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{duration: 0.8}}
                  className='flex items-center px-10 md:px-0 py-10'>
                  <div className='space-y-5'>
                        <h1 className='text-gray-900 font-bold text-2xl md:text-3xl'>We’re Here to Help – <br /> Reach Out Anytime!"</h1>
                        <div className='flex items-center gap-4'>
                          <Link
                                to='/signup'
                                className='bg-blue-500 px-5 py-2 font-bold text-sm rounded-md text-blue-50 md:text-md'
                            >
                                    Get Started
                            </Link>
                            <p className='font-bold'>support@cushpay.com </p>
                        </div>
                    </div>
              </motion.div>
          </div>
    </div>
  )
}

export default Help