import React from "react";

const Footer = () => {
  return (
    <div className='bg-blue-700 text-white pb-15 p-8'>
      <div className='lg:flex lg:items-center lg:justify-between lg:px-36 pt-20 lg:py-20'>
        <div className=''>
          <ul className='p-8'>
            <li>police mage here</li>
          </ul>
          <hr className='pt-4 lg:py-10 lg:hidden' />
        </div>
        <div className='lg:mt-2 lg:mb-1'>
          <h1 className='font-bold mb-3'>SITE LINKS</h1>
          <ul className='text-sm'>
            <li>Home</li>
            <li>About Us</li>
            <li> PCC & Fingerprint Services</li>
            <li>Faqs</li>
            <li> Contact Us</li>
          </ul>
        </div>
        <hr className='pt-4 lg:py-10 mt-4 lg:hidden' />
        <div className='mb-1 lg:-mt-10'>
          <h1 className='font-bold mb-3'>OUR ADDRESS</h1>
          <ul className='text-sm'>
            <li>
              Police Clearance Certificates
              <br /> Vardhaman Star City Mall, Sector-7,
              <br />
              Dwarka New Delhi-110075
            </li>
          </ul>
        </div>
        <hr className='pt-4 lg:py-10 mt-4 lg:hidden' />
        <div className='mb-1 lg:-mt-11'>
          <h1 className='font-bold mb-4'>GET IN TOUCH</h1>
          <ul className='text-sm'>
            <li className='mb-1'>+91-8595390971 </li>
            <li className='mt-4'>info@policeclearancecertificates.com</li>
          </ul>
        </div>
      </div>
      <hr className=' pt-4 lg:py-10 mt-10' />
      <div className='lg:flex lg:iems-center lg:justify-between lg:px-36 font-bold'>
        <div>
          <p>Copyright ©v2020 PoliceClearance Certificates</p>
        </div>
        <div className='flex gap-x-2 pt-3'>
          <li className='list-none hover:text-gray-300'>Terms</li>
          <li className='hover:text-gray-300'>Privacy & Cookies</li>
        </div>
      </div>
    </div>
  );
};

export default Footer;
