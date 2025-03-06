import React from "react";

// Mock data for withdrawals
const mockWithdrawals = [
  {
    id: "1",
    user: "Payeer",
  },
  {
    id: "2",
    user: "Tuple",
  },
  {
    id: "3",
    user: "Mirage",
  },
  {
    id: "4",
    user: "StaticKit",
  },
  {
    id: "5",
    user: "Transistor",
  },
  {
    id: "6",
    user: "Transistor",
  },
  {
    id: "7",
    user: "Transistor",
  },
  {
    id: "8",
    user: "Workcation",
  },
];

const Trusted = () => {
  return (
    <div className='w-full bg-gray-50 py-8 overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 '>
        <div className='text-center gap-2 mb-10'>
          <h2 className='text-lg font-semibold text-gray-900 text-center'>
            Trusted by over 5 very average small businesses
          </h2>
        </div>
        <div className='relative'>
          <div className='flex overflow-hidden'>
            <div className='flex animate-scroll'>
              {/* First set of items */}
              {mockWithdrawals.map((withdrawal) => (
                <div
                  key={`first-${withdrawal.id}`}
                  className='min-w-[150px] px-4 flex-shrink-0'>
                  <div className='bg-white p-4 rounded-lg border border-gray-200 shadow-sm'>
                    <div className='flex justify-center items-center'>
                      <div>
                        <p className='font-medium text-center text-black'>
                          {withdrawal.user}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {mockWithdrawals.map((withdrawal) => (
                <div
                  key={`second-${withdrawal.id}`}
                  className='min-w-[150px] px-4 flex-shrink-0'>
                  <div className='bg-white p-4 rounded-lg border border-gray-200 shadow-sm'>
                    <div className='flex justify-center items-center'>
                      <div>
                        <p className='font-medium text-center text-black'>
                          {withdrawal.user}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trusted;
