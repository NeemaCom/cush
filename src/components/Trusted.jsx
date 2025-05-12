import React from "react";
import { assets } from "@/assets/asset";
import { motion } from "framer-motion";

// Mock data for logos
const logos = [
  {
    id: "1",
    user: assets.wise,
  },
  {
    id: "2",
    user: assets.nimc,
  },
  {
    id: "3",
    user: assets.nigmigration,
  },
  {
    id: "4",
    user: assets.flutter,
  },
  {
    id: "5",
    user: assets.stripe,
  },
  {
    id: "6",
    user: assets.paystack,
  },
];

const Trusted = () => {
  return (
    <div className='w-full bg-gray-50 py-8 overflow-hidden'>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='max-w-7xl mx-auto px-4 '>
        <div className='text-center gap-2 mb-10'>
          <h2 className='text-lg font-bold text-blue-600 text-center'>
            Our partners across the globe
          </h2>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className='relative'>
          <div className='flex overflow-hidden'>
            <div className='flex animate-scroll'>
              {/* First set of items */}
              {logos.map((logo) => (
                <motion.div
                  key={`first-${logo.id}`}
                  className='min-w-[150px] px-4 flex-shrink-0'>
                  <div className=''>
                    <div className='flex justify-center items-center'>
                      <div>
                        <img src={logo.user} className='font-medium text-center text-black w-30'/>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
              {/* Duplicate set for seamless loop */}
              {logos.map((logo) => (
                <div
                  key={`second-${logo.id}`}
                  className='min-w-[150px] px-4 flex-shrink-0'>
                  <div className=''>
                    <div className='flex justify-center items-center'>
                      <div>
                        <img src={logo.user} className='font-medium text-center text-black w-30'/>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
          className="text-gray-400 text-center pt-8 font-semibold">
          At Cush, our mission to simplify migration and provide secure global payment solutions is strengthened through strategic partnerships with industry leaders.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default Trusted;
