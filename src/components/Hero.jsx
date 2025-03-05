import React from "react";

const Hero = () => {
  return (
    <div className='bg-img bg-[url(/bdimg.webp)] bg-blue-600  bg-blend-soft-light bg-cover h-150 bg-center bg-no-repeat'>
      <div className='flex justify-center items-center min-h-screen'>
        <div className='pt-30 md:pt-50 lg:pt-20'>
          <h1 className='md:text-5xl text-2xl font-bold text-center z-20 text-gray-50 mb-3'>
            Digital payments for all
            <br /> your Lifestyle payments
          </h1>
          <p className='text-center px-10 md:px-80 text-[20px] font-bold py-4 text-gray-50'>
            Cushpay is your digital wallet for all your Lifestyle needs: top up
            your mobile lines with airtime and Data; renew your cable Tv and
            electricity; transfer funds; pay for your car insurance; or make
            payments with virtual naira or dollar debit cards.
          </p>
          <ul className='flex justify-center gap-x-6  py-10'>
            <li className='hover:cursor-pointer text-blue-600 bg-gray-50 text-xl  rounded-md flex px-20 py-2 font-bold'>
              Get Started
            </li>
          </ul>
          <div className='w-30 h-40 text-blue-600 rounded[100%] absolute z-1 top-[50%] left-[20%] translate-x-[-50%] translate-y-[-50%] blur-[90px]'></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
