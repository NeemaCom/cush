import React from "react";
import { Link } from "react-router";

import { FaPlusCircle, FaUserCircle, FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import Login from "./Login";

const auth = getAuth();
const db = getFirestore();

const User = () => {
  const navigate = useNavigate();
  const [newData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setLoading(true);
      if (user) {
        try {
          const userDocRef = doc(db, "myusers", user.uid); // Use user's UID
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

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/");
      toast.success("Logout successful", { position: "top-center" });
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed", { position: "top-center" }); //Inform user of failure
    }
  };

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
      {newData ? (
        <>
          <div className='pt-5'>
            <div className='px-5 flex items-center justify-between'>
              <div>
                <p className='text-sm font-bold pl-5 py-2'>Welcome back,</p>
                <h1 className='flex px-2 rounded-lg font-bold items-center gap-4 border-2 border-red-400 text-red-400'>
                  {newData.surname} {newData.fName}{" "}
                  <FaCheckCircle className='text-green-400' />
                </h1>
              </div>
              <div>
                <Link to='profile'>
                  <FaUserCircle className='text-red-400 w-8 h-12' />
                </Link>
                <button
                  onClick={handleLogout}
                  className='bg-red-400 px-4 rounded-md text-gray-100'>
                  Logout
                </button>
              </div>
            </div>

            <div className='flex gap-5 items-center justify-center pt-5'>
              <Link
                to='deposit'
                className='border-2 gap-x-2 flex items-center bg-red-400 text-gray-100 font-bold px-5 py-2 rounded-full'>
                <p>
                  {" "}
                  <FaPlusCircle />
                </p>
                <p>Deposit</p>
              </Link>
            </div>
          </div>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default User;
