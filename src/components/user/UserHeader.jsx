import React from "react";
import { SearchIcon, BellIcon, UserIcon } from "lucide-react";

const UserHeader = () => {
  return (
    <nav className=" bg-[url('/Userheader.png')] bg-center bg-cover w-[116%] sm:w-[100%]  py-9 border-b border-gray-200 px-4">
      <div className=' ml-[15%] pl-10 bg-white py-2 rounded-l-lg'>
        <div className='flex-1' /> 
        <div className='flex items-center justify-between gap-10 md:gap-4'>
          <div className='relative hidden sm:block'>
            <SearchIcon
              className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-400' 
              size={18}
            />
            <input
              type='search'
              placeholder='Search...'
              className='pl-10 pr-4 bg-gray-100 py-1 md:pl-10 md:px-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-[200px] md:w-[250px]'
            />
          </div>
          <div className='flex items-center pl-40 sm:pl-0'>
            <button className='relative p-2  hover:bg-gray-100 rounded-lg'>
              <BellIcon size={20} className='text-gray-600' />
              <span className='absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full'></span>
            </button>
            <button className='flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg'>
              <div className='w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center'>
                <UserIcon size={18} className='text-gray-600' />
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default UserHeader;
