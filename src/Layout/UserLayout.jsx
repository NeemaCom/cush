import Sidebar from '@/components/user/Sidebar';
import Logout from '@/components/user/Logout';
import Dashboard from '@/components/user/Dashboard';
import UserProfile from '@/components/user/UserProfile';
import Product from '@/components/user/Product';
import React, { useState } from 'react';
import Settings from '@/components/user/settings';
import UserHeader from '@/components/user/UserHeader';
import Wallet from '@/components/user/Wallet';
import MigrationService from '@/components/user/MigrationService';
import Customerservice from '@/components/user/Customerservice';
import Messages from '@/components/user/Messages';

const UserLayout = () => {
  const [activeSubComponent, setActiveSubComponent] = useState('dashboard');
  const [isOpen, setIsOpen] = useState(true);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false); // Add state

  const handleSubComponentChange = (path) => {
    setActiveSubComponent(path);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const components = {
    dashboard: <Dashboard />,
    wallet: <Wallet />,
    migration: <MigrationService />,
    products: <Product />,
    agent: <Customerservice />,
    message: <Messages />,
    profile: <UserProfile />,
    settings: <Settings />,
    logout: <Logout />,
  };

  return (
    <div className="flex flex-col h-screen">
      <UserHeader />
      <div className="flex flex-1">
        <Sidebar
          isOpen={isOpen}
          toggleSidebar={toggleSidebar}
          activeSubComponent={activeSubComponent}
          onSubComponentChange={handleSubComponentChange}
          mobileSidebarOpen={mobileSidebarOpen} // Pass state
          setMobileSidebarOpen={setMobileSidebarOpen} // Pass function
        />
        <div className={`flex-1 p-4 ${isOpen ? 'pl-25' : 'pl-30'}`}>
          {components[activeSubComponent]}
        </div>
      </div>
    </div>
  );
};

export default UserLayout;