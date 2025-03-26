import React from 'react'
import UserStats from './UserStats'
import Loan from './Loan'
import UserTask from './UserTask'

const Dashboard = () => {
  return (
    <div>
      <div className='md:flex gap-x-10 mb-3'>
      <UserStats className='overflow-hidden' />
      <Loan/>
      </div>
      <UserTask/>
    </div>
  )
}

export default Dashboard