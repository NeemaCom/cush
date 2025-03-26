import React, { useEffect, useState } from 'react';
import {
  LayoutDashboardIcon,
  PackageIcon,
  UserIcon,
  SettingsIcon,
  LogOutIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  Wallet,
  UserCog,
  Headset,
  Mail,
  X,
   MenuIcon,
} from 'lucide-react';

import { assets } from '@/assets/asset';

const mainNavItems = [
  {
    icon: LayoutDashboardIcon,
    title: 'Dashboard',
    path: 'dashboard',
    },
  {
    icon: Wallet,
    title: 'Wallet',
    path: 'wallet',
    },
    {
    icon: UserCog ,
    title: 'Migration Service',
    path: 'migration',
    },
  {
    icon: Headset ,
    title: 'Customer Service',
    path: 'agent',
    },
    {
    icon: Mail,
    title: 'Messages',
    path: 'message',
    },
  {
    icon: PackageIcon,
    title: 'Products',
    path: 'products',
    },
  {
    icon: UserIcon,
    title: 'Profile',
    path: 'profile',
  },
];

const bottomNavItems = [
  {
    icon: SettingsIcon,
    title: 'Settings',
    path: 'settings',
  },
  {
    icon: LogOutIcon,
    title: 'Logout',
    path: 'logout',
  },
];

const Sidebar = ({ isOpen, toggleSidebar, activeSubComponent, onSubComponentChange, mobileSidebarOpen, setMobileSidebarOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const NavItem = ({ item }) => {
    const Icon = item.icon;
    const isActive = activeSubComponent === item.path;
    return (
      <li>
        <button
          onClick={() => {
            onSubComponentChange(item.path);
            if (isMobile) {
              setMobileSidebarOpen(false);
            }
          }}
          className={`flex items-center p-3 rounded-r-lg hover:bg-gray-100 transition-colors w-full text-left ${
            isActive ? 'bg-blue-600 text-blue-100 font-medium' : 'text-gray-700'
          }`}
        >
          <Icon size={20} className={isActive ? 'text-blue-100' : 'text-gray-500'} />
          {(isOpen && !isMobile) || (isMobile && mobileSidebarOpen) ? <span className="ml-3">{item.title}</span> : null}
        </button>
      </li>
    );
  };

  return (
    <aside
      className={`fixed left-0 top-0 z-40 h-screen overflow-hidden transition-width duration-300 ease-in-out bg-white border-r border-gray-200 ${
        isOpen && !isMobile ? 'w-52' : 'w-20'
      } ${
        isMobile && mobileSidebarOpen ? 'w-full' : isMobile ? 'w-20' : ''
      } ${isMobile ? 'h-full' : ''} ${isMobile && mobileSidebarOpen ? 'bg-white' : ''}`}
      style={isMobile && mobileSidebarOpen ? { zIndex: 50, width: '100%', height: '100%', position: 'fixed', top: 0, left: 0 } : {}}
    >
      <div className="h-full px-3 py-4 flex flex-col">
        <div
          className={`flex items-center ${
            isOpen ? 'justify-between' : 'justify-center'
          } mb-10`}
        >
          {/* Hamburger button for mobile */}
          {isMobile && !mobileSidebarOpen && (
            <button onClick={() => setMobileSidebarOpen(true)} className="p-2 rounded-lg hover:bg-gray-100">
              <MenuIcon size={20} />
            </button>
          )}

          {isOpen && <h2 className="text-xl font-semibold">
            <img src={assets.LogoPNG} alt="" />
          </h2>}
          {isMobile && mobileSidebarOpen && (
            <button onClick={() => setMobileSidebarOpen(false)} className="p-2 rounded-lg hover:bg-gray-100">
              <X size={20} />
            </button>
          )}
          {!isMobile && (
            <button onClick={toggleSidebar} className="p-2 rounded-lg hover:bg-gray-100">
              {isOpen ? <ChevronLeftIcon size={20} /> : <ChevronRightIcon size={20} />}
            </button>
          )}
        </div>
        <ul className="text-sm font-bold">
          {mainNavItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </ul>
        <ul className="space-y-1 mt-auto">
          {bottomNavItems.map((item) => (
            <NavItem key={item.path} item={item} />
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;