import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import { assets } from "../assets/asset";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { setDoc, doc } from "firebase/firestore";
import { toast } from "react-toastify";
import Select from "react-select";
import countryList from "react-select-country-list";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const navigate = useNavigate();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const options = useMemo(() => countryList().getData(), []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match.", {
        position: "top-center",
      });
      return;
    }

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
          country: selectedCountry ? selectedCountry.label : null,
          phone: phone,
          role: "user",
          createdAt: new Date(),
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
    setSelectedCountry(null);
    setConfirmPassword("");
  };

  const changeHandler = (selectedOption) => {
    setSelectedCountry(selectedOption);
  };

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      borderColor: state.isFocused
        ? provided.borderColor
        : provided.borderColor,
      boxShadow: state.isFocused ? "none" : provided.boxShadow,
      "&:hover": {
        borderColor: state.isFocused
          ? provided.borderColor
          : provided.borderColor,
      },
    }),
  };

  return (
    <div className='bg-gradient-to-b from-blue-200 to-gray-100'>
      <ToastContainer />
      <h1 className="px-10 pt-6">
        <img src={assets.LogoPNG} alt="" />
      </h1>
      <div className='flex items-center justify-center min-h-[100vh]'>
        <div className='border bg-gray-50 pt-3 rounded-lg drop-shadow-lg'>
          <div className='flex items-center justify-center'>
            <div className='text-center pb-5'>
              <h1 className='font-bold text-xl sm:text-2xl pt-3 pb-1'>
                Sign Up
              </h1>
              <p className=' text-gray-900 font-bold text-[12px] py-1'>
                Experience fast, secure, and hassle-free migration
              </p>
            </div>
          </div>
          <div className='text-gray-100 w-[390px] sm:w-[450px]  border-gray-200 pb-6 px-4 sm:px-8 rounded-xl'>
            <form onSubmit={handleSignUp}>
              <div className='grid grid-cols-2 gap-x-5 mb-6'>
                <div className="">
                  <label htmlFor="fname" className='text-gray-900 font-bold py-2'>
                    First name
                  </label>
                  <input
                    onChange={(e) => setFName(e.target.value)}
                    value={fName}
                    type='text'
                    name='fname'
                    className='border placeholder:text-gray-900 placeholder:text-[12px] placeholder:font-semibold text-gray-900 rounded bg-gray-50 px-3 w-full border-gray-300 p-2 outline-none'
                    placeholder='Enter First Name'
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="lName" className='text-gray-900 font-bold py-2'>Last name</label>
                  <input
                    onChange={(e) => setLName(e.target.value)}
                    value={lName}
                    type='text'
                    name='lName'
                    className='border placeholder:text-gray-900 placeholder:text-[12px] placeholder:font-semibold text-gray-900 rounded bg-gray-50 px-3 w-full border-gray-300 p-2 outline-none'
                    placeholder='Enter Last name'
                    required
                  />
                </div>
              </div>

              <div className='grid grid-cols-2 mb-6 gap-x-5'>
                <div>
                  <label htmlFor="country" className='py-2 text-gray-900 font-bold'>Country</label>
                  <Select
                    options={options}
                    value={selectedCountry}
                    onChange={changeHandler}
                    placeholder='Select country'
                    styles={customStyles}
                    className='border text-gray-900 rounded text-[14px] bg-gray-500 outline-none border-gray-300 focus:outline-0'
                    required
                  />
                </div>
                <div className="">
                  <label htmlFor="phone" className='text-gray-900 font-bold py-2'>Phone number</label>
                  <input
                    onChange={(e) => setPhone(e.target.value)}
                    value={phone}
                    type='tel'
                    name='phone'
                    className='border placeholder:text-gray-900 placeholder:text-[12px] placeholder:font-semibold text-gray-900 rounded bg-gray-50 px-3 w-full border-gray-300 p-2 outline-none'
                    placeholder='Enter Pnone number'
                    required
                  />
                </div>
              </div>

              <div className='grid grid-cols-1 text-gray-900 mb-6'>
                <label htmlFor="email" className='font-bold'>Enter Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type='email'
                  name='email'
                  className='border placeholder:text-gray-900 placeholder:text-[12px] placeholder:font-semibold text-gray-900 rounded bg-gray-50 px-3 w-full border-gray-300 p-2 outline-none'
                  placeholder='Enter Email'
                  required
                />
              </div>
              <div className='grid grid-cols-2 gap-x-5 mb-6 text-gray-900'>
                <div className="">
                  <label htmlFor="setPassword" className='font-bold'>Enter Password</label>
                  <div className="relative">
                    <input
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      type={showPassword ? 'text' : 'password'}
                      name='setPassword'
                      className='border placeholder:text-gray-900 placeholder:text-[12px] placeholder:font-semibold text-gray-900 rounded bg-gray-50 px-3 w-full border-gray-300 p-2 outline-none'
                      placeholder='Enter Password'
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 text-[10px] font-bold"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
                <div>
                  <label htmlFor="confirmPassword" className='font-bold'>Confirm Password</label>
                  <div className="relative">
                    <input
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      value={confirmPassword}
                      type={showConfirmPassword ? 'text' : 'password'}
                      name='confirmPassword'
                      className='border placeholder:text-gray-900 placeholder:text-[12px] placeholder:font-semibold text-gray-900 rounded bg-gray-50 px-3 w-full border-gray-300 p-2 outline-none'
                      placeholder='Confirm Password'
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 px-3 flex items-center text-gray-500 text-[10px] font-bold"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? "Hide" : "Show"}
                    </button>
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='text-center font-bold text-xl bg-blue-500 w-full rounded p-2 mb-6'>
                Sign up
              </button>
            </form>
            <div className='text-gray-900 text-center'>
              Already have an account? <Link to='/' className="text-blue-500">SignIn</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;