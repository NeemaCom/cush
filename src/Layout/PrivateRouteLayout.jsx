import React, { useEffect, useState } from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../firebase";
import { ClipLoader } from "react-spinners";

const PrivateRouteLayout = () => {
  const location = useLocation();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  const minLoadingTime = 3000; // 2 minutes in milliseconds
  const startTime = Date.now();

  useEffect(() => {
    const auth = getAuth(app); // Get auth instance
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      const endTime = Date.now();
      const elapsedTime = endTime - startTime;

      if (elapsedTime < minLoadingTime) {
        setTimeout(() => {
          setLoading(false);
        }, minLoadingTime - elapsedTime);
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
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
        <ClipLoader color='#FF0000' size={50} />
      </div>
    );
  }

  return user ? (
    <Outlet />
  ) : (
    <Navigate to='/' state={{ from: location }} replace />
  );
};

export default PrivateRouteLayout;
