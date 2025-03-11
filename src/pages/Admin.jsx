import React, { useState } from "react";
import Sidebar from "../components/admin/Sidebar"; // Adjust the path as needed
import CushStats from "../components/admin/CushStats";
import CushUsers from "../components/admin/CushUsers";

function Admin() {
  const [selectedSection, setSelectedSection] = useState("home");

  const handleSectionChange = (section) => {
    setSelectedSection(section);
  };

  const renderSection = () => {
    switch (selectedSection) {
      case "home":
        return <CushStats />;
      case "profile":
        return <CushUsers />;
      default:
        return <CushStats />;
    }
  };

  return (
    <div className='flex h-screen'>
      <Sidebar onSectionChange={handleSectionChange} />
      <div
        className={`flex-1 p-4 ${
          selectedSection ? "ml-22" : "ml-20"
        } transition-margin duration-300 ease-in-out`}>
        {renderSection()}
      </div>
    </div>
  );
}

export default Admin;
