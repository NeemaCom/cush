import React from "react";

const Hero = () => {
  return (
    <div className='bg-img bg-[url(/bdimg.webp)] bg-blue-600  bg-blend-soft-light bg-cover h-150 bg-center bg-no-repeat'>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='mb-10'>
          <h1 className='md:text-5xl text-2xl font-bold text-left px-10 sm:text-center text-gray-50 mb-3'>
            Digital payments for all
            <br /> your Lifestyle payments
          </h1>
          <p className='sm:text-center text-left px-10 md:px-80 text-[20px] font-bold pb-4 text-gray-50'>
            Cushpay is your digital wallet for all your Lifestyle needs
          </p>
          <ul className='flex justify-left sm:justify-center gap-x-6 px-10 py-10'>
            <li className='hover:cursor-pointer text-blue-600 bg-gray-50 text-xl  rounded-md flex px-20 py-2 font-bold'>
              Get Started
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
