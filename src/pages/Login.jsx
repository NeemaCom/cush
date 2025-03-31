import React, { useState } from "react";
import { Link } from "react-router";
import { assets } from "../assets/asset";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";

const Login = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user; // Corrected line
      if (user) {
        // Fetch user document from Firestore
        const userDocRef = doc(db, "cushusers", user.uid); // Use user.uid
        const userDoc = await getDoc(userDocRef);

        if (userDoc.exists()) {
          const newData = userDoc.data();
          if (newData && newData.role) {
            // Check if newData and newData.role are defined
            const role = newData.role;

            if (role === "admin") {
              navigate("/admin");
            } else if (role === "user") {
              navigate("/user");
            } else {
              navigate("/");
            }

            toast.success("Login successful", {
              position: "top-center",
            });
          } else {
            toast.error("User role not found.", { position: "top-center" }); // More specific error
          }
        } else {
          toast.error("User data not found.", { position: "top-center" });
        }

        console.log("login successful");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message, { position: "top-center" });
    }
  };

  return (
    <div className='bg-gradient-to-b from-blue-200 to-gray-100'>
          <h1 className="px-10 pt-6">
            <img src={assets.LogoPNG} alt="" />
          </h1>
          <div className='flex items-center justify-center min-h-[90vh]'>
            <div className='border bg-gray-50 pt-3 rounded-lg drop-shadow-lg'>
              <div className='flex items-center justify-center'>
                <div className='text-center pb-5'>
                  <h1 className='font-bold text-xl sm:text-2xl pt-3 pb-1'>
                    Sign In
                  </h1>
                  <p className=' text-gray-900 font-bold text-[12px] py-1'>
                   Welcome back! Let’s pick up where you left off.
                  </p>
                </div>
              </div>
              <div className='text-gray-100 w-[360px] sm:w-[450px]  border-gray-200 pb-6 px-4 sm:px-8 rounded-xl'>
            <form onSubmit={handleLogin}>
              <div className='grid grid-cols-1 mb-6'>
                <label htmlFor="email" className='text-gray-900 text-sm font-bold'>Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  name='email'
                  className='border placeholder:text-gray-900 text-gray-900 rounded bg-gray-50 px-3 w-full  border-gray-300 p-2 outline-none'
                  placeholder='Enter Email'
                  required
                />
              </div>
              <div className='grid grid-cols-1 mb-6'>
                <label htmlFor="password" className='text-gray-900 text-sm font-bold'>Password</label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type='password'
                  name='password'
                  className='border placeholder:text-gray-900 text-gray-900 rounded bg-gray-50 px-3 w-full border-gray-300 p-2 outline-none'
                  placeholder='Enter Password'
                  required
                />
              </div>
              <button
                type='submit'
                className='text-center font-bold text-xl bg-blue-500 w-full rounded p-2'>
                Login
              </button>
              <Link className="text-blue-500 font-semibold flex justify-end">Forgot Password</Link>
            </form>
            <div className='text-gray-900 text-center pt-5'>
              Already have an account? <Link to='/signup' className="text-blue-500">sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
