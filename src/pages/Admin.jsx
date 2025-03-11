import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-blue-500 text-white transition-width duration-300 ease-in-out overflow-x-hidden z-50 ${
        isOpen ? "w-35" : "w-16"
      }`}>
      <div className='flex items-center p-4'>
        <button className='text-xl focus:outline-none' onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isOpen && (
          <h3 className='ml-4 text-lg font-semibold whitespace-nowrap'>
            My App
          </h3>
        )}
      </div>

      <ul className='list-none p-0 m-0'>
        <li className='p-2'>
          <Link
            to='/'
            className='flex items-center p-2 rounded hover:bg-gray-700'
            onClick={() => setIsOpen(false)}>
            <FaHome className='mr-3' />
            {isOpen && <span className='whitespace-nowrap'>Home</span>}
          </Link>
        </li>
        <li className='p-2'>
          <Link
            to='/profile'
            className='flex items-center p-2 rounded hover:bg-gray-700'
            onClick={() => setIsOpen(false)}>
            <FaUser className='mr-3' />
            {isOpen && <span className='whitespace-nowrap'>Profile</span>}
          </Link>
        </li>
        <li className='p-2'>
          <Link
            to='/settings'
            className='flex items-center p-2 rounded hover:bg-gray-700'
            onClick={() => setIsOpen(false)}>
            <FaCog className='mr-3' />
            {isOpen && <span className='whitespace-nowrap'>Settings</span>}
          </Link>
        </li>
        <li className='p-2'>
          <Link
            to='/logout'
            className='flex items-center p-2 rounded hover:bg-gray-700'
            onClick={() => setIsOpen(false)}>
            <FaSignOutAlt className='mr-3' />
            {isOpen && <span className='whitespace-nowrap'>Logout</span>}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
