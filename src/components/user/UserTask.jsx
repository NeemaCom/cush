import React from "react";
import { GrTransaction } from "react-icons/gr";

const UserTask = () => {
  return (
    <div className='bg-white border shadow rounded-lg mt-8 md:mt-0'>
      <div className='p-6'>
        <div className='flex items-center justify-between mb-6'>
          <h2 className='text-lg font-medium text-gray-900'>
            Transaction History
          </h2>
        </div>
        <div className='overflow-hidden'>
          <ul className='divide-y divide-gray-200'>
            <li className='py-4'>
              <div className=''>
                <div className='mx-auto'>
                  <GrTransaction className='h-20 w-20 text-blue mx-auto' />
                  <p className='text-center'>
                    You currently have no transaction records
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default UserTask;
