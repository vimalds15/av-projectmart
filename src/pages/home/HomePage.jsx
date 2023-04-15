import React, { useState } from "react";
import DashboardPage from "../dashboard/DashboardPage";
import CryptoWalletPage from "../crytowallet/CryptoWalletPage";
import Sidebar from "../../components/Sidebar";
import Orders from "../orders/Orders";
import MainNavBar from "../../components/MainNavBar";

const HomePage = () => {
  const [activeItem, setActiveItem] = useState("Dashboard");

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className="flex flex-col h-screen">

      {/* Navbar */}

      <MainNavBar />


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
