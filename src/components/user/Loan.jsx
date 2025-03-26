import React from 'react'
import { ArrowDownFromLine, ListCollapse, FileClock, ArrowUpFromLine   } from "lucide-react"

const Loan = () => {
  return (
      <div className='border border-gray-200 rounded-xl px-4 py-2 mt-8 md:mt-0 w-[100%] md:w-[50%] h-[30%]'>
          <h1 className='font-bold text-xl'>Loan</h1>
          <div className='md:flex gap-x-10 '>
              <div className='w-[100%] md:w-[50%]'>
                  <div className='flex md:block gap-5'>
                       <div className='border  border-blue-500 w-35 md:w-60 bg-blue-50 py-2 px-4 rounded-xl mt-5'>
                            <h1 className=''>Loan Balance</h1>
                            <hr className='border-2 w-10 border-blue-500 mb-3'/>
                            <div className='text-2xl font-bold'>$0.00</div>
                        </div>
                        <div className='border border-blue-500 w-35 md:w-60 bg-blue-50 py-2 px-4 rounded-xl mt-5'>
                            <h1 className=''>Credit Limit</h1>
                            <hr className='border-2 w-10 border-blue-500 mb-3'/>
                            <div className='text-2xl font-bold'>$0.00</div>
                        </div>
                  </div>
                  <div className='flex py-5 gap-x-3 items-center justify-between px-10  md:px-0 md:mr-10'>
                      <p>
                          <ArrowUpFromLine size={33} className='bg-blue-500 p-1 text-white rounded-md' /> 
                          <span className='text-[12px] font-bold'>Apply</span>
                     </p>
                      <p>
                          <ArrowDownFromLine size={33} className='bg-blue-500 p-1 text-white rounded-md' />
                            <span className='text-[12px] font-bold'>Credit</span>
                     </p>
                      <p>
                          <FileClock size={33} className='bg-blue-500 p-1 text-white rounded-md' />
                          <span className='text-[12px] font-bold'>History</span>
                      </p>
                      <p>
                          <ListCollapse size={33} className='bg-blue-500 p-1 text-white rounded-md' />
                          <span className='text-[12px] font-bold'>More</span>
                      </p>
                  </div>
              </div>


              <div className=''>
                  <div className='font-semibold text-[12px] mb-3 -mt-5 w-full border rounded-xl p-3 space-y-2'>
                      <div className='flex items-center justify-between gap-20'>
                          <p className='font-bold'>Total Loan</p>
                          <p>$0.00</p>
                      </div>
                      <div className='flex items-center justify-between'>
                          <p>Interest Rate</p>
                          <p>$0.00</p>
                      </div>
                      <div className='flex items-center justify-between'>
                          <p>Loan obligation fee</p>
                          <p>$0.00</p>
                      </div>
                      <div className='flex items-center justify-between'>
                          <p>Monthly Fee</p>
                          <p>$0.00</p>
                      </div>
                      
                  </div>
                  <div className='font-semibold text-[12px] w-full border rounded-xl p-3 space-y-2'>
                        <div className='flex items-center justify-between md:gap-20'>
                            <p>Early repayment option</p>
                            <p>$0.00</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Loan Terms</p>
                            <p>$0.00</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Loan to Value</p>
                            <p>$0.00</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Tax</p>
                            <p>$0.00</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Collateral amount and Type</p>
                            <p>$0.00</p>
                        </div>
                        <div className='flex items-center justify-between'>
                            <p>Total loan cost </p>
                            <p>$0.00</p>
                        </div>
                  </div>
              </div>
          </div>
    </div>
  )
}

export default Loan