import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const Sidebar = ({ onSectionChange }) => {
  // Destructure the prop
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-blue-500 text-white transition-width duration-300 ease-in-out overflow-x-hidden z-50 ${
        isOpen ? "w-40" : "w-16"
      }`}>
      <div className='flex items-center p-4 pt-40'>
        <button
          className='text-xl focus:outline-none hover:cursor-pointer'
          onClick={toggleSidebar}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
        {isOpen && (
          <h3 className='ml-2 text-lg font-semibold whitespace-nowrap'>
            Cush Admin
          </h3>
        )}
      </div>

      <ul className='list-none p-0 m-0'>
        <li className='p-2'>
          <button
            className='flex items-center p-2 rounded hover:cursor-pointer hover:bg-gray-700 w-full text-left'
            onClick={() => {
              onSectionChange("home");
              setIsOpen(false);
            }}>
            <FaHome className='mr-3' />
            {isOpen && <span className='whitespace-nowrap'>Home</span>}
          </button>
        </li>
        <li className='p-2'>
          <button
            className='flex items-center p-2 rounded hover:cursor-pointer hover:bg-gray-700 w-full text-left'
            onClick={() => {
              onSectionChange("profile");
              setIsOpen(false);
            }}>
            <FaUser className='mr-3' />
            {isOpen && <span className='whitespace-nowrap'>Users</span>}
          </button>
        </li>
        <li className='p-2'>
          <button
            className='flex items-center p-2 rounded hover:cursor-pointer hover:bg-gray-700 w-full text-left'
            onClick={() => {
              onSectionChange("settings");
              setIsOpen(false);
            }}>
            <FaCog className='mr-3' />
            {isOpen && <span className='whitespace-nowrap'>Settings</span>}
          </button>
        </li>
        <li className='p-2'>
          <button
            className='flex items-center p-2 rounded hover:cursor-pointer hover:bg-gray-700 w-full text-left'
            onClick={() => {
              onSectionChange("logout");
              setIsOpen(false);
            }}>
            <FaSignOutAlt className='mr-3' />
            {isOpen && <span className='whitespace-nowrap'>Logout</span>}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
