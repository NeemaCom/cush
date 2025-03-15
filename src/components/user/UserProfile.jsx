import React, { useState, useEffect } from "react";
import { FiMail, FiMapPin, FiCalendar } from "react-icons/fi";
import { useNavigate } from "react-router";
import { auth, db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { format } from "date-fns"; // Import format
import { FaCircleUser } from "react-icons/fa6";

const UserProfile = () => {
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
    <div className='bg-white shadow rounded-lg'>
      <div className='p-6'>
        <div className='text-center'>
          <FaCircleUser className='h-24 w-24 rounded-full mx-auto' />

          <h2 className='mt-4 text-xl font-semibold text-gray-900'>
            {userData.surname} {userData.fName}
          </h2>
        </div>
        <div className='mt-6 border-t border-gray-100'>
          <dl className='divide-y divide-gray-100'>
            <div className='flex items-center py-3'>
              <dt className='text-gray-500'>
                <FiMail className='h-5 w-5' />
              </dt>
              <dd className='ml-3 text-sm text-gray-900'>{userData.email}</dd>
            </div>
            <div className='flex items-center py-3'>
              <dt className='text-gray-500'>
                <FiMapPin className='h-5 w-5' />
              </dt>
              <dd className='ml-3 text-sm text-gray-900'>
                {userData.country || "Location not provided"}
              </dd>
            </div>
            <div className='flex items-center py-3'>
              <dt className='text-gray-500'>
                <FiCalendar className='h-5 w-5' />
              </dt>
              <dd className='ml-3 text-sm text-gray-900'>
                {userData.createdAt
                  ? format(userData.createdAt.toDate(), "PPpp") // Format the timestamp
                  : "Join date not provided"}
              </dd>
            </div>
          </dl>
        </div>
        <div className='mt-6'>
          <button className='w-full flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50'>
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
