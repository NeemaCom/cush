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
    <div className='mt-20 '>
      <div className='flex items-center justify-center min-h-[80vh]'>
        <div className=''>
          <div className='flex items-center justify-center'>
            <div className='text-center pb-10'>
              <img className='w-15 mx-auto' src={assets.half} alt='' />
              <h1 className='font-bold text-2xl sm:text-3xl pt-3'>
                Sign in to your account
              </h1>
            </div>
          </div>
          <div className='text-gray-100 border-2 w-[350px]  border-gray-200 drop-shadow-md pt-5 pb-12 px-8 rounded-xl'>
            <form onSubmit={handleLogin}>
              <div className='grid grid-cols-1 mb-6'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  name=''
                  className='border-2 placeholder:text-gray-900 text-gray-900 rounded-md bg-gray-200 px-3 w-full  border-gray-300 p-2 outline-none'
                  placeholder='Enter Email'
                  required
                />
              </div>
              <div className='grid grid-cols-1 mb-6'>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type='password'
                  name=''
                  className='border-2 placeholder:text-gray-900 text-gray-900 rounded-md bg-gray-200 px-3 w-full border-gray-300 p-2 outline-none'
                  placeholder='Enter Password'
                  required
                />
              </div>
              <button
                type='submit'
                className='text-center font-bold text-xl bg-blue-500 w-full rounded-md p-2'>
                Login
              </button>
            </form>
            <p className='p-2 pt-4 text-gray-900'>
              Dont have an Account?{" "}
              <Link
                to='/signup'
                className='border-2 border-gray-300 px-2 pb-1 rounded-md'>
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
