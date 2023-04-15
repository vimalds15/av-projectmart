import React, { useState } from "react";
import UserLogo from "../../assets/user.png";
import DashboardPage from "../dashboard/DashboardPage";
import CryptoWalletPage from "../crytowallet/CryptoWalletPage";
import Sidebar from "../../components/Sidebar";
import Orders from "../orders/Orders";

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
        <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />

        {/* main section */}
        <div className=" w-full flex-1">
  {activeItem === 'Dashboard' && <DashboardPage />}
  {activeItem === 'Orders' && <Orders />}
  {activeItem === 'Crypto Wallet' && <CryptoWalletPage />}
  {/* {activeItem === 'Notification' && <Notification />} */}
  
</div>

      </div>
    </div>
  );
};

export default HomePage;
