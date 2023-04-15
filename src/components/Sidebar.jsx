import React from 'react'
import { MdOutlineLibraryBooks, MdOutlineDashboard, MdOutlineListAlt, MdOutlineWallet } from 'react-icons/md';

const Sidebar = ({handleItemClick,activeItem}) => {
  return (
    <div className="hidden md:flex flex-col justify-around w-[20%] mt-16 border bg-white border-r-neutral-200 fixed top-0 left-0 h-[95%] z-10">
          <div className="px-6 -mt-7 flex flex-col gap-4">
            
            <div
              className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer hover:bg-gray-100 ${activeItem === "Dashboard" && "bg-gray-100" }`}
              onClick={() => handleItemClick("Dashboard")}
            >
              <MdOutlineDashboard size={20} />
              <p>Dashboard</p>
            </div>
            <div
              className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer hover:bg-gray-100 ${activeItem === "Invoices" && "bg-gray-100" }`}
              onClick={() => handleItemClick("Orders")}
            >
              <MdOutlineListAlt size={20} />
              <p>Orders</p>
            </div>
            <div
              className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer hover:bg-gray-100 ${activeItem === "Notification" && "bg-gray-100" }`}
              onClick={() => handleItemClick("Projects")}
            >
              <MdOutlineLibraryBooks size={20} />
              <p>Projects</p>
            </div>
            <div
              className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer hover:bg-gray-100 ${activeItem === "Crypto Wallet" && "bg-gray-100" }`}
              onClick={() => handleItemClick("Crypto Wallet")}
            >
              <MdOutlineWallet size={20} />
              <p>Crypto Wallet</p>
            </div>
          </div>
        </div>
  )
}

export default Sidebar