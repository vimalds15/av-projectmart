import React, { useState } from "react";
import { MdOutlineHome, MdOutlineDashboard, MdOutlineListAlt, MdOutlineWallet, MdOutlineNotificationsNone } from 'react-icons/md';
import UserLogo from "../../assets/user.png";
import { Route, Routes } from "react-router-dom";
import { routes } from "../../routes/routes";
import DashboardPage from "../dashboard/DashboardPage";
import InvoicesPage from "../invoices/InvoicesPage";
import CryptoWalletPage from "../crytowallet/CryptoWalletPage";

const HomePage = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col h-screen">

      {/* Navbar */}

      <div className="flex justify-center h-16 px-10 border border-b-neutral-200  ">
        <div className="flex  items-center justify-between  w-full 2xl:max-w-6xl">
        <div className="flex items-center">
          <div className="mr-5">
            <img src={UserLogo} className="h-10 w-10" alt="" />
          </div>
          <div className="flex flex-col justify-center">
            <p className="text-sm text-gray-400 ">FULL STACK DEVELOPER</p>
            <p className="font-semibold mt-[-2px]">Anto Vimalan</p>
          </div>
        </div>
        <div></div>
        </div>
      </div>


      <div className="flex flex-grow ">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col justify-around w-[20%] h-[100%-64px] border border-r-neutral-200">
          <div className="px-6 flex flex-col gap-4">
            
            <div
              className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer hover:bg-gray-100 ${activeItem === "Dashboard" && "bg-gray-100" }`}
              onClick={() => handleItemClick("Dashboard")}
            >
              <MdOutlineDashboard size={20} />
              <p>Dashboard</p>
            </div>
            <div
              className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer hover:bg-gray-100 ${activeItem === "Invoices" && "bg-gray-100" }`}
              onClick={() => handleItemClick("Invoices")}
            >
              <MdOutlineListAlt size={20} />
              <p>Invoices</p>
            </div>
            <div
              className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer hover:bg-gray-100 ${activeItem === "Crypto Wallet" && "bg-gray-100" }`}
              onClick={() => handleItemClick("Crypto Wallet")}
            >
              <MdOutlineWallet size={20} />
              <p>Crypto Wallet</p>
            </div>
            <div
              className={`flex items-center gap-2 py-4 px-2 rounded-lg pl-4 cursor-pointer hover:bg-gray-100 ${activeItem === "Notification" && "bg-gray-100" }`}
              onClick={() => handleItemClick("Notification")}
            >
              <MdOutlineNotificationsNone size={20} />
              <p>Notification</p>
            </div>
          </div>
          <div className="px-6">Take Note</div>
        </div>

        {/* main section */}
        <div className=" w-full flex-1">
  {activeItem === 'Dashboard' && <DashboardPage />}
  {activeItem === 'Invoices' && <InvoicesPage />}
  {activeItem === 'Crypto Wallet' && <CryptoWalletPage />}
  {/* {activeItem === 'Notification' && <Notification />} */}
  
</div>

      </div>
    </div>
  );
};

export default HomePage;
