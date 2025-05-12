import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { FaQuoteLeft, FaStar } from 'react-icons/fa'
import { assets } from '@/assets/asset'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Testimonies = () => {

    const star = 5;
        
  return (
      <section className='bg-gray-100 py-20 px-10 md:px-20'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{duration: 0.6}}
        className='space-y-5'>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.7}}
          className='text-center text-4xl font-semibold text-gray-900'>You know we'd love to help you</motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{duration: 0.8}}
          className='text-center font-bold text-gray-600'>We're here to assist you. Reach out with any questions, feedback, or inquiries, and our team will respond promptly.</motion.p>
              <motion.div 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 20}}
                transition={{duration: 1.0}}
                className='md:px-20 pt-10'>
                  
                  <Carousel>
                      
                        <CarouselContent className='gap-5'>
                          <CarouselItem className=" md:basis-1/2 lg:basis-1/3 h-full bg-white drop-shadow-md md:h-full">
                                <FaQuoteLeft className='text-blue-600'/>
                              <div className='px-5'>
                                  Cush transformed what could have been a daunting relocation into a smooth      experience. Their comprehensive advisory services and efficient payment solutions made settling into a new country hassle-free.
                                </div>
                                <div className='flex items-center space-x-5 pt-10 px-5'>
                                  <img src={assets.groupcall} className='w-12'/>
                                  <div>
                                      <div className='font-bold'>Gabriel Tim</div>
                                      <div className='flex items-center'>
                                          {Array.from({ length: star }).map((_, index) => (
                                            <FaStar key={index} className="text-yellow-500 text-[10px] mr-2" />
                                        ))}
                                      </div>
                                      
                                  </div>
                                </div>
                          </CarouselItem>
                          <CarouselItem className=" md:basis-1/2 lg:basis-1/3 h-full bg-white drop-shadow-md md:h-full">
                                <FaQuoteLeft className='text-blue-600'/>
                              <div className='px-5'>
                                  Cush transformed what could have been a daunting relocation into a smooth      experience. Their comprehensive advisory services and efficient payment solutions made settling into a new country hassle-free.
                                </div>
                                <div className='flex items-center space-x-5 pt-10 px-5'>
                                  <img src={assets.groupcall} className='w-12'/>
                                  <div>
                                      <div className='font-bold'>Gabriel Tim</div>
                                      <div className='flex items-center'>
                                          {Array.from({ length: star }).map((_, index) => (
                                            <FaStar key={index} className="text-yellow-500 text-[10px] mr-2" />
                                        ))}
                                      </div>
                                      
                                  </div>
                                </div>
                          </CarouselItem>
                          <CarouselItem className=" md:basis-1/2 lg:basis-1/3 h-full bg-white drop-shadow-md md:h-full">
                                <FaQuoteLeft className='text-blue-600'/>
                              <div className='px-5'>
                                  Cush transformed what could have been a daunting relocation into a smooth      experience. Their comprehensive advisory services and efficient payment solutions made settling into a new country hassle-free.
                                </div>
                                <div className='flex items-center space-x-5 pt-10 px-5'>
                                  <img src={assets.groupcall} className='w-12'/>
                                  <div>
                                      <div className='font-bold'>Gabriel Tim</div>
                                      <div className='flex items-center'>
                                          {Array.from({ length: star }).map((_, index) => (
                                            <FaStar key={index} className="text-yellow-500 text-[10px] mr-2" />
                                        ))}
                                      </div>
                                      
                                  </div>
                                </div>
                          </CarouselItem>
                          <CarouselItem className=" md:basis-1/2 lg:basis-1/3 h-full bg-white drop-shadow-md md:h-full">
                                <FaQuoteLeft className='text-blue-600'/>
                              <div className='px-5'>
                                  Cush transformed what could have been a daunting relocation into a smooth      experience. Their comprehensive advisory services and efficient payment solutions made settling into a new country hassle-free.
                                </div>
                                <div className='flex items-center space-x-5 pt-10 px-5'>
                                  <img src={assets.groupcall} className='w-12'/>
                                  <div>
                                      <div className='font-bold'>Gabriel Tim</div>
                                      <div className='flex items-center'>
                                          {Array.from({ length: star }).map((_, index) => (
                                            <FaStar key={index} className="text-yellow-500 text-[10px] mr-2" />
                                        ))}
                                      </div>
                                      
                                  </div>
                                </div>
                          </CarouselItem>
                          <CarouselItem className=" md:basis-1/2 lg:basis-1/3 h-full bg-white drop-shadow-md md:h-full">
                                <FaQuoteLeft className='text-blue-600'/>
                              <div className='px-5'>
                                  Cush transformed what could have been a daunting relocation into a smooth      experience. Their comprehensive advisory services and efficient payment solutions made settling into a new country hassle-free.
                                </div>
                                <div className='flex items-center space-x-5 pt-10 px-5'>
                                  <img src={assets.groupcall} className='w-12'/>
                                  <div>
                                      <div className='font-bold'>Gabriel Tim</div>
                                      <div className='flex items-center'>
                                          {Array.from({ length: star }).map((_, index) => (
                                            <FaStar key={index} className="text-yellow-500 text-[10px] mr-2" />
                                        ))}
                                      </div>
                                      
                                  </div>
                                </div>
                          </CarouselItem>
                          <CarouselItem className=" md:basis-1/2 lg:basis-1/3 h-full bg-white drop-shadow-md md:h-full">
                                <FaQuoteLeft className='text-blue-600'/>
                              <div className='px-5'>
                                  Cush transformed what could have been a daunting relocation into a smooth      experience. Their comprehensive advisory services and efficient payment solutions made settling into a new country hassle-free.
                                </div>
                                <div className='flex items-center space-x-5 pt-10 px-5'>
                                  <img src={assets.groupcall} className='w-12'/>
                                  <div>
                                      <div className='font-bold'>Gabriel Tim</div>
                                      <div className='flex items-center'>
                                          {Array.from({ length: star }).map((_, index) => (
                                            <FaStar key={index} className="text-yellow-500 text-[10px] mr-2" />
                                        ))}
                                      </div>
                                      
                                  </div>
                                </div>
                          </CarouselItem>
                          <CarouselItem className=" md:basis-1/2 lg:basis-1/3 h-full bg-white drop-shadow-md md:h-full">
                                <FaQuoteLeft className='text-blue-600'/>
                              <div className='px-5'>
                                  Cush transformed what could have been a daunting relocation into a smooth      experience. Their comprehensive advisory services and efficient payment solutions made settling into a new country hassle-free.
                                </div>
                                <div className='flex items-center space-x-5 pt-10 px-5'>
                                  <img src={assets.groupcall} className='w-12'/>
                                  <div>
                                      <div className='font-bold'>Gabriel Tim</div>
                                      <div className='flex items-center'>
                                          {Array.from({ length: star }).map((_, index) => (
                                            <FaStar key={index} className="text-yellow-500 text-[10px] mr-2" />
                                        ))}
                                      </div>
                                      
                                  </div>
                                </div>
                          </CarouselItem>
                          <CarouselItem className=" md:basis-1/2 lg:basis-1/3 h-full bg-white drop-shadow-md md:h-full">
                                <FaQuoteLeft className='text-blue-600'/>
                              <div className='px-5'>
                                  Cush transformed what could have been a daunting relocation into a smooth      experience. Their comprehensive advisory services and efficient payment solutions made settling into a new country hassle-free.
                                </div>
                                <div className='flex items-center space-x-5 pt-10 px-5'>
                                  <img src={assets.groupcall} className='w-12'/>
                                  <div>
                                      <div className='font-bold'>Gabriel Tim</div>
                                      <div className='flex items-center'>
                                          {Array.from({ length: star }).map((_, index) => (
                                            <FaStar key={index} className="text-yellow-500 text-[10px] mr-2" />
                                        ))}
                                      </div>
                                      
                                  </div>
                                </div>
                          </CarouselItem>
                        </CarouselContent>
                        <div className='flex item-center justify-center gap-5 py-15'>
                          <CarouselPrevious/>  <CarouselNext/>
                        </div>
                  </Carousel>
              </motion.div>
              <motion.div 
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.9}}
                className='bg-blue-200 rounded-xl'>
                  <div className='flex items-center flex-wrap justify-between py-4 px-4 gap-3'>
                    <h3 className='font-bold text-gray-900 text-md sm:text-xl md:pl-5'>
                          Do you want to be the next one <br className=' inline md:hidden'/> here?!!!
                    </h3>
                      <Link
                            className='bg-blue-600 text-white font-bold px-2 py-2 rounded-md text-smm md:px-5 md:text-lg'
                        >
                            Join Now
                        </Link>
                  </div>
              </motion.div>
          </motion.div>
    </section>
  )
}

export default Testimonies