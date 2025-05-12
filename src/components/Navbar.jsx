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
      <div className='absolute top-0 left-0 w-full z-10 bg-blue-200 pr-5 sm:pr-0'>
        <div className='container bg-blue-500 lg:mx-auto flex justify-between items-center m-3 rounded-xl'>
          <NavLink to={"/"} className='text-2xl font-bold text-gray-50'>
            <img src={assets.LogoPNG} alt='' />
          </NavLink>

          <ul className='hidden lg:flex gap-7 lg:gap-7 text-gray-50 font-bold text-md px-4'>
            <NavLink
              to={"/"}
              className='cursor-pointer '>
              Home
            </NavLink>
            <NavLink
              to={"/book-session"}
              className='cursor-pointer '>
                Book clarity Session
            </NavLink>
            <NavLink
              to={"/book-flight"}
              className='cursor-pointer'>
                Book Flight
            </NavLink>
            <NavLink
              to={"/bill-payment"}
              className='cursor-pointer'>
                Bill Payment
            </NavLink>
            <NavLink
              to={"/docs"}
              className='cursor-pointer'>
                Docs
            </NavLink>
          </ul>

          <ul className='hidden md:flex gap-7 lg:gap-7 text-gray-900 font-bold text-md px-4'>
            <NavLink
              to={"/login"}
              className='cursor-pointer text-gray-50 border-2 border-blue-500 rounded-xl px-5 py-1'>
              Login
            </NavLink>
            <NavLink
              to={"/signup"}
              className='cursor-pointer hover:bg-white/95 bg-white/90 rounded-xl px-5 py-1'>
              Create Account
            </NavLink>
          </ul>

          <img
            onClick={() => setShowMobileMenu(true)}
            src={assets.menu_icon}
            className='lg:hidden w-12 cursor-pointer bg-blue-500 px-3 py-2 rounded'
            alt=''
          />
        </div>

        {/* mobile menu */}
        <div
          className={`lg:hidden ${showMobileMenu ? "fixed w-96" : "h-0 w-0"}: 
                            left-0 top-0 bottom-0 overflow-hidden bg-gray-100 text-gray-800 transition-all drop-shadow-lg`}>
          <div className='flex justify-between p-6 cursor-pointer text-green'>
            <NavLink to={"/"} className='text-2xl font-bold text-gray-900'>
              <img src={assets.LogoPNG} alt='' />
            </NavLink>
            <img
              onClick={() => setShowMobileMenu(false)}
              src={assets.cross_icon}
              className='fill-inheri w-10 h-10 cursor-pointer bg-blue-500 px-3  rounded'
              alt=''
            />
          </div>

          <ul
            className='flex flex-col items-left gap-2 mt-5 px-5 text-lg 
                            font-medium'>
            <NavLink
               onClick={() => setShowMobileMenu(false)}
              to={"/"}
              className='cursor-pointer px-4 rounded-full inline-block'>
              Home
            </NavLink>
            <NavLink
               onClick={() => setShowMobileMenu(false)}
              to={"/book-session"}
              className='cursor-pointer px-4 rounded-full inline-block'>
                Book clarity Session
            </NavLink>
            <NavLink
               onClick={() => setShowMobileMenu(false)}
              to={"/book-flight"}
              className='cursor-pointer px-4 rounded-full inline-block'>
                Book Flight
            </NavLink>
            <NavLink
               onClick={() => setShowMobileMenu(false)}
              to={"/bill-payment"}
              className='cursor-pointer px-4 rounded-full inline-block'>
                Bill Payment
            </NavLink>
            <NavLink
              onClick={() => setShowMobileMenu(false)}
              to={"/docs"}
              className='cursor-pointer px-4 rounded-full inline-block'>
                Docs
            </NavLink>
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
