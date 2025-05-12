import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ContactUs = () => {
    const everything = [
    {
        id : 1,
        name: 'Migration Advisory',
        description : 'Personalized visa and relocation guidance from expert and learned traveling consultants.'
    },
    {
        id : 2,
        name: 'Payment Solution',
        description : 'Real time payment,Virtual dollar cards, bill payments, and savings for migration purpose.'
    },
    {
        id : 3,
        name: 'Job & Scholarship Finder',
        description : 'Find visa-sponsored jobs & post educational sponsorship and scholarship for our clients.'
    },
    {
        id : 4,
        name: 'Insight Hub',
        description : 'Stay updated with immigration and finance news and get insight to tailored information.'
        },
    {
        id : 5,
        name: 'Rapid Execution & Growth',
        description : 'Move fast—Ideate, research about migration and move at your desired time with our help. '
        },
    {
        id : 6,
        name: 'Imisi AI Chatbot',
        description : '24/7 migration help via chat powered by AI. Updated and ready for you to answer your questions.'
    }
    ];

  return (
      <div className='bg-blue-100 py-20 px-10 md:px-20'>
          <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{duration: 0.6}}
              className='space-y-5'
          >
              <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{duration: 0.8}}
                  className='text-center text-4xl text-gray-900 font-semibold'>
                  Everything You Need To Know In One Place
              </motion.h1>
              <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{duration: 0.8}}
                  className='text-center font-bold text-gray-600'>
                  Step-by-step support to make migration stress-free and financially stable.
              </motion.p>
              <div className='pt-5'>
                  <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                      {everything.map((info) => (
                          <motion.div
                              key={info.id} 
                              initial={{ opacity: 0, y: 20 }}
                              whileInView={{opacity: 1, y: 0}}
                              transition={{duration: 1.0, delay: info.id * 0.1}}
                              className='text-center p-6 bg-white rounded-md drop-shadow-xl space-y-3'
                          >
                              <div className='bg-blue-100 mx-auto w-10 p-2 rounded-full text-blue-500 font-bold'>
                                  {info.id}
                              </div>
                              <div className='font-bold text-gray-900 text-lg'>
                                  {info.name}
                              </div>
                              <div className='font-bold text-gray-600 text-md pb-3'>
                                {info.description}
                              </div>
                          </motion.div>
                      ))}
                  </div>
              </div>
              <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{duration: 0.9}}
                  className='text-center py-5 space-y-5'
              >
                  <h3 
                      className='text-2xl font-bold text-gray-900'>
                      Still have a question?
                  </h3>
                      <p className='font-semibold text-gray-600'>Reach out to us and we are here to answer your questions.</p>
                      <Link
                          className='bg-blue-600 text-white font-bold px-5 py-2 rounded-md'
                      >
                          Contact us
                      </Link>
              </motion.div>
          </motion.div>
    </div>
  )
}

export default ContactUs;