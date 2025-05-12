import React, { useState } from 'react';
import { FaqData } from '@/assets/asset';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const Faq = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleAccordion = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className='bg-gray-50  px-10 py-10 md:px-20'>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{duration: 0.6}}
              className='grid grid-cols-1 md:grid-cols-2 gap-10'>
              <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                transition={{duration: 0.8}}  
                className='p-5 space-y-5'>
                <div className='bg-gray-100 px-4 py-2 w-fit text-[12px] font-bold drop-shadow-md text-gray-900 rounded-md'>
                    FREQUENTLY ASKED QUESTIONS
                </div>
                <h1 className='font-bold text-3xl text-gray-900'>Let's put your mind at ease.</h1>
                <p className='text-gray-500 text-lg'>
                    Can’t find the answer you’re looking for? <br />
                    Reach out to our customer support team.
                </p>
            </motion.div>

            <div className='space-y-5 md:p-5'>
            {FaqData.map((faq, index) => (
                <motion.div 
                    key={faq.id} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 1.0, delay: faq.id * 0.1}}
                    className='border rounded-md shadow-sm'>
                    <motion.div
                        key={faq.id} 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{opacity: 1, y: 0}}
                        transition={{duration: 1.0, delay: faq.id * 0.1}}
                        className='flex items-center justify-between p-5 cursor-pointer'
                        onClick={() => toggleAccordion(index)}
                    >
                        <div className='font-semibold text-lg text-gray-800'>{faq.question}</div>
                        <div className='text-gray-600 text-xl'>
                        {expandedIndex === index ? <FaMinus className='w-3'/> : <FaPlus className='w-3'/>}
                        </div>
                    </motion.div>
                    {expandedIndex === index && (
                        <div className='px-5 py-3 text-gray-700'>{faq.answer}</div>
                    )}
                </motion.div>
                ))}
            </div>
          </motion.div>
          <motion.div
               initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.8}}
              className='flex items-center md:justify-center mt-10'>
              <div 
                    className='flex items-center flex-wrap space-y-2 justify-between bg-blue-100 py-5 px-4 w-full md:w-2/3 rounded-md '>
                    <div className='space-y-3'>
                        <h3 className='text-md font-bold text-gray-900 md:text-xl'>Still have a question?</h3>
                        <p className='font-semibold text-gray-600 text-[13px] md:text-md'>
                            Can’t find the answer you’re looking for? <br className='inline md:hidden'/> Please get in touch with our team.
                        </p>
                    </div>
                    <Link
                        className='bg-blue-600 text-white font-bold px-5 py-2 rounded-md text-sm md:text-lg'
                    >
                        Get in Touch
                    </Link>
              </div> 
            </motion.div>
    </div>
  );
};

export default Faq;