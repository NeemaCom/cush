import React from "react";
import { Link } from "react-router";

// import { FaPlusCircle, FaUserCircle, FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
// import Login from "./Login";
import UserHeader from "../components/user/UserHeader";
import UserProfile from "../components/user/UserProfile";
import UserStats from "../components/user/UserStats";
import UserActivities from "../components/user/UserActivities";
import UserTasks from "../components/user/UserTask";

const auth = getAuth();
const db = getFirestore();

const User = () => {
  const [newData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        try {
          const userDocRef = doc(db, "cushusers", user.uid); // Use user's UID
          const userSnap = await getDoc(userDocRef);
          if (userSnap.exists()) {
            setUserData(userSnap.data());
          } else {
            console.log("User document not found for UID:", user.uid);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData(null); // Clear data on logout
        console.log("User is not logged in");
      }
      setLoading(false);
    });

    return () => unsubscribe(); // Clean up on unmount
  }, []);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}>
        <ClipLoader color='blue' size={50} />
      </div>
    );
  }

  return (
    <div className='pt-20'>
      <div className='min-h-screen bg-gray-50'>
        <main className='py-6'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='grid grid-cols-1 gap-6 lg:grid-cols-3'>
              {/* Left column - Profile and Stats */}
              <div className='lg:col-span-1'>
                <UserProfile />
                <UserStats />
              </div>
              {/* Right column - Activities and Tasks */}
              <div className='lg:col-span-2'>
                <UserActivities />
                <div className='mt-6'>
                  <UserTasks />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default User;
