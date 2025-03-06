import React, { useState } from "react";
import { Link } from "react-router";
import { assets } from "../assets/asset";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      if (user) {
        const cusherData = {
          email: user.email,
          surname: lName,
          fName: fName,
          role: "user", // Default role
          createdAt: new Date(), // Timestamp of account creation

          // ... any other fields with default/random values
        };
        await setDoc(doc(db, "cushusers", user.uid), cusherData);
        console.log("Account created successfully!");
        navigate("/");
        toast.success("Account Regitered successfully", {
          position: "top-center",
        });
      }
      console.log("account created");
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: "top-center",
      });
      if (error.code === "auth/weak-password") {
        toast.error("Password is too weak. Please use a stronger password.", {
          position: "top-center",
        });
      } else if (error.code === "auth/email-already-in-use") {
        toast.error(
          "Email already in use. Please sign in or use a different email.",
          { position: "top-center" }
        );
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email format.", { position: "top-center" });
      } else {
        toast.error("An unexpected error occurred. Please try again later.", {
          position: "top-center",
        });
      }
    }
    setLName("");
    setFName("");
    setPassword("");
    setEmail("");
  };

  return (
    <div className='mt-25 mb-10'>
      <div className='flex items-center justify-center  min-h-[80vh]'>
        <div className=''>
          <div className='flex items-center justify-center'>
            <div className='text-center pb-10'>
              <img className='w-15 mx-auto' src={assets.half} alt='' />
              <h1 className='font-bold text-2xl sm:text-3xl pt-3'>
                Get Started For Free
              </h1>
              <p className=' text-gray-900'>
                Already registered?{" "}
                <Link
                  to='/'
                  className='border-2 border-blue-500 px-2 pb-1 rounded-md'>
                  signin
                </Link>
                into your account
              </p>
            </div>
          </div>
          <div className='text-gray-100 border-2 w-[350px]  border-gray-200 drop-shadow-md pt-12 pb-12 px-8 rounded-xl'>
            <form onSubmit={handleSignUp}>
              <div className='grid grid-cols-2 gap-x-5 mb-6'>
                <input
                  onChange={(e) => setFName(e.target.value)}
                  value={fName}
                  type='text'
                  name=''
                  className='border-2 placeholder:text-gray-900 text-gray-900 rounded-md bg-gray-200 px-3 w-full border-gray-300 p-2 outline-none'
                  placeholder='First Name'
                  required
                />
                <input
                  onChange={(e) => setLName(e.target.value)}
                  value={lName}
                  type='text'
                  name=''
                  className='border-2 placeholder:text-gray-900 text-gray-900 rounded-md bg-gray-200 px-3 w-full border-gray-300 p-2 outline-none'
                  placeholder='Last name'
                  required
                />
              </div>

              <div className='grid grid-cols-1 mb-6'>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  name=''
                  className='border-2 placeholder:text-gray-900 text-gray-900 rounded-md bg-gray-200 px-3 w-full border-gray-300 p-2 outline-none'
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
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
