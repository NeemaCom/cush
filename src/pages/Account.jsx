import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Account = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      const docRef = doc(db, "users", user.uid);
      const snapUser = await getDoc(docRef);
      if (snapUser.exists) {
        setUserData(snapUser.data());
        console.log(snapUser.data());
      } else {
        console.log("user is not loggedIn");
      }
    });
  };

  useEffect(() => {
    fetchUserData();
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

  return (
    <div className='flex justify-center items-center h-130'>
      {userData ? (
        <>
          <div className='border-2 border-purple-600 rounded'>
            <div className='text-gray-900 mb-4'>
              <h1 className='text-center px-4 py-2 text-2xl font-bold'>
                Account
              </h1>
              <hr className='w-full mb-4' />
            </div>
            <div className=' items-left p-20'>
              <div className='block'>
                Full Name: {userData.surname}, {userData.otherNames}
              </div>
              <div>Email: {userData.email}</div>
              <div>Total Asset: {userData.totalAssets}</div>
            </div>
            <div className=' bg-purple-600 text-center'>
              <button onClick={handleLogout}>
                <Link>LogOut</Link>
              </button>
            </div>
          </div>
        </>
      ) : (
        <p>Loading......</p>
      )}
    </div>
  );
};

export default Account;
