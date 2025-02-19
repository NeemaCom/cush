import React from "react";
import { useId } from "react";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import { toast } from "react-toastify";

const Form = () => {
  const vegetableSelectId = useId();

  const [resident, setResident] = useState("");
  const [pccfrom, setPccfrom] = useState("");
  const [reason, setReason] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [country, setCountry] = useState("");
  const [delivery, setDelivery] = useState("");
  const [zip, setZip] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !resident ||
      !pccfrom ||
      !reason ||
      !middleName ||
      !email ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !country ||
      !zip ||
      !delivery
    ) {
      console.log("fill all required boxes");
    }

    const newData = {
      firstName,
      lastName,
      resident,
      pccfrom,
      reason,
      middleName,
      email,
      phone,
      address,
      city,
      state,
      country,
      zip,
      delivery,
    };

    try {
      await addDoc(collection(db, "cushpcc"), {
        ...newData,
      });

      toast.success("Document successfully written!");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <>
      <div className='px-8 lg:px-68 pb-20'>
        <form onSubmit={handleSubmit}>
          <p className='text-gray-600 font-bold mb-4'>
            Fill up the form below step-wise.
          </p>

          {/* Form 1 */}
          <h1 className='font-bold text-xl text-blue-600 mb-6 mt-10'>
            Step 1: Country Selection:
            <hr className='text-blue-600 w-26 border-2 mt-2' />
          </h1>
          <div className=' grid grid-cols-1 lg:grid-cols-2 lg:gap-16 mb-5'>
            <div>
              <label htmlFor='country' className='block mb-2 font-bold'>
                Select Your Resident Country*
              </label>
              <input
                type='text'
                name='resident'
                className='border-2 border-blue-600 w-full h-10 px-3 mb-4 focus:border-white'
                placeholder='Your Resident Country'
                onChange={(e) => setResident(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor='pcccountry'
                className='block mb-2 font-bold text-blue-600'>
                Select the Country You Need PCC from*
              </label>
              <input
                type='text'
                name='pcccountry'
                className='border-2 border-blue-600 w-full h-10 px-3'
                onChange={(e) => setPccfrom(e.target.value)}
                required
              />
            </div>
          </div>
          <div className='mb-10'>
            <label htmlFor='reason' className='block mb-2 font-bold'>
              PCC Required for*
            </label>
            <input
              type='text'
              name='reason'
              className='border-2 border-blue-600 w-full h-10 px-3'
              onChange={(e) => setReason(e.target.value)}
              required
            />
            <p className='text-blue-600 text-sm'>
              Mention the reasons above for obtaining the PCC.
            </p>
          </div>

          {/* Form 2         */}
          <div>
            <h1 className='font-bold text-xl text-blue-600 mb-6 mt-18'>
              Step 2: Fill-up Your Personal Details:
              <hr className='text-blue-600 w-26 border-2 mt-2' />
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-3 mb-5'>
              <div>
                <label htmlFor='FirstName' className='block mb-2 font-bold'>
                  First Name*
                </label>
                <input
                  type='text'
                  name='FirstName'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor='MiddleName' className='block mb-2 font-bold'>
                  Middle Name
                </label>
                <input
                  type='text'
                  name='MiddleName'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setMiddleName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor='LastName' className='block mb-2 font-bold '>
                  Last Name*
                </label>
                <input
                  type='text'
                  name='LastName'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor='Email' className='block mb-2 font-bold '>
                  Email Address*
                </label>
                <input
                  type='text'
                  name='Email'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor='phone' className='block mb-2 font-bold '>
                  Phone Number*
                </label>
                <input
                  type='text'
                  name='phone'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor='Address' className='block mb-2 font-bold '>
                  Address*
                </label>
                <input
                  type='text'
                  name='Address'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor='City' className='block mb-2 font-bold '>
                  City*
                </label>
                <input
                  type='text'
                  name='City'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setCity(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor='state' className='block mb-2 font-bold '>
                  State*
                </label>
                <input
                  type='text'
                  name='state'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setState(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor='country' className='block mb-2 font-bold '>
                  Country*
                </label>
                <input
                  type='text'
                  name='country'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor='Postal' className='block mb-2 font-bold'>
                  ZIP (Postal Code)*
                </label>
                <input
                  type='text'
                  name='Postal'
                  className='border-2 border-blue-600 w-full h-10 px-3'
                  onChange={(e) => setZip(e.target.value)}
                  required
                />
              </div>
            </div>
          </div>

          {/* Form 3 */}
          <div className='mt-10'>
            <h1 className='font-bold text-xl text-blue-600 mb-6 mt-18'>
              Step 3: Select Option for Certificate Delivery:
              <hr className='text-blue-600 w-26 border-2 mt-2' />
            </h1>

            <div>
              {/* <label
                htmlFor={vegetableSelectId}
                className='block mb-2 font-bold'>
                Pick a vegetable:
              </label> */}
              <select
                id={vegetableSelectId}
                onChange={(e) => setDelivery(e.target.value)}
                name='selectedVegetable'
                className='border-2 border-blue-600 w-full h-10 px-3'
                required>
                <option value='I will pick my PCC Certificate from your office. (Free)'>
                  I will pick my PCC Certificate from your office. (Free)
                </option>
                <option value='Courier my PCC Certificate to the Above Address'>
                  Courier my PCC Certificate to the Above Address
                </option>
                <option value=' Courier my PCC Certificate to a Different Local Address'>
                  {" "}
                  Courier my PCC Certificate to a Different Local Address
                </option>
                <option value=' Courier my PCC Certificate to Other International Address'>
                  {" "}
                  Courier my PCC Certificate to Other International Address
                </option>
              </select>
            </div>
          </div>

          {/* form 3 */}

          {/* <div className='mt-10'>
            <h1 className='font-bold text-xl text-blue-600 mb-6 mt-18'>
              Step 4: Upload Documents:
              <hr className='text-blue-600 w-26 border-2 mt-2' />
            </h1>
            <div>
              <label htmlFor='image' className='font-bold'>
                Photo (Passport Size)
              </label>
              <div className='flex justify-between items-center border-2 border-gray-300 p-5 border-dashed mt-2'>
                <input className='' type='file' name='Phot' required />

                <button className='px-5 py-3 -ml-30 hover:cursor-pointer bg-blue-600 rounded-lg text-gray-100'>
                  Click to Upload
                </button>
              </div>
              <div className='text-sm text-gray-400 px-2'>
                <p>Format: JPG, JPEG, PNG or PDF </p>
                <p> Max. Size: 2 MB</p>
              </div>
            </div>
          </div> */}

          <div className='mt-10'>
            <h1 className='font-bold text-xl text-blue-600 mb-6 mt-18'>
              Total Payble Amount:
              <hr className='text-blue-600 w-26 border-2 mt-2' />
            </h1>
            <div>
              <p className='bg-gray-300 font-bold px-5 py-1'>PCC Cost:</p>
              <p className='px-5 font-bold p-1'>Delivery Charges:</p>
              <p className='bg-gray-300 font-bold px-5 py-1'>
                Tax & Handling: Total:
              </p>
              <p className='px-5 font-bold p-1'>Total:</p>
            </div>
            <div className='mt-5'>
              <input type='checkbox' name='' id='terms' />
              <label htmlFor='terms' className='px-2'>
                I Agree to Terms & Conditions
              </label>
              <p>
                Ticking on I Agree Option will be considered as that you have
                read and understood the terms and conditions carefully.
              </p>
            </div>
          </div>
          <button
            type='submit'
            className='text-gray-100 bg-blue-600 px-16 py-4 rounded-lg mt-5 cursor-pointer hover:bg-blue-500 font-bold'>
            APPLY NOW
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
