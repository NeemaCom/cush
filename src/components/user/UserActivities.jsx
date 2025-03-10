import React from "react";

import { Link } from "react-router-dom";

const UserActivities = () => {
  return (
    <>
      <div className='bg-white shadow rounded-lg'>
        <div className='p-6'>
          <h2 className='text-lg font-medium text-gray-900'>
            Migration Savings
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-5 m-5'>
            <div className='border  border-blue-500 px-5 py-1 rounded-md w-full'>
              <h1 className='font-bold text-xl '>TOTAL SAVINGS</h1>
              <p className='pt-2 pb-2'>You have not created a savings plan</p>
              <p className='pb-3'>Click the button below to start saving</p>
              <button className='bg-blue-500 text-gray-100 rounded-md px-4 py-1 mb-2 font-bold'>
                Create Savings Plans
              </button>
            </div>
            <div className='border border-blue-500 px-5 py-5 rounded-md w-full'>
              <h1 className='font-bold text-xl pb-4'>NGN WALLET</h1>
              <p className='font-bold text-xl pb-4'>NGN 0</p>
              <p className='font-bold '>More details</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bg-white shadow rounded-lg mt-5'>
        <div className='p-6'>
          <h2 className='text-lg font-medium text-gray-900'>Services</h2>
          <div className='flex items-center justify-center flex-wrap gap-5 m-5 font-bold'>
            <button className='bg-blue-500 text-gray-100 rounded-md px-4 py-1 mb-2'>
              Pathways
            </button>
            <button className='bg-blue-500 text-gray-100 rounded-md px-4 py-1 mb-2'>
              Bank
            </button>
            <button className='bg-blue-500 text-gray-100 rounded-md px-4 py-1 mb-2'>
              Cards
            </button>
            <button className='bg-blue-500 text-gray-100 rounded-md px-4 py-1 mb-2'>
              Migration Fess
            </button>
            <button className='bg-blue-500 text-gray-100 rounded-md px-4 py-1 mb-2'>
              Feeds
            </button>
            <Link
              to={"form"}
              className='bg-blue-500 text-gray-100 rounded-md px-4 py-1 mb-2'>
              PCC
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserActivities;
