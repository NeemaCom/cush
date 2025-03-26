import React from "react";
import { useEffect, useState } from "react";
import { assets } from "../assets/asset";
import { NavLink } from "react-router";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  //   prevent the web scrolling when the navbar is opened
  useEffect(() => {
    if (showMobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showMobileMenu]);

  return (
    <>
      <div className='absolute top-0 left-0 w-full z-10 bg-white'>
        <div className='container lg:mx-auto flex justify-between items-center py-4 px-6 md:px-10 lg:px-32'>
          <NavLink to={"/"} className='text-2xl font-bold text-gray-900'>
            <img src={assets.LogoPNG} alt='' />
          </NavLink>

          <ul className='hidden md:flex gap-7 lg:gap-7 text-gray-900 text-md px-4'>
            <NavLink
              to={"/"}
              className='cursor-pointer hover:text-gray-400 border-2 border-blue-500 rounded-xl px-5 py-1'>
              Login
            </NavLink>
            <NavLink
              to={"/signup"}
              className='cursor-pointer hover:bg-blue-300 bg-blue-500 rounded-xl px-5 py-1'>
              Signup
            </NavLink>
          </ul>

          {/* <ul className='hidden md:flex md:items-right gap-x-6 text-purple-900' >
            <li className='hover:cursor-pointer'>
              <FaTwitter />
            </li>
            <li className='hover:cursor-pointer'>
              <FaLinkedin />
            </li>
            <li className='hover:cursor-pointer'>
              <FaInstagram />
            </li>
          </ul> */}

          <img
            onClick={() => setShowMobileMenu(true)}
            src={assets.menu_icon}
            className='md:hidden w-12 cursor-pointer bg-blue-500 px-2 py-2 rounded'
            alt=''
          />
        </div>

        {/* <ul className='flex justify-end gap-x-4 -mt-3 mb-2 mx-6  md:hidden text-blue-600'>
          <li className='hover:cursor-pointer'>
            <FaTwitter />
          </li>
          <li className='hover:cursor-pointer'>
            <FaLinkedin />
          </li>
          <li className='hover:cursor-pointer'>
            <FaInstagram />
          </li>
        </ul> */}

        <div
          className={`md:hidden ${showMobileMenu ? "fixed w-96" : "h-0 w-0"}: 
                            left-0 top-0 bottom-0 overflow-hidden bg-gray-100 text-gray-800 transition-all drop-shadow-lg`}>
          <div className='flex justify-between p-6 cursor-pointer text-green'>
            <NavLink to={"/"} className='text-2xl font-bold text-gray-900'>
              <img src={assets.LogoPNG} alt='' />
            </NavLink>
            <img
              onClick={() => setShowMobileMenu(false)}
              src={assets.cross_icon}
              className='fill-inheri w-10 h-10 cursor-pointer bg-blue-500 px-1  rounded'
              alt=''
            />
          </div>

          <ul
            className='flex flex-col items-left gap-2 mt-5 px-5 text-lg 
                            font-medium'>
            <NavLink
              onClick={() => setShowMobileMenu(false)}
              to={"/"}
              className='px-4 rounded-full inline-block'>
              Login
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(false)}
              to={"/signup"}
              className='px-4 rounded-full inline-block'>
              Signup
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
