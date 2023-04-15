import React from 'react'
import RecentOrders from '../../components/RecentOrders'

const DashboardPage = () => {
  return (
    <div className='p-10'>
      <h2 className='text-gray-400 font-semibold text-lg'>Happy new month, <span className='font-bold text-black'>Vimal</span></h2>
      <p className='text-sm text-gray-500'>Welcome to your dashboard</p>
      <div>
        <RecentOrders />
      </div>
    </div>
  )
}

export default DashboardPage