import React from "react";
import { assets } from "../assets/asset";
const Commitment = () => {
  return (
    <div className='flex items-center justify-center mt-5 '>
      <div className='grid grid-cols-1 md:grid-cols-2'>
        <div className='order-2 md:order-0 w-full py-20 px-10 md:p-20'>
          <img src={assets.working} alt='' />
        </div>
        <div className='w-full py-20 px-10 md:p-20'>
          <h1 className=' font-extrabold text-2xl pb-5'>
            Our Commitment To You{" "}
          </h1>
          <p>
            {" "}
            Our commitment to you is to serve you the best of services. We also
            know that sometimes, things may go south. Our promise is to keep you
            at the center of it all, knowing that no matter what, we have your
            convenience as our number one priority..
          </p>
          <h1 className='font-bold text-xl pb-3 pt-5'>
            {" "}
            Convenience Simplified
          </h1>
          <p>
            Top Up From The Comfort Of Your Space. Carry out all your bill
            payments securely and fast from the comfort of your home, office,
            anywhere.
          </p>
          <h1 className='font-bold text-xl pb-3 pt-5'>Safe, Secure, Fast</h1>
          <p>
            Get ahead by settling all your bills using our safe, fast and secure
            platform. Stay in the hearts of those you love by sending them
            tokens of love using our ‘Gift Me’ feature. You're done in seconds.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Commitment;
