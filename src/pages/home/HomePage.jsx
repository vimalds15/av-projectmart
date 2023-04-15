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
      <div className="fixed top-0 left-0 w-full z-10">
        <MainNavBar />
      </div>

      <div className="flex flex-grow ">
        {/* Sidebar */}
          <Sidebar activeItem={activeItem} handleItemClick={handleItemClick} />

        {/* main section */}
        <div className="flex-1 ml-[20%] mt-10 p-10 overflow-y-auto">
          {activeItem === "Dashboard" && <DashboardPage />}
          {activeItem === "Orders" && <Orders />}
          {activeItem === "Crypto Wallet" && <CryptoWalletPage />}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
