// Logout.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform your logout logic here (e.g., clear tokens, etc.)
    console.log('Logging out...');

    // Navigate to the login page or any other desired page
    navigate('/');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Logout</h1>
      <p>Are you sure you want to log out?</p>
      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4"
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;