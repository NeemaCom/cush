import React, { useEffect, useState } from "react";
import { FiBell, FiSettings } from "react-icons/fi";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { FaCircleUser } from "react-icons/fa6";

const UserHeader = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const docRef = doc(db, "cushusers", user.uid);
        const snapUser = await getDoc(docRef);
        if (snapUser.exists()) {
          setUserData(snapUser.data());
        } else {
          console.log("User data not found.");
        }
      } else {
        // User is signed out.
        setUserData(null);
      }
      setLoading(false); // Set loading to false when done
    });

    return () => unsubscribe(); // Cleanup the listener
  }, []);

  async function handleLogout() {
    try {
      await auth.signOut();
      navigate("/");
      toast.success("LogOut successful", {
        position: "top-center",
      });
    } catch (error) {
      console.log(error);
    }
  }

  if (loading) {
    return <div>Loading...</div>; // Render loading indicator
  }

  if (!userData) {
    return <div>Please log in to view your profile.</div>; // Render message if no user data
  }
  return (
    <header className='bg-white shadow'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='flex items-center'>
            <div className='flex-shrink-0'>
              <span className='text-xl font-semibold text-gray-800'>
                My Account
              </span>
            </div>
          </div>
          <div className='flex items-center space-x-4'>
            <button
              onClick={handleLogout}
              className='bg-blue-500 px-4 py-1 text-gray-100 font-bold rounded-md'>
              logout
            </button>

            <div className='flex items-center'>
              <button className='flex items-center space-x-2 text-sm text-gray-700 hover:text-gray-900'>
                <FaCircleUser className='h-6 w-6' />
                <span className='font-medium'>{userData.surname}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default UserHeader;
